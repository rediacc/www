---
title: Warteschlangensystem
description: Verständnis des Rediacc-Warteschlangensystems für die Aufgabenverwaltung und -ausführung.
category: Core Concepts
order: 2
language: de
---

Das Warteschlangensystem ist das Herzstück von Rediacc und verwaltet die Aufgabenverteilung auf Maschinen.

## Übersicht

Die Warteschlange verwaltet Aufgaben mit folgendem Lebenszyklus:

```
PENDING → ASSIGNED → PROCESSING → COMPLETED/FAILED/CANCELLED
```

### Staaten

- **PENDING** – Aufgabe erstellt, wartet darauf, von einer Brücke übernommen zu werden 
- **ASSIGNED** – Bridge hat die Aufgabe beansprucht und bereitet die Ausführung vor 
- **VERARBEITUNG** – Die Aufgabe wird derzeit auf dem Computer ausgeführt 
- **ABGESCHLOSSEN** – Aufgabe erfolgreich abgeschlossen 
- **FEHLGESCHLAGEN** – Bei der Aufgabe ist ein Fehler aufgetreten 
- **ABGEBROCHEN** – Aufgabe wurde manuell abgebrochen

## Aufgabeneigenschaften

Jedes Warteschlangenelement verfügt über:

| Eigentum | Geben Sie | ein Beschreibung | 
|----------|------|-------------| 
| `taskId` | UUID | Eindeutiger Aufgabenbezeichner | 
| `Status` | Aufzählung | Aktueller Ausführungsstatus | 
| „Priorität“ | 1-5 | Ausführungspriorität (1 höchste) | 
| `retryCount` | Nummer | Verbleibende Wiederholungsversuche | 
| `vaultData` | Objekt | Verschlüsselte Aufgabenkonfiguration | 
| `Ausgabe` | Zeichenfolge | Ausgabe der Aufgabenausführung | 
| `Fehler` | Zeichenfolge | Fehlermeldung, wenn fehlgeschlagen | 
| `createdAt` | Zeitstempel | Zeit der Aufgabenerstellung | 
| `abgeschlossen um` | Zeitstempel | Zeit für die Erledigung der Aufgabe |

## Prioritätssystem

Aufgaben werden in der Reihenfolge ihrer Priorität bearbeitet:

- **P1 (Kritisch)** - Sofortige Ausführung (Notfall, Sicherheit) 
- **P2 (Hoch)** – Ausführung innerhalb von Minuten (Bereitstellungen) 
- **P3 (Normal)** - Innerhalb von Stunden ausführen (Standardaufgaben) 
- **P4 (Niedrig)** - Hintergrundarbeit (Wartung) 
- **P5 (Minimal)** – Immer wenn Ressourcen verfügbar sind (Bereinigung)

### Beispiel

```bash
# Create high-priority task
./rediacc create task \
  --machine prod-01 \
  --priority 1 \
  --command "systemctl restart app"
```

## Wiederholungsmechanismus

Fehlgeschlagene Aufgaben können automatisch wiederholt werden:

```json
{
  "taskId": "550e8400-e29b-41d4-a716-446655440000",
  "retryCount": 3,
  "retryDelay": 30,
  "maxRetries": 3
}
```

Konfigurieren Sie das Wiederholungsverhalten:

- „retryCount“ – Anzahl der verbleibenden Wiederholungsversuche 
- „retryDelay“ – Sekunden zwischen Wiederholungsversuchen 
- „maxRetries“ – Maximal zulässige Wiederholungsversuche

## Überwachungswarteschlange

### Warteschlangenstatus prüfen

```bash
./rediacc list queue
./rediacc list queue --status PENDING
./rediacc list queue --team Production
```

### Spezifische Aufgabe überwachen

```bash
./rediacc inspect queue task-123
```

### Echtzeitüberwachung

Nutzen Sie die Webkonsole für Warteschlangenaktualisierungen und -visualisierungen in Echtzeit.

## Tresordaten

Zu den Aufgaben kann die verschlüsselte Konfiguration gehören:

```json
{
  "vaultData": {
    "function": "deploy",
    "repository": "web-app",
    "version": "1.2.3",
    "environment": "production",
    "credentials": {
      "ssh_key": "[encrypted]",
      "api_token": "[encrypted]"
    }
  }
}
```

Tresordaten werden vom System automatisch verschlüsselt/entschlüsselt.

## Batch-Operationen

Mehrere Aufgaben effizient bearbeiten:

```bash
# Get next 5 tasks
./rediacc list queue --limit 5

# Cancel multiple tasks
./rediacc cancel queue task-1 task-2 task-3 --confirm
```

## Best Practices für Warteschlangen

1. **Warteschlangentiefe überwachen** – Warnung, wenn die Warteschlange zu groß wird 
2. **Legen Sie geeignete Prioritäten fest** – Überbeanspruchen Sie Priorität 1 nicht 
3. **Batching verwenden** – Gruppieren Sie verwandte Aufgaben 
4. **Konfigurieren Sie Wiederholungsversuche mit Bedacht** – Balance zwischen Zuverlässigkeit und Ressourcennutzung 
5. **Abgeschlossene Aufgaben archivieren** – Halten Sie die Warteschlange sauber

## Fehlerbehebung

### Aufgaben stecken in der Verarbeitung fest

Wenn eine Aufgabe hängen bleibt:

1. Überprüfen Sie den Bridge-Status 
2. Überprüfen Sie die SSH-Konnektivität der Maschine 
3. Überprüfen Sie die Aufgabenprotokolle auf Fehler 
4. Bei Bedarf manuell abbrechen

### Hoher Rückstand in der Warteschlange

Wenn die Warteschlange wächst:

1. Brückenkapazität prüfen 
2. Überprüfen Sie die Maschinenressourcen 
3. Erhöhen Sie „batch_size“ in der Bridge-Konfiguration 
4. Fügen Sie weitere Brücken oder Maschinen hinzu

### Aufgabenfehler

Überprüfen Sie immer:

1. Aufgabenfehlermeldung 
2. Maschinenprotokolle 
3. Datenintegrität im Tresor 
4. SSH-Konnektivität

Erfahren Sie mehr unter [Best Practices](/blog/distributed-task-management-best-practices).
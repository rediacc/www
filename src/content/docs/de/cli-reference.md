---
title: CLI-Referenz
description: Vollständige Referenz für alle Rediacc-CLI-Befehle und -Optionen.
category: Reference
order: 1
language: de
---

## Installation

### Voraussetzungen

- Python 3.8+ 
- SSH-Client 
- Git (optional, für Entwicklungsinstallationen)

### Von der Quelle installieren

```bash
./install.sh --auto
```

### Installation überprüfen

```bash
./rediacc --version
./rediacc --help
```

## Globale Optionen

Alle Befehle unterstützen diese Optionen:

- `--help` – Befehlshilfe anzeigen 
- „--output json“ – Ausgabe im JSON-Format (nützlich für Skripterstellung) 
- „--dev“ – Entwicklungsmodus (entspannte SSL-Überprüfung) 
- „--verbose“ – Ausführliche Protokollierung aktivieren

## Authentifizierungsbefehle

### Anmelden

```bash
./rediacc login
```

Interaktive Anmeldung. Speichert das Token in „~/.rediacc/config.json“.

### Abmelden

```bash
./rediacc logout
```

Entfernt gespeichertes Authentifizierungstoken.

### Aktuellen Benutzer anzeigen

```bash
./rediacc whoami
```

## Teammanagement

### Teams auflisten

```bash
./rediacc list teams
./rediacc list teams --output json
```

### Team erstellen

```bash
./rediacc create team --name "Production"
```

### Teamdetails anzeigen

```bash
./rediacc inspect team Production
```

## Maschinenverwaltung

### Maschinen auflisten

```bash
./rediacc list machines
./rediacc list machines --team Production
./rediacc list machines --team Production --output json
```

### Maschine erstellen

```bash
./rediacc create machine \
  --name prod-01 \
  --team Production \
  --ip 10.0.0.5 \
  --user deploy
```

### Maschine prüfen

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Production
```

### Maschine löschen

```bash
./rediacc delete machine prod-01 --team Production --confirm
```

## Warteschlangenverwaltung

### Warteschlangenelemente auflisten

```bash
./rediacc list queue --team Production
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### Details zum Warteschlangenelement abrufen

```bash
./rediacc inspect queue item-123
```

### Warteschlangenelement abbrechen

```bash
./rediacc cancel queue item-123 --confirm
```

## Dateisynchronisierung

### Dateien hochladen

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp
```

### Dateien herunterladen

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup
```

### Spiegelsynchronisierung (zweiseitig)

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp \
  --mirror \
  --confirm
```

### Dateien überprüfen

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup \
  --verify
```

## Terminalzugriff

### Interaktives SSH

```bash
./rediacc term --machine prod-01
```

### Befehl ausführen

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### Mit Repository verbinden

```bash
./rediacc term \
  --machine prod-01 \
  --repository webapp
```

## Konfigurationsdateien

### ~/.rediacc/config.json

Speichert Authentifizierungstoken und Benutzereinstellungen:

```json
{
  "tokens": {
    "default": "your-api-token",
    "production": "prod-token"
  },
  "preferences": {
    "output": "json",
    "verbose": false
  }
}
```

## Exit-Codes

- „0“ – Erfolg 
- `1` – Allgemeiner Fehler 
- „2“ – Befehl nicht gefunden 
- „3“ – Authentifizierung fehlgeschlagen 
- „4“ – Berechtigung verweigert 
- „5“ – Ressource nicht gefunden

## Plattformspezifische Hinweise

### Windows

Verwenden Sie „rediacc.bat“ anstelle von „./rediacc“ oder fügen Sie es zum PATH hinzu.

### macOS

Erfordert System Integrity Protection (SIP)-kompatibles SSH-Setup.

### Linux

Vollständig unterstützt auf allen wichtigen Distributionen.

## Hilfe und Support

Für zusätzliche Hilfe zu jedem Befehl:

```bash
./rediacc COMMAND --help
```

Besuchen Sie unsere [Dokumentation](/docs) oder [Kontaktsupport](https://www.rediacc.com/contact).
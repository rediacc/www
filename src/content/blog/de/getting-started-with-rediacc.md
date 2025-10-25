---
title: Erste Schritte mit Rediacc
description: Erfahren Sie in dieser umfassenden Anleitung, wie Sie Rediacc in nur wenigen Minuten einrichten und verwenden.
author: Rediacc Team
publishedDate: 2024-01-15
category: guide
tags: [getting-started, setup, tutorial]
featured: true
language: de
---

Rediacc ist ein leistungsstarkes System zur verteilten Aufgabenausführung, das die einfache Verwaltung und Ausführung von Aufgaben auf mehreren Computern ermöglicht. Dieser Leitfaden führt Sie durch die Grundlagen, um Ihnen den Einstieg zu erleichtern.

## Installation

### Voraussetzungen 
- Linux oder macOS (Windows-Unterstützung über MSYS2) 
- Python 3.8 oder höher 
- SSH-Zugriff auf Ihre Zielmaschinen

### Schnelle Einrichtung

```bash
# Clone the repository
git clone https://github.com/rediacc/rediacc.git
cd rediacc

# Run the installation script
./install.sh --auto

# Verify installation
./rediacc --version
```

## Ihre erste Aufgabe

### 1. Authentifizieren

```bash
./rediacc login
```

Dadurch werden Sie aufgefordert, Ihre Anmeldeinformationen einzugeben und Ihr Authentifizierungstoken einzurichten.

### 2. Verfügbare Maschinen auflisten

```bash
./rediacc list machines --team Default
```

Hier werden alle Maschinen in Ihrem Standardteam angezeigt, die für die Aufgabenausführung verfügbar sind.

### 3. Erstellen Sie eine einfache Aufgabe

```bash
./rediacc create task --machine server-01 --command "echo 'Hello Rediacc!'"
```

### 4. Überwachen Sie den Fortschritt

Verwenden Sie die Webkonsole unter „https://www.rediacc.com“, um Ihre Aufgaben in Echtzeit zu überwachen.

## Schlüsselkonzepte

### Warteschlangensystem 
Aufgaben werden über ein prioritätsbasiertes Warteschlangensystem verwaltet. Aufgaben können Prioritäten von 1 (höchste) bis 5 (niedrigste) zugewiesen werden.

### Tresorsystem 
Sensible Daten wie SSH-Anmeldeinformationen und API-Schlüssel werden sicher in verschlüsselten Tresoren gespeichert.

### Teams 
Organisieren Sie Ihre Maschinen und Ressourcen nach Teams für eine bessere Zugangskontrolle und Isolierung.

## Nächste Schritte

- [Erfahren Sie mehr über die Dateisynchronisierung](/docs/file-sync) 
- [Erkunden Sie die CLI-Referenz](/docs/cli-reference) 
- [Erweiterte Beispiele ansehen](/blog/advanced-task-workflows)

Viel Spaß bei der Aufgabenausführung!
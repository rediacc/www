---
title: Premiers pas avec Rediacc
description: Apprenez à configurer et à commencer à utiliser Rediacc en quelques minutes seulement grâce à ce guide complet.
author: Rediacc Team
publishedDate: 2024-01-15
category: guide
tags: [getting-started, setup, tutorial]
featured: true
language: fr
---

Rediacc est un puissant système d'exécution de tâches distribuées qui facilite la gestion et l'exécution de tâches sur plusieurs machines. Ce guide vous guidera à travers les bases pour vous permettre d'être opérationnel.

##Installation

### Prérequis 
- Linux ou macOS (support Windows via MSYS2) 
- Python 3.8 ou supérieur 
- Accès SSH à vos machines cibles

### Configuration rapide

```bash
# Clone the repository
git clone https://github.com/rediacc/rediacc.git
cd rediacc

# Run the installation script
./install.sh --auto

# Verify installation
./rediacc --version
```

## Votre première tâche

### 1. Authentifier

```bash
./rediacc login
```

Cela vous demandera de saisir vos informations d'identification et de configurer votre jeton d'authentification.

### 2. Liste des machines disponibles

```bash
./rediacc list machines --team Default
```

Cela affiche toutes les machines de votre équipe par défaut qui sont disponibles pour l'exécution des tâches.

### 3. Créez une tâche simple

```bash
./rediacc create task --machine server-01 --command "echo 'Hello Rediacc!'"
```

### 4. Surveiller les progrès

Utilisez la console Web sur « https://www.rediacc.com » pour surveiller vos tâches en temps réel.

## Concepts clés

### Système de file d'attente 
Les tâches sont gérées via un système de file d'attente basé sur les priorités. Les tâches peuvent se voir attribuer des priorités allant de 1 (la plus élevée) à 5 (la plus basse).

### Système de coffre-fort 
Les données sensibles telles que les informations d'identification SSH et les clés API sont stockées en toute sécurité dans des coffres-forts cryptés.

### Équipes 
Organisez vos machines et ressources par équipe pour un meilleur contrôle d’accès et une meilleure isolation.

## Prochaines étapes

- [En savoir plus sur la synchronisation de fichiers](/docs/file-sync) 
- [Explorer la référence CLI](/docs/cli-reference) 
- [Découvrez des exemples avancés](/blog/advanced-task-workflows)

Bonne exécution de la tâche !
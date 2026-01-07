---
title: Référence CLI
description: Référence complète pour toutes les commandes et options Rediacc CLI.
category: Reference
order: 1
language: fr
---

##Installation

### Prérequis

-Python 3.8+ 
-Client SSH 
- Git (facultatif, pour les installations de développement)

### Installer à partir de la source

```bash
./install.sh --auto
```

### Vérifier l'installation

```bash
./rediacc --version
./rediacc --help
```

## Options globales

Toutes les commandes prennent en charge ces options :

- `--help` - Afficher l'aide sur la commande 
- `--output json` - Sortie au format JSON (utile pour les scripts) 
- `--dev` - Mode développement (vérification SSL assouplie) 
- `--verbose` - Activer la journalisation détaillée

## Commandes d'authentification

### Se connecter

```bash
./rediacc login
```

Connexion interactive. Stocke le jeton dans `~/.rediacc/config.json`.

### Déconnexion

```bash
./rediacc logout
```

Supprime le jeton d'authentification stocké.

### Afficher l'utilisateur actuel

```bash
./rediacc whoami
```

## Gestion d'équipe

### Liste des équipes

```bash
./rediacc list teams
./rediacc list teams --output json
```

### Créer une équipe

```bash
./rediacc create team --name "Production"
```

### Afficher les détails de l'équipe

```bash
./rediacc inspect team Production
```

## Gestion des machines

### Liste des machines

```bash
./rediacc list machines
./rediacc list machines --team Production
./rediacc list machines --team Production --output json
```

### Créer une machine

```bash
./rediacc create machine \
  --name prod-01 \
  --team Production \
  --ip 10.0.0.5 \
  --user deploy
```

### Inspecter la machine

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Production
```

### Supprimer l'ordinateur

```bash
./rediacc delete machine prod-01 --team Production --confirm
```

## Gestion des files d'attente

### Répertorier les éléments de la file d'attente

```bash
./rediacc list queue --team Production
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### Obtenir les détails des éléments de la file d'attente

```bash
./rediacc inspect queue item-123
```

### Annuler un élément de file d'attente

```bash
./rediacc cancel queue item-123 --confirm
```

## Synchronisation de fichiers

### Télécharger des fichiers

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp
```

### Télécharger des fichiers

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup
```

### Synchronisation miroir (bidirectionnelle)

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp \
  --mirror \
  --confirm
```

### Vérifier les fichiers

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup \
  --verify
```

## Accès aux terminaux

### SSH interactif

```bash
./rediacc term --machine prod-01
```

### Exécuter la commande

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### Se connecter au référentiel

```bash
./rediacc term \
  --machine prod-01 \
  --repository webapp
```

## Fichiers de configuration

### ~/.rediacc/config.json

Stocke les jetons d'authentification et les préférences utilisateur :

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

## Codes de sortie

- `0` - Succès 
- `1` - Erreur générale 
- `2` - Commande introuvable 
- `3` - L'authentification a échoué 
- `4` - Autorisation refusée 
- `5` - Ressource introuvable

## Notes spécifiques à la plateforme

### Fenêtres

Utilisez `rediacc.bat` au lieu de `./rediacc` ou ajoutez-le à PATH.

### macOS

Nécessite une configuration SSH compatible avec la protection de l'intégrité du système (SIP).

###Linux

Entièrement pris en charge sur toutes les distributions majeures.

## Aide et support

Pour obtenir de l'aide supplémentaire sur n'importe quelle commande :

```bash
./rediacc COMMAND --help
```

Visitez notre [documentation](/docs) ou [contactez le support](https://www.rediacc.com/contact).
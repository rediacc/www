---
title: Système de file d'attente
description: Comprendre le système de file d'attente Rediacc pour la gestion et l'exécution des tâches.
category: Core Concepts
order: 2
language: fr
---

Le système de file d'attente est au cœur de Rediacc, gérant la répartition des tâches entre les machines.

## Aperçu

La file d'attente gère les tâches avec le cycle de vie suivant :

```
PENDING → ASSIGNED → PROCESSING → COMPLETED/FAILED/CANCELLED
```

### États

- **EN ATTENTE** - Tâche créée, en attente d'être récupérée par un pont 
- **ASSIGNED** - Bridge a revendiqué la tâche et prépare l'exécution 
- **TRAITEMENT** - La tâche est actuellement en cours d'exécution sur la machine 
- **TERMINÉ** - Tâche terminée avec succès 
- **FAILED** - La tâche a rencontré une erreur 
- **ANNULÉ** - La tâche a été annulée manuellement

## Propriétés de la tâche

Chaque élément de la file d'attente contient :

| Propriété | Tapez | Descriptif | 
|--------------|------|-------------| 
| `tâcheId` | UUID | Identificateur de tâche unique | 
| `statut` | Énumération | État d'exécution actuel | 
| `priorité` | 1-5 | Priorité d'exécution (1 la plus élevée) | 
| `retryCount` | Numéro | Nouvelles tentatives restantes | 
| `vaultData` | Objet | Configuration des tâches cryptées | 
| `sortie` | Chaîne | Sortie d'exécution de tâche | 
| `erreur` | Chaîne | Message d'erreur en cas d'échec | 
| `crééÀ` | Horodatage | Temps de création de la tâche | 
| `terminéÀ` | Horodatage | Temps d'achèvement de la tâche |

## Système de priorité

Les tâches sont traitées par ordre de priorité :

- **P1 (Critique)** - Exécution immédiate (urgence, sécurité) 
- **P2 (Élevé)** - Exécuter en quelques minutes (déploiements) 
- **P3 (Normal)** - Exécuter en quelques heures (tâches standard) 
- **P4 (Faible)** - Travail de fond (maintenance) 
- **P5 (Minimal)** - Chaque fois que des ressources sont disponibles (nettoyage)

### Exemple

```bash
# Create high-priority task
./rediacc create task \
  --machine prod-01 \
  --priority 1 \
  --command "systemctl restart app"
```

## Mécanisme de nouvelle tentative

Les tâches ayant échoué peuvent être automatiquement réessayées :

```json
{
  "taskId": "550e8400-e29b-41d4-a716-446655440000",
  "retryCount": 3,
  "retryDelay": 30,
  "maxRetries": 3
}
```

Configurez le comportement des nouvelles tentatives :

- `retryCount` - Nombre de tentatives restantes 
- `retryDelay` - Secondes entre les tentatives 
- `maxRetries` - Nombre maximal de tentatives autorisées

## File d'attente de surveillance

### Vérifier l'état de la file d'attente

```bash
./rediacc list queue
./rediacc list queue --status PENDING
./rediacc list queue --team Production
```

### Surveiller une tâche spécifique

```bash
./rediacc inspect queue task-123
```

### Surveillance en temps réel

Utilisez la console Web pour les mises à jour et la visualisation des files d'attente en temps réel.

## Données du coffre-fort

Les tâches peuvent inclure une configuration chiffrée :

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

Les données du coffre-fort sont automatiquement cryptées/déchiffrées par le système.

## Opérations par lots

Traitez plusieurs tâches efficacement :

```bash
# Get next 5 tasks
./rediacc list queue --limit 5

# Cancel multiple tasks
./rediacc cancel queue task-1 task-2 task-3 --confirm
```

## Meilleures pratiques en matière de file d'attente

1. **Surveiller la profondeur de la file d'attente** - Alerter si la file d'attente devient trop grande 
2. **Définissez des priorités appropriées** - N'abusez pas de la priorité 1 
3. **Utiliser le traitement par lots** - Tâches liées au groupe 
4. **Configurez judicieusement les tentatives** - Équilibrez la fiabilité et l'utilisation des ressources 
5. **Archiver les tâches terminées** - Gardez la file d'attente propre

## Dépannage

### Tâches bloquées dans le TRAITEMENT

Si une tâche est bloquée :

1. Vérifiez l'état du pont 
2. Vérifiez la connectivité SSH de la machine 
3. Examinez les journaux de tâches pour détecter les erreurs 
4. Annuler manuellement si nécessaire

### Carnet de file d'attente élevé

Si la file d'attente s'allonge :

1. Vérifiez la capacité du pont 
2. Vérifiez les ressources de la machine 
3. Augmentez `batch_size` dans la configuration du pont 
4. Ajoutez plus de ponts ou de machines

### Échecs des tâches

Vérifiez toujours :

1. Message d'erreur de tâche 
2. Journaux des machines 
3. Intégrité des données du coffre-fort 
4. Connectivité SSH

Apprenez-en davantage dans [Bonnes pratiques](/blog/distributed-task-management-best-practices).
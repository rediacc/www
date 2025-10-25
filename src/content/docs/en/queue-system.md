---
title: Queue System
description: Understanding the Rediacc queue system for task management and execution.
category: Core Concepts
order: 2
---

The queue system is the heart of Rediacc, managing task distribution across machines.

## Overview

The queue manages tasks with the following lifecycle:

```
PENDING → ASSIGNED → PROCESSING → COMPLETED/FAILED/CANCELLED
```

### States

- **PENDING** - Task created, waiting to be picked up by a bridge
- **ASSIGNED** - Bridge has claimed the task and is preparing execution
- **PROCESSING** - Task is currently running on the machine
- **COMPLETED** - Task finished successfully
- **FAILED** - Task encountered an error
- **CANCELLED** - Task was manually cancelled

## Task Properties

Each queue item has:

| Property | Type | Description |
|----------|------|-------------|
| `taskId` | UUID | Unique task identifier |
| `status` | Enum | Current execution state |
| `priority` | 1-5 | Execution priority (1 highest) |
| `retryCount` | Number | Remaining retry attempts |
| `vaultData` | Object | Encrypted task configuration |
| `output` | String | Task execution output |
| `error` | String | Error message if failed |
| `createdAt` | Timestamp | Task creation time |
| `completedAt` | Timestamp | Task completion time |

## Priority System

Tasks are processed in priority order:

- **P1 (Critical)** - Immediate execution (emergency, security)
- **P2 (High)** - Execute within minutes (deployments)
- **P3 (Normal)** - Execute within hours (standard tasks)
- **P4 (Low)** - Background work (maintenance)
- **P5 (Minimal)** - Whenever resources available (cleanup)

### Example

```bash
# Create high-priority task
./rediacc create task \
  --machine prod-01 \
  --priority 1 \
  --command "systemctl restart app"
```

## Retry Mechanism

Failed tasks can be automatically retried:

```json
{
  "taskId": "550e8400-e29b-41d4-a716-446655440000",
  "retryCount": 3,
  "retryDelay": 30,
  "maxRetries": 3
}
```

Configure retry behavior:

- `retryCount` - Number of remaining retries
- `retryDelay` - Seconds between retry attempts
- `maxRetries` - Maximum retry attempts allowed

## Monitoring Queue

### Check Queue Status

```bash
./rediacc list queue
./rediacc list queue --status PENDING
./rediacc list queue --team Production
```

### Monitor Specific Task

```bash
./rediacc inspect queue task-123
```

### Real-time Monitoring

Use the web console for real-time queue updates and visualization.

## Vault Data

Tasks can include encrypted configuration:

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

Vault data is automatically encrypted/decrypted by the system.

## Batch Operations

Process multiple tasks efficiently:

```bash
# Get next 5 tasks
./rediacc list queue --limit 5

# Cancel multiple tasks
./rediacc cancel queue task-1 task-2 task-3 --confirm
```

## Queue Best Practices

1. **Monitor queue depth** - Alert if queue grows too large
2. **Set appropriate priorities** - Don't overuse priority 1
3. **Use batching** - Group related tasks
4. **Configure retries wisely** - Balance reliability vs. resource usage
5. **Archive completed tasks** - Keep queue clean

## Troubleshooting

### Tasks Stuck in PROCESSING

If a task is stuck:

1. Check bridge status
2. Verify machine SSH connectivity
3. Review task logs for errors
4. Manually cancel if necessary

### High Queue Backlog

If queue is growing:

1. Check bridge capacity
2. Verify machine resources
3. Increase `batch_size` in bridge configuration
4. Add more bridges or machines

### Task Failures

Always check:

1. Task error message
2. Machine logs
3. Vault data integrity
4. SSH connectivity

Learn more in [Best Practices](/blog/distributed-task-management-best-practices).

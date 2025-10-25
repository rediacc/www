---
title: CLI Reference
description: Complete reference for all Rediacc CLI commands and options.
category: Reference
order: 1
---

## Installation

### Prerequisites

- Python 3.8+
- SSH client
- Git (optional, for development installations)

### Install from Source

```bash
./install.sh --auto
```

### Verify Installation

```bash
./rediacc --version
./rediacc --help
```

## Global Options

All commands support these options:

- `--help` - Show command help
- `--output json` - Output in JSON format (useful for scripting)
- `--dev` - Development mode (relaxed SSL verification)
- `--verbose` - Enable verbose logging

## Authentication Commands

### Login

```bash
./rediacc login
```

Interactive login. Stores token in `~/.rediacc/config.json`.

### Logout

```bash
./rediacc logout
```

Removes stored authentication token.

### Show Current User

```bash
./rediacc whoami
```

## Team Management

### List Teams

```bash
./rediacc list teams
./rediacc list teams --output json
```

### Create Team

```bash
./rediacc create team --name "Production"
```

### Show Team Details

```bash
./rediacc inspect team Production
```

## Machine Management

### List Machines

```bash
./rediacc list machines
./rediacc list machines --team Production
./rediacc list machines --team Production --output json
```

### Create Machine

```bash
./rediacc create machine \
  --name prod-01 \
  --team Production \
  --ip 10.0.0.5 \
  --user deploy
```

### Inspect Machine

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Production
```

### Delete Machine

```bash
./rediacc delete machine prod-01 --team Production --confirm
```

## Queue Management

### List Queue Items

```bash
./rediacc list queue --team Production
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### Get Queue Item Details

```bash
./rediacc inspect queue item-123
```

### Cancel Queue Item

```bash
./rediacc cancel queue item-123 --confirm
```

## File Synchronization

### Upload Files

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repo webapp
```

### Download Files

```bash
./rediacc sync download \
  --machine prod-01 \
  --repo webapp \
  --local ./backup
```

### Mirror Sync (Two-way)

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repo webapp \
  --mirror \
  --confirm
```

### Verify Files

```bash
./rediacc sync download \
  --machine prod-01 \
  --repo webapp \
  --local ./backup \
  --verify
```

## Terminal Access

### Interactive SSH

```bash
./rediacc term --machine prod-01
```

### Execute Command

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### Connect to Repository

```bash
./rediacc term \
  --machine prod-01 \
  --repo webapp
```

## Configuration Files

### ~/.rediacc/config.json

Stores authentication tokens and user preferences:

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

## Exit Codes

- `0` - Success
- `1` - General error
- `2` - Command not found
- `3` - Authentication failed
- `4` - Permission denied
- `5` - Resource not found

## Platform-Specific Notes

### Windows

Use `rediacc.bat` instead of `./rediacc` or add to PATH.

### macOS

Requires System Integrity Protection (SIP) compatible SSH setup.

### Linux

Fully supported on all major distributions.

## Help and Support

For additional help on any command:

```bash
./rediacc COMMAND --help
```

Visit our [documentation](/docs) or [contact support](https://www.rediacc.com/contact).

---
title: Getting Started with Rediacc
description: Learn how to set up and start using Rediacc in just a few minutes with this comprehensive guide.
author: Rediacc Team
publishedDate: 2024-01-15
category: guide
tags: [getting-started, setup, tutorial]
featured: true
---

Rediacc is a powerful distributed task execution system that makes it easy to manage and execute tasks across multiple machines. This guide will walk you through the basics to get you up and running.

## Installation

### Prerequisites
- Linux or macOS (Windows support via MSYS2)
- Python 3.8 or higher
- SSH access to your target machines

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/rediacc/rediacc.git
cd rediacc

# Run the installation script
./install.sh --auto

# Verify installation
./rediacc --version
```

## Your First Task

### 1. Authenticate

```bash
./rediacc login
```

This will prompt you to enter your credentials and set up your authentication token.

### 2. List Available Machines

```bash
./rediacc list machines --team Default
```

This shows all machines in your default team that are available for task execution.

### 3. Create a Simple Task

```bash
./rediacc create task --machine server-01 --command "echo 'Hello Rediacc!'"
```

### 4. Monitor Progress

Use the web console at `https://www.rediacc.com` to monitor your tasks in real-time.

## Key Concepts

### Queue System
Tasks are managed through a priority-based queue system. Tasks can be assigned priorities from 1 (highest) to 5 (lowest).

### Vault System
Sensitive data like SSH credentials and API keys are stored securely in encrypted vaults.

### Teams
Organize your machines and resources by team for better access control and isolation.

## Next Steps

- [Learn about file synchronization](/docs/file-sync)
- [Explore the CLI reference](/docs/cli-reference)
- [Check out advanced examples](/blog/advanced-task-workflows)

Happy task execution!

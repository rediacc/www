---
title: Rediacc 入门
description: 通过这份综合指南，您可以在几分钟内了解如何设置并开始使用 Rediacc。
author: Rediacc Team
publishedDate: 2024-01-15
category: guide
tags: [getting-started, setup, tutorial]
featured: true
language: zh
---

Rediacc是一个功能强大的分布式任务执行系统，可以轻松地跨多台机器管理和执行任务。 本指南将引导您完成入门和运行的基础知识。

＃＃ 安装

### 先决条件
 - Linux 或 macOS（通过 MSYS2 支持 Windows）
 - Python 3.8 或更高版本
 - SSH 访问您的目标机器

### 快速设置

```bash
# Clone the repository
git clone https://github.com/rediacc/rediacc.git
cd rediacc

# Run the installation script
./install.sh --auto

# Verify installation
./rediacc --version
```

## 你的第一个任务

### 1. 身份验证

```bash
./rediacc login
```

这将提示您输入凭据并设置身份验证令牌。

### 2. 列出可用机器

```bash
./rediacc list machines --team Default
```

这显示了默认团队中可用于执行任务的所有计算机。

### 3. 创建一个简单任务

```bash
./rediacc create task --machine server-01 --command "echo 'Hello Rediacc!'"
```

### 4. 监控进度

使用“https://www.rediacc.com”上的 Web 控制台实时监控您的任务。

## 关键概念

### 队列系统
 任务通过基于优先级的队列系统进行管理。 可以为任务分配从 1（最高）到 5（最低）的优先级。

### 保险库系统
 SSH 凭证和 API 密钥等敏感数据安全地存储在加密的保管库中。

### 团队
 按团队组织您的机器和资源，以实现更好的访问控制和隔离。

## 后续步骤

- [了解文件同步](/docs/file-sync)
 - [探索 CLI 参考](/docs/cli-reference)
 - [查看高级示例](/blog/advanced-task-workflows)

任务执行愉快！
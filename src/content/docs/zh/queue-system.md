---
title: 排队系统
description: 了解用于任务管理和执行的 Rediacc 队列系统。
category: Core Concepts
order: 2
language: zh
---

队列系统是 Rediacc 的核心，管理跨机器的任务分配。

＃＃ 概述

队列管理具有以下生命周期的任务：

```
PENDING → ASSIGNED → PROCESSING → COMPLETED/FAILED/CANCELLED
```

### 州

- **待处理** - 任务已创建，等待桥接
 - **已分配** - Bridge 已领取任务并正在准备执行
 - **处理中** - 任务当前正在计算机上运行
 - **已完成** - 任务成功完成
 - **失败** - 任务遇到错误
 - **已取消** - 任务已手动取消

## 任务属性

每个队列项目有：

| 物业 | 类型 | 描述 |
 |----------|------|-------------|
 | `任务ID` | UUID | 唯一的任务标识符 |
 | `状态` | 枚举 | 当前执行状态 |
 | `优先` | 1-5 | 1-5 执行优先级（1 最高）|
 | `重试次数` | 数量 | 剩余重试次数 |
 | `vaultData` | 对象| 加密任务配置|
 | `输出` | 字符串| 任务执行输出|
 | `错误` | 字符串| 如果失败，会出现错误消息 |
 | `创建于` | 时间戳| 任务创建时间|
 | `完成时间` | 时间戳| 任务完成时间|

## 优先系统

任务按优先级顺序处理：

- **P1（关键）** - 立即执行（紧急、安全）
 - **P2（高）** - 在几分钟内执行（部署）
 - **P3（正常）** - 在数小时内执行（标准任务）
 - **P4（低）** - 后台工作（维护）
 - **P5（最小）** - 只要资源可用（清理）

＃＃＃ 例子

```bash
# Create high-priority task
./rediacc create task \
  --machine prod-01 \
  --priority 1 \
  --command "systemctl restart app"
```

## 重试机制

失败的任务可以自动重试：

```json
{
  "taskId": "550e8400-e29b-41d4-a716-446655440000",
  "retryCount": 3,
  "retryDelay": 30,
  "maxRetries": 3
}
```

配置重试行为：

- `retryCount` - 剩余重试次数
 - `retryDelay` - 重试尝试之间的秒数
 - `maxRetries` - 允许的最大重试次数

## 监控队列

### 检查队列状态

```bash
./rediacc list queue
./rediacc list queue --status PENDING
./rediacc list queue --team Production
```

### 监控特定任务

```bash
./rediacc inspect queue task-123
```

### 实时监控

使用 Web 控制台进行实时队列更新和可视化。

## 保险库数据

任务可以包括加密配置：

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

Vault 数据由系统自动加密/解密。

## 批量操作

高效处理多项任务：

```bash
# Get next 5 tasks
./rediacc list queue --limit 5

# Cancel multiple tasks
./rediacc cancel queue task-1 task-2 task-3 --confirm
```

## 队列最佳实践

1. **监控队列深度** - 如果队列变得太大则发出警报
 2. **设置适当的优先级** - 不要过度使用优先级 1
 3. **使用批处理** - 对相关任务进行分组
 4. **明智地配置重试** - 平衡可靠性与资源使用
 5. **归档已完成的任务** - 保持队列干净

## 故障排除

### 任务陷入处理中

如果任务卡住了：

1. 检查网桥状态
 2. 验证机器 SSH 连接
 3. 检查任务日志是否有错误
 4.必要时手动取消

### 高队列积压

如果队列不断增长：

1. 检查桥梁容量
 2. 验证机器资源
 3. 增加网桥配置中的`batch_size`
 4. 添加更多桥梁或机器

### 任务失败

经常检查：

1.任务错误信息
 2. 机器日志
 3.Vault数据完整性
 4.SSH连接

了解更多信息[最佳实践](/blog/distributed-task-management-best-practices)。
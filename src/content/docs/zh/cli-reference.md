---
title: CLI 参考
description: 所有 Rediacc CLI 命令和选项的完整参考。
category: Reference
order: 1
language: zh
---

＃＃ 安装

### 先决条件

-Python 3.8+
 - SSH客户端
 - Git（可选，用于开发安装）

### 从源安装

```bash
./install.sh --auto
```

### 验证安装

```bash
./rediacc --version
./rediacc --help
```

## 全局选项

所有命令都支持这些选项：

- `--help` - 显示命令帮助
 - `--output json` - 以 JSON 格式输出（对于脚本编写很有用）
 - `--dev` - 开发模式（宽松的 SSL 验证）
 - `--verbose` - 启用详细日志记录

## 认证命令

＃＃＃ 登录

```bash
./rediacc login
```

交互式登录。 将令牌存储在`~/.rediacc/config.json`中。

### 注销

```bash
./rediacc logout
```

删除存储的身份验证令牌。

### 显示当前用户

```bash
./rediacc whoami
```

## 团队管理

### 列出团队

```bash
./rediacc list teams
./rediacc list teams --output json
```

### 创建团队

```bash
./rediacc create team --name "Production"
```

### 显示团队详细信息

```bash
./rediacc inspect team Production
```

## 机器管理

### 列出机器

```bash
./rediacc list machines
./rediacc list machines --team Production
./rediacc list machines --team Production --output json
```

### 创建机器

```bash
./rediacc create machine \
  --name prod-01 \
  --team Production \
  --ip 10.0.0.5 \
  --user deploy
```

### 检查机器

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Production
```

### 删除机器

```bash
./rediacc delete machine prod-01 --team Production --confirm
```

## 队列管理

### 列出队列项目

```bash
./rediacc list queue --team Production
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### 获取队列项目详细信息

```bash
./rediacc inspect queue item-123
```

### 取消队列项目

```bash
./rediacc cancel queue item-123 --confirm
```

## 文件同步

### 上传文件

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp
```

### 下载文件

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup
```

### 镜像同步（双向）

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp \
  --mirror \
  --confirm
```

### 验证文件

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup \
  --verify
```

## 终端访问

### 交互式 SSH

```bash
./rediacc term --machine prod-01
```

### 执行命令

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### 连接到存储库

```bash
./rediacc term \
  --machine prod-01 \
  --repository webapp
```

## 配置文件

### ~/.rediacc/config.json

存储身份验证令牌和用户首选项：

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

## 退出代码

- `0` - 成功
 - `1` - 一般错误
 - `2` - 未找到命令
 - `3` - 身份验证失败
 - `4` - 权限被拒绝
 - `5` - 未找到资源

## 平台特定注释

### 窗口

使用 `rediacc.bat` 而不是 `./rediacc` 或添加到 PATH。

### macOS

需要系统完整性保护 (SIP) 兼容的 SSH 设置。

### Linux

所有主要发行版均完全支持。

## 帮助和支持

有关任何命令的其他帮助：

```bash
./rediacc COMMAND --help
```

请访问我们的[文档](/docs) 或[联系支持人员](https://www.rediacc.com/contact)。
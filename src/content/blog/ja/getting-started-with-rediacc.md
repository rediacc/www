---
title: Rediacc の使用を開始する
description: この包括的なガイドを使用して、わずか数分で Rediacc をセットアップして使用を開始する方法を学びましょう。
author: Rediacc Team
publishedDate: 2024-01-15
category: guide
tags: [getting-started, setup, tutorial]
featured: true
language: ja
---

Rediacc は、複数のマシンにわたるタスクの管理と実行を容易にする強力な分散タスク実行システムです。 このガイドでは、立ち上げて実行するための基本を説明します。

## インストール

### 前提条件
 - Linux または macOS (MSYS2 による Windows サポート)
 - Python 3.8以降
 - ターゲット マシンへの SSH アクセス

### クイックセットアップ

```bash
# Clone the repository
git clone https://github.com/rediacc/rediacc.git
cd rediacc

# Run the installation script
./install.sh --auto

# Verify installation
./rediacc --version
```

## 最初のタスク

### 1. 認証する

```bash
./rediacc login
```

これにより、資格情報を入力し、認証トークンを設定するよう求められます。

### 2. 利用可能なマシンをリストする

```bash
./rediacc list machines --team Default
```

これには、タスクの実行に使用できるデフォルト チーム内のすべてのマシンが表示されます。

### 3. 単純なタスクを作成する

```bash
./rediacc create task --machine server-01 --command "echo 'Hello Rediacc!'"
```

### 4. 進行状況を監視する

「https://www.rediacc.com」の Web コンソールを使用して、タスクをリアルタイムで監視します。

## 主要な概念

### キューシステム
 タスクは優先度ベースのキュー システムを通じて管理されます。 タスクには 1 (最高) から 5 (最低) の優先順位を割り当てることができます。

### ボールトシステム
 SSH 認証情報や API キーなどの機密データは、暗号化された保管庫に安全に保管されます。

### チーム
 マシンとリソースをチームごとに整理して、アクセス制御と分離を強化します。

## 次のステップ

- [ファイル同期について学ぶ](/docs/file-sync)
 - [CLI リファレンスを調べる](/docs/cli-reference)
 - [高度な例を確認してください](/blog/advanced-task-workflows)

タスクの実行を楽しんでください。
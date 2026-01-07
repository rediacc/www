---
title: CLI リファレンス
description: すべての Rediacc CLI コマンドとオプションの完全なリファレンス。
category: Reference
order: 1
language: ja
---

## インストール

### 前提条件

- Python 3.8以降
 - SSHクライアント
 - Git (開発インストール用のオプション)

### ソースからインストールする

```bash
./install.sh --auto
```

### インストールの確認

```bash
./rediacc --version
./rediacc --help
```

## グローバル オプション

すべてのコマンドは次のオプションをサポートしています。

- `--help` - コマンドのヘルプを表示します
 - `--output json` - JSON 形式で出力 (スクリプト作成に便利)
 - `--dev` - 開発モード (緩和された SSL 検証)
 - `--verbose` - 詳細ログを有効にする

## 認証コマンド

＃＃＃ ログイン

```bash
./rediacc login
```

インタラクティブなログイン。 トークンを `~/.rediacc/config.json` に保存します。

### ログアウト

```bash
./rediacc logout
```

保存されている認証トークンを削除します。

### 現在のユーザーを表示

```bash
./rediacc whoami
```

## チーム管理

### チームをリストする

```bash
./rediacc list teams
./rediacc list teams --output json
```

### チームを作成する

```bash
./rediacc create team --name "Production"
```

### チームの詳細を表示

```bash
./rediacc inspect team Production
```

## マシン管理

### マシンのリスト

```bash
./rediacc list machines
./rediacc list machines --team Production
./rediacc list machines --team Production --output json
```

### マシンの作成

```bash
./rediacc create machine \
  --name prod-01 \
  --team Production \
  --ip 10.0.0.5 \
  --user deploy
```

### 機械の検査

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Production
```

### マシンの削除

```bash
./rediacc delete machine prod-01 --team Production --confirm
```

## キュー管理

### キュー項目の一覧表示

```bash
./rediacc list queue --team Production
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### キューアイテムの詳細を取得

```bash
./rediacc inspect queue item-123
```

### キュー項目をキャンセル

```bash
./rediacc cancel queue item-123 --confirm
```

## ファイルの同期

### ファイルをアップロードする

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp
```

### ファイルをダウンロードする

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup
```

### ミラー同期 (双方向)

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp \
  --mirror \
  --confirm
```

### ファイルを検証する

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup \
  --verify
```

## ターミナルアクセス

### インタラクティブ SSH

```bash
./rediacc term --machine prod-01
```

### コマンドを実行

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### リポジトリに接続する

```bash
./rediacc term \
  --machine prod-01 \
  --repository webapp
```

## 設定ファイル

### ~/.rediacc/config.json

認証トークンとユーザー設定を保存します。

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

## 終了コード

- `0` - 成功
 - `1` - 一般的なエラー
 - `2` - コマンドが見つかりません
 - `3` - 認証に失敗しました
 - `4` - 許可が拒否されました
 - `5` - リソースが見つかりません

## プラットフォーム固有の注意事項

### ウィンドウ

`./rediacc` の代わりに `rediacc.bat` を使用するか、PATH に追加してください。

### macOS

System Integrity Protection (SIP) と互換性のある SSH セットアップが必要です。

### リナックス

すべての主要なディストリビューションで完全にサポートされています。

## ヘルプとサポート

コマンドに関する追加のヘルプについては、以下を参照してください。

```bash
./rediacc COMMAND --help
```

[ドキュメント](/docs) にアクセスするか、[サポートにお問い合わせ](https://www.rediacc.com/contact) をご覧ください。
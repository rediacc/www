---
title: Справочник по интерфейсу командной строки
description: Полный справочник по всем командам и параметрам Rediacc CLI.
category: Reference
order: 1
language: ru
---

## Установка

### Предварительные условия

- Питон 3.8+ 
- SSH-клиент 
- Git (необязательно, для установок разработки)

### Установить из исходного кода

```bash
./install.sh --auto
```

### Проверка установки

```bash
./rediacc --version
./rediacc --help
```

## Глобальные параметры

Все команды поддерживают эти параметры:

- `--help` — Показать справку по команде 
- `--output json` — вывод в формате JSON (полезно для сценариев) 
- `--dev` - Режим разработки (расслабленная проверка SSL) 
- `--verbose` - Включить подробное ведение журнала.

## Команды аутентификации

### Авторизоваться

```bash
./rediacc login
```

Интерактивный вход. Сохраняет токен в `~/.rediacc/config.json`.

### Выход

```bash
./rediacc logout
```

Удаляет сохраненный токен аутентификации.

### Показать текущего пользователя

```bash
./rediacc whoami
```

## Управление командой

### Список команд

```bash
./rediacc list teams
./rediacc list teams --output json
```

### Создать команду

```bash
./rediacc create team --name "Production"
```

### Показать информацию о команде

```bash
./rediacc inspect team Production
```

## Управление машиной

### Список машин

```bash
./rediacc list machines
./rediacc list machines --team Production
./rediacc list machines --team Production --output json
```

### Создать машину

```bash
./rediacc create machine \
  --name prod-01 \
  --team Production \
  --ip 10.0.0.5 \
  --user deploy
```

### Осмотр машины

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Production
```

### Удалить машину

```bash
./rediacc delete machine prod-01 --team Production --confirm
```

## Управление очередью

### Получение списка элементов очереди

```bash
./rediacc list queue --team Production
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### Получение сведений об элементе очереди

```bash
./rediacc inspect queue item-123
```

### Отменить элемент очереди

```bash
./rediacc cancel queue item-123 --confirm
```

## Синхронизация файлов

### Загрузить файлы

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp
```

### Загрузка файлов

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup
```

### Зеркальная синхронизация (двусторонняя)

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repository webapp \
  --mirror \
  --confirm
```

### Проверка файлов

```bash
./rediacc sync download \
  --machine prod-01 \
  --repository webapp \
  --local ./backup \
  --verify
```

## Доступ к терминалу

### Интерактивный SSH

```bash
./rediacc term --machine prod-01
```

### Выполнить команду

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### Подключиться к репозиторию

```bash
./rediacc term \
  --machine prod-01 \
  --repository webapp
```

## Файлы конфигурации

### ~/.rediacc/config.json

Хранит токены аутентификации и пользовательские настройки:

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

## Коды выхода

- `0` - Успех 
- `1` - Общая ошибка 
- `2` - Команда не найдена 
- `3` - аутентификация не удалась 
- `4` - Разрешение отклонено 
- `5` - Ресурс не найден

## Примечания для конкретных платформ

### Окна

Используйте rediacc.bat вместо ./rediacc или добавьте в PATH.

### macOS

Требуется настройка SSH, совместимая с защитой целостности системы (SIP).

### Линукс

Полностью поддерживается во всех основных дистрибутивах.

## Помощь и поддержка

Для получения дополнительной помощи по любой команде:

```bash
./rediacc COMMAND --help
```

Посетите нашу [документацию](/docs) или [обратитесь в службу поддержки](https://www.rediacc.com/contact).
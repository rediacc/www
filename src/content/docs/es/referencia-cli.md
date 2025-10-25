---
title: Referencia CLI
description: Referencia completa para todos los comandos de interfaz de línea de comandos de Rediacc y opciones.
category: Reference
order: 1
language: es
---

## Instalación

### Requisitos previos

- Python 3.8+
- Cliente SSH
- Git (opcional, para instalaciones de desarrollo)

### Instalar desde la fuente

```bash
./install.sh --auto
```

### Verificar la instalación

```bash
./rediacc --version
./rediacc --help
```

## Opciones globales

Todos los comandos soportan estas opciones:

- `--help` - Mostrar ayuda del comando
- `--output json` - Salida en formato JSON (útil para scripts)
- `--dev` - Modo de desarrollo (verificación SSL relajada)
- `--verbose` - Habilitar registro detallado

## Comandos de autenticación

### Iniciar sesión

```bash
./rediacc login
```

Inicio de sesión interactivo. Almacena el token en `~/.rediacc/config.json`.

### Cerrar sesión

```bash
./rediacc logout
```

Elimina el token de autenticación almacenado.

### Mostrar usuario actual

```bash
./rediacc whoami
```

## Gestión de equipos

### Listar equipos

```bash
./rediacc list teams
./rediacc list teams --output json
```

### Crear equipo

```bash
./rediacc create team --name "Producción"
```

### Mostrar detalles del equipo

```bash
./rediacc inspect team Producción
```

## Gestión de máquinas

### Listar máquinas

```bash
./rediacc list machines
./rediacc list machines --team Producción
./rediacc list machines --team Producción --output json
```

### Crear máquina

```bash
./rediacc create machine \
  --name prod-01 \
  --team Producción \
  --ip 10.0.0.5 \
  --user deploy
```

### Inspeccionar máquina

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Producción
```

### Eliminar máquina

```bash
./rediacc delete machine prod-01 --team Producción --confirm
```

## Gestión de colas

### Listar elementos de la cola

```bash
./rediacc list queue --team Producción
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### Obtener detalles del elemento de la cola

```bash
./rediacc inspect queue item-123
```

### Cancelar elemento de la cola

```bash
./rediacc cancel queue item-123 --confirm
```

## Sincronización de archivos

### Cargar archivos

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repo webapp
```

### Descargar archivos

```bash
./rediacc sync download \
  --machine prod-01 \
  --repo webapp \
  --local ./backup
```

### Sincronización de espejo (bidireccional)

```bash
./rediacc sync upload \
  --local ./src \
  --machine prod-01 \
  --repo webapp \
  --mirror \
  --confirm
```

### Verificar archivos

```bash
./rediacc sync download \
  --machine prod-01 \
  --repo webapp \
  --local ./backup \
  --verify
```

## Acceso a terminal

### SSH interactivo

```bash
./rediacc term --machine prod-01
```

### Ejecutar comando

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### Conectar a repositorio

```bash
./rediacc term \
  --machine prod-01 \
  --repo webapp
```

## Archivos de configuración

### ~/.rediacc/config.json

Almacena tokens de autenticación y preferencias de usuario:

```json
{
  "tokens": {
    "default": "tu-token-api",
    "production": "token-prod"
  },
  "preferences": {
    "output": "json",
    "verbose": false
  }
}
```

## Códigos de salida

- `0` - Éxito
- `1` - Error general
- `2` - Comando no encontrado
- `3` - Autenticación fallida
- `4` - Permiso denegado
- `5` - Recurso no encontrado

## Notas específicas de plataforma

### Windows

Usa `rediacc.bat` en lugar de `./rediacc` o agrega a PATH.

### macOS

Requiere configuración compatible con System Integrity Protection (SIP).

### Linux

Completamente soportado en todas las distribuciones principales.

## Ayuda y soporte

Para ayuda adicional en cualquier comando:

```bash
./rediacc COMMAND --help
```

Visita nuestra [documentación](/es/docs) o [contáctanos](https://www.rediacc.com/contact).

---
title: Referencia CLI
description: Referencia completa para todos los comandos y opciones de la CLI de Rediacc.
category: Reference
order: 1
language: es
---

## Instalación

### Requisitos previos

- Pitón 3.8+ 
- Cliente SSH 
- Git (opcional, para instalaciones de desarrollo)

### Instalar desde la fuente

```bash
./install.sh --auto
```

### Verificar instalación

```bash
./rediacc --version
./rediacc --help
```

## Opciones globales

Todos los comandos admiten estas opciones:

- `--help` - Mostrar ayuda del comando 
- `--output json` - Salida en formato JSON (útil para secuencias de comandos) 
- `--dev` - Modo de desarrollo (verificación SSL relajada) 
- `--verbose` - Habilita el registro detallado

## Comandos de autenticación

### Acceso

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
./rediacc create team --name "Production"
```

### Mostrar detalles del equipo

```bash
./rediacc inspect team Production
```

## Gestión de máquinas

### Listar máquinas

```bash
./rediacc list machines
./rediacc list machines --team Production
./rediacc list machines --team Production --output json
```

### Crear máquina

```bash
./rediacc create machine \
  --name prod-01 \
  --team Production \
  --ip 10.0.0.5 \
  --user deploy
```

### Inspeccionar la máquina

```bash
./rediacc inspect machine prod-01
./rediacc inspect machine prod-01 --team Production
```

### Eliminar máquina

```bash
./rediacc delete machine prod-01 --team Production --confirm
```

## Gestión de colas

### Listar elementos de la cola

```bash
./rediacc list queue --team Production
./rediacc list queue --status PENDING
./rediacc list queue --output json
```

### Obtener detalles del elemento de la cola

```bash
./rediacc inspect queue item-123
```

### Cancelar elemento de cola

```bash
./rediacc cancel queue item-123 --confirm
```

## Sincronización de archivos

### Subir archivos

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

### Sincronización espejo (bidireccional)

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

## Acceso a terminales

### SSH interactiva

```bash
./rediacc term --machine prod-01
```

### Ejecutar comando

```bash
./rediacc term \
  --machine prod-01 \
  --command "docker ps"
```

### Conectarse al repositorio

```bash
./rediacc term \
  --machine prod-01 \
  --repo webapp
```

## Archivos de configuración

### ~/.rediacc/config.json

Almacena tokens de autenticación y preferencias del usuario:

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

## Códigos de salida

- `0` - Éxito 
- `1` - Error general 
- `2` - Comando no encontrado 
- `3` - Error de autenticación 
- `4` - Permiso denegado 
- `5` - Recurso no encontrado

## Notas específicas de la plataforma

### ventanas

Utilice `rediacc.bat` en lugar de `./rediacc` o agréguelo a PATH.

### MacOS

Requiere una configuración SSH compatible con System Integrity Protection (SIP).

###Linux

Totalmente compatible con todas las distribuciones principales.

## Ayuda y soporte

Para obtener ayuda adicional sobre cualquier comando:

```bash
./rediacc COMMAND --help
```

Visite nuestra [documentación](/docs) o [contacte con el soporte](https://www.rediacc.com/contact).
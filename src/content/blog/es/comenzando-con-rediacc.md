---
title: Comenzando con Rediacc
description: Aprende cómo configurar y comenzar a usar Rediacc en solo unos minutos con esta guía completa.
author: Equipo de Rediacc
publishedDate: 2024-01-15
category: guide
tags: [comenzar, configuración, tutorial]
featured: true
language: es
---

Rediacc es un poderoso sistema de ejecución de tareas distribuidas que facilita la gestión y ejecución de tareas en múltiples máquinas. Esta guía te llevará a través de los conceptos básicos para que comiences en poco tiempo.

## Instalación

### Requisitos previos
- Linux o macOS (soporte para Windows a través de MSYS2)
- Python 3.8 o superior
- Acceso SSH a tus máquinas objetivo

### Configuración rápida

```bash
# Clonar el repositorio
git clone https://github.com/rediacc/rediacc.git
cd rediacc

# Ejecutar el script de instalación
./install.sh --auto

# Verificar la instalación
./rediacc --version
```

## Tu primera tarea

### 1. Autenticarse

```bash
./rediacc login
```

Esto te pedirá que ingreses tus credenciales y configurará tu token de autenticación.

### 2. Listar máquinas disponibles

```bash
./rediacc list machines --team Default
```

Esto muestra todas las máquinas en tu equipo predeterminado que están disponibles para ejecución de tareas.

### 3. Crear una tarea simple

```bash
./rediacc create task --machine server-01 --command "echo 'Hola Rediacc!'"
```

### 4. Monitorear el progreso

Usa la consola web en `https://www.rediacc.com` para monitorear tus tareas en tiempo real.

## Conceptos clave

### Sistema de colas
Las tareas se gestionan a través de un sistema de colas basado en prioridades. Las tareas se pueden asignar prioridades de 1 (más alta) a 5 (más baja).

### Sistema de bóveda
Los datos sensibles como credenciales SSH y claves API se almacenan de forma segura en bóvedas cifradas.

### Equipos
Organiza tus máquinas y recursos por equipo para un mejor control de acceso y aislamiento.

## Próximos pasos

- [Aprende sobre sincronización de archivos](/es/docs/sincronizacion-archivos)
- [Explora la referencia CLI](/es/docs/referencia-cli)
- [Consulta ejemplos avanzados](/es/blog/flujos-trabajo-tareas-avanzados)

¡Feliz ejecución de tareas!

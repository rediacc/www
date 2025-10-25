---
title: Primeros pasos con Rediacc
description: Aprenda cómo configurar y comenzar a usar Rediacc en solo unos minutos con esta guía completa.
author: Rediacc Team
publishedDate: 2024-01-15
category: guide
tags: [getting-started, setup, tutorial]
featured: true
language: es
---

Rediacc es un potente sistema de ejecución de tareas distribuidas que facilita la gestión y ejecución de tareas en varias máquinas. Esta guía le guiará a través de los conceptos básicos para que pueda empezar a utilizarlo.

## Instalación

### Requisitos previos 
- Linux o macOS (soporte de Windows a través de MSYS2) 
- Python 3.8 o superior 
- Acceso SSH a sus máquinas de destino

### Configuración rápida

```bash
# Clone the repository
git clone https://github.com/rediacc/rediacc.git
cd rediacc

# Run the installation script
./install.sh --auto

# Verify installation
./rediacc --version
```

## Tu primera tarea

### 1. Autenticar

```bash
./rediacc login
```

Esto le pedirá que ingrese sus credenciales y configure su token de autenticación.

### 2. Listar máquinas disponibles

```bash
./rediacc list machines --team Default
```

Esto muestra todas las máquinas de su equipo predeterminado que están disponibles para la ejecución de tareas.

### 3. Crea una tarea sencilla

```bash
./rediacc create task --machine server-01 --command "echo 'Hello Rediacc!'"
```

### 4. Monitorear el progreso

Utilice la consola web en `https://www.rediacc.com` para monitorear sus tareas en tiempo real.

## Conceptos clave

### Sistema de cola 
Las tareas se gestionan a través de un sistema de colas basado en prioridades. A las tareas se les pueden asignar prioridades del 1 (la más alta) al 5 (la más baja).

### Sistema de bóveda 
Los datos confidenciales, como las credenciales SSH y las claves API, se almacenan de forma segura en bóvedas cifradas.

### Equipos 
Organice sus máquinas y recursos por equipo para un mejor control de acceso y aislamiento.

## Próximos pasos

- [Más información sobre la sincronización de archivos](/docs/file-sync) 
- [Explore la referencia de CLI](/docs/cli-reference) 
- [Consulte ejemplos avanzados](/blog/advanced-task-workflows)

¡Feliz ejecución de la tarea!
---
title: Sistema de Colas
description: Entendiendo el sistema de colas de Rediacc para la gestión y ejecución de tareas.
category: Conceptos Clave
order: 2
language: es
---

El sistema de colas es el corazón de Rediacc, gestionando la distribución de tareas en múltiples máquinas.

## Descripción General

La cola gestiona tareas con el siguiente ciclo de vida:

```
PENDIENTE → ASIGNADA → PROCESANDO → COMPLETADA/FALLIDA/CANCELADA
```

### Estados

- **PENDIENTE** - Tarea creada, esperando ser recogida por un puente
- **ASIGNADA** - El puente ha reclamado la tarea y está preparando la ejecución
- **PROCESANDO** - La tarea se está ejecutando actualmente en la máquina
- **COMPLETADA** - La tarea finalizó exitosamente
- **FALLIDA** - La tarea encontró un error
- **CANCELADA** - La tarea fue cancelada manualmente

## Propiedades de la Tarea

Cada elemento de la cola tiene:

| Propiedad | Tipo | Descripción |
|----------|------|-------------|
| `taskId` | UUID | Identificador único de la tarea |
| `status` | Enum | Estado de ejecución actual |
| `priority` | 1-5 | Prioridad de ejecución (1 más alta) |
| `retryCount` | Número | Intentos de reintento restantes |
| `vaultData` | Objeto | Configuración de tarea cifrada |
| `output` | Cadena | Salida de ejecución de la tarea |
| `error` | Cadena | Mensaje de error si falló |
| `createdAt` | Marca de tiempo | Tiempo de creación de la tarea |
| `completedAt` | Marca de tiempo | Tiempo de finalización de la tarea |

## Sistema de Prioridades

Las tareas se procesan en orden de prioridad:

- **P1 (Crítica)** - Ejecución inmediata (emergencia, seguridad)
- **P2 (Alta)** - Ejecutar en minutos (implementaciones)
- **P3 (Normal)** - Ejecutar en horas (tareas estándar)
- **P4 (Baja)** - Trabajo en segundo plano (mantenimiento)
- **P5 (Mínima)** - Cuando recursos disponibles (limpieza)

### Ejemplo

```bash
# Crear tarea de alta prioridad
./rediacc create task \
  --machine prod-01 \
  --priority 1 \
  --command "systemctl restart app"
```

## Mecanismo de Reintentos

Las tareas fallidas se pueden reintentar automáticamente:

```json
{
  "taskId": "550e8400-e29b-41d4-a716-446655440000",
  "retryCount": 3,
  "retryDelay": 30,
  "maxRetries": 3
}
```

Configura el comportamiento de reintentos:

- `retryCount` - Número de reintentos restantes
- `retryDelay` - Segundos entre intentos de reintento
- `maxRetries` - Máximo de intentos de reintento permitidos

## Monitorear la Cola

### Verificar Estado de la Cola

```bash
./rediacc list queue
./rediacc list queue --status PENDIENTE
./rediacc list queue --team Producción
```

### Monitorear Tarea Específica

```bash
./rediacc inspect queue tarea-123
```

### Monitoreo en Tiempo Real

Utiliza la consola web para actualizaciones de cola en tiempo real y visualización.

## Datos de Bóveda

Las tareas pueden incluir configuración cifrada:

```json
{
  "vaultData": {
    "function": "deploy",
    "repository": "web-app",
    "version": "1.2.3",
    "environment": "producción",
    "credentials": {
      "ssh_key": "[cifrado]",
      "api_token": "[cifrado]"
    }
  }
}
```

Los datos de la bóveda se cifran/descifran automáticamente por el sistema.

## Operaciones en Lote

Procesa múltiples tareas de manera eficiente:

```bash
# Obtener las próximas 5 tareas
./rediacc list queue --limit 5

# Cancelar múltiples tareas
./rediacc cancel queue tarea-1 tarea-2 tarea-3 --confirm
```

## Mejores Prácticas de Cola

1. **Monitorear profundidad de la cola** - Alertar si la cola crece demasiado
2. **Establecer prioridades apropiadas** - No abuses de la prioridad 1
3. **Usar lotes** - Agrupar tareas relacionadas
4. **Configurar reintentos prudentemente** - Equilibra confiabilidad vs. uso de recursos
5. **Archivar tareas completadas** - Mantener la cola limpia

## Solución de Problemas

### Tareas Atrapadas en PROCESANDO

Si una tarea está atrapada:

1. Verificar estado del puente
2. Verificar conectividad SSH de la máquina
3. Revisar registros de tareas para errores
4. Cancelar manualmente si es necesario

### Acumulación Alta en la Cola

Si la cola está creciendo:

1. Verificar capacidad del puente
2. Verificar recursos de la máquina
3. Aumentar `batch_size` en configuración del puente
4. Agregar más puentes o máquinas

### Fallos de Tareas

Siempre verifica:

1. Mensaje de error de la tarea
2. Registros de la máquina
3. Integridad de datos de la bóveda
4. Conectividad SSH

Aprende más en [Mejores Prácticas](/es/blog/buenas-practicas-gestion-tareas-distribuidas).

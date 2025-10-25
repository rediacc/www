---
title: Sistema de cola
description: Comprender el sistema de colas de Rediacc para la gestión y ejecución de tareas.
category: Core Concepts
order: 2
language: es
---

El sistema de colas es el corazón de Rediacc y gestiona la distribución de tareas entre máquinas.

## Descripción general

La cola gestiona tareas con el siguiente ciclo de vida:

```
PENDING → ASSIGNED → PROCESSING → COMPLETED/FAILED/CANCELLED
```

### Estados

- **PENDIENTE** - Tarea creada, esperando ser recogida por un puente 
- **ASIGNADO** - Bridge ha reclamado la tarea y está preparando la ejecución. 
- **PROCESANDO** - La tarea se está ejecutando actualmente en la máquina 
- **COMPLETADO** - Tarea finalizada exitosamente 
- **FALLADO** - La tarea encontró un error 
- **CANCELADO** - La tarea se canceló manualmente

## Propiedades de la tarea

Cada elemento de la cola tiene:

| Propiedad | Tipo | Descripción | 
|----------|------|-------------| 
| `Id. de tarea` | UUID | Identificador de tarea único | 
| `estado` | Enumeración | Estado de ejecución actual | 
| `prioridad` | 1-5 | Prioridad de ejecución (1 más alta) | 
| `retryCount` | Número | Reintentos restantes | 
| `datosdebóveda` | Objeto | Configuración de tareas cifradas | 
| `salida` | Cadena | Salida de ejecución de tarea | 
| `error` | Cadena | Mensaje de error si falla | 
| `creadoEn` | Marca de tiempo | Hora de creación de tareas | 
| `completado en` | Marca de tiempo | Tiempo de finalización de la tarea |

## Sistema de prioridades

Las tareas se procesan en orden de prioridad:

- **P1 (Crítico)** - Ejecución inmediata (emergencia, seguridad) 
- **P2 (Alto)** - Ejecutar en minutos (implementaciones) 
- **P3 (Normal)** - Ejecutar en horas (tareas estándar) 
- **P4 (Bajo)** - Trabajo en segundo plano (mantenimiento) 
- **P5 (Mínimo)** - Siempre que haya recursos disponibles (limpieza)

### Ejemplo

```bash
# Create high-priority task
./rediacc create task \
  --machine prod-01 \
  --priority 1 \
  --command "systemctl restart app"
```

## Mecanismo de reintento

Las tareas fallidas se pueden reintentar automáticamente:

```json
{
  "taskId": "550e8400-e29b-41d4-a716-446655440000",
  "retryCount": 3,
  "retryDelay": 30,
  "maxRetries": 3
}
```

Configurar el comportamiento de reintento:

- `retryCount` - Número de reintentos restantes 
- `retryDelay` - Segundos entre reintentos 
- `maxRetries`: número máximo de reintentos permitidos

## Cola de monitoreo

### Verificar estado de la cola

```bash
./rediacc list queue
./rediacc list queue --status PENDING
./rediacc list queue --team Production
```

### Monitorear tarea específica

```bash
./rediacc inspect queue task-123
```

### Monitoreo en tiempo real

Utilice la consola web para actualizaciones y visualización de colas en tiempo real.

## Datos de la bóveda

Las tareas pueden incluir configuración cifrada:

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

El sistema cifra/descifra automáticamente los datos de la bóveda.

## Operaciones por lotes

Procese múltiples tareas de manera eficiente:

```bash
# Get next 5 tasks
./rediacc list queue --limit 5

# Cancel multiple tasks
./rediacc cancel queue task-1 task-2 task-3 --confirm
```

## Mejores prácticas en colas

1. **Supervisar la profundidad de la cola**: alerta si la cola crece demasiado 
2. **Establezca prioridades apropiadas** - No abuse de la prioridad 1 
3. **Usar procesamiento por lotes**: tareas relacionadas con el grupo 
4. **Configure los reintentos de forma inteligente**: equilibre la confiabilidad con el uso de recursos 
5. **Archivar tareas completadas** - Mantener la cola limpia

## Solución de problemas

### Tareas atascadas en PROCESAMIENTO

Si una tarea está atascada:

1. Verifique el estado del puente 
2. Verificar la conectividad SSH de la máquina 
3. Revisar los registros de tareas en busca de errores. 
4. Cancelar manualmente si es necesario

### Acumulación de cola alta

Si la cola está creciendo:

1. Verifique la capacidad del puente 
2. Verificar los recursos de la máquina 
3. Aumente `batch_size` en la configuración del puente 
4. Añade más puentes o máquinas.

### Errores de tarea

Siempre revisa:

1. Mensaje de error de tarea 
2. Registros de la máquina 
3. Integridad de los datos de la bóveda 
4. Conectividad SSH

Obtenga más información en [Prácticas recomendadas](/blog/distributed-task-management-best-practices).
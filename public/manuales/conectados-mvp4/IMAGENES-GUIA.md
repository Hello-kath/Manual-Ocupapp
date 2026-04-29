# GUÍA DE IMÁGENES PARA EL MANUAL CONECTADOS MVP4

Este documento explica qué capturar en cada imagen del manual de usuario de Conectados 2.0 - MVP 4.

---

## MÓDULO I: INTRODUCCIÓN AL SISTEMA CONECTADOS

**No requiere imágenes.**
Solo contiene explicación conceptual del sistema.

---

## MÓDULO II: SOLICITUD Y GESTIÓN DE PERMISOS

### Imagen 1: `permisos-login-aprobador.png`
**¿Qué capturar?**
- Pantalla de login del sistema Conectados
- URL visible del ambiente (QA o producción)
- Campos de usuario y contraseña visibles
- Logo de Camposol o Conectados visible
- Botón de "Iniciar Sesión"

**¿Cómo obtenerla?**
1. Acceder a URL de Conectados
2. Capturar pantalla de login
3. No llenar campos aún

**Elementos importantes:**
- Interfaz limpia y clara
- Logo corporativo visible
- Campos de formulario bien identificados

---

### Imagen 2: `permisos-bandeja-solicitudes.png`
**¿Qué capturar?**
- Vista principal de bandeja de solicitudes pendientes
- Tabla con lista de solicitudes
- Columnas visibles: Colaborador, Tipo de permiso, Fecha solicitud, Estado
- Filtros disponibles en la parte superior
- Botón de "Ver detalle" en cada solicitud
- Contador de solicitudes pendientes

**¿Cómo obtenerla?**
1. Login como jefe directo o PAT/PCO
2. Navegar a módulo de Permisos
3. Capturar vista de bandeja principal

**Elementos importantes:**
- Al menos 2-3 solicitudes visibles en la tabla
- Estado "PENDIENTE" claramente visible
- Opciones de acciones disponibles

---

### Imagen 3: `permisos-detalle-solicitud.png`
**¿Qué capturar?**
- Modal o vista de detalle completo de una solicitud
- Información del colaborador (nombre, DNI, puesto)
- Tipo de permiso seleccionado
- Fechas de inicio y fin del permiso
- Motivo detallado del permiso
- Documentos adjuntos visibles
- Botones "Aprobar" y "Rechazar" visibles
- Campo de comentarios (opcional)

**¿Cómo obtenerla?**
1. Desde bandeja, hacer click en "Ver detalle"
2. Capturar modal/vista completa que aparece

**Elementos importantes:**
- Toda la información debe ser legible
- Documentos adjuntos claramente identificados
- Botones de acción resaltados

---

### Imagen 4: `permisos-documento-adjunto.png`
**¿Qué capturar?**
- Documento PDF adjunto abierto/visible
- Puede ser certificado médico, documento de trámite, etc.
- Título del documento visible
- Botón de descarga visible
- Previsualizador de PDF (si aplica)

**¿Cómo obtenerla?**
1. Desde detalle de solicitud, click en documento adjunto
2. Capturar visualización del documento

---

### Imagen 5: `permisos-aprobar-modal.png`
**¿Qué capturar?**
- Modal de confirmación al aprobar
- Mensaje: "¿Está seguro de aprobar esta solicitud?"
- Resumen de la solicitud a aprobar
- Campo de comentarios (opcional)
- Botones "Confirmar" y "Cancelar"

**¿Cómo obtenerla?**
1. Click en botón "Aprobar"
2. Capturar modal de confirmación

---

### Imagen 6: `permisos-aprobacion-exitosa.png`
**¿Qué capturar?**
- Mensaje de éxito: "Solicitud aprobada correctamente"
- Ícono de éxito (check verde)
- Fecha y hora de la aprobación
- Nombre del aprobador registrado
- Opción para "Volver a bandeja" o "Ver otra solicitud"

**¿Cómo obtenerla?**
1. Después de confirmar aprobación
2. Capturar mensaje de confirmación

---

### Imagen 7: `permisos-rechazar-modal.png`
**¿Qué capturar?**
- Modal de rechazo de solicitud
- Mensaje: "¿Por qué rechazas esta solicitud?"
- Campo de comentarios OBLIGATORIO resaltado
- Validación: "El comentario es obligatorio"
- Botones "Rechazar" y "Cancelar"

**¿Cómo obtenerla?**
1. Click en botón "Rechazar"
2. Capturar modal que aparece

---

### Imagen 8: `permisos-validacion-comentario.png`
**¿Qué capturar?**
- Mensaje de error al intentar rechazar sin comentario
- Campo de comentarios vacío con borde rojo
- Mensaje de validación: "Debe ingresar un motivo de rechazo"
- Botón "Rechazar" deshabilitado o mensaje de error

**¿Cómo obtenerla?**
1. Intentar rechazar sin escribir comentario
2. Capturar mensaje de validación

---

### Imagen 9: `permisos-historial-completo.png`
**¿Qué capturar?**
- Vista de historial de todas las solicitudes
- Filtros aplicados: fecha, estado, colaborador
- Tabla con columnas: Colaborador, Tipo, Fecha solicitud, Estado, Fecha aprobación/rechazo, Aprobador
- Opciones de exportación visibles (Excel, PDF)
- Paginación si hay muchos registros

**¿Cómo obtenerla?**
1. Navegar a "Historial de Permisos" o "Reportes"
2. Capturar vista completa de la tabla

---

### Imagen 10: `permisos-filtros-aplicados.png`
**¿Qué capturar?**
- Filtros en acción
- Rango de fechas seleccionado
- Estado filtrado (ej: solo "APROBADO" o "RECHAZADO")
- Colaborador específico filtrado
- Resultados de tabla filtrada visible
- Contador de resultados: "Mostrando X de Y solicitudes"

**¿Cómo obtenerla?**
1. Aplicar varios filtros simultáneamente
2. Capturar pantalla con filtros y resultados

---

### Imagen 11: `permisos-exportar-reporte.png`
**¿Qué capturar?**
- Botón de "Exportar" o ícono de descarga
- Opciones de formato: Excel, PDF, CSV
- Confirmación de descarga
- Archivo descargado visible en navegador (barra inferior)

**¿Cómo obtenerla?**
1. Click en botón "Exportar"
2. Seleccionar formato
3. Capturar momento de descarga

---

## MÓDULO III: JUSTIFICACIÓN DE INASISTENCIAS

### Imagen 12: `justificaciones-bandeja-pendientes.png`
**¿Qué capturar?**
- Vista de bandeja de justificaciones pendientes
- Diferente a permisos: muestra inasistencias ya ocurridas
- Columnas: Colaborador, Fecha inasistencia, Tipo justificación, Fecha registro, Estado
- Botón "Revisar" en cada solicitud
- Badge o indicador de "PENDIENTE"

**¿Cómo obtenerla?**
1. Login como jefe directo o PAT
2. Navegar a módulo "Justificaciones"
3. Capturar bandeja de pendientes

---

### Imagen 13: `justificaciones-detalle-completo.png`
**¿Qué capturar?**
- Detalle de justificación de inasistencia
- Información del colaborador
- Fecha(s) de inasistencia reportada
- Tipo de justificación (médica, personal, etc.)
- Motivo detallado
- Documento de sustento adjunto (certificado médico, etc.)
- Fechas de inicio y fin EDITABLES
- Botones "Aprobar", "Rechazar"
- Campo de comentarios

**¿Cómo obtenerla?**
1. Click en "Revisar" desde bandeja
2. Capturar modal/vista de detalle

---

### Imagen 14: `justificaciones-documento-sustento.png`
**¿Qué capturar?**
- Documento de sustento (certificado médico, carta, etc.)
- PDF visible con información legible
- Puede ser certificado médico con fechas visibles
- Botón de descarga
- Previsualizador

**¿Cómo obtenerla?**
1. Desde detalle, click en documento adjunto
2. Capturar documento completo

---

### Imagen 15: `justificaciones-aprobar-normal.png`
**¿Qué capturar?**
- Modal de aprobación de justificación
- Fechas originales sin modificar
- Estado: "APROBADO"
- Mensaje de confirmación
- Campo de comentarios opcional

**¿Cómo obtenerla?**
1. Click en "Aprobar" sin modificar fechas
2. Capturar modal de confirmación

---

### Imagen 16: `justificaciones-modificar-fechas.png`
**¿Qué capturar?**
- Campos de fecha siendo modificados
- Fecha inicio original: 2026-02-18
- Fecha fin original: 2026-02-20
- Fecha inicio modificada: 2026-02-19 (ejemplo)
- Fecha fin modificada: 2026-02-19 (ejemplo)
- Indicador visual de cambio (color diferente, ícono de edición)
- Advertencia: "Al modificar fechas, el estado será APROBADO PARCIAL"

**¿Cómo obtenerla?**
1. En detalle de justificación, editar campos de fecha
2. Capturar mientras se están modificando

---

### Imagen 17: `justificaciones-aprobado-parcial.png`
**¿Qué capturar?**
- Confirmación de aprobación con estado "APROBADO PARCIAL"
- Badge o etiqueta destacada: "APROBADO PARCIAL"
- Fechas originales vs. fechas aprobadas mostradas claramente
- Comentario del aprobador visible
- Mensaje explicativo: "Se aprobó con fechas modificadas"

**¿Cómo obtenerla?**
1. Después de aprobar con fechas modificadas
2. Capturar mensaje de confirmación con estado

---

### Imagen 18: `justificaciones-rechazar-sin-comentario.png`
**¿Qué capturar?**
- Intento de rechazo sin comentario
- Campo de comentarios vacío con validación
- Mensaje de error: "El comentario es obligatorio al rechazar"
- Borde rojo en campo de comentarios
- Botón "Rechazar" deshabilitado o error visible

**¿Cómo obtenerla?**
1. Click en "Rechazar"
2. Intentar confirmar sin escribir comentario
3. Capturar validación

---

### Imagen 19: `justificaciones-rechazo-con-comentario.png`
**¿Qué capturar?**
- Campo de comentarios LLENO
- Texto ejemplo: "Certificado médico no válido, no tiene firma del doctor"
- Botón "Rechazar" habilitado
- Modal de confirmación de rechazo

**¿Cómo obtenerla?**
1. Escribir comentario en campo
2. Capturar antes de confirmar

---

### Imagen 20: `justificaciones-notificacion-enviada.png`
**¿Qué capturar?**
- Notificación push en pantalla
- Mensaje: "Se envió notificación al colaborador"
- Ícono de campana o notificación
- Timestamp de envío
- Opción de "Ver historial de notificaciones"

**¿Cómo obtenerla?**
1. Después de aprobar o rechazar
2. Capturar notificación que aparece

---

## MÓDULO IV: CERTIFICADOS DE TRABAJO PARA PERSONAL CESADO

### Imagen 21: `certificados-acceso-admin.png`
**¿Qué capturar?**
- Vista principal del módulo de certificados
- Login como administrador PCO/PAT
- Menú de navegación mostrando "Certificados"
- Dashboard o vista principal

**¿Cómo obtenerla?**
1. Login como admin PCO/PAT
2. Navegar a módulo de certificados
3. Capturar vista principal

---

### Imagen 22: `certificados-historial-solicitudes.png`
**¿Qué capturar?**
- Tabla de historial de solicitudes de certificados
- Columnas: Trabajador, DNI, Tipo certificado, Fecha solicitud, Estado, Fecha generación, Fecha descarga
- Estados visibles: "Pendiente", "Generado", "Descargado"
- Filtros en la parte superior
- Opciones de acción por solicitud

**¿Cómo obtenerla?**
1. En módulo de certificados, vista de historial
2. Capturar tabla completa

---

### Imagen 23: `certificados-detalle-solicitud.png`
**¿Qué capturar?**
- Detalle de una solicitud específica
- Información del trabajador cesado
- Tipo de certificado solicitado
- Fecha de solicitud
- Estado actual
- Certificado PDF generado (si está listo)
- Botón de descarga
- Historial de acciones

**¿Cómo obtenerla?**
1. Click en una solicitud
2. Capturar vista de detalle

---

### Imagen 24: `certificados-filtrar-por-estado.png`
**¿Qué capturar?**
- Filtros aplicados
- Dropdown de estado seleccionado (ej: "Generado")
- Resultados filtrados en tabla
- Otros filtros visibles: fecha, trabajador

**¿Cómo obtenerla?**
1. Aplicar filtro por estado
2. Capturar resultados filtrados

---

### Imagen 25: `certificados-notificacion-generado.png`
**¿Qué capturar?**
- Notificación push o mensaje en pantalla
- Mensaje: "Certificado de trabajo generado"
- Información del trabajador
- Opción de descargar directamente
- Timestamp de generación

**¿Cómo obtenerla?**
1. Cuando un certificado es generado
2. Capturar notificación

---

### Imagen 26: `certificados-exportar-reporte.png`
**¿Qué capturar?**
- Opción de exportar reporte completo
- Formato de exportación (Excel, PDF)
- Reporte incluye: trabajador, fecha solicitud, estado, fecha descarga
- Confirmación de descarga

**¿Cómo obtenerla?**
1. Click en "Exportar reporte"
2. Capturar descarga

---

## MÓDULO V: UTILIDADES PARA PERSONAL CESADO

### Imagen 27: `utilidades-acceso-analista.png`
**¿Qué capturar?**
- Login como analista de nómina
- Vista principal del módulo de utilidades
- Menú mostrando "Gestión de Utilidades"

**¿Cómo obtenerla?**
1. Login como analista de nómina
2. Navegar a módulo de utilidades
3. Capturar pantalla principal

---

### Imagen 28: `utilidades-lista-solicitudes.png`
**¿Qué capturar?**
- Tabla de solicitudes de utilidades registradas
- Columnas: Código trabajador, Nombre, DNI, Monto, Fecha solicitud, Cuenta bancaria, Fecha abono, Estado
- Filtros disponibles: estado, grupo de pago, rango de fechas
- Botones de acción: "Cargar certificados", "Configurar fecha abono", "Exportar"

**¿Cómo obtenerla?**
1. Vista principal de gestión de utilidades
2. Capturar tabla completa con datos

---

### Imagen 29: `utilidades-carga-masiva-inicio.png`
**¿Qué capturar?**
- Modal o vista de carga masiva de certificados
- Botón "Seleccionar archivo ZIP"
- Instrucciones: "Cargar archivo ZIP con certificados PDF nombrados por DNI"
- Ejemplo de formato: "12345678.pdf, 87654321.pdf"
- Botón "Cargar" deshabilitado hasta seleccionar archivo

**¿Cómo obtenerla?**
1. Click en "Cargar certificados masivamente"
2. Capturar modal inicial

---

### Imagen 30: `utilidades-seleccionar-zip.png`
**¿Qué capturar?**
- Diálogo del sistema para seleccionar archivo
- Archivo ZIP visible en el explorador
- Nombre del archivo: "certificados_utilidades_2026.zip"
- Botón "Abrir" o "Seleccionar"

**¿Cómo obtenerla?**
1. Click en "Seleccionar archivo ZIP"
2. Capturar explorador de archivos

---

### Imagen 31: `utilidades-carga-progreso.png`
**¿Qué capturar?**
- Barra de progreso de carga
- Porcentaje: "Cargando... 45%"
- Archivo siendo procesado
- Mensaje: "Procesando certificados..."
- Cantidad de archivos: "Procesados: 12 de 25"

**¿Cómo obtenerla?**
1. Durante la carga del ZIP
2. Capturar barra de progreso

---

### Imagen 32: `utilidades-carga-exitosa.png`
**¿Qué capturar?**
- Mensaje de éxito: "Carga completada exitosamente"
- Resumen:
  - Archivos procesados: 25
  - Certificados asociados: 23
  - Errores: 2 (DNI no encontrado)
- Detalle de errores (si hay)
- Botón "Ver resultados"

**¿Cómo obtenerla?**
1. Después de completar carga
2. Capturar mensaje de confirmación

---

### Imagen 33: `utilidades-certificados-asociados.png`
**¿Qué capturar?**
- Tabla actualizada mostrando certificados asociados
- Columna "Certificado" con ícono de PDF verde/check
- Indicador visual de que el PDF fue asociado correctamente
- Opción de "Ver certificado" en cada fila

**¿Cómo obtenerla?**
1. Después de carga exitosa, ver tabla
2. Capturar filas con certificados asociados

---

### Imagen 34: `utilidades-configurar-fecha-abono.png`
**¿Qué capturar?**
- Modal de configuración de fecha de abono
- Selector de grupo de pago o trabajadores
- Campo de fecha: "Fecha de abono"
- Calendario desplegable
- Trabajadores seleccionados (cantidad)
- Botón "Guardar"

**¿Cómo obtenerla?**
1. Click en "Configurar fecha abono"
2. Capturar modal de configuración

---

### Imagen 35: `utilidades-fecha-abono-aplicada.png`
**¿Qué capturar?**
- Tabla actualizada con fechas de abono configuradas
- Columna "Fecha abono" con fechas visibles
- Diferentes fechas para diferentes grupos (si aplica)
- Indicador visual de fecha configurada

**¿Cómo obtenerla?**
1. Después de guardar fechas de abono
2. Capturar tabla actualizada

---

### Imagen 36: `utilidades-filtrar-estado.png`
**¿Qué capturar?**
- Filtros aplicados
- Dropdown de estado: "Pendiente", "Certificado cargado", "Fecha configurada", "Procesado"
- Resultados filtrados en tabla
- Contador de registros filtrados

**¿Cómo obtenerla?**
1. Aplicar filtro por estado
2. Capturar tabla filtrada

---

### Imagen 37: `utilidades-filtrar-grupo-pago.png`
**¿Qué capturar?**
- Filtro por grupo de pago aplicado
- Dropdown con grupos: "Grupo A", "Grupo B", etc.
- Fechas de abono agrupadas
- Resultados en tabla

**¿Cómo obtenerla?**
1. Aplicar filtro por grupo de pago
2. Capturar resultados

---

### Imagen 38: `utilidades-exportar-reporte-pagos.png`
**¿Qué capturar?**
- Botón "Exportar reporte de pagos"
- Opciones de formato: Excel (recomendado), PDF, CSV
- Vista previa de columnas a exportar
- Confirmación de descarga

**¿Cómo obtenerla?**
1. Click en "Exportar"
2. Capturar opciones y descarga

---

### Imagen 39: `utilidades-reporte-excel-abierto.png`
**¿Qué capturar?**
- Archivo Excel descargado y abierto
- Columnas visibles: Código, Nombre, DNI, Monto, Cuenta bancaria, Fecha abono, Estado
- Datos formateados correctamente
- Logo de Excel visible

**¿Cómo obtenerla?**
1. Abrir archivo Excel descargado
2. Capturar pantalla del archivo

---

### Imagen 40: `utilidades-historial-cargas.png`
**¿Qué capturar?**
- Vista de historial de cargas masivas
- Tabla: Fecha carga, Usuario, Archivo, Cantidad procesada, Exitosos, Errores
- Opción de "Ver detalle" por cada carga
- Filtro por fecha

**¿Cómo obtenerla?**
1. Navegar a "Historial de cargas"
2. Capturar tabla de historial

---

## MÓDULO VI: NOTIFICACIONES Y ALERTAS

### Imagen 41: `notificacion-push-aprobador.png`
**¿Qué capturar?**
- Notificación push en pantalla
- Mensaje: "Nueva solicitud de permiso recibida"
- Información del colaborador
- Botón "Ver solicitud"
- Timestamp

**¿Cómo obtenerla?**
1. Cuando llegue una nueva solicitud
2. Capturar notificación en pantalla

---

### Imagen 42: `notificacion-colaborador-aprobado.png`
**¿Qué capturar?**
- Notificación recibida por colaborador
- Mensaje: "Tu solicitud de permiso fue aprobada"
- Detalles: tipo de permiso, fechas
- Estado: "APROBADO"

**¿Cómo obtenerla?**
1. Después de que aprobador apruebe
2. Capturar notificación del colaborador

---

### Imagen 43: `notificacion-colaborador-rechazado.png`
**¿Qué capturar?**
- Notificación de rechazo
- Mensaje: "Tu solicitud fue rechazada"
- Motivo del rechazo visible
- Comentario del aprobador

**¿Cómo obtenerla?**
1. Después de que aprobador rechace
2. Capturar notificación del colaborador

---

## RESUMEN DE IMÁGENES

**Total de imágenes: 43**

### Por módulo:
- **Módulo I (Introducción):** 0 imágenes
- **Módulo II (Permisos):** 11 imágenes (1-11)
- **Módulo III (Justificaciones):** 9 imágenes (12-20)
- **Módulo IV (Certificados):** 6 imágenes (21-26)
- **Módulo V (Utilidades):** 14 imágenes (27-40)
- **Módulo VI (Notificaciones):** 3 imágenes (41-43)

### Nombres de archivos (para crear en `/public/manuales/conectados-mvp4/`):

**Permisos:**
1. `permisos-login-aprobador.png`
2. `permisos-bandeja-solicitudes.png`
3. `permisos-detalle-solicitud.png`
4. `permisos-documento-adjunto.png`
5. `permisos-aprobar-modal.png`
6. `permisos-aprobacion-exitosa.png`
7. `permisos-rechazar-modal.png`
8. `permisos-validacion-comentario.png`
9. `permisos-historial-completo.png`
10. `permisos-filtros-aplicados.png`
11. `permisos-exportar-reporte.png`

**Justificaciones:**
12. `justificaciones-bandeja-pendientes.png`
13. `justificaciones-detalle-completo.png`
14. `justificaciones-documento-sustento.png`
15. `justificaciones-aprobar-normal.png`
16. `justificaciones-modificar-fechas.png`
17. `justificaciones-aprobado-parcial.png`
18. `justificaciones-rechazar-sin-comentario.png`
19. `justificaciones-rechazo-con-comentario.png`
20. `justificaciones-notificacion-enviada.png`

**Certificados:**
21. `certificados-acceso-admin.png`
22. `certificados-historial-solicitudes.png`
23. `certificados-detalle-solicitud.png`
24. `certificados-filtrar-por-estado.png`
25. `certificados-notificacion-generado.png`
26. `certificados-exportar-reporte.png`

**Utilidades:**
27. `utilidades-acceso-analista.png`
28. `utilidades-lista-solicitudes.png`
29. `utilidades-carga-masiva-inicio.png`
30. `utilidades-seleccionar-zip.png`
31. `utilidades-carga-progreso.png`
32. `utilidades-carga-exitosa.png`
33. `utilidades-certificados-asociados.png`
34. `utilidades-configurar-fecha-abono.png`
35. `utilidades-fecha-abono-aplicada.png`
36. `utilidades-filtrar-estado.png`
37. `utilidades-filtrar-grupo-pago.png`
38. `utilidades-exportar-reporte-pagos.png`
39. `utilidades-reporte-excel-abierto.png`
40. `utilidades-historial-cargas.png`

**Notificaciones:**
41. `notificacion-push-aprobador.png`
42. `notificacion-colaborador-aprobado.png`
43. `notificacion-colaborador-rechazado.png`

---

## NOTAS IMPORTANTES

1. **Todas las capturas deben tener buena resolución** (mínimo 1280x720 px)
2. **Ocultar datos sensibles reales** (usar datos de prueba)
3. **Usar modo claro u oscuro consistentemente** en todo el manual
4. **Las URLs deben ser visibles** cuando sea relevante
5. **Blurear/pixelar información confidencial** si es necesario
6. **Usar datos de prueba** (DNI de prueba: 12345678, nombres ficticios)
7. **Mantener consistencia visual** en todas las imágenes

## ORDEN RECOMENDADO PARA CAPTURAR

1. Primero capturar todo el **módulo de Permisos** (imágenes 1-11)
2. Luego el **módulo de Justificaciones** (imágenes 12-20)
3. Después el **módulo de Certificados** (imágenes 21-26)
4. Luego el **módulo de Utilidades** (imágenes 27-40)
5. Por último las **Notificaciones** (imágenes 41-43)

Este orden facilita el proceso y evita tener que cambiar de contexto constantemente.

---

## MAPEO CON TESTS E2E

Ver archivo `MAPEO-TEST-IMAGEN.md` para el mapeo detallado de cada test con las imágenes correspondientes.

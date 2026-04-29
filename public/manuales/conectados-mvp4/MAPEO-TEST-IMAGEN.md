# MAPEO ENTRE TESTS E2E E IMÁGENES DEL MANUAL

Este documento relaciona cada test de Playwright con las imágenes que se deben capturar durante la ejecución del test.

---

## MÓDULO: PERMISOS

### Test: `01-aprobar-solicitud.spec.ts`

**Descripción:** Test que aprueba una solicitud de permiso de empleado

**Imágenes a capturar:**

1. **`permisos-login-aprobador.png`**
   - **Cuándo:** Al inicio del test, antes de hacer login
   - **Qué mostrar:** Pantalla de login con campos vacíos

2. **`permisos-bandeja-solicitudes.png`**
   - **Cuándo:** Después de login, en la vista de bandeja de permisos
   - **Qué mostrar:** Tabla con solicitudes pendientes

3. **`permisos-detalle-solicitud.png`**
   - **Cuándo:** Al hacer click en "Ver detalle" de una solicitud
   - **Qué mostrar:** Modal con información completa de la solicitud

4. **`permisos-documento-adjunto.png`**
   - **Cuándo:** Al hacer click en documento adjunto
   - **Qué mostrar:** PDF visualizado en pantalla

5. **`permisos-aprobar-modal.png`**
   - **Cuándo:** Al hacer click en botón "Aprobar"
   - **Qué mostrar:** Modal de confirmación de aprobación

6. **`permisos-aprobacion-exitosa.png`**
   - **Cuándo:** Después de confirmar aprobación
   - **Qué mostrar:** Mensaje de éxito con estado APROBADO

---

### Test: `02-historial-permisos.spec.ts`

**Descripción:** Test que consulta historial y aplica filtros

**Imágenes a capturar:**

7. **`permisos-historial-completo.png`**
   - **Cuándo:** Al navegar a historial de permisos
   - **Qué mostrar:** Tabla con todas las solicitudes históricas

8. **`permisos-filtros-aplicados.png`**
   - **Cuándo:** Después de aplicar filtros (fecha, estado, colaborador)
   - **Qué mostrar:** Filtros activos y resultados filtrados

9. **`permisos-exportar-reporte.png`**
   - **Cuándo:** Al hacer click en botón "Exportar"
   - **Qué mostrar:** Opciones de exportación y descarga del archivo

---

### Test: `03-rechazar-solicitud.spec.ts`

**Descripción:** Test que rechaza una solicitud con validación de comentario

**Imágenes a capturar:**

10. **`permisos-rechazar-modal.png`**
    - **Cuándo:** Al hacer click en botón "Rechazar"
    - **Qué mostrar:** Modal solicitando comentario obligatorio

11. **`permisos-validacion-comentario.png`**
    - **Cuándo:** Al intentar rechazar sin escribir comentario
    - **Qué mostrar:** Mensaje de validación de error

---

## MÓDULO: JUSTIFICACIONES

### Test: `04-aprobar-justificacion.spec.ts`

**Descripción:** Test que aprueba justificación sin modificar fechas

**Imágenes a capturar:**

12. **`justificaciones-bandeja-pendientes.png`**
    - **Cuándo:** Al navegar a módulo de justificaciones
    - **Qué mostrar:** Bandeja de justificaciones pendientes

13. **`justificaciones-detalle-completo.png`**
    - **Cuándo:** Al hacer click en "Revisar" de una justificación
    - **Qué mostrar:** Detalle completo con documento de sustento y fechas editables

14. **`justificaciones-documento-sustento.png`**
    - **Cuándo:** Al visualizar documento adjunto
    - **Qué mostrar:** Certificado médico o documento de sustento PDF

15. **`justificaciones-aprobar-normal.png`**
    - **Cuándo:** Al aprobar sin modificar fechas
    - **Qué mostrar:** Modal de aprobación con fechas originales

---

### Test: `05-aprobar-parcial.spec.ts`

**Descripción:** Test que aprueba justificación modificando fechas (APROBADO PARCIAL)

**Imágenes a capturar:**

16. **`justificaciones-modificar-fechas.png`**
    - **Cuándo:** Al editar campos de fecha inicio/fin
    - **Qué mostrar:** Campos de fecha siendo modificados con advertencia visual

17. **`justificaciones-aprobado-parcial.png`**
    - **Cuándo:** Después de aprobar con fechas modificadas
    - **Qué mostrar:** Confirmación mostrando estado "APROBADO PARCIAL" y fechas comparadas

---

### Test: `06-rechazar-justificacion.spec.ts`

**Descripción:** Test que valida rechazo con comentario obligatorio

**Imágenes a capturar:**

18. **`justificaciones-rechazar-sin-comentario.png`**
    - **Cuándo:** Al intentar rechazar sin escribir comentario
    - **Qué mostrar:** Validación de error en campo de comentario

19. **`justificaciones-rechazo-con-comentario.png`**
    - **Cuándo:** Al escribir comentario válido antes de rechazar
    - **Qué mostrar:** Modal con comentario escrito y botón habilitado

20. **`justificaciones-notificacion-enviada.png`**
    - **Cuándo:** Después de aprobar o rechazar
    - **Qué mostrar:** Notificación de confirmación de envío al colaborador

---

## MÓDULO: CERTIFICADOS

### Test: `07-historial-certificados.spec.ts`

**Descripción:** Test que consulta historial de certificados

**Imágenes a capturar:**

21. **`certificados-acceso-admin.png`**
    - **Cuándo:** Al login como administrador PCO/PAT y navegar a certificados
    - **Qué mostrar:** Vista principal del módulo de certificados

22. **`certificados-historial-solicitudes.png`**
    - **Cuándo:** En la vista de historial de certificados
    - **Qué mostrar:** Tabla con todas las solicitudes de certificados

23. **`certificados-detalle-solicitud.png`**
    - **Cuándo:** Al hacer click en una solicitud para ver detalle
    - **Qué mostrar:** Información completa de la solicitud y certificado PDF (si está generado)

---

### Test: `08-filtrar-solicitudes.spec.ts`

**Descripción:** Test que aplica filtros de búsqueda

**Imágenes a capturar:**

24. **`certificados-filtrar-por-estado.png`**
    - **Cuándo:** Al aplicar filtro por estado (ej: "Generado")
    - **Qué mostrar:** Filtro aplicado y resultados filtrados

25. **`certificados-notificacion-generado.png`**
    - **Cuándo:** Cuando un certificado es generado
    - **Qué mostrar:** Notificación push de certificado listo

---

### Test: `09-exportar-reporte.spec.ts`

**Descripción:** Test que exporta reporte de certificados

**Imágenes a capturar:**

26. **`certificados-exportar-reporte.png`**
    - **Cuándo:** Al hacer click en "Exportar reporte"
    - **Qué mostrar:** Opciones de formato y descarga del archivo

---

## MÓDULO: UTILIDADES

### Test: `10-carga-masiva-certificados.spec.ts`

**Descripción:** Test que realiza carga masiva de PDFs en ZIP

**Imágenes a capturar:**

27. **`utilidades-acceso-analista.png`**
    - **Cuándo:** Al login como analista de nómina y navegar a utilidades
    - **Qué mostrar:** Vista principal del módulo de utilidades

28. **`utilidades-lista-solicitudes.png`**
    - **Cuándo:** En la vista principal mostrando tabla de solicitudes
    - **Qué mostrar:** Tabla completa con todos los campos visibles

29. **`utilidades-carga-masiva-inicio.png`**
    - **Cuándo:** Al hacer click en "Cargar certificados masivamente"
    - **Qué mostrar:** Modal inicial con botón para seleccionar ZIP

30. **`utilidades-seleccionar-zip.png`**
    - **Cuándo:** Al abrir explorador de archivos
    - **Qué mostrar:** Diálogo del sistema con archivo ZIP seleccionado

31. **`utilidades-carga-progreso.png`**
    - **Cuándo:** Durante la carga del ZIP
    - **Qué mostrar:** Barra de progreso mostrando porcentaje (ej: 45%)

32. **`utilidades-carga-exitosa.png`**
    - **Cuándo:** Al completar la carga
    - **Qué mostrar:** Resumen con archivos procesados, exitosos y errores

33. **`utilidades-certificados-asociados.png`**
    - **Cuándo:** Después de carga exitosa, tabla actualizada
    - **Qué mostrar:** Filas con ícono de PDF verde indicando certificado asociado

---

### Test: `11-configurar-fecha-abono.spec.ts`

**Descripción:** Test que configura fechas de pago

**Imágenes a capturar:**

34. **`utilidades-configurar-fecha-abono.png`**
    - **Cuándo:** Al hacer click en "Configurar fecha abono"
    - **Qué mostrar:** Modal con calendario y trabajadores seleccionados

35. **`utilidades-fecha-abono-aplicada.png`**
    - **Cuándo:** Después de guardar fecha de abono
    - **Qué mostrar:** Tabla actualizada con fechas configuradas

---

### Test: `12-filtrar-solicitudes.spec.ts`

**Descripción:** Test que aplica filtros de búsqueda

**Imágenes a capturar:**

36. **`utilidades-filtrar-estado.png`**
    - **Cuándo:** Al aplicar filtro por estado
    - **Qué mostrar:** Resultados filtrados por estado seleccionado

37. **`utilidades-filtrar-grupo-pago.png`**
    - **Cuándo:** Al aplicar filtro por grupo de pago
    - **Qué mostrar:** Resultados agrupados por grupo de pago

---

### Test: `13-exportar-reporte-pagos.spec.ts`

**Descripción:** Test que exporta reporte de pagos

**Imágenes a capturar:**

38. **`utilidades-exportar-reporte-pagos.png`**
    - **Cuándo:** Al hacer click en "Exportar reporte de pagos"
    - **Qué mostrar:** Opciones de formato (Excel, PDF, CSV)

39. **`utilidades-reporte-excel-abierto.png`**
    - **Cuándo:** Al abrir archivo Excel descargado
    - **Qué mostrar:** Archivo Excel con datos formateados correctamente

40. **`utilidades-historial-cargas.png`**
    - **Cuándo:** Al navegar a historial de cargas masivas
    - **Qué mostrar:** Tabla de historial mostrando todas las cargas con resultados

---

## MÓDULO: NOTIFICACIONES (Transversal)

**Nota:** Estas imágenes se pueden capturar durante cualquier test que genere notificaciones

41. **`notificacion-push-aprobador.png`**
    - **Cuándo:** Cuando el aprobador recibe notificación de nueva solicitud
    - **Qué mostrar:** Notificación push en pantalla

42. **`notificacion-colaborador-aprobado.png`**
    - **Cuándo:** Cuando el colaborador recibe notificación de aprobación
    - **Qué mostrar:** Notificación de solicitud aprobada

43. **`notificacion-colaborador-rechazado.png`**
    - **Cuándo:** Cuando el colaborador recibe notificación de rechazo
    - **Qué mostrar:** Notificación de rechazo con motivo

---

## INSTRUCCIONES DE CAPTURA

### Durante la ejecución de tests:

1. **Modo headless OFF:** Ejecutar tests con `headless: false` para ver el navegador
   ```bash
   npm run test:debug
   ```

2. **Screenshots automáticos:** Configurar Playwright para tomar screenshots en puntos específicos
   ```typescript
   await page.screenshot({ path: 'permisos-bandeja-solicitudes.png' });
   ```

3. **Modo paso a paso:** Usar modo debug para pausar en cada acción
   ```bash
   npm run test:ui
   ```

4. **Captura manual:** Durante la ejecución del test, pausar con `await page.pause()` y capturar con herramienta externa

### Calidad de las capturas:

- Resolución mínima: **1280x720 px**
- Formato: **PNG**
- Datos de prueba: **Usar datos ficticios, no reales**
- Consistencia: **Mismo modo claro/oscuro en todas las imágenes**
- Limpieza: **Ocultar información sensible**

---

## RESUMEN POR TEST

| Test | Imágenes | Total |
|------|----------|-------|
| `01-aprobar-solicitud.spec.ts` | 1-6 | 6 |
| `02-historial-permisos.spec.ts` | 7-9 | 3 |
| `03-rechazar-solicitud.spec.ts` | 10-11 | 2 |
| `04-aprobar-justificacion.spec.ts` | 12-15 | 4 |
| `05-aprobar-parcial.spec.ts` | 16-17 | 2 |
| `06-rechazar-justificacion.spec.ts` | 18-20 | 3 |
| `07-historial-certificados.spec.ts` | 21-23 | 3 |
| `08-filtrar-solicitudes.spec.ts` | 24-25 | 2 |
| `09-exportar-reporte.spec.ts` | 26 | 1 |
| `10-carga-masiva-certificados.spec.ts` | 27-33 | 7 |
| `11-configurar-fecha-abono.spec.ts` | 34-35 | 2 |
| `12-filtrar-solicitudes.spec.ts` | 36-37 | 2 |
| `13-exportar-reporte-pagos.spec.ts` | 38-40 | 3 |
| Notificaciones (transversal) | 41-43 | 3 |
| **TOTAL** | | **43** |

---

**Elaborado por:** Claude Code (Anthropic)
**Fecha:** 2026-04-16
**Versión:** 1.0

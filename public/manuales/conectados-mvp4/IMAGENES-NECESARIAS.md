# IMÁGENES NECESARIAS PARA EL MANUAL

Este archivo lista las imágenes que faltan por capturar para completar el manual de usuario de Conectados 2.0.

---

## ✅ ESTADO ACTUAL

**MVP cubierto:** MVP 4 y MVP 5
**Total de imágenes especificadas:** 59
**Imágenes capturadas:** 0 / 59
**Progreso:** 0%

---

## 📋 CHECKLIST DE IMÁGENES - MVP 4

### Módulo: Permisos (0/11)

- [ ] `permisos-login-aprobador.png`
- [ ] `permisos-bandeja-solicitudes.png`
- [ ] `permisos-detalle-solicitud.png`
- [ ] `permisos-documento-adjunto.png`
- [ ] `permisos-aprobar-modal.png`
- [ ] `permisos-aprobacion-exitosa.png`
- [ ] `permisos-rechazar-modal.png`
- [ ] `permisos-validacion-comentario.png`
- [ ] `permisos-historial-completo.png`
- [ ] `permisos-filtros-aplicados.png`
- [ ] `permisos-exportar-reporte.png`

### Módulo: Justificaciones (0/9)

- [ ] `justificaciones-bandeja-pendientes.png`
- [ ] `justificaciones-detalle-completo.png`
- [ ] `justificaciones-documento-sustento.png`
- [ ] `justificaciones-aprobar-normal.png`
- [ ] `justificaciones-modificar-fechas.png`
- [ ] `justificaciones-aprobado-parcial.png`
- [ ] `justificaciones-rechazar-sin-comentario.png`
- [ ] `justificaciones-rechazo-con-comentario.png`
- [ ] `justificaciones-notificacion-enviada.png`

### Módulo: Certificados (0/6)

- [ ] `certificados-acceso-admin.png`
- [ ] `certificados-historial-solicitudes.png`
- [ ] `certificados-detalle-solicitud.png`
- [ ] `certificados-filtrar-por-estado.png`
- [ ] `certificados-notificacion-generado.png`
- [ ] `certificados-exportar-reporte.png`

### Módulo: Utilidades (0/14)

- [ ] `utilidades-acceso-analista.png`
- [ ] `utilidades-lista-solicitudes.png`
- [ ] `utilidades-carga-masiva-inicio.png`
- [ ] `utilidades-seleccionar-zip.png`
- [ ] `utilidades-carga-progreso.png`
- [ ] `utilidades-carga-exitosa.png`
- [ ] `utilidades-certificados-asociados.png`
- [ ] `utilidades-configurar-fecha-abono.png`
- [ ] `utilidades-fecha-abono-aplicada.png`
- [ ] `utilidades-filtrar-estado.png`
- [ ] `utilidades-filtrar-grupo-pago.png`
- [ ] `utilidades-exportar-reporte-pagos.png`
- [ ] `utilidades-reporte-excel-abierto.png`
- [ ] `utilidades-historial-cargas.png`

### Módulo: Notificaciones (0/3)

- [ ] `notificacion-push-aprobador.png`
- [ ] `notificacion-colaborador-aprobado.png`
- [ ] `notificacion-colaborador-rechazado.png`

---

## 📅 PLANIFICACIÓN DE CAPTURA

### Fase 1: Permisos y Justificaciones

**Prioridad:** Alta
**Tests relacionados:** `01-aprobar-solicitud.spec.ts`, `02-historial-permisos.spec.ts`, `03-rechazar-solicitud.spec.ts`, `04-aprobar-justificacion.spec.ts`, `05-aprobar-parcial.spec.ts`, `06-rechazar-justificacion.spec.ts`
**Imágenes:** 20

### Fase 2: Certificados y Utilidades

**Prioridad:** Alta
**Tests relacionados:** `07-historial-certificados.spec.ts`, `08-filtrar-solicitudes.spec.ts`, `09-exportar-reporte.spec.ts`, `10-carga-masiva-certificados.spec.ts`, `11-configurar-fecha-abono.spec.ts`, `12-filtrar-solicitudes.spec.ts`, `13-exportar-reporte-pagos.spec.ts`
**Imágenes:** 20

### Fase 3: Notificaciones

**Prioridad:** Media
**Tests relacionados:** Transversal
**Imágenes:** 3

---

## 🔮 FUTURA EXTENSIÓN: MVP 5

**Estado:** Pendiente de definición

Cuando se requiera extender el manual con módulos del MVP5, se deberá:

1. **Identificar nuevos módulos** a documentar
2. **Crear nuevas secciones TSX** en `/app/manuales/conectados-mvp4/sections/`
3. **Actualizar page.tsx** para incluir las nuevas secciones
4. **Agregar especificaciones de imágenes** en `IMAGENES-GUIA.md`
5. **Actualizar mapeo de tests** en `MAPEO-TEST-IMAGEN.md`
6. **Capturar nuevas imágenes** durante ejecución de tests MVP5

### Módulos potenciales de MVP5 (a confirmar):

- [ ] Por definir según desarrollo del MVP5
- [ ] Por definir según desarrollo del MVP5
- [ ] Por definir según desarrollo del MVP5

**Nota:** Esta sección se actualizará cuando se confirmen los módulos del MVP5.

---

## 📝 INSTRUCCIONES DE CAPTURA

### Antes de capturar:

1. **Corregir todos los tests E2E** del MVP4
   - Asegurar que todos los tests pasen exitosamente
   - Verificar que los datos de prueba sean consistentes
   - Validar selectores y flujos

2. **Configurar ambiente de QA**
   - Datos de prueba cargados
   - Usuarios de prueba creados
   - Documentos de sustento preparados

3. **Herramientas necesarias**
   - Playwright en modo visual (`npm run test:ui`)
   - Capturador de pantalla (Snipping Tool, Flameshot, etc.)
   - Editor de imágenes (para recortar si es necesario)

### Durante la captura:

1. Seguir archivo `MAPEO-TEST-IMAGEN.md` para saber cuándo capturar
2. Usar archivo `IMAGENES-GUIA.md` para verificar qué debe aparecer en cada imagen
3. Nombrar archivos exactamente como se especifica
4. Guardar en este directorio (`/public/manuales/conectados-mvp4/`)
5. Marcar checkbox en este archivo al completar cada imagen

### Calidad requerida:

- **Resolución:** Mínimo 1280x720 px
- **Formato:** PNG
- **Datos:** Ficticios (DNI de prueba: 12345678)
- **Consistencia:** Mismo tema (claro u oscuro) en todas
- **Privacidad:** Ocultar información sensible

---

## 🎯 CÓMO ACTUALIZAR ESTE ARCHIVO

Al capturar cada imagen:

```markdown
- [x] `nombre-de-imagen.png` ✅ Capturada el 2026-04-17
```

Al completar un módulo:

```markdown
### Módulo: Permisos (11/11) ✅ COMPLETADO
```

---

## 📊 PROGRESO GENERAL

```
MVP 4: [░░░░░░░░░░░░░░░░░░░░] 0% (0/43)
MVP 5: [Pendiente de definición]
```

**Última actualización:** 2026-04-16
**Próxima revisión:** Cuando se definan módulos de MVP5

---

**Nota importante:** Este manual cubre **SOLO MVP 4**. Los módulos del MVP5 se agregarán cuando estén listos los tests correspondientes y se definan las nuevas funcionalidades a documentar.

# Manual de Usuario - Conectados 2.0 MVP 4

Este directorio contiene todos los archivos y documentación relacionados con el manual de usuario de **Conectados 2.0 - MVP 4** para Camposol S.A.

---

## ⚠️ IMPORTANTE: Este manual cubre SOLO MVP 4

**Versión actual:** MVP 4
**Estado:** Estructura completa, pendiente captura de imágenes
**MVP5:** NO incluido aún - Se agregará cuando esté listo

---

## 📁 Estructura de Archivos

```
conectados-mvp4/
├── README.md                    # Este archivo
├── IMAGENES-GUIA.md             # Guía detallada de qué capturar en cada imagen (MVP4)
├── IMAGENES-NECESARIAS.md       # Checklist de imágenes pendientes
├── MAPEO-TEST-IMAGEN.md         # Mapeo de tests E2E con imágenes (MVP4)
├── [imágenes .png]              # 43 imágenes del manual (a capturar)
└── (archivos de implementación en /app/manuales/conectados-mvp4/)
```

---

## 📚 Documentos Creados

### 1. **IMAGENES-GUIA.md**
Guía completa que describe:
- Qué capturar en cada una de las 43 imágenes
- Cómo obtener cada imagen paso a paso
- Elementos importantes que deben ser visibles
- Recomendaciones de calidad y formato

**Total de imágenes:** 43
- Permisos: 11 imágenes
- Justificaciones: 9 imágenes
- Certificados: 6 imágenes
- Utilidades: 14 imágenes
- Notificaciones: 3 imágenes

### 2. **MAPEO-TEST-IMAGEN.md**
Documento que relaciona:
- Cada test E2E de Playwright con las imágenes correspondientes
- Cuándo capturar cada imagen durante la ejecución del test
- Instrucciones de captura automática y manual
- Tabla resumen de imágenes por test

### 3. **Código del Manual (TypeScript/React)**
Archivos creados en `/app/manuales/conectados-mvp4/`:

#### `page.tsx`
Página principal del manual con:
- Layout completo
- Tabla de contenidos
- Integración de todas las secciones
- Información de ayuda y soporte

#### `sections/IntroductionSection.tsx`
Sección de introducción que explica:
- ¿Qué es Conectados 2.0?
- Módulos del sistema
- Roles de usuario
- Ventajas del sistema

#### `sections/PermisosSection.tsx`
Guía completa del módulo de permisos:
- Acceso al sistema
- Ver bandeja de solicitudes
- Revisar detalle y documentos
- Aprobar solicitudes
- Rechazar con validación de comentario
- Historial y reportes

#### `sections/JustificacionesSection.tsx`
Guía del módulo de justificaciones:
- Bandeja de pendientes
- Revisar documentos de sustento
- Aprobar sin modificar fechas (APROBADO)
- Aprobar modificando fechas (APROBADO PARCIAL)
- Rechazar con comentario obligatorio
- Notificaciones automáticas

#### `sections/CertificadosSection.tsx`
Guía del módulo de certificados:
- Acceso como administrador
- Historial de solicitudes
- Ver detalle de certificados
- Filtrar por estado, fecha, trabajador
- Notificaciones de certificado generado
- Exportar reportes

#### `sections/UtilidadesSection.tsx`
Guía del módulo de utilidades:
- Acceso como analista de nómina
- Ver lista de solicitudes
- **Carga masiva de certificados PDF en ZIP**
- Verificar certificados asociados
- Configurar fechas de abono por grupos
- Filtrar por estado y grupo de pago
- Exportar reporte de pagos
- Historial de cargas

---

## 🎯 Módulos Documentados

### Módulo I: Permisos
**Descripción:** Gestión de solicitudes de permisos laborales
**Usuarios:** Jefe Directo, PAT/PCO
**Funcionalidades:**
- Aprobar/rechazar solicitudes
- Ver documentos adjuntos
- Historial y reportes
- Notificaciones push

**Casos de uso cubiertos:**
- HU-PERM-01: Aprobar/Rechazar Permiso
- HU-PERM-02: Reporte y Gestión de Solicitudes

---

### Módulo II: Justificaciones
**Descripción:** Aprobación de justificaciones de inasistencias
**Usuarios:** Jefe Directo, PAT
**Funcionalidades:**
- Aprobar con fechas originales → Estado: APROBADO
- Aprobar modificando fechas → Estado: APROBADO PARCIAL
- Rechazar con comentario obligatorio
- Ver documentos de sustento

**Casos de uso cubiertos:**
- HU-JIN-01: Aprobación/Rechazo de Justificación
- HU-JIN-02: Notificaciones de Estado

**Característica especial:**
- Sistema de **aprobación parcial** cuando se modifican las fechas solicitadas

---

### Módulo III: Certificados
**Descripción:** Gestión de certificados de trabajo para personal cesado
**Usuarios:** Administrador PCO/PAT
**Funcionalidades:**
- Historial de solicitudes
- Filtros avanzados
- Generación automática de PDFs
- Notificaciones de certificado listo
- Exportar reportes

**Casos de uso cubiertos:**
- HU-CT-01-SCT-04: Historial de Solicitudes y Notificaciones

---

### Módulo IV: Utilidades
**Descripción:** Administración de utilidades para ex-colaboradores
**Usuarios:** Analista de Nómina
**Funcionalidades:**
- **Carga masiva de certificados PDF en archivo ZIP**
- Asociación automática por DNI
- Configuración de fechas de abono
- Agrupación por grupos de pago
- Exportar reporte para procesamiento bancario
- Historial de cargas

**Casos de uso cubiertos:**
- HU-PC-01-SPC-01: Gestión de Utilidades para Personal Cesado

**Característica especial:**
- Sistema de **carga masiva** que procesa archivos ZIP con PDFs nombrados por DNI

---

## 🖼️ Lista de Imágenes a Capturar

### Permisos (11 imágenes)
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

### Justificaciones (9 imágenes)
12. `justificaciones-bandeja-pendientes.png`
13. `justificaciones-detalle-completo.png`
14. `justificaciones-documento-sustento.png`
15. `justificaciones-aprobar-normal.png`
16. `justificaciones-modificar-fechas.png`
17. `justificaciones-aprobado-parcial.png`
18. `justificaciones-rechazar-sin-comentario.png`
19. `justificaciones-rechazo-con-comentario.png`
20. `justificaciones-notificacion-enviada.png`

### Certificados (6 imágenes)
21. `certificados-acceso-admin.png`
22. `certificados-historial-solicitudes.png`
23. `certificados-detalle-solicitud.png`
24. `certificados-filtrar-por-estado.png`
25. `certificados-notificacion-generado.png`
26. `certificados-exportar-reporte.png`

### Utilidades (14 imágenes)
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

### Notificaciones (3 imágenes)
41. `notificacion-push-aprobador.png`
42. `notificacion-colaborador-aprobado.png`
43. `notificacion-colaborador-rechazado.png`

---

## 🔮 Extensión Futura: MVP 5

**Estado:** Pendiente de definición

Cuando necesites agregar módulos del MVP5, sigue estos pasos:

### 1. Identificar Nuevos Módulos
Dime qué nuevos módulos o funcionalidades del MVP5 debo documentar. Por ejemplo:
- ¿Nuevos formularios?
- ¿Nuevos procesos de aprobación?
- ¿Nuevos reportes?

### 2. Crear Nuevas Secciones
Para cada nuevo módulo crearé:
```typescript
// app/manuales/conectados-mvp4/sections/NuevoModuloSection.tsx
export function NuevoModuloSection() {
  // Estructura similar a las secciones existentes
}
```

### 3. Actualizar Archivos de Documentación
- Agregar especificaciones de nuevas imágenes en `IMAGENES-GUIA.md`
- Agregar mapeo de nuevos tests en `MAPEO-TEST-IMAGEN.md`
- Actualizar checklist en `IMAGENES-NECESARIAS.md`

### 4. Integrar al Manual
- Importar nueva sección en `page.tsx`
- Agregar a tabla de contenidos
- Actualizar navegación si es necesario

### Ejemplo de Solicitud para MVP5:
```
"Claude, necesito agregar al manual:
- Módulo de Vacaciones (3 HU)
- Módulo de Capacitaciones (2 HU)
Aquí están los tests: [links a los archivos de test]"
```

Y yo me encargaré de extender el manual siguiendo la misma estructura.

---

## 🚀 Próximos Pasos

### 1. Capturar Imágenes (MVP4)
- Ejecutar tests E2E con modo visual (`npm run test:ui` o `npm run test:debug`)
- Usar el archivo `MAPEO-TEST-IMAGEN.md` para saber cuándo capturar cada imagen
- Seguir especificaciones de `IMAGENES-GUIA.md` para cada captura
- Guardar todas las imágenes en este directorio (`/public/manuales/conectados-mvp4/`)

**Herramientas recomendadas:**
```bash
# Ejecutar tests con navegador visible
cd ../../e2e-tests
npm run test:debug

# O modo UI interactivo
npm run test:ui

# Para captura manual durante tests
npm run test -- --headed --slowMo=1000
```

### 2. Verificar Integración
Una vez capturadas las imágenes:
```bash
cd user-manuals-platform
npm run dev
```
Navegar a: `http://localhost:3000/manuales/conectados-mvp4`

### 3. Extensión con MVP5
El manual está preparado para extenderse con nuevos módulos del MVP5:
- Crear nuevas secciones en `/sections/`
- Agregar al `page.tsx`
- Actualizar tabla de contenidos
- Agregar imágenes correspondientes

---

## 📋 Checklist de Finalización

- [ ] Capturar las 43 imágenes según especificaciones
- [ ] Verificar que todas las imágenes están en resolución 1280x720 o superior
- [ ] Revisar que los datos mostrados son ficticios (no datos reales)
- [ ] Probar navegación del manual en navegador
- [ ] Verificar que todos los acordeones se expanden correctamente
- [ ] Validar que las referencias a imágenes funcionan (cuando estén las imágenes)
- [ ] Revisar ortografía y redacción
- [ ] Obtener aprobación del cliente (Camposol)
- [ ] Publicar manual en producción

---

## ✅ Estado Actual

### MVP 4 (ACTUAL)

**Completado:**
- ✅ Estructura de directorios creada
- ✅ Código del manual implementado (5 secciones + página principal)
- ✅ Navegación actualizada en la app
- ✅ Documentación de imágenes (IMAGENES-GUIA.md)
- ✅ Mapeo de tests a imágenes (MAPEO-TEST-IMAGEN.md)
- ✅ Checklist de imágenes (IMAGENES-NECESARIAS.md)
- ✅ README de documentación (este archivo)

**Pendiente MVP4:**
- ⏳ Corregir/validar todos los tests E2E del MVP4
- ⏳ Captura de las 43 imágenes especificadas
- ⏳ Revisión de QA del manual
- ⏳ Aprobación del cliente (Camposol)

### MVP 5 (FUTURO)

**Pendiente MVP5:**
- ⏳ Definir nuevos módulos a documentar
- ⏳ Revisar tests E2E del MVP5 cuando estén listos
- ⏳ Extender manual con nuevas secciones
- ⏳ Capturar imágenes adicionales

**Nota:** Cuando estés listo para agregar MVP5, solo dime qué módulos necesitas y te extiendo el manual siguiendo la misma estructura.

---

## 📞 Contacto

**Proyecto:** Conectados 2.0 - Camposol S.A.
**Cliente:** Camposol S.A.
**Desarrollador:** Servinformación S.A. | IBM Smart Services
**Versión del Manual:** 1.0 - MVP 4
**Fecha de Creación:** 2026-04-16

---

## 📝 Notas Adicionales

### Convenciones de Nombres de Imágenes
- Formato: `[modulo]-[descripcion].png`
- Todo en minúsculas
- Guiones medios para separar palabras
- Extensión: `.png` obligatorio

### Calidad de Imágenes
- **Resolución mínima:** 1280x720 px
- **Formato:** PNG
- **Modo:** Claro u oscuro (consistente en todo el manual)
- **Datos:** Ficticios (DNI de prueba: 12345678, nombres ficticios)
- **Sensibilidad:** Ocultar información confidencial

### Tecnologías Utilizadas
- **Framework:** Next.js 14 (App Router)
- **UI:** React + TypeScript
- **Estilos:** Tailwind CSS + Carbon Design System
- **Componentes:** shadcn/ui
- **Iconos:** Lucide React

---

**Elaborado por:** Claude Code (Anthropic)
**Fecha:** 2026-04-16
**Versión:** 1.0

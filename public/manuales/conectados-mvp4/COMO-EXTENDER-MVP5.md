# CÓMO EXTENDER EL MANUAL CON MVP 5

Esta guía explica cómo agregar nuevos módulos del MVP5 al manual existente.

---

## 📋 Requisitos Previos

Antes de extender el manual, asegúrate de tener:

1. ✅ **Tests E2E del MVP5** creados y funcionando
2. ✅ **Historias de Usuario** del MVP5 documentadas
3. ✅ **Casos de uso** claramente definidos
4. ✅ **Datos de prueba** preparados

---

## 🔄 Proceso de Extensión

### Paso 1: Identificar Nuevos Módulos

**Ejemplo de solicitud:**
```
Claude, necesito extender el manual con estos módulos del MVP5:

1. Módulo de Vacaciones
   - HU-VAC-01: Solicitar vacaciones
   - HU-VAC-02: Aprobar vacaciones
   - Tests: tests/mvp5/vacaciones/

2. Módulo de Capacitaciones
   - HU-CAP-01: Registrar capacitación
   - HU-CAP-02: Generar certificado
   - Tests: tests/mvp5/capacitaciones/
```

### Paso 2: Revisar Tests Existentes

Proporciona acceso a:
- Archivos de test (`.spec.ts`)
- Page Objects si los hay
- Datos de prueba (`test-data/`)

**Ubicación esperada:**
```
e2e-tests/
├── tests/
│   ├── mvp4/  ✅ Ya documentado
│   └── mvp5/  ⏳ A documentar
│       ├── vacaciones/
│       │   ├── 14-solicitar-vacaciones.spec.ts
│       │   └── 15-aprobar-vacaciones.spec.ts
│       └── capacitaciones/
│           ├── 16-registrar-capacitacion.spec.ts
│           └── 17-generar-certificado.spec.ts
```

### Paso 3: Crear Nueva Sección TSX

Para cada nuevo módulo, se creará un archivo de sección:

```typescript
// app/manuales/conectados-mvp4/sections/VacacionesSection.tsx

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Calendar } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function VacacionesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="vacaciones">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span>V. Gestión de Vacaciones (MVP5)</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="vacaciones" className="space-y-8 pt-4">
            {/* Contenido del módulo */}
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### Paso 4: Actualizar page.tsx

```typescript
// app/manuales/conectados-mvp4/page.tsx

// Importar nueva sección
import { VacacionesSection } from './sections/VacacionesSection';
import { CapacitacionesSection } from './sections/CapacitacionesSection';

// Actualizar tabla de contenidos
const tocItems = [
  { id: 'introduccion', title: 'Introducción al Sistema', level: 2 },
  // ... módulos MVP4 existentes
  { id: 'vacaciones', title: 'V. Gestión de Vacaciones (MVP5)', level: 2 },
  { id: 'capacitaciones', title: 'VI. Capacitaciones (MVP5)', level: 2 },
];

export default function ConectadosMvp4Manual() {
  return (
    <ManualLayout>
      {/* ... contenido existente ... */}

      {/* Secciones MVP4 */}
      <PermisosSection />
      <JustificacionesSection />
      <CertificadosSection />
      <UtilidadesSection />

      {/* NUEVAS Secciones MVP5 */}
      <VacacionesSection />
      <CapacitacionesSection />
    </ManualLayout>
  );
}
```

### Paso 5: Actualizar Documentación de Imágenes

#### En IMAGENES-GUIA.md:

```markdown
## MÓDULO V: GESTIÓN DE VACACIONES (MVP5)

### Imagen 44: `vacaciones-solicitar-inicio.png`
**¿Qué capturar?**
- Pantalla de solicitud de vacaciones
- Calendario de selección de fechas
- Días disponibles visibles

**¿Cómo obtenerla?**
1. Login como colaborador
2. Navegar a módulo de Vacaciones
3. Click en "Solicitar vacaciones"
4. Capturar formulario
```

#### En MAPEO-TEST-IMAGEN.md:

```markdown
## MÓDULO V: VACACIONES (MVP5)

### Test: `14-solicitar-vacaciones.spec.ts`

**Descripción:** Test que registra solicitud de vacaciones

**Imágenes a capturar:**

44. **`vacaciones-solicitar-inicio.png`**
    - **Cuándo:** Al abrir formulario de solicitud
    - **Qué mostrar:** Formulario con calendario y días disponibles
```

#### En IMAGENES-NECESARIAS.md:

```markdown
### Módulo: Vacaciones - MVP5 (0/5)

- [ ] `vacaciones-solicitar-inicio.png`
- [ ] `vacaciones-seleccionar-fechas.png`
- [ ] `vacaciones-confirmacion-solicitud.png`
- [ ] `vacaciones-bandeja-aprobador.png`
- [ ] `vacaciones-aprobar-solicitud.png`
```

### Paso 6: Actualizar README

```markdown
## 📚 Módulos Documentados

### MVP 4 (Completado)
- ✅ Módulo I: Permisos
- ✅ Módulo II: Justificaciones
- ✅ Módulo III: Certificados
- ✅ Módulo IV: Utilidades

### MVP 5 (Nuevo)
- ✅ Módulo V: Vacaciones
- ✅ Módulo VI: Capacitaciones
```

---

## 📊 Estimación de Tiempo

Por cada nuevo módulo del MVP5:

| Tarea | Tiempo estimado |
|-------|----------------|
| Revisar tests | 15 min |
| Crear sección TSX | 30-45 min |
| Especificar imágenes | 20 min |
| Actualizar documentación | 15 min |
| **Total por módulo** | **1-1.5 horas** |

---

## 🎯 Checklist de Extensión

Cuando agregues un nuevo módulo del MVP5, verifica:

- [ ] Sección TSX creada con estructura accordion
- [ ] Importada y agregada en `page.tsx`
- [ ] Añadida a tabla de contenidos
- [ ] Especificaciones de imágenes en `IMAGENES-GUIA.md`
- [ ] Mapeo de tests en `MAPEO-TEST-IMAGEN.md`
- [ ] Checklist en `IMAGENES-NECESARIAS.md`
- [ ] README actualizado con nuevo módulo
- [ ] Imágenes capturadas (durante ejecución de tests)
- [ ] Manual revisado en navegador

---

## 💬 Cómo Solicitar la Extensión

Cuando estés listo para agregar MVP5, proporciona:

### Información Mínima Requerida:

1. **Nombre del módulo**
   - Ejemplo: "Gestión de Vacaciones"

2. **Historias de Usuario**
   - Códigos: HU-VAC-01, HU-VAC-02
   - Descripciones breves

3. **Ubicación de tests**
   - Ruta: `e2e-tests/tests/mvp5/vacaciones/`
   - Nombres de archivos de test

4. **Funcionalidades principales**
   - Solicitar vacaciones
   - Aprobar/rechazar vacaciones
   - Ver calendario de disponibilidad
   - Generar reporte

### Ejemplo de Solicitud Completa:

```
Claude, necesito extender el manual con el módulo de Vacaciones del MVP5.

Módulo: Gestión de Vacaciones
Historias de Usuario:
- HU-VAC-01: Solicitar vacaciones (colaborador)
- HU-VAC-02: Aprobar vacaciones (jefe directo)

Tests ubicados en: e2e-tests/tests/mvp5/vacaciones/
- 14-solicitar-vacaciones.spec.ts
- 15-aprobar-vacaciones.spec.ts

Funcionalidades:
1. Colaborador solicita vacaciones seleccionando fechas
2. Sistema valida días disponibles
3. Jefe directo recibe notificación
4. Jefe aprueba/rechaza con comentarios
5. Sistema actualiza calendario y SAP

Datos de prueba están en: test-data/vacaciones.ts
```

Y yo me encargaré de todo el resto siguiendo la estructura del MVP4.

---

## 🔄 Proceso de Revisión

Después de extender el manual:

1. **Revisión de código**
   - Verificar que las secciones sigan el patrón de MVP4
   - Validar imports y exports

2. **Prueba en navegador**
   ```bash
   npm run dev
   ```
   - Navegar a `http://localhost:3000/manuales/conectados-mvp4`
   - Verificar que nuevas secciones se muestren
   - Probar acordeones y navegación

3. **Captura de imágenes**
   - Ejecutar tests del MVP5
   - Capturar imágenes según especificaciones
   - Actualizar checklist

4. **Documentación final**
   - Actualizar README con progreso
   - Marcar como completado en IMAGENES-NECESARIAS.md

---

## 📝 Notas Importantes

1. **Nomenclatura de archivos:**
   - Secciones: `NombreModuloSection.tsx`
   - Imágenes: `modulo-descripcion.png`
   - Tests: `##-descripcion-test.spec.ts`

2. **Consistencia:**
   - Usar misma estructura de acordeón
   - Mantener iconos de Lucide React
   - Seguir Carbon Design System

3. **Orden de numeración:**
   - MVP4: Módulos I-IV
   - MVP5: Módulos V-X (según cantidad)
   - Imágenes: Continuar desde 44 en adelante

4. **Extensibilidad futura:**
   - El manual puede crecer indefinidamente
   - Cada MVP agrega nuevos módulos numerados
   - Estructura soporta cualquier cantidad de secciones

---

**Elaborado por:** Claude Code (Anthropic)
**Fecha:** 2026-04-16
**Versión:** 1.0

# Sistema de Manuales

Sistema moderno de gestión de manuales de usuario construido con Next.js, TypeScript, Tailwind CSS y Shadcn/ui.

## Características

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Diseño moderno y responsive
- **Shadcn/ui** - Componentes UI accesibles y personalizables
- **MDX** - Contenido de manuales con soporte para componentes React
- **Protección de acceso** - Página principal protegida con contraseña
- **Manuales públicos** - Los manuales individuales son compartibles sin autenticación
- **Acordeones interactivos** - Navegación fácil por secciones
- **Tabla de contenidos** - Navegación rápida dentro de cada manual
- **Optimizado para Vercel** - Despliega con un clic

## Estructura del Proyecto

```
manuales-app/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── login/         # API de autenticación
│   ├── login/                 # Página de login
│   ├── manuales/
│   │   ├── comprobantes/      # Manual de comprobantes
│   │   ├── mfa-auth/          # Manual de autenticación MFA
│   │   └── panel-admin/       # Manual del panel de administración
│   ├── layout.tsx             # Layout raíz
│   ├── page.tsx               # Página principal (protegida)
│   └── globals.css            # Estilos globales
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Header del sitio
│   │   ├── Footer.tsx         # Footer del sitio
│   │   └── ManualLayout.tsx   # Layout para manuales
│   ├── manual/
│   │   └── TableOfContents.tsx # Tabla de contenidos
│   └── ui/                    # Componentes Shadcn/ui
│       ├── accordion.tsx
│       └── button.tsx
├── lib/
│   └── utils.ts               # Utilidades (función cn)
└── middleware.ts              # Protección de rutas
```

## Instalación

1. **Clonar el repositorio** (o crear desde cero)

```bash
cd manuales-app
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` y configura tu contraseña:

```env
ADMIN_PASSWORD=tu_contraseña_super_secreta
ADMIN_ACCESS_TOKEN=un_token_aleatorio_muy_largo_y_seguro
```

4. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Uso

### Acceso al Sistema

1. **Página Principal** (`/`)
   - Protegida con contraseña
   - Muestra lista de todos los manuales disponibles
   - Solo para administradores

2. **Manuales Individuales** (`/manuales/[nombre]`)
   - Públicos y compartibles
   - No requieren autenticación
   - Perfectos para enviar directamente a clientes

### Credenciales de Acceso

Por defecto en desarrollo:
- **Contraseña:** `admin123` (configurada en `.env.local`)

### Manuales Disponibles

El sistema incluye los siguientes manuales:

1. **Manual de Comprobantes** (`/manuales/comprobantes`)
   - Categoría: Facturación
   - Guía completa del sistema de gestión de comprobantes

2. **Manual de Autenticación MFA** (`/manuales/mfa-auth`)
   - Categoría: Seguridad
   - Configuración y uso de autenticación multifactor con Microsoft Authenticator
   - 26 imágenes detalladas en IMAGENES-GUIA.md

3. **Manual del Panel de Administración** (`/manuales/panel-admin`)
   - Categoría: Administración
   - Guía completa para administrar el sistema de chat de WhatsApp empresarial
   - 11 módulos: Dashboard, Usuarios, Agentes, Áreas, Protocolos, Tickets, Encuestas, Notificaciones, Alertas, Reportes
   - 41 imágenes detalladas en IMAGENES-GUIA.md

### Agregar un Nuevo Manual

1. **Crear una nueva carpeta** en `app/manuales/`:

```bash
mkdir -p app/manuales/mi-nuevo-manual
```

2. **Crear el archivo** `page.tsx`:

```tsx
'use client';

import { ManualLayout } from '@/components/layout/ManualLayout';
import { TableOfContents } from '@/components/manual/TableOfContents';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const tocItems = [
  { id: 'seccion-1', title: 'Primera Sección', level: 2 },
  { id: 'seccion-2', title: 'Segunda Sección', level: 2 },
];

export default function MiNuevoManual() {
  return (
    <ManualLayout
      title="Mi Nuevo Manual"
      description="Descripción del manual"
    >
      <TableOfContents items={tocItems} />

      <section id="seccion-1">
        <h2>Primera Sección</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Pregunta o título</AccordionTrigger>
            <AccordionContent>
              Contenido aquí...
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </ManualLayout>
  );
}
```

3. **Agregar el manual al índice** en `app/page.tsx`:

```tsx
const manuales: Manual[] = [
  // ... manuales existentes
  {
    id: 'mi-nuevo-manual',
    title: 'Mi Nuevo Manual',
    description: 'Descripción breve',
    url: '/manuales/mi-nuevo-manual',
    category: 'Categoría',
  },
];
```

## Despliegue en Vercel

1. **Subir a GitHub** (si no lo has hecho)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/manuales-app.git
git push -u origin main
```

2. **Conectar con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Configura las variables de entorno:
     - `ADMIN_PASSWORD`
     - `ADMIN_ACCESS_TOKEN`

3. **Desplegar**
   - Vercel desplegará automáticamente
   - Cada push a `main` activará un nuevo deploy

## Seguridad

### Protección de la Página Principal

- La página principal (`/`) está protegida con middleware
- Se requiere contraseña para acceder
- La sesión dura 7 días
- Cookie httpOnly para mayor seguridad

### Manuales Públicos

- Los manuales en `/manuales/*` son públicos
- No están indexados en motores de búsqueda (usa robots.txt si quieres)
- Solo quien tenga el link directo puede acceder
- Perfecto para compartir con clientes específicos

### Mejores Prácticas

1. **Cambia las credenciales por defecto** antes de desplegar
2. **Usa contraseñas fuertes** (mínimo 16 caracteres)
3. **Genera tokens aleatorios** para `ADMIN_ACCESS_TOKEN`
4. **No compartas** el acceso a la página principal
5. **Comparte solo los links** de manuales individuales

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Lint del código
npm run lint
```

## Tecnologías Utilizadas

- [Next.js 16](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje tipado
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Radix UI](https://www.radix-ui.com/) - Primitivos accesibles
- [Lucide React](https://lucide.dev/) - Iconos
- [MDX](https://mdxjs.com/) - Markdown con JSX

## Personalización

### Colores

Los colores se configuran en `app/globals.css`. El tema usa variables CSS HSL:

```css
:root {
  --primary: 217 91% 60%;  /* Azul principal */
  --secondary: 0 0% 96.1%; /* Gris secundario */
  /* ... más colores */
}
```

### Componentes

Todos los componentes están en `components/`. Puedes:
- Modificar estilos en Tailwind
- Agregar nuevos componentes Shadcn/ui con `npx shadcn@latest add [componente]`
- Crear componentes personalizados

### Layout

Modifica `components/layout/ManualLayout.tsx` para cambiar:
- Header
- Footer
- Estructura general de los manuales

## Solución de Problemas

### Error: "Cannot find module '@/lib/utils'"

Asegúrate de que `tsconfig.json` tenga configurado el path alias:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Error: Variables de entorno no definidas

1. Verifica que `.env.local` existe
2. Reinicia el servidor de desarrollo
3. En Vercel, configura las variables en Settings > Environment Variables

### Middleware no funciona

Asegúrate de que:
1. El archivo `middleware.ts` está en la raíz del proyecto
2. Las variables de entorno están configuradas
3. El matcher del middleware incluye la ruta que quieres proteger

## Próximos Pasos

Sugerencias para mejorar el proyecto:

- [ ] Agregar más manuales
- [ ] Implementar búsqueda de contenido
- [ ] Agregar modo oscuro
- [ ] Implementar sistema de comentarios
- [ ] Agregar analytics (Google Analytics, Plausible, etc.)
- [ ] Exportar manuales a PDF
- [ ] Agregar versionado de manuales
- [ ] Implementar autenticación más robusta (NextAuth.js)

## Licencia

MIT

## Soporte

Si tienes preguntas o necesitas ayuda:
- Abre un issue en GitHub
- Contacta al equipo de desarrollo

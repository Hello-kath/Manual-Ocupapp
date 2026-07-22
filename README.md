# Manual de Usuario - Ocupapp

Sitio web con el manual de usuario de **Ocupapp** (aplicación interna de The Bitbang Company para
gestionar la ocupación y la asignación de horas de los colaboradores a proyectos). Construido con
Next.js, TypeScript y Tailwind CSS.

## Características

- **Next.js 16** — App Router
- **TypeScript** — tipado estático
- **Tailwind CSS** — paleta "Mystic Corporate" de Ocupapp (índigo/morado) + tema claro/oscuro
- **Acordeones interactivos** por módulo + **tabla de contenidos**
- **Roles por sección** — cada módulo indica qué roles acceden y cómo cambia la vista por rol
- **Placeholders de imágenes** — si falta una captura, se muestra un marcador con el nombre esperado

## Estructura del proyecto

```
Manual-User-Ocupapp/
├── app/
│   ├── layout.tsx                 # Layout raíz (metadata, tema)
│   ├── page.tsx                   # Redirige a /manuales/ocupapp
│   └── manuales/ocupapp/
│       ├── page.tsx               # Página del manual (TOC + secciones)
│       └── sections/              # Una sección por módulo de Ocupapp
│           ├── LoginSection.tsx
│           ├── RegistroSection.tsx
│           ├── InicioSection.tsx
│           ├── ClientesSection.tsx
│           ├── ProyectosSection.tsx
│           ├── ColaboradoresSection.tsx
│           ├── AsignacionSection.tsx
│           ├── RegistroDiarioSection.tsx
│           ├── PerfilSection.tsx
│           └── ConfiguracionSection.tsx
├── components/
│   ├── layout/                    # OcupappHeader, OcupappManualLayout, OcupappBackgroundPattern, ScrollToTop, ThemeToggle
│   ├── manual/                    # TableOfContents, ManualImage, RoleAccess
│   └── ui/                        # accordion, button (shadcn/ui)
├── hooks/useCarbonClasses.ts      # utilidades de estilos claro/oscuro
├── contexts/ThemeContext.tsx      # estado del tema
└── public/
    ├── tbbc-logo.png              # logo
    └── manuales/ocupapp/          # imágenes del manual (ver _LEEME-imagenes.md)
```

## Módulos documentados

| Módulo | Roles con acceso |
|--------|------------------|
| Inicio de Sesión | Todos |
| Registro | Todos (primer acceso) |
| Inicio (Dashboard) | Todos |
| Clientes | Administrador |
| Proyectos | Administrador, Asignador |
| Colaboradores | Administrador |
| Asignación Semanal | Administrador, Asignador |
| Registro Diario de Horas | Colaborador (Admin/Asignador lo ven en el menú) |
| Perfil y Ocupación | Colaborador |
| Configuración | Administrador |

## Imágenes

Las capturas van en `public/manuales/ocupapp/<módulo>/`. La lista exacta de archivos esperados
(y las vistas por rol) está en **`public/manuales/ocupapp/_LEEME-imagenes.md`**.

## Desarrollo

```bash
npm install       # instalar dependencias
npm run dev       # http://localhost:3000
npm run build     # build de producción
npm start         # servir el build
npm run lint      # ESLint
```

## Personalización

- **Colores de marca**: `tailwind.config.ts` (`ocupapp-primary`, `ocupapp-purple`, `ocupapp-purple-light`, `ocupapp-magenta`).
- **Agregar/editar una sección**: crea un componente en `app/manuales/ocupapp/sections/` y regístralo en `app/manuales/ocupapp/page.tsx` (import + entrada en `tocItems` + `<div id="anchor-...">`).
- **Roles de una sección**: usa el componente `RoleAccess` con la prop `roles` y una `note` de diferencias por rol.

---

Desarrollado por **TBBC** — The Bitbang Company · Manual de Usuario de Ocupapp · Versión 1.0 - 2026

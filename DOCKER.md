# Docker Deployment Guide

## Archivos Docker creados

- `Dockerfile` - Configuración multi-stage optimizada para Next.js
- `.dockerignore` - Excluye archivos innecesarios del build
- `docker-compose.yml` - Orquestación simplificada del contenedor

## Comandos de Docker

### Opción 1: Usar Docker directamente

```bash
# Construir la imagen
docker build -t manuales-app .

# Ejecutar el contenedor
docker run -p 3000:3000 \
  -e ADMIN_PASSWORD="Manual2026*IBM" \
  -e ADMIN_ACCESS_TOKEN="Access2026*Token" \
  manuales-app
```

### Opción 2: Usar Docker Compose (Recomendado)

```bash
# Construir y ejecutar en segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down

# Reconstruir después de cambios
docker-compose up -d --build
```

## Variables de Entorno

Las siguientes variables se pueden configurar:

- `ADMIN_PASSWORD` - Contraseña del panel administrativo (default: Manual2026*IBM)
- `ADMIN_ACCESS_TOKEN` - Token de acceso (default: Access2026*Token)

Para cambiar las variables, puedes:
1. Editar `docker-compose.yml`
2. Crear un archivo `.env` en la raíz del proyecto
3. Pasarlas directamente con `-e` en `docker run`

## Acceso a la Aplicación

Una vez iniciado, accede a: http://localhost:3000

## Notas

- La imagen usa Node 20 Alpine para menor tamaño
- Se ejecuta como usuario no-root para mayor seguridad
- El puerto por defecto es 3000
- Los archivos estáticos se sirven desde el contenedor

# GUÍA DE IMÁGENES PARA EL MANUAL MFA

Este documento explica qué capturar en cada imagen del manual de autenticación MFA.

---

## MÓDULO I: INTRODUCCIÓN

**No requiere imágenes.**
Solo contiene explicación conceptual de qué es MFA.

---

## MÓDULO II: VERIFICACIÓN INICIAL EN EL CHAT

### Imagen 1: `verificacion-sin-credenciales.png`
**¿Qué capturar?**
- Pantalla del chat de WhatsApp cuando un usuario SIN credenciales MFA intenta iniciar conversación
- Debe mostrar el mensaje de error: "No tienes credenciales MFA configuradas"
- Debe incluir instrucción para contactar al administrador

**¿Cómo obtenerla?**
1. Usar cuenta de usuario sin MFA configurado (authenticatorsecretkey = NULL en DB)
2. Abrir chat de WhatsApp
3. Intentar iniciar conversación
4. Capturar pantalla del mensaje de error

**Elementos importantes:**
- Mensaje de error visible
- Interfaz del chat
- Indicación clara de que no hay acceso

---

## MÓDULO III: CREACIÓN DE USUARIO POR EL ADMINISTRADOR

### Imagen 2: `admin-login.png`
**¿Qué capturar?**
- Pantalla de login del panel de administración (whathelp-admin-chat)
- URL visible: http://localhost:3000/login (o URL de producción)
- Campos de usuario y contraseña visibles
- Botón "Continuar"

**¿Cómo obtenerla?**
1. Acceder a URL del panel admin
2. Capturar pantalla del formulario de login

### Imagen 3: `admin-panel-usuarios.png`
**¿Qué capturar?**
- Panel principal del administrador mostrando la sección "Usuarios"
- URL visible: /users
- Tabla con lista de usuarios existentes
- Botón "Crear Usuario" o "+" visible
- Columnas: ID, Nombre, Usuario, Email, Teléfono, Estado, Acciones

**¿Cómo obtenerla?**
1. Hacer login como administrador
2. Navegar a sección "Usuarios"
3. Capturar pantalla completa de la tabla

### Imagen 4: `admin-formulario-crear-usuario.png`
**¿Qué capturar?**
- Modal o formulario de creación de nuevo usuario
- Campos visibles:
  - Nombre completo
  - Usuario (username)
  - Email
  - Teléfono
  - Contraseña temporal
  - Estado (dropdown: ACTIVE/PENDING/INACTIVE)
- Botón "Guardar" o "Crear"

**¿Cómo obtenerla?**
1. En panel de usuarios, click en "Crear Usuario"
2. Capturar modal/formulario que aparece

### Imagen 5: `correo-bienvenida-credenciales.png`
**¿Qué capturar?**
- Bandeja de entrada del correo del nuevo usuario
- Email con asunto: "Bienvenido al sistema de chat - Credenciales MFA"
- Remitente visible: sistema o soporte@ibmsmartservices.com
- Contenido del correo mostrando:
  - Usuario: juan.perez (ejemplo)
  - Contraseña: Temp1234! (ejemplo)
  - Enlace: https://mfa-aval.ibmsmartservices.com/

**¿Cómo obtenerla?**
1. Crear usuario desde panel admin
2. Revisar correo del nuevo usuario
3. Abrir email de bienvenida
4. Capturar contenido completo del correo

---

## MÓDULO IV: CONFIGURACIÓN INICIAL DEL AUTENTICADOR

### Imagen 6: `portal-mfa-login.png`
**¿Qué capturar?**
- Pantalla de login del portal MFA
- URL visible: https://mfa-aval.ibmsmartservices.com/
- Formulario con:
  - Campo "Usuario"
  - Campo "Contraseña"
  - Botón "Iniciar Sesión"
- Logo o nombre del sistema visible

**¿Cómo obtenerla?**
1. Abrir enlace: https://mfa-aval.ibmsmartservices.com/
2. Capturar pantalla del login (SIN llenar campos aún)

### Imagen 7: `portal-mfa-codigo-qr.png`
**¿Qué capturar?**
- Pantalla del portal MFA mostrando código QR
- Código QR grande y visible en el centro
- Título: "Configura tu autenticación multifactor" o similar
- Instrucciones: "Escanea este código con Microsoft Authenticator"
- Opcionalmente: link para descargar la app

**¿Cómo obtenerla?**
1. Hacer login en portal MFA con credenciales del correo
2. Portal automáticamente genera y muestra QR
3. Capturar pantalla completa con QR visible

**Importante:** El QR debe ser REAL y funcional (generado por el backend).

### Imagen 8: `ms-authenticator-appstore.png`
**¿Qué capturar?**
- Pantalla de App Store (iOS) mostrando Microsoft Authenticator
- Logo de la app visible
- Nombre: "Microsoft Authenticator"
- Desarrollador: Microsoft Corporation
- Botón "Obtener" o "Descargar"
- Capturas de pantalla de la app
- Valoraciones y reseñas visibles

**¿Cómo obtenerla?**
1. Abrir App Store en iPhone/iPad
2. Buscar "Microsoft Authenticator"
3. Capturar pantalla de la página de la app

### Imagen 9: `ms-authenticator-playstore.png`
**¿Qué capturar?**
- Pantalla de Google Play Store (Android) mostrando Microsoft Authenticator
- Logo de la app visible
- Nombre: "Microsoft Authenticator"
- Desarrollador: Microsoft Corporation
- Botón "Instalar"
- Capturas de pantalla de la app
- Valoraciones y reseñas visibles

**¿Cómo obtenerla?**
1. Abrir Google Play Store en Android
2. Buscar "Microsoft Authenticator"
3. Capturar pantalla de la página de la app

### Imagen 10: `ms-authenticator-home-vacia.png`
**¿Qué capturar?**
- Pantalla principal de Microsoft Authenticator SIN cuentas agregadas
- Mostrar interfaz vacía o mensaje: "No tienes cuentas agregadas"
- Botón "+" para agregar cuenta CLARAMENTE VISIBLE
- Instrucciones o guía de bienvenida (si las hay)

**¿Cómo obtenerla?**
1. Instalar Microsoft Authenticator
2. Abrir por primera vez (o borrar todas las cuentas)
3. Capturar pantalla principal vacía

### Imagen 11: `ms-authenticator-boton-agregar.png`
**¿Qué capturar?**
- Menú que aparece al tocar el botón "+"
- Opciones visibles:
  - "Cuenta profesional o educativa"
  - "Cuenta personal (Microsoft)"
  - "Otra cuenta (Google, Facebook, etc.)" ← Esta opción RESALTADA
- Fondo semi-transparente
- Botón de cancelar

**¿Cómo obtenerla?**
1. En Microsoft Authenticator, tocar botón "+"
2. Capturar el menú desplegable que aparece

### Imagen 12: `ms-authenticator-permiso-camara.png`
**¿Qué capturar?**
- Diálogo del sistema operativo solicitando permiso de cámara
- Texto: "Microsoft Authenticator desea acceder a la cámara"
- Botones: "No permitir" y "Permitir"
- Logo de la app visible

**¿Cómo obtenerla?**
1. Seleccionar "Otra cuenta" y elegir "Escanear código QR"
2. La primera vez, el sistema pedirá permiso
3. Capturar diálogo de permiso ANTES de aceptar

### Imagen 13: `ms-authenticator-escaneando-qr.png`
**¿Qué capturar?**
- Vista de la cámara activa dentro de Microsoft Authenticator
- Cuadro guía para alinear el QR (generalmente un marco cuadrado)
- Instrucciones en pantalla: "Coloca el código QR dentro del marco"
- Código QR del portal visible en fondo (puede estar en monitor/laptop)

**¿Cómo obtenerla?**
1. Con permiso de cámara concedido
2. Apuntar cámara hacia el QR del portal MFA
3. Capturar momento ANTES de que escanee (cuadro guía visible)

### Imagen 14: `ms-authenticator-cuenta-agregada.png`
**¿Qué capturar?**
- Microsoft Authenticator con cuenta IBM Chat agregada
- Nombre de cuenta visible: "IBM Chat" o "IBM Smart Services"
- Usuario visible: juan.perez o número de teléfono
- Código de 6 dígitos VISIBLE: ejemplo "483 729"
- Barra circular de progreso mostrando tiempo restante
- La barra debe tener BASTANTE tiempo (25-30 segundos = casi llena)

**¿Cómo obtenerla?**
1. Después de escanear QR exitosamente
2. Esperar a que se genere código nuevo (barra casi llena)
3. Capturar pantalla mostrando código con tiempo suficiente

**Importante:** El código debe ser LEGIBLE y la barra CLARAMENTE VISIBLE.

### Imagen 15: `portal-mfa-verificar-codigo.png`
**¿Qué capturar?**
- Portal MFA mostrando campo para ingresar código de verificación
- Título: "Confirma tu autenticador" o similar
- Campo de 6 dígitos (puede mostrar separación: _ _ _ _ _ _)
- Mensaje: "Ingresa el código de Microsoft Authenticator"
- Botón "Verificar" o "Confirmar"
- Opcionalmente: link "Generar nuevo QR"

**¿Cómo obtenerla?**
1. Después de escanear QR, el portal muestra este campo
2. Capturar ANTES de ingresar código

### Imagen 16: `portal-mfa-configuracion-exitosa.png`
**¿Qué capturar?**
- Pantalla de confirmación exitosa
- Ícono de éxito: ✅ o check verde
- Mensaje: "¡Tu MFA está configurado correctamente!" o similar
- Texto explicativo: "Ya puedes usar el chat con autenticación segura"
- Botón "Ir al Chat" o "Continuar"

**¿Cómo obtenerla?**
1. Ingresar código correcto de Microsoft Authenticator
2. Backend valida y portal muestra confirmación
3. Capturar pantalla de éxito

---

## MÓDULO V: USO DIARIO - INICIO DE SESIÓN CON MFA

### Imagen 17: `chat-inicio-conversacion.png`
**¿Qué capturar?**
- Interfaz del chat de WhatsApp (usuario ya configurado)
- Usuario intenta iniciar conversación
- Puede mostrar campo de mensaje o botón "Iniciar Chat"
- Antes de que aparezca solicitud de código MFA

**¿Cómo obtenerla?**
1. Abrir chat de WhatsApp con usuario que tiene MFA configurado
2. Capturar pantalla inicial

### Imagen 18: `chat-solicitud-codigo-mfa.png`
**¿Qué capturar?**
- Modal o mensaje en el chat solicitando código MFA
- Ícono de candado 🔐 o símbolo de seguridad
- Texto: "Autenticación requerida" o "Ingresa tu código MFA"
- Campo para 6 dígitos
- Botón "Verificar"
- Opcionalmente: link "¿No puedes acceder? Contacta soporte"

**¿Cómo obtenerla?**
1. Usuario con MFA configurado inicia conversación
2. Sistema detecta MFA habilitado y solicita código
3. Capturar modal/mensaje de solicitud

### Imagen 19: `ms-authenticator-codigo-activo-login.png`
**¿Qué capturar?**
- Microsoft Authenticator mostrando código para IBM Chat
- Código de 6 dígitos VISIBLE y DIFERENTE al de la imagen 14
- Barra de progreso con MÁS de 20 segundos restantes
- Barra en color verde o azul (no roja)
- Nombre de cuenta: "IBM Chat" visible

**¿Cómo obtenerla?**
1. Abrir Microsoft Authenticator cuando se solicite código
2. Esperar a que barra tenga >20 segundos
3. Capturar código activo con tiempo suficiente

**Diferencia con imagen 14:** Esta es durante un login real, la 14 era durante configuración inicial.

### Imagen 20: `chat-ingreso-codigo.png`
**¿Qué capturar?**
- Campo de código MFA con dígitos INGRESADOS
- Mostrar código escrito: ejemplo "729 483"
- Botón "Verificar" resaltado o listo para hacer click
- Modal de solicitud aún visible

**¿Cómo obtenerla?**
1. Escribir código de Microsoft Authenticator en el campo
2. Capturar ANTES de hacer click en Verificar

### Imagen 21: `chat-autenticacion-exitosa.png`
**¿Qué capturar?**
- Mensaje de confirmación: "Autenticación exitosa"
- Opcionalmente: mensaje de bienvenida "Bienvenido, Juan Pérez"
- Modal de MFA desapareciendo o ya cerrado
- Chat activo y funcional

**¿Cómo obtenerla?**
1. Después de verificar código correcto
2. Capturar mensaje de confirmación

### Imagen 22: `chat-activo-conversacion.png`
**¿Qué capturar?**
- Chat completamente funcional después de autenticación
- Usuario puede escribir mensajes
- Historial de conversación visible (si hay)
- Interfaz normal del chat sin modales de autenticación
- Campo de texto activo para escribir

**¿Cómo obtenerla?**
1. Después de autenticación exitosa
2. Capturar pantalla del chat en uso normal

---

## MÓDULO VI: CASOS ESPECIALES Y SOLUCIÓN DE PROBLEMAS

### Imagen 23: `chat-codigo-invalido.png`
**¿Qué capturar?**
- Mensaje de error: "Código inválido" o "El código no es correcto"
- Código ingresado visible (puede estar en rojo)
- Opción para intentar nuevamente
- Contador de intentos (si aplica)

**¿Cómo obtenerla?**
1. Ingresar código incorrecto o expirado intencionalmente
2. Capturar mensaje de error del sistema

### Imagen 24: `ms-authenticator-codigo-expirando.png`
**¿Qué capturar?**
- Microsoft Authenticator con código próximo a expirar
- Barra de progreso en ROJO con menos de 10 segundos
- Código visible pero punto de cambiar
- Alerta visual de tiempo bajo

**¿Cómo obtenerla?**
1. Abrir Microsoft Authenticator
2. Esperar a que barra esté casi vacía (roja)
3. Capturar momento justo antes de que cambie código

### Imagen 25: `admin-cambiar-contrasena-usuario.png`
**¿Qué capturar?**
- Panel de administración, sección usuarios
- Modal de "Cambiar contraseña"
- Usuario seleccionado visible
- Campos para nueva contraseña
- Botón "Actualizar contraseña"

**¿Cómo obtenerla?**
1. Panel admin → Usuarios
2. Click en botón 🔒 de cambiar contraseña
3. Capturar modal que aparece

### Imagen 26: `admin-usuario-sin-mfa.png`
**¿Qué capturar?**
- Tabla de usuarios en panel admin
- Usuario con MFA deshabilitado resaltado
- Columna o indicador mostrando estado MFA: "No configurado" o similar
- Botón de acciones para ese usuario

**¿Cómo obtenerla?**
1. Panel admin → Usuarios
2. Identificar usuario sin MFA (isauthenticatorenabled = false)
3. Capturar fila de ese usuario en tabla

---

## RESUMEN DE IMÁGENES

**Total de imágenes: 26**

### Por módulo:
- **Módulo I (Introducción):** 0 imágenes
- **Módulo II (Verificación):** 1 imagen (imagen 1)
- **Módulo III (Creación Usuario):** 4 imágenes (2-5)
- **Módulo IV (Configuración Autenticador):** 11 imágenes (6-16)
- **Módulo V (Uso Diario):** 6 imágenes (17-22)
- **Módulo VI (Casos Especiales):** 4 imágenes (23-26)

### Nombres de archivos (para crear en `/public/manuales/mfa-auth/`):

1. `verificacion-sin-credenciales.png`
2. `admin-login.png`
3. `admin-panel-usuarios.png`
4. `admin-formulario-crear-usuario.png`
5. `correo-bienvenida-credenciales.png`
6. `portal-mfa-login.png`
7. `portal-mfa-codigo-qr.png`
8. `ms-authenticator-appstore.png`
9. `ms-authenticator-playstore.png`
10. `ms-authenticator-home-vacia.png`
11. `ms-authenticator-boton-agregar.png`
12. `ms-authenticator-permiso-camara.png`
13. `ms-authenticator-escaneando-qr.png`
14. `ms-authenticator-cuenta-agregada.png`
15. `portal-mfa-verificar-codigo.png`
16. `portal-mfa-configuracion-exitosa.png`
17. `chat-inicio-conversacion.png`
18. `chat-solicitud-codigo-mfa.png`
19. `ms-authenticator-codigo-activo-login.png`
20. `chat-ingreso-codigo.png`
21. `chat-autenticacion-exitosa.png`
22. `chat-activo-conversacion.png`
23. `chat-codigo-invalido.png`
24. `ms-authenticator-codigo-expirando.png`
25. `admin-cambiar-contrasena-usuario.png`
26. `admin-usuario-sin-mfa.png`

---

## NOTAS IMPORTANTES

1. **Todas las capturas deben tener buena resolución** (mínimo 1280x720 px)
2. **Ocultar datos sensibles reales** (usar datos de prueba)
3. **Usar modo oscuro o claro consistentemente** en todo el manual
4. **Las URLs deben ser visibles** cuando sea relevante
5. **Los códigos de 6 dígitos deben ser legibles**
6. **Las imágenes de Microsoft Authenticator pueden ser de iOS o Android** (ser consistente)
7. **Blurear/pixelar información confidencial** si es necesario

## ORDEN RECOMENDADO PARA CAPTURAR

1. Primero capturar todo el **panel de administración** (imágenes 2-4)
2. Luego el **correo** (imagen 5)
3. Después el **portal MFA** (imágenes 6-7, 15-16)
4. Instalar **Microsoft Authenticator** y capturar (imágenes 8-14)
5. Finalmente el **flujo de login en chat** (imágenes 17-22)
6. Por último los **casos especiales** (imágenes 23-26)

Este orden facilita el proceso y evita tener que repetir pasos.

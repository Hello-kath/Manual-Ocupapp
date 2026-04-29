# Imágenes Necesarias para el Manual de Autenticación MFA

Este archivo lista todas las capturas de pantalla que necesitas agregar a esta carpeta para completar el manual.

## Convención de nombres
- Usa kebab-case (minúsculas con guiones)
- Formato: PNG preferiblemente
- Resolución recomendada: 1920x1080 o superior

## Lista de Imágenes Requeridas

### 1. Verificación de Parámetros
**Archivo:** `mensaje-sin-credenciales.png`
**Descripción:** Captura del mensaje que se muestra cuando un usuario NO tiene parámetros de autenticación configurados
**Contenido esperado:** Mensaje indicando "debe comunicarse con el administrador"

---

### 2. Creación de Usuario
**Archivo:** `correo-credenciales.png`
**Descripción:** Ejemplo del correo electrónico que recibe un nuevo usuario con sus credenciales
**Contenido esperado:** Email mostrando usuario, contraseña y enlace al autenticador MFA

**Archivo:** `enlace-mfa-aval.png`
**Descripción:** Vista de la página https://mfa-aval.ibmsmartservices.com/
**Contenido esperado:** Interfaz de la vista del autenticador MFA

---

### 3. Descarga de Microsoft Authenticator
**Archivo:** `descarga-ms-authenticator-appstore.png`
**Descripción:** Pantalla de descarga en App Store
**Contenido esperado:** App Microsoft Authenticator en la tienda de iOS

**Archivo:** `descarga-ms-authenticator-playstore.png`
**Descripción:** Pantalla de descarga en Play Store
**Contenido esperado:** App Microsoft Authenticator en la tienda de Android

---

### 4. Configuración del Autenticador
**Archivo:** `ms-authenticator-icono-escanear.png`
**Descripción:** Icono de escanear QR dentro de Microsoft Authenticator
**Contenido esperado:** Botón o ícono para activar el escáner de QR

**Archivo:** `escanear-codigo-qr.png`
**Descripción:** Proceso de escaneo del código QR
**Contenido esperado:** Vista de la cámara escaneando un código QR de ejemplo

**Archivo:** `registro-agregado-authenticator.png`
**Descripción:** Vista después de escanear el QR mostrando el código de 6 dígitos
**Contenido esperado:** Pantalla con número de teléfono registrado y código temporal visible

**Archivo:** `verificador-codigo-confirmacion.png`
**Descripción:** Campo de entrada para confirmar el registro con el código
**Contenido esperado:** Formulario donde se ingresa el código de 6 dígitos para confirmar

---

### 5. Inicio de Sesión con MFA
**Archivo:** `chat-inicio-conversacion.png`
**Descripción:** Pantalla de inicio de conversación en el chat
**Contenido esperado:** Vista del chat cuando un usuario intenta iniciar sesión

**Archivo:** `solicitud-codigo-mfa.png`
**Descripción:** Mensaje pidiendo el código de autenticación
**Contenido esperado:** Prompt donde se solicita ingresar el código MFA

**Archivo:** `ms-authenticator-codigo-activo.png`
**Descripción:** Microsoft Authenticator mostrando el código con tiempo restante >20s
**Contenido esperado:** App mostrando código de 6 dígitos con barra de tiempo indicando más de 20 segundos

**Archivo:** `ingreso-codigo-exitoso.png`
**Descripción:** Confirmación de código correcto y acceso al chat
**Contenido esperado:** Mensaje de bienvenida o vista del chat activa tras autenticación exitosa

---

## Tips para las Capturas
1. **Resolución clara**: Asegúrate de que el texto sea legible
2. **Oculta datos sensibles**: Difumina emails, teléfonos o información personal
3. **Destaca elementos importantes**: Puedes usar flechas o círculos para resaltar botones/campos clave
4. **Consistencia visual**: Usa el mismo dispositivo/navegador para todas las capturas si es posible
5. **Nombres exactos**: Usa exactamente los nombres listados arriba (respeta mayúsculas/minúsculas)

## Total de Imágenes Requeridas
**13 imágenes** en total

Una vez que tengas todas las capturas, guárdalas en esta misma carpeta con los nombres especificados.

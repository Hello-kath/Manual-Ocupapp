'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LogIn, Shield, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function LoginSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="login">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <LogIn className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Inicio de Sesión</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="login" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Acceso al sistema Fontur</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El acceso al sistema requiere credenciales asignadas por el administrador del proyecto.
                Solo personal autorizado puede ingresar a la plataforma.
              </p>
            </div>

            {/* Paso 1 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Ingresar a la Plataforma
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Abre el navegador e ingresa a la URL del sistema Fontur proporcionada por el administrador.
                Se mostrará la pantalla de inicio de sesión.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>La pantalla de login contiene:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Logo de Fontur y logo de Cámara de Industria y Turismo</li>
                  <li>Título <strong>"Inicia sesión en tu cuenta"</strong></li>
                  <li>Campo <strong>Nombre de usuario</strong></li>
                  <li>Campo <strong>Contraseña</strong></li>
                  <li>Casilla <strong>Recuérdame</strong></li>
                  <li>Enlace <strong>"¿Olvidaste tu contraseña?"</strong></li>
                  <li>Botón <strong>"Iniciar sesión"</strong></li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/login/login-pantalla-principal.png"
                alt="Pantalla de inicio de sesión del sistema Fontur"
                caption="Pantalla de inicio de sesión del sistema Fontur"
              />
            </div>

            {/* Paso 2 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Ingresar Credenciales
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Completa los campos con las credenciales asignadas:
              </p>
              <ol className={`list-decimal list-inside space-y-3 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>
                  Escribe tu <strong>nombre de usuario</strong> en el campo correspondiente
                </li>
                <li>
                  Escribe tu <strong>contraseña</strong>. Usa el ícono <Eye className="w-3 h-3 inline" /> / <EyeOff className="w-3 h-3 inline" /> para mostrar u ocultar la contraseña
                </li>
                <li>
                  Activa la casilla <strong>"Recuérdame"</strong> si deseas mantener la sesión activa
                </li>
                <li>
                  Haz clic en el botón <strong>"Iniciar sesión"</strong>
                </li>
              </ol>
              <ManualImage
                src="/manuales/fontur/login/login-credenciales-ingresadas.png"
                alt="Formulario con usuario y contraseña ingresados listos para autenticar"
                caption="Formulario con usuario y contraseña ingresados listos para autenticar"
              />
            </div>

            {/* Paso 3 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Acceso Exitoso
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si las credenciales son correctas, el sistema redirige automáticamente según tu rol:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-fontur-purple dark:text-fontur-purple-light" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Super Administrador / Director / Administrador</p>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Accede al panel de administración con todos los módulos disponibles
                  </p>
                </div>
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-fontur-blue dark:text-blue-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Asesor</p>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Accede directamente a sus beneficiarios y campañas asignadas
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>Múltiples proyectos:</strong> Si tu usuario tiene acceso a más de un proyecto,
                  el sistema te mostrará primero la pantalla de <strong>Selección de Proyecto</strong> antes de ingresar.
                </p>
              </div>
              <ManualImage
                src="/manuales/fontur/login/login-acceso-exitoso.png"
                alt="Panel principal del sistema tras autenticación exitosa"
                caption="Panel principal del sistema tras autenticación exitosa"
              />
            </div>

            {/* Paso 4 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Error de Credenciales
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 dark:border-red-400 p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                      <strong>Si las credenciales son incorrectas:</strong>
                    </p>
                    <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                      <li>El sistema muestra el mensaje: <em>"Credenciales incorrectas. Verifica tu usuario y contraseña."</em></li>
                      <li>Los campos permanecen para un nuevo intento</li>
                      <li>Después de varios intentos fallidos, la cuenta puede bloquearse temporalmente</li>
                    </ul>
                  </div>
                </div>
              </div>
              <ManualImage
                src="/manuales/fontur/login/login-error-credenciales.png"
                alt="Mensaje de error mostrado cuando las credenciales son incorrectas"
                caption="Mensaje de error mostrado cuando las credenciales son incorrectas"
              />
            </div>

            {/* Paso 5 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Recuperar Contraseña
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si olvidaste tu contraseña, sigue estos pasos:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>"¿Olvidaste tu contraseña?"</strong> en la pantalla de login</li>
                <li>Ingresa tu correo electrónico registrado</li>
                <li>Haz clic en <strong>"Enviar correo"</strong></li>
                <li>Revisa tu bandeja de entrada (y carpeta de spam)</li>
                <li>Haz clic en el enlace recibido y establece una nueva contraseña</li>
                <li>Regresa al login e ingresa con la nueva contraseña</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/login/login-recuperar-contrasena.png"
                alt="Pantalla de recuperación de contraseña"
                caption="Pantalla de recuperación de contraseña"
              />
            </div>

            {/* Paso 6 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Cerrar Sesión
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para salir del sistema de forma segura:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en tu <strong>nombre o avatar</strong> en la esquina superior derecha</li>
                <li>Selecciona <strong>"Cerrar sesión"</strong> del menú desplegable</li>
                <li>El sistema redirige a la pantalla de login</li>
              </ol>
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple p-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>Seguridad:</strong> Cierra siempre la sesión al terminar, especialmente en
                  equipos compartidos o de uso público.
                </p>
              </div>
              <ManualImage
                src="/manuales/fontur/login/login-cerrar-sesion.png"
                alt="Menú de usuario con la opción Cerrar sesión visible"
                caption="Menú de usuario con la opción Cerrar sesión visible"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

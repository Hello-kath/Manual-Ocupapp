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
            <LogIn className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span>Inicio de Sesión</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="login" className="space-y-8 pt-4">

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Acceso al sistema Conectados 2.0</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El acceso al sistema requiere credenciales corporativas asignadas por el área de RRHH o
                sistemas. Solo personal autorizado de Camposol S.A. puede ingresar a la plataforma.
              </p>
            </div>

            {/* Paso 1: Ingresar a la plataforma */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Ingresar a la Plataforma
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Abre el navegador e ingresa a la URL del sistema Conectados 2.0 proporcionada por
                el área de Sistemas. Se mostrará la pantalla de inicio de sesión.
              </p>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Pantalla de login contiene:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Logo de Camposol S.A.</li>
                  <li>Campo <strong>Correo electrónico</strong></li>
                  <li>Campo <strong>Contraseña</strong></li>
                  <li>Botón <strong>"Iniciar sesión"</strong></li>
                  <li>Enlace <strong>"¿Olvidaste tu contraseña?"</strong></li>
                </ul>
              </div>

              <ManualImage
                src="/manuales/login/login-pantalla-principal.png"
                alt="Pantalla de inicio de sesión del sistema Conectados 2.0"
                caption="Pantalla de inicio de sesión del sistema Conectados 2.0"
              />
            </div>

            {/* Paso 2: Ingresar credenciales */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Ingresar Credenciales
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Completa los campos con tus credenciales corporativas:
              </p>

              <ol className={`list-decimal list-inside space-y-3 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>
                  Escribe tu <strong>correo electrónico corporativo</strong> en el campo correspondiente
                  (ej: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">usuario@camposol.com.pe</code>)
                </li>
                <li>
                  Escribe tu <strong>contraseña</strong> en el campo de contraseña.
                  Usa el ícono <Eye className="w-3 h-3 inline" /> / <EyeOff className="w-3 h-3 inline" /> para mostrar u ocultar la contraseña
                </li>
                <li>
                  Haz clic en el botón <strong>"Iniciar sesión"</strong>
                </li>
              </ol>

              <ManualImage
                src="/manuales/login/login-credenciales-ingresadas.png"
                alt="Formulario con correo y contraseña ingresados listos para autenticar"
                caption="Formulario con correo y contraseña ingresados listos para autenticar"
              />
            </div>

            {/* Paso 3: Acceso exitoso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Acceso Exitoso
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si las credenciales son correctas, el sistema redirige automáticamente al panel principal
                según tu rol asignado:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Jefe Directo / PCO</p>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Redirige al módulo de gestión asignado (Permisos, Incidencias, etc.)
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Administrador</p>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Acceso completo a todos los módulos del sistema
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Analista de Nómina</p>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Acceso a módulos de CTS, Constancias y Utilidades
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Gestor</p>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Acceso a módulos de Préstamos y Renuncias
                  </p>
                </div>
              </div>

              <ManualImage
                src="/manuales/login/login-acceso-exitoso.png"
                alt="Panel principal del sistema tras autenticación exitosa"
                caption="Panel principal del sistema tras autenticación exitosa"
              />
            </div>

            {/* Paso 4: Error de credenciales */}
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
                      <li>El sistema muestra un mensaje de error en pantalla</li>
                      <li>Los campos se limpian para un nuevo intento</li>
                      <li>Después de varios intentos fallidos, la cuenta puede bloquearse temporalmente</li>
                    </ul>
                  </div>
                </div>
              </div>

              <ManualImage
                src="/manuales/login/login-error-credenciales.png"
                alt="Mensaje de error mostrado cuando las credenciales son incorrectas"
                caption="Mensaje de error mostrado cuando las credenciales son incorrectas"
              />
            </div>

            {/* Paso 5: Recuperar contraseña */}
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
                <li>Ingresa tu correo electrónico corporativo</li>
                <li>Haz clic en <strong>"Enviar enlace de recuperación"</strong></li>
                <li>Revisa tu bandeja de entrada (y carpeta de spam)</li>
                <li>Haz clic en el enlace recibido en el correo</li>
                <li>Ingresa y confirma tu nueva contraseña</li>
                <li>Regresa a la pantalla de login y accede con la nueva contraseña</li>
              </ol>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 p-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>💡 Tip:</strong> Si no recibes el correo de recuperación, contacta al área de
                  Sistemas o RRHH para restablecer tu acceso.
                </p>
              </div>
            </div>

            {/* Cerrar sesión */}
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

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>🔒 Seguridad:</strong> Cierra siempre la sesión al terminar, especialmente en
                  equipos compartidos o de uso público.
                </p>
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LogIn, LogOut, CircleCheck, TriangleAlert, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function LoginSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="login">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <LogIn className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Inicio de Sesión</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="login" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin', 'asignador', 'colaborador']}
              note="El inicio de sesión es el mismo para los tres roles. Lo que cambia es lo que ves DESPUÉS de entrar: el menú lateral y las pantallas disponibles se arman automáticamente según tu rol."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Acceso a Ocupapp</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Ocupapp usa el inicio de sesión con <strong>Google</strong> (cuenta corporativa de
                The Bitbang Company). No se manejan contraseñas dentro de la aplicación: la identidad
                la valida Google y Ocupapp emite internamente una sesión segura con vigencia de 7 días.
              </p>
            </div>

            {/* Paso 1 - Pantalla de inicio de sesión */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <LogIn className="w-5 h-5" />
                Pantalla de inicio de sesión
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al abrir Ocupapp se muestra la pantalla de acceso con el botón
                <strong> &quot;Iniciar sesión con Google&quot;</strong>. Haz clic en él para comenzar.
              </p>
              <ManualImage
                src="/manuales/ocupapp/login/1.pantalla-login.png"
                alt="Pantalla principal de inicio de sesión de Ocupapp"
                caption="Pantalla de inicio de sesión"
              />
            </div>

            {/* Paso 2 - Seleccionar cuenta */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <LogIn className="w-5 h-5" />
                Seleccionar la cuenta de Google
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Se abre la ventana de Google para elegir la cuenta</li>
                <li>Selecciona tu <strong>cuenta corporativa</strong></li>
                <li>Autoriza el acceso si Google lo solicita</li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/login/2.seleccionar-cuenta-google.png"
                alt="Ventana de Google para seleccionar la cuenta"
                caption="Selección de cuenta de Google"
              />
            </div>

            {/* Paso 3 - Acceso exitoso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <CircleCheck className="w-5 h-5" />
                Acceso exitoso
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Tras validar la cuenta, el sistema te redirige al <strong>Dashboard (Inicio)</strong>.
                El menú lateral aparece con solo los módulos permitidos para tu rol.
              </p>
              <ManualImage
                src="/manuales/ocupapp/login/3.acceso-exitoso.png"
                alt="Redirección al dashboard tras un inicio de sesión exitoso"
                caption="Acceso exitoso — redirección al Dashboard"
              />
            </div>

            {/* Paso 4 - Errores de acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <TriangleAlert className="w-5 h-5" />
                Errores de acceso
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <div className={`text-sm ${carbon.textPrimary}`}>
                    <p className="mb-2">No podrás ingresar si:</p>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      <li>La cuenta de Google <strong>no está autorizada</strong> en Ocupapp.</li>
                      <li>Tu usuario fue <strong>desactivado / eliminado</strong> (los usuarios eliminados no pueden iniciar sesión).</li>
                      <li>La sesión <strong>expiró</strong> (después de 7 días); en ese caso vuelve a iniciar sesión.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/login/4.error-acceso.png"
                alt="Mensaje de error al intentar ingresar con una cuenta no autorizada"
                caption="Mensaje de error de acceso"
              />
            </div>

            {/* Paso 5 - Cerrar sesión */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <LogOut className="w-5 h-5" />
                Cerrar sesión
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Desde el menú de usuario puedes <strong>cerrar sesión</strong>. Esto limpia tu sesión
                del dispositivo y te devuelve a la pantalla de inicio de sesión.
              </p>
              <ManualImage
                src="/manuales/ocupapp/login/5.cerrar-sesion.png"
                alt="Opción de cerrar sesión en el menú de usuario"
                caption="Cerrar sesión"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

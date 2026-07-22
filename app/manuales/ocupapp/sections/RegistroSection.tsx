'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { UserPlus, Info, CircleCheck } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function RegistroSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="registro">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <UserPlus className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Registro</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="registro" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin', 'asignador', 'colaborador']}
              note="El primer ingreso con una cuenta autorizada crea automáticamente un usuario con rol Colaborador. La asignación de un rol superior (Asignador o Administrador) la realiza un Administrador desde el módulo de Colaboradores."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Primer acceso a Ocupapp</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Ocupapp no maneja registro con usuario y contraseña. Cuando una persona inicia sesión
                por primera vez con su cuenta de Google autorizada, el sistema crea su perfil de
                colaborador automáticamente. La pantalla de registro sirve para completar los datos
                iniciales del perfil.
              </p>
            </div>

            {/* Paso 1 - Formulario de registro */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <UserPlus className="w-5 h-5" />
                Completar datos del perfil
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En el primer acceso se solicitan los datos básicos del colaborador. Completa la información
                y guarda para entrar al sistema.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Nombre y apellido</li>
                  <li>Correo electrónico (se toma de la cuenta de Google, es único)</li>
                  <li>Datos de contacto: ciudad, número de celular, contacto de emergencia</li>
                  <li>Información laboral inicial cuando aplique (área, tipo de contrato)</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/ocupapp/registro/1.formulario-registro.png"
                alt="Formulario de registro / completar datos del perfil"
                caption="Formulario de registro"
              />
            </div>

            {/* Paso 2 - Registro completado */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <CircleCheck className="w-5 h-5" />
                Registro completado
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Tras guardar, el usuario queda creado con rol <strong>Colaborador</strong> y accede al
                Dashboard. Para operar con más permisos, un Administrador debe cambiar su rol.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El correo es <strong>único</strong> en el sistema: no pueden existir dos usuarios
                    con el mismo correo.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/registro/2.registro-completado.png"
                alt="Confirmación de registro completado"
                caption="Registro completado"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { User, Pencil, CheckCircle2, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function PerfilSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="perfil">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Perfil</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="perfil" className="space-y-8 pt-4">

            <RoleAccess
              roles={['colaborador']}
              note="Vista del Colaborador. Se accede desde el nombre/avatar en la esquina superior derecha. El Administrador consulta los datos de cada persona desde el módulo de Colaboradores (detalle), no desde este módulo."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Perfil del Colaborador</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Muestra los datos personales y corporativos del colaborador, junto con un indicador de
                qué tan <strong>completo</strong> está su perfil. Desde aquí el colaborador puede editar
                su propia información.
              </p>
            </div>

            {/* Paso 1 - Datos del perfil */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <User className="w-5 h-5" />
                Datos del perfil
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El colaborador consulta su <strong>información personal</strong> (documento, fecha de
                nacimiento, contacto de emergencia, dirección, notas) y sus <strong>datos corporativos</strong>
                (correo, tipo de contrato, horas base semanales, área y rol). La barra superior indica el
                <strong> porcentaje de perfil completo</strong>.
              </p>
              <ManualImage
                src="/manuales/ocupapp/perfil/1.perfil-colaborador.png"
                alt="Vista del perfil del colaborador con datos personales y corporativos"
                caption="Perfil del Colaborador"
              />
            </div>

            {/* Paso 2 - Editar perfil */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Pencil className="w-5 h-5" />
                Editar el perfil
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>&quot;Editar perfil&quot;</strong></li>
                <li>Actualiza los <strong>campos editables</strong> de tu información personal</li>
                <li>Haz clic en <strong>&quot;Guardar cambios&quot;</strong></li>
              </ol>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-ocupapp-purple mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Los <strong>datos corporativos</strong> (correo, tipo de contrato, horas base, área y
                    rol) los gestiona el Administrador y no son editables desde este módulo.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/perfil/2.editar-perfil.png"
                alt="Formulario de edición del perfil con los campos editables"
                caption="Editar información personal"
              />
            </div>

            {/* Paso 3 - Confirmación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <CheckCircle2 className="w-5 h-5" />
                Confirmación de los cambios
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al guardar, el sistema muestra un mensaje de éxito confirmando que el perfil se actualizó
                correctamente.
              </p>
              <ManualImage
                src="/manuales/ocupapp/perfil/3.edicion-exito.png"
                alt="Mensaje de éxito tras actualizar el perfil"
                caption="Perfil actualizado correctamente"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

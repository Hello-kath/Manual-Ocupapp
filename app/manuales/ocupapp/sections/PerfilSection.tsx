'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { User, Gauge, Info } from 'lucide-react';
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
            <span>Perfil y Ocupación</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="perfil" className="space-y-8 pt-4">

            <RoleAccess
              roles={['colaborador']}
              note="Vista del Colaborador. El Administrador consulta los datos y la ocupación de cada persona desde el módulo de Colaboradores (detalle), no desde esta pantalla."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Perfil del Colaborador</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Muestra los datos personales del colaborador y su nivel de ocupación de la semana actual
                (horas trabajadas frente a sus horas base disponibles).
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
                El colaborador consulta su información: nombre, correo, área, tipo de contrato y datos de
                contacto.
              </p>
              <ManualImage
                src="/manuales/ocupapp/perfil/1.perfil-colaborador.png"
                alt="Vista del perfil del colaborador"
                caption="Perfil del Colaborador"
              />
            </div>

            {/* Paso 2 - Ocupación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Gauge className="w-5 h-5" />
                Ocupación de la semana
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Muestra cuánto de la capacidad semanal está ocupada con horas registradas.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Cuenta solo las horas de la <strong>semana actual</strong> (lunes a domingo).</li>
                  <li><strong>Horas disponibles</strong> = horas base semanales − horas trabajadas (base 40 por defecto).</li>
                  <li>La <strong>ocupación</strong> se calcula como horas trabajadas / horas base, por proyecto.</li>
                  <li>Solo aparecen los proyectos <strong>activos</strong> a los que el colaborador está asignado.</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/ocupapp/perfil/2.ocupacion-colaborador.png"
                alt="Indicador de ocupación semanal del colaborador"
                caption="Ocupación de la semana"
              />
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className={`text-sm ${carbon.textPrimary}`}>
                  La ocupación depende de que existan horas registradas en Registro Diario y de que el
                  colaborador esté asignado a proyectos activos en la semana actual.
                </p>
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

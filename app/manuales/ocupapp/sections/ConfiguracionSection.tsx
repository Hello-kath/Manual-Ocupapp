'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Settings, CalendarDays, RefreshCw, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function ConfiguracionSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="configuracion">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Configuración</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="configuracion" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin']}
              note="Módulo exclusivo del Administrador. El Asignador y el Colaborador NO ven este módulo."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Configuración del sistema</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Ajustes generales de Ocupapp. Uno de los más importantes es la gestión de festivos, ya
                que los días festivos afectan los días hábiles y registrables.
              </p>
            </div>

            {/* Paso 1 - Festivos */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <CalendarDays className="w-5 h-5" />
                Festivos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Lista de días festivos que el sistema tiene en cuenta. Un día festivo se comporta distinto
                a un día hábil al planificar y registrar horas.
              </p>
              <ManualImage
                src="/manuales/ocupapp/configuracion/1.festivos.png"
                alt="Listado de festivos en la configuración"
                caption="Festivos"
              />
            </div>

            {/* Paso 2 - Sincronizar festivos */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <RefreshCw className="w-5 h-5" />
                Sincronizar festivos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Permite actualizar el calendario de festivos. Tras sincronizar, los cambios se reflejan en
                la planificación semanal y en los días registrables.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Verifica el listado después de sincronizar para confirmar que los festivos quedaron
                    correctos antes de planificar la semana.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/configuracion/2.sincronizar-festivos.png"
                alt="Acción para sincronizar festivos"
                caption="Sincronizar festivos"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

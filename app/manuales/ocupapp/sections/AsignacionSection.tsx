'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CalendarRange, Plus, CircleCheck, TrendingUp, History, Unlock, Clock, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function AsignacionSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="asignacion">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <CalendarRange className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Asignación Semanal</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="asignacion" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin', 'asignador']}
              note="El Administrador y el Asignador planifican la semana. El Colaborador NO ve este módulo: solo verá los proyectos asignados (en Registro Diario) una vez que la semana esté FINALIZADA."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Planificación semanal</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Aquí se define, semana a semana, qué colaboradores trabajan en qué proyectos y cuántas
                horas. Es la base contra la que luego el colaborador registra sus horas reales.
              </p>
            </div>

            {/* Regla clave - ciclo de vida de la semana */}
            <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
              <p className={`text-sm font-semibold ${carbon.textPrimary} mb-3`}>Estados de una semana</p>
              <ul className={`space-y-2 text-sm ${carbon.textPrimary}`}>
                <li className="flex gap-2"><span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 h-fit">Editable</span> En planificación. Se puede modificar el tablero.</li>
                <li className="flex gap-2"><span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 h-fit">Finalizada</span> Cerrada la planificación. Habilita el registro de horas del colaborador.</li>
                <li className="flex gap-2"><span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 h-fit">En curso</span> Semana finalizada cuyo rango contiene el día de hoy.</li>
                <li className="flex gap-2"><span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 h-fit">Solo lectura</span> Semana pasada ya finalizada cuando ya existe una semana posterior.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className={`text-sm ${carbon.textPrimary}`}>
                  <p className="font-semibold mb-1">Reglas importantes</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>No puede haber <strong>más de una semana &quot;Editable&quot;</strong> a la vez: hasta no finalizar la actual, no se puede crear la siguiente.</li>
                    <li>Solo al <strong>Finalizar</strong> una semana se habilitan (a) crear la siguiente y (b) el registro de horas reales de esa semana.</li>
                    <li>El colaborador solo ve sus proyectos cuando la semana está <strong>Finalizada</strong>; si está &quot;Editable&quot; o &quot;Solo lectura&quot; verá la lista vacía.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 1 - Hub de asignación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <CalendarRange className="w-5 h-5" />
                Hub de Asignación Semanal
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Punto de entrada del módulo. Muestra la semana actual y accesos a la planificación, la
                proyección y el historial.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion/1.hub-asignacion.png"
                alt="Hub del módulo de asignación semanal"
                caption="Hub de Asignación Semanal"
              />
            </div>

            {/* Paso 2 - Tablero semanal */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Plus className="w-5 h-5" />
                Tablero de la semana (asignar colaboradores y horas)
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Selecciona un proyecto asignable</li>
                <li>Agrega los colaboradores que trabajarán en él esa semana</li>
                <li>Define las <strong>horas</strong> de cada colaborador en el proyecto</li>
                <li>Autoriza <strong>horas extra</strong> cuando corresponda</li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/asignacion/2.tablero-semanal-vista-asignador.png"
                alt="Tablero de asignación semanal, vista del asignador"
                caption="Tablero de la semana (vista Asignador)"
              />
            </div>

            {/* Paso 3 - Finalizar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <CircleCheck className="w-5 h-5" />
                Finalizar la semana
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al terminar de planificar, haz clic en <strong>&quot;Finalizar&quot;</strong>. Esto cierra la
                planificación de esa semana, habilita el registro de horas para los colaboradores y
                permite crear la siguiente semana.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion/3.finalizar-semana.png"
                alt="Confirmación para finalizar la semana"
                caption="Finalizar la semana"
              />
            </div>

            {/* Paso 4 - Proyección */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <TrendingUp className="w-5 h-5" />
                Proyección
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Vista de proyección de la ocupación y las horas planificadas, útil para anticipar la carga
                de trabajo del equipo.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion/4.proyeccion.png"
                alt="Vista de proyección de la asignación"
                caption="Proyección"
              />
            </div>

            {/* Paso 5 - Historial */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <History className="w-5 h-5" />
                Historial de semanas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Lista de las semanas anteriores con su estado. Permite consultar cómo quedó planificada
                cada semana.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion/5.historial-semanas.png"
                alt="Historial de semanas de asignación"
                caption="Historial de semanas"
              />
            </div>

            {/* Paso 6 - Desbloqueo */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <Unlock className="w-5 h-5" />
                Desbloquear una semana pasada
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Cuando un colaborador necesita registrar horas en una semana ya cerrada, el asignador o
                administrador puede otorgar un <strong>desbloqueo temporal</strong> con una fecha límite.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El desbloqueo tiene <strong>vigencia</strong> (fecha límite). Mientras esté vigente y
                    existan proyectos, el colaborador podrá registrar en esa semana pasada.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/asignacion/6.desbloquear-semana.png"
                alt="Desbloqueo temporal de una semana pasada"
                caption="Desbloquear semana pasada"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FolderCheck, LayoutGrid, History, CalendarRange, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function ProyectosAsignadosSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="proyectos-asignados">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <FolderCheck className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Proyectos Asignados</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="proyectos-asignados" className="space-y-8 pt-4">

            <RoleAccess
              roles={['colaborador']}
              note="Vista del Colaborador. Es el módulo donde cada persona consulta los proyectos en los que participa esta semana y el historial de su participación. Aparece en su menú lateral como 'Proyectos Asignados'."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Mis proyectos y mi historial</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El módulo se organiza en dos pestañas: <strong>Proyectos activos</strong> (en los que
                participas actualmente) e <strong>Historial</strong> (todos los proyectos en los que has
                participado, con sus horas).
              </p>
            </div>

            {/* Paso 1 - Proyectos activos */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <LayoutGrid className="w-5 h-5" />
                Pestaña &quot;Proyectos activos&quot;
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Muestra, en tarjetas, los proyectos en los que participas <strong>en la semana en
                curso</strong> (lunes a domingo). Cada tarjeta indica el <strong>cliente</strong>, el
                <strong> estado</strong> del proyecto y las <strong>horas trabajadas</strong> que llevas
                registradas esa semana.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Estados que se muestran aquí</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100">Por empezar</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200">En progreso</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">Garantía</span>
                </div>
                <p className={`text-xs ${carbon.textHelper}`}>
                  Solo aparecen proyectos en estos estados y únicamente si tienes participación esta
                  semana. Los proyectos <strong>Finalizado</strong> y <strong>Cancelado</strong> no se
                  muestran en esta pestaña (los ves en el Historial).
                </p>
              </div>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignados/1.proyectos-activos.png"
                alt="Pestaña de proyectos activos con las tarjetas de cada proyecto"
                caption="Proyectos activos"
              />
            </div>

            {/* Paso 2 - Historial */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <History className="w-5 h-5" />
                Pestaña &quot;Historial&quot;
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Reúne los proyectos en los que has participado y que ya <strong>cerraron su ciclo</strong>.
                Puedes <strong>buscar</strong> por nombre de proyecto o cliente y filtrar por rango de
                <strong> fecha de inicio</strong> y <strong>fecha de fin</strong>. Cada tarjeta muestra el
                <strong> total de horas</strong> que registraste en ese proyecto (sumadas de todas las
                semanas). Los proyectos se ordenan del más reciente al más antiguo según su fecha de
                término.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Estados que se muestran aquí</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">Finalizado</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200">Cancelado</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">Garantía</span>
                </div>
                <p className={`text-xs ${carbon.textHelper}`}>
                  El Historial <strong>solo</strong> incluye proyectos en estos tres estados. Los proyectos
                  <strong> Por empezar</strong> y <strong>En progreso</strong> no aparecen aquí: mientras un
                  proyecto siga vigente lo ves en <em>Proyectos activos</em>.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-ocupapp-purple mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El estado <strong>Garantía</strong> es el único que puede aparecer en las dos pestañas:
                    en <em>Proyectos activos</em> si trabajas en él esta semana, y también en el
                    <em> Historial</em>.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignados/2.historial.png"
                alt="Pestaña de historial con buscador y filtros por fecha"
                caption="Historial de participación"
              />
            </div>

            {/* Paso 3 - Semanas de participación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <CalendarRange className="w-5 h-5" />
                Detalle: semanas de participación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al hacer clic en un proyecto del historial se abre un panel con las <strong>Semanas de
                Participación</strong>: el desglose de horas semana por semana y, al expandir una semana,
                las horas por día (lunes a viernes). Cada semana muestra además una <strong>etiqueta de
                semáforo</strong> que compara tus horas reales contra las horas asignadas:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`space-y-2 text-sm ${carbon.textPrimary}`}>
                  <li className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">Saludable</span>
                    <span>Registraste entre el <strong>80% y el 100%</strong> de tus horas asignadas.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">Bench</span>
                    <span>Registraste <strong>menos del 80%</strong> de tus horas asignadas.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200">Burnout</span>
                    <span>Registraste <strong>más del 100%</strong> (o registraste horas sin una asignación planificada).</span>
                  </li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignados/3.semanas-participacion.png"
                alt="Panel con el desglose de horas por semana y por día de un proyecto"
                caption="Semanas de participación de un proyecto"
              />
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className={`text-sm ${carbon.textPrimary}`}>
                  Las horas que ves aquí provienen de lo que registras en <strong>Registro
                  Diario</strong>. Si un proyecto no muestra horas, revisa que hayas registrado tu tiempo en
                  la semana correspondiente.
                </p>
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

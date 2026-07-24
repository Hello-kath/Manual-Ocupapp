'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CalendarRange, LayoutDashboard, Users, Clock, TrendingUp, History, Unlock, CalendarDays, Info } from 'lucide-react';
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
              note="El Administrador y el Asignador planifican la semana. El Colaborador NO ve este módulo: solo verá los proyectos asignados (en Registro Diario) una vez que la semana esté FINALIZADA. Al final de la sección se detalla qué puede y qué no el Asignador."
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
                <li className="flex gap-2"><span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 h-fit">Borrador / Editable</span> En planificación. Se puede modificar el tablero.</li>
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

            {/* Paso 1 - Panel de planificación (hub) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <LayoutDashboard className="w-5 h-5" />
                Panel de Planificación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Es la entrada del módulo. Ofrece tres accesos:
              </p>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                <li><strong>Semana en Curso</strong> — abre el cuadrante actual para ver el avance del equipo.</li>
                <li><strong>Planificación Semanal</strong> — arma la disponibilidad de las próximas semanas.</li>
                <li><strong>Historial de Planificación</strong> — consulta semanas pasadas, auditorías y métricas.</li>
              </ul>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    En la parte de <strong>Administración</strong> aparece <strong>Festivos nacionales</strong>,
                    que <strong>solo ve el Administrador</strong> (ver paso 7).
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/asignacion/1.panel-planificacion.png"
                alt="Panel de planificación con accesos a semana en curso, planificación e historial"
                caption="Panel de Planificación"
              />
            </div>

            {/* Paso 2 - Planificación semanal (asignar horas) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Users className="w-5 h-5" />
                Planificar y asignar horas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En <strong>Planificación Semanal Masiva</strong> se arma la semana. Cada colaborador tiene
                una tarjeta donde se <strong>busca y asigna un proyecto</strong> y se escriben las
                <strong> horas</strong> por proyecto. Arriba hay un <strong>buscador</strong> de
                colaborador, un <strong>resumen</strong> (colaboradores, horas planificadas, proyectos, sin
                asignaciones) y ordenamiento por horas (ascendente/descendente).
              </p>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                <li>Si la semana tiene un <strong>festivo</strong>, se reduce la capacidad (8 h por festivo) y se avisa.</li>
                <li><strong>&quot;Finalizar proyección&quot;</strong> cierra la planificación (pasa a Finalizada); <strong>&quot;Guardar planificación&quot;</strong> guarda el avance sin cerrarla.</li>
              </ul>
              <ManualImage
                src="/manuales/ocupapp/asignacion/2.planificacion-semanal.png"
                alt="Tablero de planificación semanal masiva con asignación de proyectos y horas"
                caption="Planificación Semanal Masiva"
              />
            </div>

            {/* Paso 3 - Horas extra (admin) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Clock className="w-5 h-5" />
                Asignar horas extra (solo Administrador)
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El botón <strong>&quot;Agregar horas extra&quot;</strong> de cada tarjeta solo lo ve el
                    <strong> Administrador</strong>. El Asignador no gestiona horas extra.
                  </p>
                </div>
              </div>
              <p className={`${carbon.textPrimary} mb-4`}>
                Se definen horas extra por proyecto. <strong>Con fecha</strong>, aplican solo ese día;
                <strong> sin fecha</strong>, aplican a toda la semana. Las horas extra permiten al
                colaborador superar el tope de 8 h/día en el registro.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion/3.horas-extra.png"
                alt="Modal para asignar horas extra por proyecto"
                caption="Horas Extra (Administrador)"
              />
            </div>

            {/* Paso 4 - Semana en curso / comparativa */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <TrendingUp className="w-5 h-5" />
                Semana en curso — Comparativa
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                La <strong>Comparativa Semanal</strong> muestra, por colaborador, las horas
                <strong> proyectadas</strong> frente a las <strong>registradas</strong> y la
                <strong> diferencia</strong>, con un semáforo de estado (<strong>Crítico</strong>,
                <strong> Rezagado</strong>, <strong>En ritmo</strong>). Al abrir un colaborador se ve el
                avance de la semana, el detalle por proyecto y por día.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion/4.comparativa-semanal.png"
                alt="Comparativa semanal de horas proyectadas vs registradas por colaborador"
                caption="Comparativa de la Semana en Curso"
              />
            </div>

            {/* Paso 5 - Historial de planificaciones */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <History className="w-5 h-5" />
                Historial de Planificaciones
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Lista todas las semanas con su estado (Borrador, En curso/Actual, Finalizada). Al abrir una
                semana se ve su <strong>Carga total</strong>, <strong>Horas extra</strong> y
                <strong> Alertas</strong>, y el <strong>Desglose de Colaboradores</strong> (horas ideales,
                horas extra y registradas por proyecto). Con <strong>&quot;Editar semana&quot;</strong> se
                vuelve a la planificación cuando aún es editable.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion/5.historial-planificaciones.png"
                alt="Historial de planificaciones con el desglose de colaboradores de una semana"
                caption="Historial de Planificaciones"
              />
            </div>

            {/* Paso 6 - Crear siguiente semana + auditoría de desbloqueos */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <Unlock className="w-5 h-5" />
                Crear siguiente semana y desbloqueos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al pie del historial está <strong>&quot;Crear siguiente semana&quot;</strong> (disponible una
                vez finalizada la semana actual) y la <strong>Auditoría de Desbloqueos</strong>.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    <strong>Desbloquear/bloquear</strong> una semana ya cerrada (para que un colaborador
                    registre tarde) y ver la <strong>Auditoría de Desbloqueos</strong> son acciones
                    <strong> solo del Administrador</strong> (marcadas como <em>&quot;SOLO ADMINS&quot;</em>).
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/asignacion/6.crear-semana-auditoria.png"
                alt="Crear siguiente semana y auditoría de desbloqueos (solo admins)"
                caption="Crear siguiente semana y Auditoría de Desbloqueos"
              />
            </div>

            {/* Paso 7 - Festivos (admin) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                <CalendarDays className="w-5 h-5" />
                Festivos nacionales (solo Administrador)
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Desde <strong>Administración → Festivos nacionales</strong> (en el Panel), el Administrador
                consulta y <strong>sincroniza</strong> los días festivos con la API nacional. Solo cuentan
                los festivos de <strong>lunes a viernes</strong>, y cada festivo <strong>reduce 8 h</strong>
                de la capacidad de esa semana en la planificación.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Esta opción <strong>no está disponible para el Asignador</strong>.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/asignacion/7.festivos.png"
                alt="Listado de festivos nacionales con la opción de sincronizar"
                caption="Festivos nacionales — Sincronizar"
              />
            </div>

            {/* Resumen de acceso por rol */}
            <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
              <p className={`text-sm font-semibold ${carbon.textPrimary} mb-3`}>
                ¿Qué puede el Asignador en este módulo?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-3">
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-1`}>Sí puede</p>
                  <ul className={`list-disc list-inside ml-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li>Ver el Panel de Planificación</li>
                    <li>Crear/planificar y editar la semana, asignar proyectos y horas</li>
                    <li>Finalizar la semana</li>
                    <li>Ver la Comparativa de la semana en curso</li>
                    <li>Ver el Historial de Planificaciones</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-3">
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-1`}>No puede (solo Admin)</p>
                  <ul className={`list-disc list-inside ml-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li>Gestionar horas extra</li>
                    <li>Desbloquear/bloquear semanas</li>
                    <li>Ver la Auditoría de Desbloqueos</li>
                    <li>Sincronizar los festivos nacionales</li>
                  </ul>
                </div>
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

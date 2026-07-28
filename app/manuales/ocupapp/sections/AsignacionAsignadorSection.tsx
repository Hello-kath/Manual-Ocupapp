'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CalendarRange, LayoutDashboard, PlayCircle, Users, TrendingUp, History, CalendarPlus, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function AsignacionAsignadorSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="asignacion-asignador">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <CalendarRange className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Asignación Semanal</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="asignacion-asignador" className="space-y-8 pt-4">

            <RoleAccess
              roles={['asignador']}
              note="Vista del Asignador. Planifica la semana igual que el Administrador (asignar proyectos y horas, finalizar, ver comparativa e historial, crear la siguiente semana), pero NO gestiona horas extra, NO desbloquea/bloquea semanas, NO ve la Auditoría de Desbloqueos ni sincroniza los festivos nacionales (esas acciones son solo del Administrador)."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Planificación semanal (Asignador)</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El Asignador define, semana a semana, qué colaboradores trabajan en qué proyectos y cuántas
                horas. Al <strong>Finalizar</strong> la semana se habilita el registro de horas de los
                colaboradores y la creación de la siguiente semana.
              </p>
            </div>

            {/* Paso 1 - Panel de planificación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <LayoutDashboard className="w-5 h-5" />
                Panel de Planificación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Es la entrada del módulo, con tres accesos: <strong>Historial de Planificación</strong>,
                <strong> Semana en Curso</strong> y <strong>Planificación Semanal</strong>. El Asignador
                <strong> no ve</strong> la sección de Administración (Festivos nacionales).
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion-asignador/1.panel-planificacion.png"
                alt="Panel de planificación del Asignador (sin Festivos)"
                caption="Panel de Planificación (vista Asignador)"
              />
            </div>

            {/* Paso 2 - Semana en curso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <PlayCircle className="w-5 h-5" />
                Semana en curso
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Desde <strong>&quot;Semana en Curso&quot;</strong> (o el botón <strong>&quot;Ir a semana en
                curso&quot;</strong>) se abre el cuadrante de la semana actual para ver y ajustar la carga
                del equipo en tiempo real, y guardar cambios.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion-asignador/2.semana-en-curso.png"
                alt="Cuadrante de la semana en curso (vista Asignador)"
                caption="Semana en curso"
              />
            </div>

            {/* Paso 3 - Planificar y asignar horas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Users className="w-5 h-5" />
                Planificar y asignar horas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En <strong>Planificación Semanal Masiva</strong> se arma la semana: por cada colaborador se
                busca y asigna un <strong>proyecto</strong> y se escriben las <strong>horas</strong>. Con
                <strong> &quot;Guardar planificación&quot;</strong> se guarda el avance y con
                <strong> &quot;Finalizar proyección&quot;</strong> se cierra la semana. El Asignador
                <strong> no ve</strong> el botón de horas extra.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion-asignador/3.planificacion-semanal.png"
                alt="Planificación semanal masiva (vista Asignador, sin horas extra)"
                caption="Planificación Semanal Masiva (vista Asignador)"
              />
            </div>

            {/* Paso 4 - Comparativa */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <TrendingUp className="w-5 h-5" />
                Comparativa Semanal
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Muestra, por colaborador, las horas <strong>proyectadas</strong> frente a las
                <strong> registradas</strong> y la diferencia, con un semáforo de estado (Crítico, Rezagado,
                En ritmo). Al abrir un colaborador se ve su avance de la semana, por proyecto y por día.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion-asignador/4.comparativa-semanal.png"
                alt="Comparativa semanal proyectadas vs registradas (vista Asignador)"
                caption="Comparativa de la Semana en Curso"
              />
            </div>

            {/* Paso 5 - Historial */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <History className="w-5 h-5" />
                Historial de Planificaciones
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Lista las semanas con su estado (Borrador, Actual/En curso, Finalizada) y, al abrir una,
                su <strong>Carga total</strong>, <strong>Horas extra</strong>, <strong>Alertas</strong> y el
                <strong> Desglose de Colaboradores</strong>. Con <strong>&quot;Editar semana&quot;</strong> se
                vuelve a la planificación cuando aún es editable. El Asignador <strong>no</strong> desbloquea
                semanas cerradas ni ve la Auditoría de Desbloqueos.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion-asignador/5.historial-planificaciones.png"
                alt="Historial de planificaciones (vista Asignador)"
                caption="Historial de Planificaciones (vista Asignador)"
              />
            </div>

            {/* Paso 6 - Crear siguiente semana */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <CalendarPlus className="w-5 h-5" />
                Crear la siguiente semana
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al pie del historial, el botón <strong>&quot;Crear siguiente semana&quot;</strong> genera la
                próxima semana de planificación (disponible una vez finalizada la semana actual) y abre su
                tablero para asignar proyectos y horas.
              </p>
              <ManualImage
                src="/manuales/ocupapp/asignacion-asignador/6.crear-siguiente-semana.png"
                alt="Crear la siguiente semana de planificación (vista Asignador)"
                caption="Crear siguiente semana"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

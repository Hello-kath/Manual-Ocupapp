'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FolderKanban, Filter, UserPlus, CheckCircle2, Activity, Info, Users } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function ProyectosAsignadorSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="proyectos-asignador">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <FolderKanban className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Proyectos</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="proyectos-asignador" className="space-y-8 pt-4">

            <RoleAccess
              roles={['asignador']}
              note="Vista del Asignador. Usa el mismo módulo de Proyectos que el Administrador, pero NO puede crear ni editar proyectos: solo consultar, filtrar, asignar colaboradores, cambiar el estado y ver el detalle."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Proyectos para el Asignador</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El Asignador consulta los proyectos para planificar la semana. Puede asignar colaboradores
                y cambiar el estado, pero <strong>no ve el botón &quot;Nuevo Proyecto&quot; ni la edición
                del proyecto</strong> (esas acciones son solo del Administrador).
              </p>
            </div>

            {/* Paso 1 - Lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <FolderKanban className="w-5 h-5" />
                Lista de Proyectos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El módulo <strong>Gestión de Proyectos</strong> muestra la tabla con todos los proyectos
                (nombre, cliente, cronograma y estado). El Asignador ve las acciones de asignar colaborador
                y ver detalle, pero <strong>no</strong> el botón de crear.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignador/1.lista-proyectos.png"
                alt="Lista de proyectos vista por el Asignador (sin botón Nuevo Proyecto)"
                caption="Gestión de Proyectos (vista Asignador)"
              />
            </div>

            {/* Paso 2 - Filtros */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Filter className="w-5 h-5" />
                Buscar y filtrar proyectos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Usa el <strong>buscador</strong> o el panel de <strong>filtros</strong> para acotar la lista
                por <strong>Cliente</strong>, <strong>Estado</strong>, <strong>KAM</strong> y <strong>PM</strong>.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignador/2.filtros.png"
                alt="Panel de filtros de proyectos (vista Asignador)"
                caption="Filtros de proyectos"
              />
            </div>

            {/* Paso 3 - Asignar colaboradores */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <UserPlus className="w-5 h-5" />
                Asignar colaboradores
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En la fila del proyecto, el Asignador usa el ícono de <strong>asignar colaborador</strong>
                para abrir el modal <strong>&quot;Asignar Colaboradores&quot;</strong>, buscar y seleccionar
                personas, y confirmar.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignador/3.asignar-colaborador.png"
                alt="Modal para asignar colaboradores (vista Asignador)"
                caption="Asignar Colaboradores"
              />
            </div>

            {/* Paso 4 - Mensaje de éxito */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <CheckCircle2 className="w-5 h-5" />
                Confirmación de la asignación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al guardar, el sistema muestra un mensaje de éxito confirmando que el o los colaboradores
                fueron asignados al proyecto.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignador/4.asignacion-exito.png"
                alt="Mensaje de éxito tras asignar un colaborador (vista Asignador)"
                caption="Colaboradores asignados correctamente"
              />
            </div>

            {/* Paso 5 - Cambiar estado */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <Activity className="w-5 h-5" />
                Cambiar el estado de un proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Desde la columna <strong>Estado</strong> se despliega la lista para cambiar el estado del
                proyecto (Por empezar, En progreso, Finalizado, Cancelado o Garantía).
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignador/5.cambiar-estado.png"
                alt="Cambiar el estado de un proyecto (vista Asignador)"
                caption="Cambiar estado de un proyecto"
              />
            </div>

            {/* Paso 6 - Detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <Info className="w-5 h-5" />
                Detalle del proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El detalle muestra la información completa del proyecto: cliente, estado y avance,
                cronograma, responsables <strong>KAM</strong> y <strong>PM</strong>, y los
                <strong> colaboradores asignados</strong>.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignador/6.detalle-proyecto.png"
                alt="Detalle del proyecto (vista Asignador)"
                caption="Detalle del Proyecto"
              />
            </div>

            {/* Paso 7 - Asignar desde el detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                <Users className="w-5 h-5" />
                Asignar colaboradores desde el detalle
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Dentro del detalle, el botón <strong>&quot;Agregar colaborador&quot;</strong> abre el mismo
                modal de asignación para sumar personas al proyecto.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos-asignador/7.asignar-desde-detalle.png"
                alt="Agregar colaboradores desde el detalle (vista Asignador)"
                caption="Agregar colaborador desde el detalle"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

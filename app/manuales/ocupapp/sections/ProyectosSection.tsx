'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FolderKanban, Plus, Pencil, Filter, UserPlus, CheckCircle2, Activity, Info, Users } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function ProyectosSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="proyectos">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <FolderKanban className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Proyectos</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="proyectos" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin', 'asignador']}
              note="Administrador y Asignador usan el mismo módulo de Proyectos (misma lista, filtros y detalle), pero con permisos distintos. Administrador: crear y editar proyectos, cambiar su estado y asignar colaboradores. Asignador: consultar, filtrar, cambiar el estado y asignar colaboradores; no puede crear ni editar proyectos. El Colaborador NO ve este módulo."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Gestión de Proyectos</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Un proyecto pertenece a un cliente y tiene un estado, cronograma (fechas) y colaboradores
                asignados. Los proyectos son la base de la planificación semanal y del registro de horas.
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
                El módulo <strong>Gestión de Proyectos</strong> muestra una tabla con todos los
                proyectos: nombre, cliente, cronograma, estado y las acciones disponibles (asignar
                colaborador y ver detalle). Arriba encuentras el buscador y el botón de filtros.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos/1.lista-proyectos.png"
                alt="Tabla con la lista de proyectos, su cliente, cronograma y estado"
                caption="Gestión de Proyectos — lista general"
              />
            </div>

            {/* Paso 2 - Crear (solo admin) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Plus className="w-5 h-5" />
                Crear Proyecto (solo Administrador)
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El botón <strong>&quot;Nuevo Proyecto&quot;</strong> solo está disponible para el
                    <strong> Administrador</strong>. El Asignador no puede crear proyectos.
                  </p>
                </div>
              </div>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>&quot;Nuevo Proyecto&quot;</strong></li>
                <li>Completa los datos en el modal:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Título</strong> y <strong>descripción</strong> del proyecto</li>
                    <li><strong>Cliente</strong> y <strong>estado</strong> inicial</li>
                    <li><strong>Fecha de inicio</strong> y <strong>fecha de finalización</strong></li>
                    <li>Opcionalmente, <strong>KAM</strong>, <strong>PM</strong> y <strong>asignación de equipo</strong></li>
                  </ul>
                </li>
                <li>Haz clic en <strong>&quot;Guardar Proyecto&quot;</strong></li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/proyectos/2.nuevo-proyecto.png"
                alt="Modal para crear un nuevo proyecto"
                caption="Modal Nuevo Proyecto (Administrador)"
              />
            </div>

            {/* Paso 3 - Editar (solo admin) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Pencil className="w-5 h-5" />
                Editar Proyecto (solo Administrador)
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Editar los datos de un proyecto es una acción del <strong>Administrador</strong>. En la
                    fila del proyecto, el Administrador ve el ícono de <strong>editar</strong>.
                  </p>
                </div>
              </div>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>En la fila del proyecto, haz clic en el ícono de <strong>editar</strong></li>
                <li>Actualiza los datos en el modal <strong>&quot;Editar Proyecto&quot;</strong> (título, descripción, cliente, estado, cronograma, KAM/PM, equipo y si el proyecto está activo)</li>
                <li>Haz clic en <strong>&quot;Guardar Cambios&quot;</strong></li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/proyectos/3.editar-proyecto.png"
                alt="Modal para editar un proyecto existente"
                caption="Modal Editar Proyecto (Administrador)"
              />
            </div>

            {/* Paso 4 - Filtros */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Filter className="w-5 h-5" />
                Buscar y filtrar proyectos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Usa el <strong>buscador</strong> por nombre, cliente o estado, o abre el panel de
                <strong> filtros</strong> (ícono a la derecha del buscador). El panel permite filtrar por
                <strong> Cliente</strong>, <strong>Estado</strong>, <strong>KAM</strong> y <strong>PM</strong>.
                Luego pulsa <strong>&quot;Limpiar filtros&quot;</strong> para volver a ver todo.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos/4.filtros.png"
                alt="Panel de filtros de proyectos por cliente, estado, KAM y PM"
                caption="Filtros de proyectos"
              />
            </div>

            {/* Paso 5 - Asignar colaborador desde la lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <UserPlus className="w-5 h-5" />
                Asignar colaboradores a un proyecto
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>En la fila del proyecto, haz clic en el ícono de <strong>asignar colaborador</strong></li>
                <li>En el modal <strong>&quot;Asignar Colaboradores&quot;</strong>, busca y selecciona una o varias personas</li>
                <li>Confirma la asignación</li>
              </ol>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-ocupapp-purple mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El ícono de asignar en la fila lo ve el <strong>Asignador</strong>. El
                    <strong> Administrador</strong> asigna colaboradores desde el <strong>detalle</strong>
                    del proyecto (ver más abajo). Ambos roles pueden asignar colaboradores.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/proyectos/5.asignar-colaborador.png"
                alt="Modal para asignar colaboradores a un proyecto desde la lista"
                caption="Asignar Colaboradores (vista del Asignador)"
              />
            </div>

            {/* Paso 6 - Mensaje de éxito */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <CheckCircle2 className="w-5 h-5" />
                Confirmación de la asignación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al guardar, el sistema muestra un mensaje de éxito confirmando que el o los colaboradores
                fueron asignados al proyecto.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos/6.asignacion-exito.png"
                alt="Mensaje de éxito tras asignar un colaborador"
                caption="Colaboradores asignados correctamente"
              />
            </div>

            {/* Paso 7 - Cambiar estado */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                <Activity className="w-5 h-5" />
                Cambiar el estado de un proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Desde la columna <strong>Estado</strong> de la tabla se despliega la lista para cambiar el
                estado del proyecto directamente. <strong>Administrador y Asignador</strong> pueden cambiar
                el estado. El estado evoluciona en el tiempo y determina cómo se muestra el proyecto en la
                planificación.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Estados posibles</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100">Por empezar</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200">En progreso</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">Finalizado</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200">Cancelado</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">Garantía</span>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/proyectos/7.cambiar-estado.png"
                alt="Menú desplegable para cambiar el estado de un proyecto en la lista"
                caption="Cambiar estado de un proyecto"
              />
            </div>

            {/* Paso 8 - Detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">8</span>
                <Info className="w-5 h-5" />
                Detalle del proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al abrir un proyecto ves su información completa: cliente, estado actual y avance,
                cronograma, los responsables <strong>KAM</strong> y <strong>PM</strong>, y la tabla de
                <strong> colaboradores asignados</strong> con su rol y disponibilidad.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos/8.detalle-proyecto.png"
                alt="Detalle del proyecto con avance, KAM/PM y colaboradores asignados"
                caption="Detalle del Proyecto"
              />
            </div>

            {/* Paso 9 - Asignar desde el detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">9</span>
                <Users className="w-5 h-5" />
                Asignar colaboradores desde el detalle
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Dentro del detalle, el botón <strong>&quot;Agregar colaborador&quot;</strong> abre el mismo
                modal de asignación, para sumar personas al proyecto sin volver a la lista.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos/9.asignar-desde-detalle.png"
                alt="Modal para agregar colaboradores desde el detalle del proyecto"
                caption="Agregar colaborador desde el detalle"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

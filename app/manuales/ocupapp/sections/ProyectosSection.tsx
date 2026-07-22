'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FolderKanban, Plus, Pencil, Trash2, Info, Activity, Users } from 'lucide-react';
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
              note="El Administrador puede crear, editar y eliminar proyectos. El Asignador accede al módulo para consultarlos y usarlos en la planificación semanal. El Colaborador NO ve este módulo."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Gestión de Proyectos</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Un proyecto pertenece a un cliente y tiene un estado, fechas, monto y colaboradores
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
                Tabla con todos los proyectos, su cliente y su estado actual. Incluye búsqueda y las
                acciones de gestión.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos/1.lista-proyectos.png"
                alt="Tabla con la lista de proyectos y sus estados"
                caption="Lista de Proyectos"
              />
            </div>

            {/* Paso 2 - Crear */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Plus className="w-5 h-5" />
                Crear Proyecto
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>&quot;Nuevo Proyecto&quot;</strong></li>
                <li>Completa los datos en el modal:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Nombre</strong> y <strong>descripción</strong> del proyecto</li>
                    <li><strong>Cliente</strong> asociado</li>
                    <li><strong>Estado</strong>, <strong>fechas</strong> de inicio/fin y <strong>monto</strong></li>
                  </ul>
                </li>
                <li>Haz clic en <strong>&quot;Guardar&quot;</strong></li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/proyectos/2.crear-proyecto.png"
                alt="Modal para crear un nuevo proyecto"
                caption="Modal Nuevo Proyecto"
              />
            </div>

            {/* Paso 3 - Editar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Pencil className="w-5 h-5" />
                Editar Proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el ícono de <strong>editar</strong>, modifica los datos en el modal precargado
                y guarda los cambios.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos/3.editar-proyecto.png"
                alt="Modal para editar un proyecto"
                caption="Modal Editar Proyecto"
              />
            </div>

            {/* Paso 4 - Estados e historial */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Activity className="w-5 h-5" />
                Estados del proyecto e historial
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Cada proyecto tiene un estado que evoluciona en el tiempo. Los cambios de estado quedan
                guardados en un <strong>historial</strong> con la fecha y las notas.
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
                src="/manuales/ocupapp/proyectos/4.estados-historial.png"
                alt="Cambio de estado del proyecto e historial de estados"
                caption="Estados e historial del proyecto"
              />
            </div>

            {/* Paso 5 - Detalle y colaboradores asignados */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <Users className="w-5 h-5" />
                Detalle y colaboradores del proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El detalle del proyecto muestra su información completa y los <strong>colaboradores
                asignados</strong>. La asignación de horas por semana se gestiona desde el módulo de
                Asignación Semanal.
              </p>
              <ManualImage
                src="/manuales/ocupapp/proyectos/5.detalle-proyecto.png"
                alt="Detalle del proyecto con colaboradores asignados"
                caption="Detalle del Proyecto"
              />
            </div>

            {/* Paso 6 - Eliminar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Proyecto
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Acción disponible solo para el <strong>Administrador</strong>. Confirma en el modal
                    antes de eliminar.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/proyectos/6.eliminar-proyecto.png"
                alt="Modal de confirmación para eliminar un proyecto"
                caption="Confirmación — Eliminar Proyecto"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

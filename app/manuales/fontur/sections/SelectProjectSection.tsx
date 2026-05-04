'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FolderOpen, Plus, Pencil, MousePointerClick, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function SelectProjectSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="select-project">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <FolderOpen className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Selección de Proyecto</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="select-project" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Gestión de proyectos</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Esta pantalla aparece después del login cuando el usuario tiene acceso a más de un proyecto.
                Permite seleccionar el proyecto activo y, si tienes los permisos necesarios, crear o editar proyectos.
              </p>
            </div>

            {/* Paso 1 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Vista Principal
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al ingresar, el sistema muestra un saludo con tu nombre y rol, seguido de las tarjetas de los proyectos disponibles.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>La pantalla contiene:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Saludo con nombre del usuario y rol asignado</li>
                  <li>Indicadores: número de proyectos disponibles y proyectos activos</li>
                  <li>Tarjeta <strong>"Crear Nuevo Proyecto"</strong> (solo Super Administrador)</li>
                  <li>Tarjetas de cada proyecto con: nombre, descripción, número de miembros y beneficiarios, estado e íconos de edición y activación</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/select-project/select-project-vista-principal.png"
                alt="Vista principal de selección de proyecto con tarjetas disponibles"
                caption="Vista principal con los proyectos disponibles para el usuario"
              />
            </div>

            {/* Paso 2 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <MousePointerClick className="w-5 h-5" />
                Seleccionar un Proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para ingresar a trabajar en un proyecto:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic sobre la tarjeta del proyecto deseado</li>
                <li>El sistema carga el contexto del proyecto seleccionado</li>
                <li>Eres redirigido automáticamente al <strong>Home</strong> del proyecto</li>
              </ol>
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple p-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-fontur-purple mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El estado de cada proyecto se indica en la esquina superior derecha de la tarjeta:
                    <strong> Activo</strong> (verde) o <strong>Planificación</strong> (azul).
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Plus className="w-5 h-5" />
                Crear Nuevo Proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-2`}>
                Disponible únicamente para el rol <strong>Super Administrador</strong>.
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en la tarjeta <strong>"Crear Nuevo Proyecto"</strong></li>
                <li>Se abre el modal <strong>"Crear Proyecto"</strong> con las siguientes secciones:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Información General:</strong> Nombre del proyecto, Descripción y Estado</li>
                    <li><strong>Objetivos:</strong> Objetivo general, Objetivos específicos (uno por línea)</li>
                    <li><strong>Equipo y Beneficiarios</strong></li>
                  </ul>
                </li>
                <li>Completa todos los campos requeridos (marcados con <span className="text-red-500">*</span>)</li>
                <li>Haz clic en <strong>"Aceptar"</strong> para guardar, o <strong>"Cancelar"</strong> para cerrar sin guardar</li>
                <li>El nuevo proyecto aparecerá como tarjeta en la lista</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/select-project/select-project-crear-modal.png"
                alt="Modal de creación de nuevo proyecto con campos de información general y objetivos"
                caption="Modal para crear un nuevo proyecto"
              />
            </div>

            {/* Paso 4 */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Pencil className="w-5 h-5" />
                Editar Proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-2`}>
                Disponible únicamente para el rol <strong>Super Administrador</strong>.
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>En la tarjeta del proyecto, haz clic en el ícono de <strong>lápiz</strong> (editar)</li>
                <li>Se abre el modal <strong>"Editar Proyecto"</strong> con los datos actuales precargados:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Información General:</strong> Nombre, Descripción y Estado</li>
                    <li><strong>Objetivos:</strong> Objetivo general y Objetivos específicos</li>
                    <li><strong>Equipo y Beneficiarios</strong></li>
                  </ul>
                </li>
                <li>Modifica los campos que necesites</li>
                <li>Haz clic en <strong>"Aceptar"</strong> para guardar los cambios, o <strong>"Cancelar"</strong> para descartarlos</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/select-project/select-project-editar-modal.png"
                alt="Modal de edición de proyecto con datos existentes precargados"
                caption="Modal para editar un proyecto existente"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

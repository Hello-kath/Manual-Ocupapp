'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Users, Plus, Pencil, Trash2, Eye } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function AsignacionesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="asignaciones">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Gestionar Asignaciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="asignaciones" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Gestión de Asignaciones</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Este módulo permite organizar a los asesores y sus beneficiarios a través de
                <strong> Grupos de Asignación</strong>. Primero se crean los grupos y luego se
                asignan asesores con sus respectivos beneficiarios dentro de cada grupo.
                Accede desde el menú lateral en <strong>Gestionar Asignaciones</strong>.
              </p>
            </div>

            {/* ── GRUPOS DE ASIGNACIÓN ── */}
            <div className={`${carbon.layer01} p-4 border-l-4 border-fontur-purple dark:border-fontur-purple-light rounded-lg`}>
              <p className={`text-sm font-semibold ${carbon.textPrimary}`}>Sección: Grupos de Asignación</p>
            </div>

            {/* Paso 1 - Lista de grupos */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <Users className="w-5 h-5" />
                Tabla de Grupos de Asignación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al ingresar al módulo se muestra la <strong>Tabla de Grupos de Asignación</strong> con
                las columnas: <strong>Nombre</strong>, <strong>Descripción</strong> y <strong>Acciones</strong>.
                Incluye un campo de búsqueda por nombre o descripción, paginación de 10 por página y el
                botón <strong>"+ Crear Grupo"</strong> en la esquina superior derecha.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Haz clic sobre el <strong>nombre del grupo</strong> para ver las asignaciones que contiene</li>
                  <li>Ícono <strong>lápiz</strong> — editar el nombre y descripción del grupo</li>
                  <li>Botón <strong>"Limpiar filtro"</strong> — reinicia la búsqueda activa</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/asignaciones/1.lista-grupos.png"
                alt="Tabla de grupos de asignación con columnas nombre, descripción y acciones"
                caption="Tabla de Grupos de Asignación"
              />
            </div>

            {/* Paso 2 - Crear grupo */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Plus className="w-5 h-5" />
                Crear Grupo de Asignación
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong>"+ Crear Grupo"</strong> en la esquina superior derecha</li>
                <li>Se abre el modal <strong>"Crear Nuevo Grupo de Asignación"</strong> con los campos:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Nombre</strong> (obligatorio) — nombre identificador del grupo</li>
                    <li><strong>Descripción</strong> — descripción del grupo (máximo 500 caracteres)</li>
                  </ul>
                </li>
                <li>Haz clic en <strong>"Aceptar"</strong> para crear el grupo, o <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/asignaciones/2.crear-grupo.png"
                alt="Modal para crear un nuevo grupo de asignación con campos nombre y descripción"
                caption="Modal Crear Nuevo Grupo de Asignación"
              />
            </div>

            {/* Paso 3 - Editar grupo */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Pencil className="w-5 h-5" />
                Editar Grupo de Asignación
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>lápiz</strong> en la fila del grupo que deseas modificar</li>
                <li>Se abre el modal <strong>"Editar Grupo"</strong> con los datos actuales precargados</li>
                <li>Modifica el <strong>Nombre</strong> y/o la <strong>Descripción</strong> según sea necesario</li>
                <li>Haz clic en <strong>"Aceptar"</strong> para guardar los cambios, o <strong>"Cancelar"</strong> para cerrar sin guardar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/asignaciones/3.editar-grupo.png"
                alt="Modal para editar el nombre y descripción de un grupo de asignación existente"
                caption="Modal Editar Grupo de Asignación"
              />
            </div>

            {/* ── ASIGNACIONES DENTRO DE UN GRUPO ── */}
            <div className={`${carbon.layer01} p-4 border-l-4 border-fontur-purple dark:border-fontur-purple-light rounded-lg`}>
              <p className={`text-sm font-semibold ${carbon.textPrimary}`}>Sección: Asignaciones del Grupo</p>
            </div>

            {/* Paso 4 - Ver asignaciones del grupo */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Eye className="w-5 h-5" />
                Ver Asignaciones del Grupo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic sobre el <strong>nombre de un grupo</strong> en la tabla para acceder a la vista de
                detalle <strong>"Asignaciones del Grupo [Nombre]"</strong>. Muestra una tabla con las
                asignaciones registradas y las columnas:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Asesor</strong> — nombre completo del asesor asignado</li>
                  <li><strong>Departamento Asesor</strong> — departamento del asesor</li>
                  <li><strong>Beneficiarios</strong> — lista de beneficiarios asociados a esa asignación</li>
                  <li><strong>Tipo de beneficiario</strong> — categoría del beneficiario (ej. Grupal)</li>
                  <li><strong>Observaciones</strong> — notas adicionales de la asignación</li>
                  <li><strong>Acciones</strong> — íconos de editar (lápiz) y eliminar (papelera)</li>
                </ul>
              </div>
              <p className={`${carbon.textPrimary} mb-4`}>
                En la parte superior aparecen los botones <strong>"+ Nueva Asignación"</strong>,
                <strong>"Crear Asignación"</strong> y <strong>"Map"</strong>, junto a un campo de búsqueda por nombre.
              </p>
              <ManualImage
                src="/manuales/fontur/asignaciones/4.ver-asignaciones-grupo.png"
                alt="Vista de asignaciones dentro de un grupo con tabla de asesor, beneficiarios y acciones"
                caption="Asignaciones del Grupo"
              />
            </div>

            {/* Paso 5 - Crear asignación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <Plus className="w-5 h-5" />
                Crear Nueva Asignación
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Desde la vista del grupo, haz clic en <strong>"+ Nueva Asignación"</strong></li>
                <li>Se abre el modal <strong>"Crear nueva asignación"</strong> con los campos:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Tipo de beneficiario</strong> (obligatorio) — selector del tipo (ej. Grupal)</li>
                    <li><strong>Asesor</strong> (obligatorio) — selector con los asesores disponibles del proyecto</li>
                    <li><strong>Beneficiario(s)</strong> (obligatorio) — selector múltiple de beneficiarios</li>
                    <li><strong>Observación</strong> — campo de texto libre para notas adicionales</li>
                  </ul>
                </li>
                <li>Haz clic en <strong>"Aceptar"</strong> para crear la asignación, o <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/asignaciones/5.crear-asignacion.png"
                alt="Modal para crear una nueva asignación con tipo de beneficiario, asesor, beneficiarios y observación"
                caption="Modal Crear Nueva Asignación"
              />
            </div>

            {/* Paso 6 - Editar asignación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <Pencil className="w-5 h-5" />
                Editar Asignación
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>lápiz</strong> en la fila de la asignación que deseas modificar</li>
                <li>Se abre el modal <strong>"Editar asignación"</strong> con los datos actuales precargados:
                  tipo de beneficiario, asesor, beneficiarios seleccionados y observación</li>
                <li>Realiza los cambios necesarios (puedes agregar o quitar beneficiarios del selector múltiple)</li>
                <li>Haz clic en <strong>"Aceptar"</strong> para guardar, o <strong>"Cancelar"</strong> para cerrar sin guardar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/asignaciones/6.editar-asignacion.png"
                alt="Modal para editar una asignación con datos precargados de asesor y beneficiarios"
                caption="Modal Editar Asignación"
              />
            </div>

            {/* Paso 7 - Eliminar asignación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Asignación
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>papelera</strong> en la fila de la asignación a eliminar</li>
                <li>Aparece el tooltip <em>"Eliminar asignación"</em> al pasar el cursor sobre el ícono</li>
                <li>Al hacer clic se solicita confirmación — confirma para eliminar la asignación del grupo</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/asignaciones/7.eliminar-asignacion.png"
                alt="Ícono de papelera resaltado en la fila de una asignación con tooltip de eliminar"
                caption="Eliminar Asignación"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

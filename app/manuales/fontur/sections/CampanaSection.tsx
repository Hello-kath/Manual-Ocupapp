'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BarChart2, AlertTriangle, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function CampanaSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="campana">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <BarChart2 className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Gestionar Campaña</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="campana" className="space-y-10 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Módulo de Campañas</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Las campañas son el núcleo del sistema. Permiten organizar actividades de diagnóstico,
                evaluación y fortalecimiento para los beneficiarios. Cada campaña tiene instrumentos
                de medición, asesores asignados y un seguimiento de avances.
              </p>
            </div>

            {/* ── SECCIÓN 1: LISTA DE CAMPAÑAS ── */}
            <div>
              <h2 className={`text-2xl font-bold ${carbon.textPrimary} mb-6 pb-2 border-b border-fontur-purple`}>
                Lista de Campañas
              </h2>

              {/* Paso 1 */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                  Vista Principal
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Al ingresar al módulo <strong>Gestionar Campañas</strong> desde el menú lateral, verás la tabla con todas las campañas del proyecto.
                </p>
                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>La tabla muestra las siguientes columnas:</p>
                  <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Nombre de la campaña</strong></li>
                    <li><strong>Tipo</strong> — Diagnóstico, Evaluación Experiencia, Encuestas, Plan de mejoramiento, Asignación de recursos</li>
                    <li><strong>Estado</strong> — Ejecutada, En curso, Planificada</li>
                    <li><strong>Fecha inicial</strong> y <strong>Fecha final</strong></li>
                    <li><strong>Acciones</strong> — ícono de eliminar</li>
                  </ul>
                </div>
                <p className={`${carbon.textPrimary} mb-4`}>
                  En la parte superior se encuentran los controles de <strong>Buscar</strong>, <strong>Filtrar por estado</strong>,
                  <strong> Filtrar por tipo</strong>, <strong>Limpiar filtros</strong>, <strong>+ Nueva campaña</strong> y <strong>Actualizar Tabla</strong>.
                </p>
                <ManualImage
                  src="/manuales/fontur/campana/1.lista-campanas.png"
                  alt="Vista principal de la lista de campañas"
                  caption="Lista de campañas del proyecto"
                />
              </div>

              {/* Paso 2 */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                  Crear Nueva Campaña
                </h3>
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>Haz clic en el botón <strong>"+ Nueva campaña"</strong></li>
                  <li>Se muestra el formulario <strong>"Crear una nueva Campaña"</strong> con los siguientes campos requeridos (<span className="text-red-500">*</span>):
                    <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                      <li><strong>Nombre de la Campaña</strong></li>
                      <li><strong>Departamento(s)</strong> — selección múltiple</li>
                      <li><strong>Descripción</strong></li>
                      <li><strong>Tipo de campaña</strong></li>
                      <li><strong>Fecha Inicio</strong> y <strong>Fecha fin</strong></li>
                      <li><strong>Tipo de beneficiario(s)</strong></li>
                    </ul>
                  </li>
                  <li>Completa todos los campos y haz clic en <strong>"Crear Campaña"</strong>, o en <strong>"Atrás"</strong> para cancelar</li>
                </ol>
                <ManualImage
                  src="/manuales/fontur/campana/2.crear-campana.png"
                  alt="Formulario de creación de una nueva campaña"
                  caption="Formulario para crear una nueva campaña"
                />
              </div>

              {/* Paso 3 */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                  Eliminar Campaña
                </h3>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className={`text-sm ${carbon.textPrimary}`}>
                      <strong>Esta acción no puede revertirse.</strong> La campaña será eliminada completamente del sistema.
                    </p>
                  </div>
                </div>
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>Haz clic en el ícono de <strong>papelera</strong> en la fila de la campaña</li>
                  <li>Se muestra el modal de confirmación: <em>"¿Estás seguro? La campaña será eliminada completamente."</em></li>
                  <li>Haz clic en <strong>"Aceptar"</strong> para confirmar, o en <strong>"Cancelar"</strong> para cerrar sin eliminar</li>
                </ol>
                <ManualImage
                  src="/manuales/fontur/campana/3.modal-eliminar-campana.png"
                  alt="Modal de confirmación para eliminar una campaña"
                  caption="Modal de confirmación de eliminación"
                />
              </div>
            </div>

            {/* ── SECCIÓN 2: DETALLE DE CAMPAÑA (ADMIN) ── */}
            <div>
              <h2 className={`text-2xl font-bold ${carbon.textPrimary} mb-6 pb-2 border-b border-fontur-purple`}>
                Detalle de Campaña
              </h2>
              <p className={`${carbon.textPrimary} mb-6`}>
                Al hacer clic sobre el nombre de una campaña en la lista, accedes a su detalle. La vista tiene cuatro tabs: <strong>Campaña</strong>, <strong>Beneficiarios</strong>, <strong>Asesores</strong> y <strong>Avances</strong>.
              </p>

              {/* Tab Campaña */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                  Tab Campaña — Editar e Instrumentos
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Muestra el formulario de edición con los datos actuales de la campaña. Modifica los campos necesarios y haz clic en <strong>"Actualizar Campaña"</strong>. El botón <strong>"Refrescar"</strong> recarga los datos sin guardar cambios.
                </p>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Debajo del formulario se encuentra la sección <strong>Instrumentos de medición</strong> con tres sub-pestañas:
                </p>
                <ManualImage
                  src="/manuales/fontur/campana/4.detalles-de-campana.png"
                  alt="Tab Campaña con formulario de edición e instrumentos de medición"
                  caption="Tab Campaña — formulario de edición e instrumentos"
                />

                {/* Instrumentos (Archivos) */}
                <h4 className={`text-lg font-semibold ${carbon.textPrimary} mt-6 mb-3`}>Instrumentos (Archivos)</h4>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Lista los archivos (PDF, DOCX, XLSX, etc.) asociados como instrumentos de la campaña. Cada archivo tiene acciones de <strong>descargar</strong>, <strong>previsualizar</strong> y <strong>eliminar</strong>.
                </p>
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>Haz clic en <strong>"+ Agregar Instrumentos"</strong></li>
                  <li>Se abre el modal <strong>"Tabla de Instrumentos"</strong> con todos los archivos disponibles del proyecto</li>
                  <li>Selecciona los archivos a agregar marcando su casilla</li>
                  <li>Haz clic en <strong>"Agregar Instrumentos"</strong> dentro del modal para confirmar</li>
                </ol>
                <ManualImage
                  src="/manuales/fontur/campana/5.instrumentos.png"
                  alt="Sub-pestaña Instrumentos con lista de archivos asociados"
                  caption="Instrumentos (Archivos) — lista de archivos de la campaña"
                />
                <ManualImage
                  src="/manuales/fontur/campana/6.agregar-instrumentos.png"
                  alt="Modal Tabla de Instrumentos para seleccionar archivos"
                  caption="Modal para agregar instrumentos a la campaña"
                />

                {/* Formularios (Encuestas) */}
                <h4 className={`text-lg font-semibold ${carbon.textPrimary} mt-6 mb-3`}>Formularios (Encuestas)</h4>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Gestiona los formularios de encuesta asociados a la campaña. Puedes <strong>agregar encuestas existentes</strong> o <strong>crear un nuevo formulario</strong>.
                </p>
                <ManualImage
                  src="/manuales/fontur/campana/7.formularios-list.png"
                  alt="Sub-pestaña Formularios con lista de encuestas"
                  caption="Formularios (Encuestas) — lista de formularios de la campaña"
                />

                <p className={`${carbon.textPrimary} mb-3 mt-4`}><strong>Agregar encuesta existente:</strong></p>
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>Haz clic en <strong>"+ Agregar Encuesta"</strong></li>
                  <li>Se abre el modal <strong>"Asignar Encuestas a la Campaña"</strong> con dos pestañas:
                    <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                      <li><strong>Asignar Encuestas</strong> — lista las encuestas disponibles para asignar</li>
                      <li><strong>Encuestas Asignadas</strong> — muestra las encuestas ya asignadas con opción de <strong>"Quitar"</strong></li>
                    </ul>
                  </li>
                  <li>Selecciona la encuesta y haz clic en <strong>"+ Asignar Encuesta"</strong></li>
                </ol>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className={`text-sm ${carbon.textPrimary}`}>
                      Solo se permite <strong>una encuesta asignada</strong> por campaña. Si ya hay una asignada, el sistema lo indicará con un aviso.
                    </p>
                  </div>
                </div>
                <ManualImage
                  src="/manuales/fontur/campana/8.agregar-encuesta.png"
                  alt="Modal para asignar encuestas a la campaña"
                  caption="Modal Asignar Encuestas — pestaña Asignar"
                />
                <ManualImage
                  src="/manuales/fontur/campana/9.encuestas-asiganadas.png"
                  alt="Modal mostrando las encuestas ya asignadas a la campaña"
                  caption="Modal Asignar Encuestas — pestaña Encuestas Asignadas"
                />

                <p className={`${carbon.textPrimary} mb-3 mt-6`}><strong>Crear nuevo formulario:</strong></p>
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>Haz clic en <strong>"Crear Formulario"</strong></li>
                  <li>Se abre el modal <strong>"Constructor de Formularios"</strong> con los campos:
                    <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                      <li><strong>Título del Formulario</strong></li>
                      <li><strong>Estado</strong> (Activa / Inactiva)</li>
                      <li><strong>Categorías</strong> — cada categoría puede tener múltiples preguntas</li>
                    </ul>
                  </li>
                  <li>Haz clic en <strong>"+ Agregar Categoría"</strong> para añadir secciones al formulario</li>
                  <li>Dentro de cada categoría, edita el título y haz clic en <strong>"+ Agregar Pregunta"</strong></li>
                  <li>Haz clic en <strong>"Crear Formulario"</strong> para guardar</li>
                </ol>
                <ManualImage
                  src="/manuales/fontur/campana/10.crear-formulario.png"
                  alt="Modal Constructor de Formularios para crear una nueva encuesta"
                  caption="Constructor de Formularios — crear nuevo formulario"
                />

                <p className={`${carbon.textPrimary} mb-3 mt-6`}><strong>Editar formulario existente:</strong></p>
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>En la lista de formularios, haz clic en el ícono de <strong>lápiz</strong></li>
                  <li>Se abre el modal <strong>"Editor de Formulario"</strong> con las categorías y preguntas existentes</li>
                  <li>Modifica los campos necesarios y guarda los cambios</li>
                </ol>
                <ManualImage
                  src="/manuales/fontur/campana/11.editar-formulario.png"
                  alt="Modal Editor de Formulario con categorías y preguntas precargadas"
                  caption="Editor de Formulario — editar formulario existente"
                />

                <p className={`${carbon.textPrimary} mb-3 mt-6`}><strong>Eliminar formulario:</strong></p>
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>Haz clic en el ícono de <strong>papelera</strong> junto al formulario</li>
                  <li>Aparece el mensaje: <em>"¿Estás seguro de eliminar? Esta acción marcará el formulario como eliminado."</em></li>
                  <li>Haz clic en <strong>"Sí, eliminar"</strong> para confirmar, o en <strong>"Cancelar"</strong> para cerrar</li>
                </ol>
                <ManualImage
                  src="/manuales/fontur/campana/12.eliminar-formulario.png"
                  alt="Confirmación de eliminación de un formulario"
                  caption="Confirmación para eliminar un formulario"
                />

                {/* Plantillas (Archivos) */}
                <h4 className={`text-lg font-semibold ${carbon.textPrimary} mt-6 mb-3`}>Plantillas (Archivos)</h4>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Permite adjuntar plantillas de documentos que los asesores podrán descargar y usar como base para sus actividades.
                </p>
                <ManualImage
                  src="/manuales/fontur/campana/13.plantillas-list.png"
                  alt="Sub-pestaña Plantillas con lista de plantillas disponibles"
                  caption="Plantillas (Archivos) — lista de plantillas"
                />
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>Haz clic en <strong>"+ Agregar Plantillas"</strong></li>
                  <li>Se abre el modal <strong>"Tabla de Plantillas"</strong> con los documentos disponibles del proyecto</li>
                  <li>Selecciona las plantillas a agregar y haz clic en <strong>"Agregar Plantillas"</strong></li>
                </ol>
                <ManualImage
                  src="/manuales/fontur/campana/14.agregar-plantilla.png"
                  alt="Modal Tabla de Plantillas para seleccionar plantillas"
                  caption="Modal para agregar plantillas a la campaña"
                />
              </div>

              {/* Tab Beneficiarios */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                  Tab Beneficiarios
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Lista todos los beneficiarios asignados a la campaña, con su representante, organización, asesor asignado, municipio y descripción.
                  El botón <strong>"+ Añadir Beneficiario"</strong> permite agregar nuevos beneficiarios y el botón <strong>"Actualizar Tabla"</strong> refresca la lista.
                </p>
                <ManualImage
                  src="/manuales/fontur/campana/15.campana-tab-beneficiarios.png"
                  alt="Tab Beneficiarios con la tabla de beneficiarios asignados"
                  caption="Tab Beneficiarios — lista de beneficiarios de la campaña"
                />
              </div>

              {/* Tab Asesores */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                  Tab Asesores
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Muestra la <strong>Tabla de Asignaciones</strong> con los asesores asignados a la campaña, su progreso y los beneficiarios que tienen asignados.
                </p>
                <ManualImage
                  src="/manuales/fontur/campana/16.campana-tab-asesores.png"
                  alt="Tab Asesores con tabla de asignaciones de asesores"
                  caption="Tab Asesores — tabla de asignaciones"
                />

                <p className={`${carbon.textPrimary} mb-3 mt-4`}><strong>Editar asignación:</strong></p>
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>Haz clic en el ícono de <strong>lápiz</strong> en la fila del asesor</li>
                  <li>Se abre el modal <strong>"Editar asignación"</strong> con los beneficiarios actualmente asignados</li>
                  <li>Modifica la asignación y haz clic en <strong>"Aceptar"</strong></li>
                </ol>
                <ManualImage
                  src="/manuales/fontur/campana/17.campana-editar-asignacion.png"
                  alt="Modal para editar la asignación de un asesor"
                  caption="Modal editar asignación de asesor"
                />

                <p className={`${carbon.textPrimary} mb-3 mt-4`}><strong>Nueva asignación (Tabla de Asignaciones):</strong></p>
                <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                  <li>Haz clic en <strong>"+ Asignar Asesores"</strong></li>
                  <li>Se abre el modal <strong>"Tabla de Asignaciones"</strong></li>
                  <li>Usa el filtro <strong>"Filtrar por grupo de asignación"</strong> para ver grupos disponibles</li>
                  <li>Selecciona el grupo y haz clic en <strong>"+ Asignar a Campaña"</strong></li>
                </ol>
                <ManualImage
                  src="/manuales/fontur/campana/18.campana-nueva-asignacion.png"
                  alt="Modal de nueva asignación con filtro por grupo"
                  caption="Modal para asignar asesores a la campaña"
                />
              </div>

              {/* Tab Avances */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                  Tab Avances
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Muestra el resumen completo de progreso de la campaña:
                </p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                  <li><strong>Progreso General</strong> — barra de progreso con porcentaje de completitud</li>
                  <li><strong>Información General</strong> — nombre, descripción, tipo, fechas, tipo de asignación y estado</li>
                  <li><strong>Departamentos Asociados</strong></li>
                </ul>
                <ManualImage
                  src="/manuales/fontur/campana/19.campana-avances.png"
                  alt="Tab Avances con progreso general e información de la campaña"
                  caption="Tab Avances — progreso de la campaña"
                />
              </div>
            </div>

            {/* ── SECCIÓN 3: VISTA ASESOR ── */}
            <div>
              <h2 className={`text-2xl font-bold ${carbon.textPrimary} mb-6 pb-2 border-b border-fontur-purple`}>
                Vista de Campaña — Asesor
              </h2>
              <p className={`${carbon.textPrimary} mb-6`}>
                Los asesores ven únicamente las campañas que les han sido asignadas. La vista tiene tres tabs: <strong>Campaña</strong>, <strong>Caracterización Individual</strong> y <strong>Caracterización Grupal</strong>.
              </p>

              {/* Lista advisor */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                  Lista de Campañas (Asesor)
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  El asesor ve solo las campañas asignadas a él, con las columnas: nombre, tipo, estado, fechas y <strong>porcentaje de avance</strong>.
                </p>
                <ManualImage
                  src="/manuales/fontur/campana/25.lista-campanas-advisor.png"
                  alt="Lista de campañas vista desde el rol Asesor"
                  caption="Lista de campañas — vista Asesor"
                />
              </div>

              {/* Tab Campaña advisor */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                  Tab Campaña — Detalle y Encuesta
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Al ingresar a una campaña, el asesor ve tres columnas:
                </p>
                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                  <ul className={`list-disc list-inside ml-4 space-y-2 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Experiencias Asignadas</strong> — lista de beneficiarios asignados al asesor en esta campaña. Al seleccionar uno, se cargan sus datos</li>
                    <li><strong>Preguntas de la Encuesta</strong> — muestra el formulario asignado con sus categorías. El botón <strong>"Editar"</strong> permite responder o actualizar las respuestas</li>
                    <li><strong>Archivos Adicionales</strong> — acceso a Material de apoyo, Plantillas subidas, Archivos subidos y opción de <strong>Subir nuevos archivos</strong></li>
                  </ul>
                </div>
                <ManualImage
                  src="/manuales/fontur/campana/26.detalle-campana-advisor.png"
                  alt="Tab Campaña vista desde el asesor con experiencias, preguntas y archivos"
                  caption="Tab Campaña — vista Asesor"
                />
              </div>

              {/* Caracterización Individual */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                  Tab Caracterización Individual
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Muestra las estadísticas individuales de cada beneficiario. Al seleccionar uno en el panel izquierdo se visualiza:
                </p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                  <li><strong>Gráfico de barras</strong> — Áreas de mayor debilidad de la empresa por línea estratégica</li>
                  <li><strong>Detalle de Categorías de Encuesta</strong> — análisis detallado por cada categoría</li>
                </ul>
                <ManualImage
                  src="/manuales/fontur/campana/27.caracterizacion-individual-advisor.png"
                  alt="Tab Caracterización Individual con gráficas de debilidades por beneficiario"
                  caption="Caracterización Individual — estadísticas por beneficiario"
                />
              </div>

              {/* Caracterización Grupal */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                  Tab Caracterización Grupal
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Muestra gráficos de radar comparativos para todos los beneficiarios del grupo por cada línea estratégica:
                  Innovación y Sofisticación, Producto Turístico, Gestión Administrativa, Sostenibilidad, Calidad y Promoción y Comercialización.
                </p>
                <ManualImage
                  src="/manuales/fontur/campana/28.caracterizacion-grupal-advisor.png"
                  alt="Tab Caracterización Grupal con gráficos de radar por línea estratégica"
                  caption="Caracterización Grupal — comparativo por líneas"
                />
              </div>
            </div>

            {/* ── SECCIÓN 4: ANÁLISIS DIAGNÓSTICO ── */}
            <div>
              <h2 className={`text-2xl font-bold ${carbon.textPrimary} mb-6 pb-2 border-b border-fontur-purple`}>
                Análisis Diagnóstico
              </h2>
              <p className={`${carbon.textPrimary} mb-6`}>
                Módulo de análisis de resultados disponible para administradores. Ofrece dos vistas: <strong>Por línea</strong> y <strong>Por beneficiario</strong>.
              </p>

              {/* Por línea */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                  Análisis Por Línea
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Muestra el <strong>Promedio Global de Evaluación por Línea</strong> en un gráfico de barras horizontal con filtros de agrupación:
                </p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                  <li>Selecciona asesor, departamento, tipología, región, rango de edad, género o etnia</li>
                  <li>El gráfico se actualiza mostrando el porcentaje promedio por cada línea estratégica</li>
                  <li>Debajo del gráfico global se despliega el <strong>Detalle por Línea Estratégica</strong></li>
                </ul>
                <ManualImage
                  src="/manuales/fontur/campana/20.Analisis-diagnostico-por-linea.png"
                  alt="Análisis por línea con filtros y gráfico de barras"
                  caption="Análisis Diagnóstico — vista Por línea"
                />
              </div>

              {/* Por beneficiario */}
              <div className="mb-8">
                <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                  <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                  Análisis Por Beneficiario
                </h3>
                <p className={`${carbon.textPrimary} mb-4`}>
                  Muestra un <strong>gráfico de radar</strong> con la evaluación de beneficiarios por línea estratégica, con los mismos filtros de agrupación.
                </p>
                <ManualImage
                  src="/manuales/fontur/campana/21.analisis-diagnostico-por-beneficiario-grafica.png"
                  alt="Análisis por beneficiario con gráfico de radar"
                  caption="Análisis por Beneficiario — gráfico de radar"
                />
                <p className={`${carbon.textPrimary} mb-4 mt-6`}>
                  Debajo del radar se muestra una <strong>tabla de resultados por experiencia</strong>. Cada celda tiene un color según el porcentaje: <span className="text-green-600 font-semibold">verde</span> (alto), <span className="text-yellow-600 font-semibold">amarillo</span> (medio) y <span className="text-red-600 font-semibold">rojo</span> (bajo).
                </p>
                <p className={`${carbon.textPrimary} mb-4`}>
                  La tabla tiene dos modos que se alternan con el interruptor superior:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                    <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Modo Brechas</p>
                    <p className={`text-xs ${carbon.textPrimary}`}>Al hacer clic en una celda muestra un popover con las <strong>Buenas calificaciones</strong> y las <strong>Brechas detectadas</strong> de esa experiencia en esa línea</p>
                  </div>
                  <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                    <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Modo Evaluación</p>
                    <p className={`text-xs ${carbon.textPrimary}`}>Al hacer clic muestra las <strong>Preguntas</strong> respondidas con su respuesta y valor numérico</p>
                  </div>
                </div>
                <ManualImage
                  src="/manuales/fontur/campana/22.analisis-diagnostico-por-beneficiario-tabla.png"
                  alt="Tabla de resultados por experiencia con colores de calificación"
                  caption="Tabla de resultados — modo Evaluación"
                />
                <ManualImage
                  src="/manuales/fontur/campana/23.hover-brechas-tabla.png"
                  alt="Popover de brechas detectadas al hacer clic en una celda"
                  caption="Detalle de celda — modo Brechas"
                />
                <ManualImage
                  src="/manuales/fontur/campana/24.hover-evalucion-tabla.png"
                  alt="Popover de preguntas y respuestas al hacer clic en una celda"
                  caption="Detalle de celda — modo Evaluación"
                />
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Users, UserPlus, Pencil, Trash2, Info, FileText, History, Bot, Activity } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function BeneficiariosSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="beneficiarios">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Beneficiarios</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="beneficiarios" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Gestión de Beneficiarios</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El módulo de Beneficiarios permite registrar, consultar y gestionar las organizaciones
                o personas vinculadas al proyecto. Desde aquí se accede al perfil completo de cada
                beneficiario, con sus actividades, archivos, publicaciones y acceso al asistente virtual.
              </p>
            </div>

            {/* Paso 1 - Lista de beneficiarios */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <Users className="w-5 h-5" />
                Lista de Beneficiarios
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al ingresar al módulo se muestra una tabla paginada con todos los beneficiarios del proyecto.
                Cada fila puede expandirse para ver las campañas en las que participa el beneficiario.
                Desde esta vista se pueden realizar las acciones principales de gestión.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Campo de <strong>búsqueda</strong> por nombre de organización</li>
                  <li>Botón <strong>"Crear Beneficiario"</strong> (visible para Super Administrador, Director, Administrador)</li>
                  <li>Icono de <strong>expandir fila</strong> para ver campañas asociadas</li>
                  <li>Iconos de <strong>editar</strong> y <strong>eliminar</strong> por cada registro</li>
                  <li>Paginación de <strong>10 registros por página</strong></li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/beneficiarios/1.beneficiario-lista.png"
                alt="Tabla de beneficiarios con paginación y filas expandibles"
                caption="Lista de Beneficiarios"
              />
            </div>

            {/* Paso 2 - Crear beneficiario */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <UserPlus className="w-5 h-5" />
                Crear Beneficiario
              </h3>
              <p className={`${carbon.textPrimary} mb-2`}>
                Disponible para los roles <strong>Super Administrador, Director y Administrador</strong>.
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong>"Crear Beneficiario"</strong> en la parte superior de la tabla</li>
                <li>Se abre un modal con tres secciones:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Identificación:</strong> nombre de la organización, NIT, tipo de empresa, sector</li>
                    <li><strong>Información General:</strong> descripción, número de empleados, años de operación, representante legal</li>
                    <li><strong>Datos de la experiencia:</strong> región, ciudad, dirección, teléfono, correo electrónico</li>
                  </ul>
                </li>
                <li>Completa los campos requeridos y haz clic en <strong>"Guardar"</strong></li>
                <li>O haz clic en <strong>"Cancelar"</strong> para cerrar sin guardar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/beneficiarios/2.crear-beneficiario.png"
                alt="Modal de creación de beneficiario con sus secciones de datos"
                caption="Modal Crear Beneficiario"
              />
            </div>

            {/* Paso 3 - Editar beneficiario */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Pencil className="w-5 h-5" />
                Editar Beneficiario
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>En la fila del beneficiario, haz clic en el ícono de <strong>editar (lápiz)</strong></li>
                <li>Se abre el mismo modal de creación con los datos actuales precargados</li>
                <li>Modifica los campos necesarios y haz clic en <strong>"Guardar"</strong></li>
              </ol>
              <ManualImage
                src="/manuales/fontur/beneficiarios/3.editar-beneficiario.png"
                alt="Modal de edición de beneficiario con datos precargados"
                caption="Modal Editar Beneficiario"
              />
            </div>

            {/* Paso 4 - Eliminar beneficiario */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Beneficiario
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>En la fila del beneficiario, haz clic en el ícono de <strong>eliminar (papelera)</strong></li>
                <li>Se muestra un modal de confirmación con el mensaje de advertencia</li>
                <li>Haz clic en <strong>"Confirmar"</strong> para eliminar definitivamente, o en <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Esta acción es <strong>irreversible</strong>. Asegúrate de que el beneficiario no tenga
                    campañas activas antes de eliminarlo.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/fontur/beneficiarios/4.eliminar-beneficiario.png"
                alt="Modal de confirmación para eliminar un beneficiario"
                caption="Modal de confirmación — Eliminar Beneficiario"
              />
            </div>

            {/* Perfil del beneficiario */}
            <div className={`${carbon.layer01} p-4 border-l-4 border-fontur-purple dark:border-fontur-purple-light rounded-lg`}>
              <p className={`text-sm font-semibold ${carbon.textPrimary} mb-1`}>Perfil del Beneficiario</p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Al hacer clic sobre el nombre de un beneficiario en la tabla, se abre su perfil detallado.
                El perfil está organizado en pestañas, cada una con información específica del beneficiario.
              </p>
            </div>

            {/* Paso 5 - Tab Información General */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <Info className="w-5 h-5" />
                Tab: Información General
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Muestra el resumen completo del beneficiario en dos columnas:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Columna izquierda</p>
                    <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                      <li>Nombre de la organización (editable)</li>
                      <li>Descripción (editable con modal)</li>
                      <li>Edad, género y etnia</li>
                      <li>Región y ciudad</li>
                      <li>Representante legal</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Columna derecha</p>
                    <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                      <li>Gráfico <strong>"Áreas de mayor debilidad"</strong> (barras horizontales)</li>
                      <li>Gráfico <strong>"Evaluación de la empresa"</strong> (radial/araña)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <ManualImage
                src="/manuales/fontur/beneficiarios/5.informacion-general.png"
                alt="Tab de información general del beneficiario con datos y gráficos"
                caption="Perfil — Tab Información General"
              />
              <p className={`${carbon.textPrimary} mb-4 mt-6`}>
                Para editar la descripción del beneficiario, haz clic en el ícono de edición junto al campo.
                Se abre un modal con un editor de texto donde puedes modificar la descripción y guardar los cambios.
              </p>
              <ManualImage
                src="/manuales/fontur/beneficiarios/6.editar-descripcion-beneficiario.png"
                alt="Modal para editar la descripción del beneficiario"
                caption="Modal Editar Descripción"
              />
            </div>

            {/* Paso 6 - Tab Actividades */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <Activity className="w-5 h-5" />
                Tab: Actividades
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Muestra el listado de campañas en las que participa el beneficiario, con el nombre,
                tipo de campaña y porcentaje de avance.
              </p>
              <ManualImage
                src="/manuales/fontur/beneficiarios/7.actividades-beneficiario.png"
                alt="Tab de actividades con listado de campañas y porcentaje de avance"
                caption="Perfil — Tab Actividades"
              />
              <p className={`${carbon.textPrimary} mb-4 mt-6`}>
                Al hacer clic en una campaña de la lista, se abre la vista de detalle de esa actividad.
                Desde aquí el asesor puede consultar la información de la campaña, los formularios
                y la caracterización del beneficiario en esa campaña específica.
              </p>
              <ManualImage
                src="/manuales/fontur/beneficiarios/8.ver-una-actividad(campaña)-beneficiario.png"
                alt="Vista de detalle de una actividad de campaña desde el perfil del beneficiario"
                caption="Detalle de Actividad — Vista Campaña"
              />
              <p className={`${carbon.textPrimary} mb-4 mt-6`}>
                Dentro del detalle de la actividad, la pestaña <strong>Caracterización Individual</strong> muestra
                los gráficos y estadísticas de desempeño individual del beneficiario en esa campaña.
              </p>
              <ManualImage
                src="/manuales/fontur/beneficiarios/9.caracterizacion-individual.png"
                alt="Pestaña de caracterización individual dentro del detalle de actividad"
                caption="Detalle de Actividad — Caracterización Individual"
              />
              <p className={`${carbon.textPrimary} mb-4 mt-6`}>
                La pestaña <strong>Caracterización Grupal</strong> presenta las estadísticas consolidadas
                del grupo al que pertenece el beneficiario dentro de esa campaña.
              </p>
              <ManualImage
                src="/manuales/fontur/beneficiarios/10.caracterizacion-grupal.png"
                alt="Pestaña de caracterización grupal dentro del detalle de actividad"
                caption="Detalle de Actividad — Caracterización Grupal"
              />
            </div>

            {/* Paso 7 - Tab Archivos Adjuntos */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                <FileText className="w-5 h-5" />
                Tab: Archivos Adjuntos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Lista todos los archivos asociados al beneficiario. Cada registro muestra el nombre del archivo,
                la fecha de carga, el tipo y los botones para <strong>descargar</strong> o <strong>previsualizar</strong>.
              </p>
              <ManualImage
                src="/manuales/fontur/beneficiarios/11.archivos-adjuntos.png"
                alt="Tab de archivos adjuntos del beneficiario con opciones de descarga"
                caption="Perfil — Tab Archivos Adjuntos"
              />
            </div>

            {/* Paso 8 - Tab Histórico (solo asesor) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">8</span>
                <History className="w-5 h-5" />
                Tab: Histórico
                <span className="text-sm font-normal bg-fontur-purple/10 text-fontur-purple dark:text-fontur-purple-light px-2 py-0.5 rounded ml-2">
                  Solo Asesor
                </span>
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Disponible únicamente para el rol <strong>Asesor</strong>. Muestra el historial de publicaciones
                creadas por el asesor para este beneficiario: campaña, descripción, fecha y archivos adjuntos.
              </p>
              <ManualImage
                src="/manuales/fontur/beneficiarios/12.beneficiario-historico-rolasesor.png"
                alt="Tab de histórico de publicaciones visible solo para el rol asesor"
                caption="Perfil — Tab Histórico (vista Asesor)"
              />
              <p className={`${carbon.textPrimary} mb-4 mt-6`}>
                Para crear una nueva publicación, haz clic en <strong>"Crear nueva publicación"</strong>.
                Se abre un modal con los siguientes campos:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Campaña:</strong> selector desplegable con las campañas activas del beneficiario</li>
                  <li><strong>Descripción:</strong> campo de texto libre para el contenido de la publicación</li>
                  <li><strong>Adjuntos:</strong> permite subir archivos de tipo imagen, audio, Excel, Word o PDF</li>
                  <li>Botón <strong>"Publicar"</strong> para guardar, o <strong>"Cancelar"</strong> para cerrar</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/beneficiarios/13-crear-post-rolasesor.png"
                alt="Modal para crear una nueva publicación desde el perfil del beneficiario"
                caption="Modal Crear Nueva Publicación"
              />
            </div>

            {/* Paso 9 - Tab Asistente Virtual (solo asesor) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">9</span>
                <Bot className="w-5 h-5" />
                Tab: Asistente Virtual
                <span className="text-sm font-normal bg-fontur-purple/10 text-fontur-purple dark:text-fontur-purple-light px-2 py-0.5 rounded ml-2">
                  Solo Asesor
                </span>
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Disponible únicamente para el rol <strong>Asesor</strong>. Abre el canal de chat directo
                con el beneficiario a través del <strong>Asistente Virtual</strong> (Twilio Conversations).
                El asesor puede ver el historial de mensajes y enviar nuevos mensajes al beneficiario desde aquí.
              </p>
              <ManualImage
                src="/manuales/fontur/beneficiarios/14.asistente-virtual-rolasesor.png"
                alt="Tab del asistente virtual con la interfaz de chat del beneficiario"
                caption="Perfil — Tab Asistente Virtual (vista Asesor)"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

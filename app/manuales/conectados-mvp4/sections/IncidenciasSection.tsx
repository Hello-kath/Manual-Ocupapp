'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AlertCircle, Search, Filter, MessageSquare, CheckSquare } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function IncidenciasSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="incidencias">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <span>IX. Gestión de Incidencias y Sugerencias (PCO)</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="incidencias" className="space-y-8 pt-4">

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 dark:border-orange-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es la gestión de incidencias?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El PCO puede visualizar, filtrar y responder a las incidencias o sugerencias reportadas
                por los colaboradores. Cada incidencia puede ser atendida de forma individual o de manera
                masiva seleccionando múltiples registros a la vez.
              </p>
            </div>

            {/* Paso 1: Acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Panel de Gestión de Incidencias
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión como <strong>PCO</strong> y navega a <strong>Incidencias</strong> en el menú lateral.
                El sistema te llevará a <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/app/incidents/list</code>.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Al ingresar verás:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Título: <strong>"Panel de Gestión de Incidencias"</strong></li>
                  <li>Tabla con el listado de incidencias pendientes</li>
                  <li>Campo de búsqueda rápida en la parte superior</li>
                  <li>Botón <strong>"Nueva respuesta"</strong> (deshabilitado hasta seleccionar registros)</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/incidencias/incidencias-panel-principal.png"
                alt="Vista del panel con tabla de incidencias y campo de búsqueda"
                caption="Vista del panel con tabla de incidencias y campo de búsqueda"
              />
            </div>

            {/* Paso 2: Búsqueda rápida */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Búsqueda Rápida por ID de Reporte
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Usa el campo de búsqueda rápida para encontrar una incidencia específica:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Ubica el campo con el placeholder <em>"Buscar por ID de reporte, colaborador, DNI"</em></li>
                <li>Escribe el ID de reporte o nombre del colaborador</li>
                <li>Presiona <strong>Enter</strong> para aplicar la búsqueda</li>
                <li>La tabla mostrará únicamente los resultados que coincidan</li>
              </ol>
              <ManualImage
                src="/manuales/incidencias/incidencias-busqueda-rapida.png"
                alt="Campo de búsqueda con resultado filtrado en la tabla"
                caption="Campo de búsqueda con resultado filtrado en la tabla"
              />
            </div>

            {/* Paso 3: Filtros avanzados */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Usar Filtros Avanzados
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para búsquedas más específicas, usa los filtros avanzados:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón de filtros (ícono de embudo <Filter className="w-4 h-4 inline" />) en la cabecera de la tabla</li>
                <li>Se abrirá un panel lateral con opciones de filtrado</li>
                <li>Completa el campo <strong>"Nombre del Colaborador"</strong> u otros filtros disponibles</li>
                <li>Haz clic en <strong>"Aplicar"</strong></li>
                <li>La tabla se actualizará mostrando solo los resultados filtrados</li>
              </ol>
              <ManualImage
                src="/manuales/incidencias/incidencias-filtros-avanzados.png"
                alt="Panel lateral de filtros avanzados con campos de búsqueda"
                caption="Panel lateral de filtros avanzados con campos de búsqueda"
              />
            </div>

            {/* Paso 4: Ver detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Ver Detalle de una Incidencia
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para consultar la información completa de una incidencia:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Localiza la incidencia en la tabla</li>
                <li>Haz clic en el ícono o botón de detalle de la fila</li>
                <li>Se abrirá el modal <strong>"Información Adicional"</strong> con todos los datos de la incidencia</li>
                <li>Revisa el contenido del reporte</li>
                <li>Haz clic en <strong>"Volver"</strong> para cerrar el modal</li>
              </ol>
              <ManualImage
                src="/manuales/incidencias/incidencias-modal-detalle.png"
                alt="Modal de &quot;Información Adicional&quot; con datos completos de la incidencia"
                caption="Modal de &quot;Información Adicional&quot; con datos completos de la incidencia"
              />
            </div>

            {/* Paso 5: Responder individual */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Responder a una Incidencia Individual
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para responder a una sola incidencia:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Localiza la incidencia en la tabla</li>
                <li>Marca el <strong>checkbox</strong> de la fila correspondiente</li>
                <li>El botón <strong>"Nueva respuesta"</strong> se habilitará automáticamente</li>
                <li>Haz clic en <strong>"Nueva respuesta"</strong></li>
                <li>Se abrirá el modal <strong>"Gestión de Incidencia"</strong></li>
                <li>Escribe tu respuesta en el campo de texto (observa el contador de caracteres)</li>
                <li>Haz clic en <strong>"Guardar"</strong></li>
                <li>La incidencia cambiará su estado a <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-semibold">Abordado</span></li>
              </ol>
              <ManualImage
                src="/manuales/incidencias/incidencias-modal-respuesta.png"
                alt="Modal &quot;Gestión de Incidencia&quot; con campo de texto y contador de caracteres"
                caption="Modal &quot;Gestión de Incidencia&quot; con campo de texto y contador de caracteres"
              />
            </div>

            {/* Paso 6: Respuesta masiva */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Responder a Múltiples Incidencias (Respuesta Masiva)
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para responder a varias incidencias con el mismo mensaje:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Marca los <strong>checkboxes</strong> de cada incidencia que deseas responder</li>
                <li>El botón <strong>"Nueva respuesta"</strong> se habilitará mostrando el número de seleccionadas</li>
                <li>Haz clic en <strong>"Nueva respuesta"</strong></li>
                <li>Escribe la respuesta en el textarea del modal</li>
                <li>Haz clic en <strong>"Guardar"</strong></li>
                <li>Todas las incidencias seleccionadas cambiarán a estado <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-semibold">Abordado</span></li>
              </ol>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>Tip:</strong> Para seleccionar todas las incidencias visibles de una vez, haz clic en el
                  <strong> checkbox de la cabecera</strong> de la tabla. Esto marcará automáticamente todos los
                  registros de la página actual.
                </p>
              </div>

              <ManualImage
                src="/manuales/incidencias/incidencias-respuesta-masiva.png"
                alt="Múltiples checkboxes seleccionados con botón &quot;Nueva respuesta&quot; habilitado"
                caption="Múltiples checkboxes seleccionados con botón &quot;Nueva respuesta&quot; habilitado"
              />
            </div>

            {/* Estados */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📊 Estados de Incidencias
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-600 text-white px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">PENDIENTE</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Incidencia reportada por el colaborador, aún sin respuesta del PCO
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">ABORDADO</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    El PCO ya respondió a la incidencia con un comentario o solución
                  </p>
                </div>
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

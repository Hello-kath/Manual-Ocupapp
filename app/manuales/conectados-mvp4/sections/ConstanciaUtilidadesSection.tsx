'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FileText, Search, SlidersHorizontal, Eye, Download, CheckSquare } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function ConstanciaUtilidadesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="constancias">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span>VI. Constancias - Historial de Utilidades</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="constancias" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 dark:border-purple-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es el historial de constancias de utilidades?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Este módulo permite al Administrador consultar el historial completo de constancias de
                utilidades generadas, verificar cuáles han sido visualizadas por los colaboradores,
                aplicar filtros avanzados y exportar reportes en formato Excel.
              </p>
            </div>

            {/* Paso 1: Acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión como <strong>Administrador</strong> y navega a
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded mx-1 text-sm">/app/gestion/constancias/history</code>.
              </p>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Columnas de la tabla:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Código colaborador</strong></li>
                  <li><strong>Nombre colaborador</strong></li>
                  <li><strong>Período</strong></li>
                  <li><strong>Fecha de carga</strong></li>
                  <li><strong>Fecha y hora de visualización</strong></li>
                  <li><strong>Estado</strong></li>
                  <li><strong>Acciones</strong> (ver detalle)</li>
                </ul>
              </div>

              <ManualImage
                src="/manuales/constancias/constancias-historial-principal.png"
                alt="Vista general del historial de constancias con tabla y controles"
                caption="Vista general del historial de constancias con tabla y controles"
              />
            </div>

            {/* Paso 2: Búsqueda avanzada */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Búsqueda Avanzada
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el botón <SlidersHorizontal className="w-4 h-4 inline mx-1" /> para abrir el popover de filtros avanzados:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>
                    <Search className="w-4 h-4 inline mr-1" />
                    Nombre Colaborador
                  </p>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Campo de texto con ícono de lupa. Busca por nombre o código del colaborador.
                  </p>
                </div>
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Período</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Selector de período (p-select) para filtrar por período de utilidades.
                  </p>
                </div>
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Fecha de Carga</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Datepicker para filtrar por la fecha en que se cargó la constancia.
                  </p>
                </div>
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Fecha de Visualización</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Datepicker para filtrar por la fecha en que el colaborador visualizó la constancia.
                  </p>
                </div>
              </div>

              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Completa los campos de filtro deseados</li>
                <li>Haz clic en <strong>"Filtrar"</strong> para aplicar</li>
                <li>La tabla se actualiza mostrando solo los registros que coinciden</li>
              </ol>

              <ManualImage
                src="/manuales/constancias/constancias-busqueda-avanzada.png"
                alt="Popover de búsqueda avanzada con filtros disponibles"
                caption="Popover de búsqueda avanzada con filtros disponibles"
              />
            </div>

            {/* Paso 3: Selector de columnas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Personalizar Columnas Visibles
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el ícono de filtro de columnas para mostrar u ocultar columnas:
              </p>

              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Checkbox <strong>Período</strong></li>
                <li>Checkbox <strong>Fecha carga</strong></li>
                <li>Checkbox <strong>Fecha hora visualización</strong></li>
              </ul>

              <ManualImage
                src="/manuales/constancias/constancias-selector-columnas.png"
                alt="Popover con checkboxes para personalizar columnas visibles"
                caption="Popover con checkboxes para personalizar columnas visibles"
              />
            </div>

            {/* Paso 4: Ver detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Ver Detalle de una Constancia
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el botón <Eye className="w-4 h-4 inline mx-1" /> de una fila para abrir el modal de detalle:
              </p>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-3`}>
                  El modal <strong>"Detalle de Constancia"</strong> muestra:
                </p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Código de constancia</strong></li>
                  <li><strong>Colaborador:</strong> nombre completo</li>
                  <li><strong>Período</strong> de utilidades</li>
                  <li><strong>Monto</strong> de la utilidad</li>
                  <li><strong>Fecha de generación</strong></li>
                  <li><strong>Fecha de visualización</strong> (si ya fue vista)</li>
                  <li><strong>Estado</strong> actual</li>
                </ul>
              </div>

              <p className={`${carbon.textPrimary} mb-3`}>
                Haz clic en <strong>"Cerrar"</strong> para volver a la tabla.
              </p>

              <ManualImage
                src="/manuales/constancias/constancias-modal-detalle.png"
                alt="Modal de detalle con información completa de la constancia"
                caption="Modal de detalle con información completa de la constancia"
              />
            </div>

            {/* Paso 5: Exportar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Exportar Datos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para exportar los registros seleccionados a Excel:
              </p>

              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>
                  Selecciona los registros deseados usando los <CheckSquare className="w-4 h-4 inline mx-1" />
                  <strong>checkboxes</strong> de cada fila (o el checkbox del encabezado para seleccionar todos)
                </li>
                <li>El botón <strong>"Exportar datos"</strong> se habilitará al tener al menos un registro seleccionado</li>
                <li>Haz clic en <strong>"Exportar datos"</strong></li>
                <li>El archivo <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">reporte_constancias.xlsx</code> se descargará automáticamente</li>
              </ol>

              <ManualImage
                src="/manuales/constancias/constancias-registros-seleccionados.png"
                alt="Tabla con checkboxes seleccionados y botón Exportar habilitado"
                caption="Tabla con checkboxes seleccionados y botón Exportar habilitado"
              />
              <ManualImage
                src="/manuales/constancias/constancias-exportacion-excel.png"
                alt="Descarga del archivo Excel con los datos exportados"
                caption="Descarga del archivo Excel con los datos exportados"
              />
            </div>

            {/* Paso 6: Paginación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Navegación por Páginas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si hay muchos registros, usa la paginación en la parte inferior de la tabla:
              </p>

              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4`}>
                <li>Haz clic en el número de página para ir directamente a ella</li>
                <li>Usa los botones <strong>Anterior / Siguiente</strong> para navegar secuencialmente</li>
              </ul>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

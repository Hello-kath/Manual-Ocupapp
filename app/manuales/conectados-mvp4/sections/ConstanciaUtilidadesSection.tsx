'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FileText, Search, Filter, Eye, Download, ListChecks } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function ConstanciaUtilidadesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="constancia-utilidades">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span>VII. Historial de Constancias de Utilidades</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="constancia-utilidades" className="space-y-8 pt-4">

            {/* Introducción */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es el Historial de Constancias de Utilidades?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Este módulo permite a los administradores consultar el historial de constancias de utilidades generadas,
                revisar su estado de visualización por parte de los colaboradores y exportar los datos para análisis.
                Es una herramienta clave para la auditoría y seguimiento de la entrega de constancias.
              </p>
            </div>

            {/* Paso 1: Acceso al módulo */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Navega a la URL <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/app/gestion/constancias/history</code>.
                Verificarás el título "Historial de constancias" y una tabla con las constancias generadas.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>constancias-historial-vista-general.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista general del módulo de Historial de Constancias de Utilidades.
                </p>
              </div>
            </div>

            {/* Paso 2: Búsqueda avanzada */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Búsqueda Avanzada y Filtros
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Utiliza el popover de búsqueda avanzada para aplicar filtros por colaborador, período, fecha de carga y fecha de visualización.
                Haz clic en el icono <Search className="w-4 h-4 inline" /> o <Filter className="w-4 h-4 inline" /> para abrir el popover.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>constancias-busqueda-avanzada-popover.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Popover de búsqueda avanzada con campos de filtro.
                </p>
              </div>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Filtros disponibles:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Colaborador:</strong> Búsqueda por nombre o DNI.</li>
                  <li><strong>Período:</strong> Selección del período de la constancia.</li>
                  <li><strong>Fecha de carga:</strong> Rango de fechas de cuando se cargó la constancia.</li>
                  <li><strong>Fecha de visualización:</strong> Rango de fechas de cuando el colaborador visualizó la constancia.</li>
                </ul>
              </div>
            </div>

            {/* Paso 3: Selector de columnas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Personalización de Columnas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El selector de columnas te permite elegir qué información deseas visualizar en la tabla.
                Haz clic en el icono <ListChecks className="w-4 h-4 inline" /> para abrir el popover y seleccionar/deseleccionar columnas.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>constancias-selector-columnas-popover.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Popover para seleccionar columnas visibles en la tabla.
                </p>
              </div>
            </div>

            {/* Paso 4: Modal de detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Visualización de Detalle de Constancia
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para ver la información completa de una constancia, haz clic en el botón de ojo <Eye className="w-4 h-4 inline" /> en la fila correspondiente.
                Se abrirá un modal con todos los detalles.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>constancias-modal-detalle.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal mostrando el detalle completo de una constancia de utilidades.
                </p>
              </div>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Información mostrada en el detalle:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Código de constancia</li>
                  <li>Colaborador</li>
                  <li>Período</li>
                  <li>Monto</li>
                  <li>Fecha de generación</li>
                  <li>Fecha de visualización</li>
                  <li>Estado</li>
                </ul>
              </div>
            </div>

            {/* Paso 5: Selección de registros y Exportar datos */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Exportar Datos a Excel
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Puedes seleccionar uno o varios registros utilizando los checkboxes y luego exportar la información a un archivo Excel.
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Selecciona los registros deseados con los checkboxes.</li>
                <li>El botón "Exportar datos" se habilitará.</li>
                <li>Haz clic en el botón <Download className="w-4 h-4 inline" /> <strong>"Exportar datos"</strong>.</li>
                <li>Se descargará un archivo Excel con el nombre <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">reporte_constancias.xlsx</code>.</li>
              </ol>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>constancias-seleccion-registros.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tabla con registros seleccionados y botón de exportar habilitado.
                </p>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>constancias-exportacion-proceso.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Confirmación de descarga del archivo Excel.
                </p>
              </div>
            </div>

            {/* Resumen de Flujo */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📋 Resumen del Flujo de Consulta
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Acceder al módulo de historial de constancias.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Aplicar filtros de búsqueda avanzada (colaborador, período, fechas).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Personalizar columnas visibles si es necesario.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Visualizar el detalle completo de una constancia.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">5️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Seleccionar registros y exportar a Excel.</p>
                </div>
              </div>
            </div>

            {/* Validaciones del Test */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                ✅ Validaciones Clave del Módulo
              </h4>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                <li>Acceso correcto a la URL y visibilidad de la tabla.</li>
                <li>Funcionalidad de búsqueda avanzada y filtros.</li>
                <li>Apertura y cierre del modal de detalle.</li>
                <li>Funcionamiento de checkboxes para selección.</li>
                <li>Descarga del archivo Excel de exportación.</li>
              </ul>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

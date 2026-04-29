'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'; // Assuming Accordion components are correctly imported
import { FileText, Upload, History, Filter, Download, ListChecks } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function CtsSection() {
  const carbon = useCarbonClasses();

 return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="cts">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
            <span>VI. Gestión de CTS</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="cts" className="space-y-8 pt-4">

            {/* Introducción */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es el módulo de Gestión de CTS?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Este módulo permite a los administradores gestionar los certificados de Compensación por Tiempo de Servicios (CTS),
                realizar cargas masivas, consultar el historial de visualizaciones y descargas, y generar reportes.
                Es una herramienta esencial para la administración y seguimiento de este beneficio laboral.
              </p>
            </div>

            {/* Paso 1: Acceso al módulo de Carga Masiva */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo de Carga Masiva de CTS
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Navega a la URL <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/app/gestion/cts/carga-masiva</code>.
                Verificarás el título "Carga Masiva de Certificados CTS" y las opciones para subir archivos.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>cts-carga-masiva-vista-general.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista general del módulo de Carga Masiva de Certificados CTS.
                </p>
              </div>
            </div>

            {/* Paso 2: Carga Masiva de Certificados */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Realizar Carga Masiva de Certificados
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Este módulo permite subir certificados CTS en formato PDF de manera masiva.
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Selecciona el <strong>Régimen</strong> (Común o Agrario Semestral) en el dropdown.</li>
                <li>Haz clic en el botón <Upload className="w-4 h-4 inline" /> <strong>"Seleccionar archivo"</strong> para subir el archivo ZIP con los PDFs.</li>
                <li>El sistema procesará los archivos y mostrará un resumen de la carga.</li>
              </ol>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                  <strong>📦 Preparación del archivo ZIP:</strong>
                </p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Cada certificado PDF debe estar nombrado con el DNI del trabajador (ej: <code>12345678.pdf</code>).</li>
                  <li>Todos los PDFs deben estar agrupados en un único archivo ZIP.</li>
                </ul>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>cts-carga-masiva-seleccion-archivo.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Interfaz de carga masiva con selector de régimen y botón para seleccionar archivo ZIP.
                </p>
              </div>
            </div>

            {/* Paso 3: Historial de Cargas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Consultar Historial de Cargas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En la misma sección de carga masiva, puedes revisar el historial de todas las cargas realizadas:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Información del historial:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Fecha de carga</li>
                  <li>Usuario que realizó la carga</li>
                  <li>Nombre del archivo ZIP</li>
                  <li>Cantidad de archivos procesados, exitosos y con errores.</li>
                </ul>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>cts-carga-masiva-historial.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tabla mostrando el historial de cargas masivas de certificados CTS.
                </p>
              </div>
            </div>

            {/* Paso 4: Acceso al Reporte Histórico */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Acceso al Reporte Histórico de CTS
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para consultar el historial de visualizaciones y descargas de certificados CTS, navega a la URL <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/app/gestion/cts/reporte-cts</code>.
                Verificarás el título "Reporte Histórico de CTS" y una tabla con los registros.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>cts-reporte-historico-vista-general.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista general del módulo de Reporte Histórico de CTS.
                </p>
              </div>
            </div>

            {/* Paso 5: Filtrar y Exportar Reporte Histórico */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Filtrar y Exportar Reporte Histórico
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En el reporte histórico, puedes aplicar filtros para encontrar registros específicos y exportar la información:
              </p>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                <li>Utiliza los filtros por colaborador, período, fecha de visualización/descarga.</li>
                <li>Haz clic en el botón <Download className="w-4 h-4 inline" /> <strong>"Exportar datos"</strong> para descargar el reporte en formato Excel.</li>
              </ul>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>cts-reporte-historico-filtros-exportar.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Opciones de filtro y botón de exportación en el reporte histórico de CTS.
                </p>
              </div>
            </div>

            {/* Resumen de Flujo */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📋 Resumen del Flujo de Gestión de CTS
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Acceder al módulo de carga masiva de CTS.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Realizar la carga masiva de certificados PDF.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Consultar el historial de cargas realizadas.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Acceder al reporte histórico de CTS.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">5️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Filtrar y exportar el reporte histórico.</p>
                </div>
              </div>
            </div>

            {/* Validaciones del Test */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                ✅ Validaciones Clave del Módulo
              </h4>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                <li>Acceso correcto a las URLs de carga masiva y reporte histórico.</li>
                <li>Funcionalidad de carga masiva de archivos ZIP (con validación de formato DNI.pdf).</li>
                <li>Visualización del historial de cargas con sus detalles.</li>
                <li>Funcionalidad de filtros en el reporte histórico.</li>
                <li>Descarga del archivo Excel de exportación en el reporte histórico.</li>
              </ul>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Upload, FileArchive, RefreshCw, Clock, CheckCircle } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function CtsSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="cts">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Upload className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            <span>V. CTS - Carga Masiva de Certificados</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="cts" className="space-y-8 pt-4">

            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-600 dark:border-teal-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es la carga masiva de CTS?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Este módulo permite al Administrador cargar masivamente certificados de CTS (Compensación
                por Tiempo de Servicios) en formato ZIP para que los colaboradores puedan visualizar y
                descargar sus certificados desde la aplicación móvil.
              </p>
            </div>

            {/* Paso 1: Acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión como <strong>Administrador</strong> y navega a
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded mx-1 text-sm">/app/gestion/cts/carga-masiva</code>.
              </p>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Al ingresar verás:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Título del módulo de Carga Masiva CTS</li>
                  <li>Selector de <strong>Régimen</strong> (p-select)</li>
                  <li>Área de carga de archivos</li>
                  <li>Botón <strong>"Procesar carga"</strong> (deshabilitado hasta cargar archivo)</li>
                  <li>Botón <strong>"Refrescar"</strong></li>
                  <li>Tabla de historial de cargas previas</li>
                </ul>
              </div>

              <ManualImage
                src="/manuales/cts/cts-modulo-principal.png"
                alt="Vista general del módulo de Carga Masiva CTS con todos sus componentes"
                caption="Vista general del módulo de Carga Masiva CTS con todos sus componentes"
              />
            </div>

            {/* Paso 2: Seleccionar régimen */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Seleccionar Régimen
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Antes de cargar los certificados, selecciona el régimen laboral correspondiente:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Régimen Común</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Para colaboradores bajo el régimen laboral común (empleados de confianza y empleados).
                  </p>
                </div>
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Régimen Agrario Semestral</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Para colaboradores bajo el régimen agrario con pago semestral de CTS.
                  </p>
                </div>
              </div>

              <ManualImage
                src="/manuales/cts/cts-selector-regimen.png"
                alt="Selector de régimen con opciones disponibles desplegadas"
                caption="Selector de régimen con opciones disponibles desplegadas"
              />
            </div>

            {/* Paso 3: Preparar archivo ZIP */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Preparar Archivo ZIP
              </h3>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                  <strong>📦 Requisitos del archivo ZIP:</strong>
                </p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Formato: <strong>ZIP únicamente</strong></li>
                  <li>Tamaño máximo: <strong>2 MB</strong></li>
                  <li>Cada PDF debe estar nombrado con el <strong>DNI del colaborador</strong> (ej: <code>12345678.pdf</code>)</li>
                  <li>Solo se aceptan archivos PDF dentro del ZIP</li>
                </ul>
              </div>

              <p className={`${carbon.textPrimary} mb-3`}>
                Puedes descargar una plantilla de ejemplo haciendo clic en el botón de descarga disponible en el módulo.
              </p>

              <ManualImage
                src="/manuales/cts/cts-descarga-plantilla.png"
                alt="Botón de descarga de plantilla/ejemplo visible en el módulo"
                caption="Botón de descarga de plantilla/ejemplo visible en el módulo"
              />
            </div>

            {/* Paso 4: Cargar archivo */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Cargar Archivo ZIP
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Con el régimen seleccionado y el ZIP preparado:
              </p>

              <ol className={`list-decimal list-inside space-y-3 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el área de carga de archivos o en <strong>"Seleccionar archivo"</strong></li>
                <li>Navega y selecciona tu archivo ZIP</li>
                <li>El sistema validará el formato y mostrará el nombre del archivo seleccionado</li>
                <li>El botón <strong>"Procesar carga"</strong> se habilitará automáticamente</li>
              </ol>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>⚠️ Error de validación:</strong> Si el archivo no es ZIP o supera los 2 MB,
                  el sistema mostrará un mensaje de error y no habilitará el botón de procesar.
                </p>
              </div>

              <ManualImage
                src="/manuales/cts/cts-archivo-seleccionado.png"
                alt="Área de carga con archivo ZIP seleccionado y botón Procesar habilitado"
                caption="Área de carga con archivo ZIP seleccionado y botón Procesar habilitado"
              />
              <ManualImage
                src="/manuales/cts/cts-validacion-formato.png"
                alt="Mensaje de error cuando el formato no es válido"
                caption="Mensaje de error cuando el formato no es válido"
              />
            </div>

            {/* Paso 5: Procesar carga */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Procesar la Carga
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en <strong>"Procesar carga"</strong> para iniciar el proceso:
              </p>

              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Se mostrará un <strong>spinner o barra de progreso</strong> durante el procesamiento</li>
                <li>El sistema extrae los PDFs del ZIP y los asocia por DNI</li>
                <li>Al finalizar, se muestra un <strong>mensaje de éxito o error</strong></li>
                <li>La tabla de historial se actualiza automáticamente</li>
              </ul>

              <ManualImage
                src="/manuales/cts/cts-procesando-carga.png"
                alt="Indicador de progreso durante el procesamiento del ZIP"
                caption="Indicador de progreso durante el procesamiento del ZIP"
              />
              <ManualImage
                src="/manuales/cts/cts-carga-exitosa.png"
                alt="Mensaje de éxito tras procesar la carga correctamente"
                caption="Mensaje de éxito tras procesar la carga correctamente"
              />
            </div>

            {/* Paso 6: Historial de cargas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Historial de Cargas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                La tabla inferior muestra el historial de todas las cargas realizadas:
              </p>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-3`}>Columnas de la tabla:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Fecha:</strong> Fecha y hora de la carga</li>
                  <li><strong>Archivo:</strong> Nombre del ZIP procesado</li>
                  <li><strong>Registros:</strong> Total de certificados procesados</li>
                  <li><strong>Estado:</strong> Resultado del procesamiento</li>
                  <li><strong>Usuario:</strong> Quién realizó la carga</li>
                  <li><strong>Acciones:</strong> Botones de detalle o descarga</li>
                </ul>
              </div>

              <p className={`${carbon.textPrimary} mb-3`}>
                Usa el botón <strong>"Refrescar"</strong> para actualizar la tabla manualmente, o el botón
                de historial (<Clock className="w-3 h-3 inline" />) para ver el reporte histórico completo.
              </p>

              <ManualImage
                src="/manuales/cts/cts-historial-cargas.png"
                alt="Tabla de historial con cargas previas y sus resultados"
                caption="Tabla de historial con cargas previas y sus resultados"
              />
            </div>

            {/* Resumen de flujo */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📋 Flujo Completo de Carga Masiva CTS
              </h4>
              <div className="space-y-3">
                {[
                  'Preparar PDFs nombrados por DNI y comprimirlos en ZIP (máx 2 MB)',
                  'Seleccionar el régimen laboral correspondiente',
                  'Cargar el archivo ZIP en el módulo',
                  'Hacer clic en "Procesar carga" y esperar el resultado',
                  'Verificar el historial de cargas para confirmar el éxito',
                  'Los colaboradores pueden ver y descargar sus certificados en la app',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <p className={`${carbon.textPrimary} text-sm`}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

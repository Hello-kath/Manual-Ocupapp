'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Briefcase, Upload, Calendar as CalendarIcon, FileSpreadsheet, Clock } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function UtilidadesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="utilidades">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <span>IV. Gestión de Utilidades para Personal Cesado</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="utilidades" className="space-y-8 pt-4">

            {/* Introducción */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 dark:border-orange-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué son las utilidades para personal cesado?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Las utilidades son beneficios económicos que corresponden a ex-colaboradores de la empresa.
                Este módulo permite a los analistas de nómina gestionar las solicitudes, cargar masivamente
                certificados de utilidades, configurar fechas de abono y generar reportes para el proceso de pago.
              </p>
            </div>

            {/* Paso 1: Acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión como <strong>Analista de Nómina</strong> y navega al módulo de
                <strong> Gestión de Utilidades</strong>.
              </p>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>utilidades-acceso-analista.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista principal del módulo mostrando menú de gestión de utilidades
                </p>
              </div>
            </div>

            {/* Paso 2: Ver lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Ver Lista de Solicitudes Registradas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Visualiza la tabla completa de solicitudes de utilidades con la siguiente información:
              </p>

              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li><strong>Código del trabajador:</strong> Código SAP</li>
                <li><strong>Nombre completo:</strong> Apellidos y nombres</li>
                <li><strong>DNI:</strong> Número de documento</li>
                <li><strong>Monto:</strong> Cantidad a pagar (S/. o $)</li>
                <li><strong>Fecha de solicitud:</strong> Cuándo se registró</li>
                <li><strong>Cuenta bancaria:</strong> Número de cuenta para depósito</li>
                <li><strong>Fecha de abono:</strong> Fecha programada de pago</li>
                <li><strong>Estado:</strong> Pendiente, Certificado cargado, Fecha configurada, Procesado</li>
              </ul>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>utilidades-lista-solicitudes.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tabla mostrando todas las solicitudes con información completa y opciones de acción
                </p>
              </div>
            </div>

            {/* Paso 3: Carga masiva */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Carga Masiva de Certificados de Utilidades
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Una de las funcionalidades clave es la carga masiva de certificados PDF. Sigue estos pasos:
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                  <strong>📦 Preparación del archivo ZIP:</strong>
                </p>
                <ol className={`list-decimal list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Renombra cada certificado PDF con el DNI del trabajador (ej: <code>12345678.pdf</code>)</li>
                  <li>Agrupa todos los PDFs en un archivo ZIP</li>
                  <li>Nombra el ZIP descriptivamente (ej: <code>certificados_utilidades_2026.zip</code>)</li>
                </ol>
              </div>

              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-3 mt-6`}>
                Paso a paso de la carga:
              </h4>

              <ol className={`list-decimal list-inside space-y-3 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong>"Cargar Certificados Masivamente"</strong></li>
                <li>Se abrirá un modal con instrucciones</li>
                <li>Haz clic en <strong>"Seleccionar archivo ZIP"</strong></li>
                <li>Navega y selecciona tu archivo ZIP preparado</li>
                <li>Espera a que se complete la carga (verás una barra de progreso)</li>
                <li>Revisa el resumen de resultados</li>
              </ol>

              <div className="space-y-4 mb-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                    🖼️ Imagen: <code>utilidades-carga-masiva-inicio.png</code>
                  </p>
                  <p className={`text-sm ${carbon.textHelper}`}>
                    Modal inicial mostrando botón para seleccionar archivo ZIP
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                    🖼️ Imagen: <code>utilidades-seleccionar-zip.png</code>
                  </p>
                  <p className={`text-sm ${carbon.textHelper}`}>
                    Explorador de archivos mostrando archivo ZIP seleccionado
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                    🖼️ Imagen: <code>utilidades-carga-progreso.png</code>
                  </p>
                  <p className={`text-sm ${carbon.textHelper}`}>
                    Barra de progreso mostrando porcentaje de carga (ej: 45%)
                  </p>
                </div>
              </div>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-3`}>
                  📊 Resumen de carga (ejemplo):
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className={`${carbon.surface} p-3 rounded`}>
                    <p className={`text-xs ${carbon.textHelper}`}>Archivos procesados</p>
                    <p className={`text-2xl font-bold text-blue-600 dark:text-blue-400`}>25</p>
                  </div>
                  <div className={`${carbon.surface} p-3 rounded`}>
                    <p className={`text-xs ${carbon.textHelper}`}>Certificados asociados</p>
                    <p className={`text-2xl font-bold text-green-600 dark:text-green-400`}>23</p>
                  </div>
                  <div className={`${carbon.surface} p-3 rounded`}>
                    <p className={`text-xs ${carbon.textHelper}`}>Errores</p>
                    <p className={`text-2xl font-bold text-red-600 dark:text-red-400`}>2</p>
                  </div>
                </div>
                <p className={`text-xs ${carbon.textHelper} mt-3`}>
                  Errores: DNI 11111111 y 22222222 no encontrados en la base de datos
                </p>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>utilidades-carga-exitosa.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Mensaje de éxito mostrando resumen de archivos procesados y errores
                </p>
              </div>
            </div>

            {/* Paso 4: Verificar certificados */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Verificar Certificados Asociados
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Después de la carga masiva, la tabla se actualizará mostrando:
              </p>

              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Ícono de PDF verde/check en la columna "Certificado"</li>
                <li>Opción de "Ver certificado" en cada fila</li>
                <li>Estado actualizado a "Certificado cargado"</li>
                <li>Notificaciones enviadas a los trabajadores</li>
              </ul>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>utilidades-certificados-asociados.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tabla actualizada con íconos de PDF verde indicando certificados asociados
                </p>
              </div>
            </div>

            {/* Paso 5: Configurar fecha de abono */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Configurar Fechas de Abono
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Configura las fechas de pago para los trabajadores, ya sea individualmente o por grupos:
              </p>

              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-3`}>
                Configuración por grupo:
              </h4>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Selecciona múltiples trabajadores (checkbox)</li>
                <li>Haz clic en <strong>"Configurar fecha de abono"</strong></li>
                <li>Selecciona la fecha en el calendario</li>
                <li>Haz clic en <strong>"Guardar"</strong></li>
              </ol>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>utilidades-configurar-fecha-abono.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal de configuración con calendario y trabajadores seleccionados
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                  <strong>💡 Tip:</strong>
                </p>
                <p className={`text-sm ${carbon.textPrimary}`}>
                  Puedes configurar diferentes fechas de abono para diferentes grupos de pago.
                  Por ejemplo: Grupo A paga el 15 de marzo, Grupo B paga el 30 de marzo.
                </p>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>utilidades-fecha-abono-aplicada.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tabla actualizada mostrando fechas de abono configuradas
                </p>
              </div>
            </div>

            {/* Paso 6: Filtrar solicitudes */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Filtrar Solicitudes
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Utiliza los filtros para gestionar las solicitudes de manera eficiente:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Por Estado</p>
                  <ul className={`list-disc list-inside ml-4 space-y-1 text-xs ${carbon.textPrimary}`}>
                    <li>Pendiente</li>
                    <li>Certificado cargado</li>
                    <li>Fecha configurada</li>
                    <li>Procesado</li>
                  </ul>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Por Grupo de Pago</p>
                  <ul className={`list-disc list-inside ml-4 space-y-1 text-xs ${carbon.textPrimary}`}>
                    <li>Grupo A</li>
                    <li>Grupo B</li>
                    <li>Grupo C</li>
                  </ul>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-2`}>Por Rango de Fechas</p>
                  <ul className={`list-disc list-inside ml-4 space-y-1 text-xs ${carbon.textPrimary}`}>
                    <li>Fecha de solicitud</li>
                    <li>Fecha de abono</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                    🖼️ Imagen: <code>utilidades-filtrar-estado.png</code>
                  </p>
                  <p className={`text-sm ${carbon.textHelper}`}>
                    Filtro por estado aplicado mostrando resultados filtrados
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                    🖼️ Imagen: <code>utilidades-filtrar-grupo-pago.png</code>
                  </p>
                  <p className={`text-sm ${carbon.textHelper}`}>
                    Filtro por grupo de pago mostrando trabajadores agrupados
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 7: Exportar reporte */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                Exportar Reporte de Pagos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Genera el reporte final para el procesamiento de pagos:
              </p>

              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Aplica los filtros necesarios (opcional)</li>
                <li>Haz clic en <strong>"Exportar Reporte de Pagos"</strong></li>
                <li>Selecciona el formato: <strong>Excel (recomendado)</strong>, PDF o CSV</li>
                <li>El archivo se descargará automáticamente</li>
                <li>Usa este reporte para procesar pagos en el sistema bancario</li>
              </ol>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>El reporte incluye:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Código del trabajador</li>
                  <li>Nombre completo</li>
                  <li>DNI</li>
                  <li>Monto a pagar</li>
                  <li>Número de cuenta bancaria</li>
                  <li>Fecha de abono programada</li>
                  <li>Estado actual</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                    🖼️ Imagen: <code>utilidades-exportar-reporte-pagos.png</code>
                  </p>
                  <p className={`text-sm ${carbon.textHelper}`}>
                    Opciones de exportación con formatos disponibles
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                    🖼️ Imagen: <code>utilidades-reporte-excel-abierto.png</code>
                  </p>
                  <p className={`text-sm ${carbon.textHelper}`}>
                    Archivo Excel descargado mostrando datos formateados
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 8: Historial */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">8</span>
                Consultar Historial de Cargas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Revisa el historial de todas las cargas masivas realizadas:
              </p>

              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li><strong>Fecha de carga:</strong> Cuándo se subió el ZIP</li>
                <li><strong>Usuario:</strong> Quién realizó la carga</li>
                <li><strong>Nombre del archivo:</strong> ZIP procesado</li>
                <li><strong>Cantidad procesada:</strong> Total de archivos en el ZIP</li>
                <li><strong>Exitosos:</strong> Certificados asociados correctamente</li>
                <li><strong>Errores:</strong> Archivos que no pudieron procesarse</li>
              </ul>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>utilidades-historial-cargas.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tabla de historial mostrando todas las cargas masivas con resultados
                </p>
              </div>
            </div>

            {/* Resumen de flujo */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📋 Flujo Completo de Gestión de Utilidades
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <p className={`${carbon.textPrimary}`}>
                    Trabajador cesado registra solicitud de utilidades
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <p className={`${carbon.textPrimary}`}>
                    Analista de nómina verifica solicitudes en el sistema
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <p className={`${carbon.textPrimary}`}>
                    Analista carga masivamente certificados PDF (nombrados por DNI)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <p className={`${carbon.textPrimary}`}>
                    Sistema asocia automáticamente PDFs con trabajadores y envía notificaciones
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">5️⃣</span>
                  <p className={`${carbon.textPrimary}`}>
                    Analista configura fechas de abono por grupos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">6️⃣</span>
                  <p className={`${carbon.textPrimary}`}>
                    Analista exporta reporte Excel para procesar pagos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">7️⃣</span>
                  <p className={`${carbon.textPrimary}`}>
                    Trabajadores reciben sus utilidades en las fechas programadas
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

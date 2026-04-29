'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Users, FileText, Filter, Download } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function CertificadosSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="certificados">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span>III. Certificados de Trabajo para Personal Cesado</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="certificados" className="space-y-8 pt-4">

            {/* Introducción */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 dark:border-purple-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué son los certificados de trabajo?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Son documentos oficiales que acreditan la relación laboral de un ex-colaborador con la empresa.
                Los administradores PCO/PAT pueden consultar el historial de solicitudes, verificar el estado
                de generación y gestionar notificaciones a los solicitantes.
              </p>
            </div>

            {/* Paso 1: Acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo de Certificados
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión como <strong>Administrador PCO/PAT</strong> y navega al módulo de
                <strong> Certificados de Trabajo</strong>.
              </p>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>certificados-acceso-admin.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista principal del módulo de certificados con menú de navegación
                </p>
              </div>
            </div>

            {/* Paso 2: Historial */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Consultar Historial de Solicitudes
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Visualiza el historial completo de solicitudes de certificados con la siguiente información:
              </p>

              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li><strong>Trabajador:</strong> Nombre del ex-colaborador</li>
                <li><strong>DNI:</strong> Número de documento</li>
                <li><strong>Tipo de certificado:</strong> Trabajo simple, trabajo con remuneración, etc.</li>
                <li><strong>Fecha de solicitud:</strong> Cuándo se registró</li>
                <li><strong>Estado:</strong> Pendiente, Generado, Descargado</li>
                <li><strong>Fecha de generación:</strong> Cuándo se creó el PDF</li>
                <li><strong>Fecha de descarga:</strong> Cuándo el trabajador lo descargó</li>
              </ul>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>certificados-historial-solicitudes.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tabla de historial mostrando todas las solicitudes con estados y fechas
                </p>
              </div>
            </div>

            {/* Paso 3: Ver detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Ver Detalle de una Solicitud
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en una solicitud para ver su detalle completo:
              </p>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-3`}>Información del detalle:</p>
                <ul className={`list-disc list-inside ml-4 space-y-2 text-sm ${carbon.textPrimary}`}>
                  <li>Datos completos del trabajador cesado</li>
                  <li>Tipo de certificado solicitado</li>
                  <li>Fecha y hora de solicitud</li>
                  <li>Estado actual del certificado</li>
                  <li>PDF generado (si está disponible)</li>
                  <li>Botón de descarga del certificado</li>
                  <li>Historial de acciones (quién generó, cuándo se descargó)</li>
                </ul>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>certificados-detalle-solicitud.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista de detalle con información completa y opción de descarga
                </p>
              </div>
            </div>

            {/* Paso 4: Filtrar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">4</span>
                Filtrar Solicitudes
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Utiliza los filtros para encontrar solicitudes específicas:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Por Estado</p>
                  </div>
                  <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li>Pendiente</li>
                    <li>Generado</li>
                    <li>Descargado</li>
                  </ul>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Por Fecha</p>
                  </div>
                  <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li>Rango de fechas de solicitud</li>
                    <li>Rango de fechas de generación</li>
                  </ul>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Por Trabajador</p>
                  </div>
                  <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li>Buscar por nombre</li>
                    <li>Buscar por DNI</li>
                  </ul>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Por Tipo</p>
                  </div>
                  <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li>Certificado de trabajo simple</li>
                    <li>Con detalle de remuneración</li>
                  </ul>
                </div>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>certificados-filtrar-por-estado.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Filtros aplicados mostrando solo solicitudes en estado "Generado"
                </p>
              </div>
            </div>

            {/* Paso 5: Notificaciones */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Notificaciones Automáticas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El sistema envía notificaciones push automáticas cuando un certificado es generado:
              </p>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`font-semibold ${carbon.textPrimary} mb-2`}>
                  📧 Al trabajador (cuando certificado está listo):
                </p>
                <p className={`text-sm ${carbon.textPrimary}`}>
                  "Tu certificado de trabajo está listo para descargar"
                </p>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>certificados-notificacion-generado.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Notificación de certificado generado con opción de descarga
                </p>
              </div>
            </div>

            {/* Paso 6: Exportar reporte */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Exportar Reporte Completo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Los administradores pueden exportar un reporte completo de solicitudes:
              </p>

              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Aplica los filtros deseados (opcional)</li>
                <li>Haz clic en el botón <strong>"Exportar Reporte"</strong></li>
                <li>Selecciona el formato: Excel o PDF</li>
                <li>El archivo se descargará automáticamente</li>
              </ol>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>El reporte incluye:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Trabajador (nombre y DNI)</li>
                  <li>Tipo de certificado</li>
                  <li>Fecha de solicitud</li>
                  <li>Estado actual</li>
                  <li>Fecha de generación</li>
                  <li>Fecha de descarga (si aplica)</li>
                </ul>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>certificados-exportar-reporte.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Opciones de exportación y archivo descargándose
                </p>
              </div>
            </div>

            {/* Estados */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📊 Estados de Certificados
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-600 text-white px-3 py-1 rounded text-sm font-semibold">PENDIENTE</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Solicitud registrada, certificado aún no generado
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">GENERADO</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Certificado PDF creado y listo para descarga
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">DESCARGADO</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    El trabajador ya descargó su certificado
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

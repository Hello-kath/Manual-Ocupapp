'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Calendar, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import Image from 'next/image';

export function PermisosSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="permisos">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
            <span>I. Gestión de Solicitudes de Permisos</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="permisos" className="space-y-8 pt-4">

            {/* Paso 1: Acceso al sistema */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Sistema
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión en el sistema Conectados 2.0 con tus credenciales de aprobador.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-login-aprobador.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Pantalla de login del sistema mostrando campos de usuario y contraseña
                </p>
              </div>
            </div>

            {/* Paso 2: Bandeja de solicitudes */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Ver Bandeja de Solicitudes Pendientes
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Una vez dentro del sistema, navega al módulo de <strong>Permisos</strong>. Verás una tabla con todas
                las solicitudes pendientes de aprobación asignadas a ti según tu rol.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                  <strong>Roles y permisos:</strong>
                </p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Jefe Directo:</strong> Ve solicitudes de empleados a su cargo</li>
                  <li><strong>PAT/PCO:</strong> Ve solicitudes de operarios</li>
                </ul>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-bandeja-solicitudes.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tabla mostrando solicitudes pendientes con columnas: Colaborador, Tipo, Fecha, Estado
                </p>
              </div>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Información visible en la tabla:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Colaborador:</strong> Nombre y apellidos del solicitante</li>
                  <li><strong>Tipo de permiso:</strong> Personal, médico, estudios, etc.</li>
                  <li><strong>Fecha de solicitud:</strong> Cuándo se registró</li>
                  <li><strong>Fechas del permiso:</strong> Inicio y fin</li>
                  <li><strong>Estado:</strong> PENDIENTE (en amarillo/naranja)</li>
                  <li><strong>Acciones:</strong> Botón "Ver detalle"</li>
                </ul>
              </div>
            </div>

            {/* Paso 3: Ver detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Revisar Detalle de la Solicitud
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el botón <strong>"Ver detalle"</strong> de la solicitud que deseas revisar.
                Se abrirá un modal o vista con la información completa.
              </p>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-detalle-solicitud.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal mostrando información completa del colaborador, tipo de permiso, fechas, motivo y adjuntos
                </p>
              </div>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Información del detalle:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Datos del colaborador:</strong> Nombre, DNI, puesto, área</li>
                  <li><strong>Tipo de permiso:</strong> Descripción detallada</li>
                  <li><strong>Fechas:</strong> Inicio y fin del permiso</li>
                  <li><strong>Motivo:</strong> Justificación escrita por el colaborador</li>
                  <li><strong>Documentos adjuntos:</strong> PDF o imágenes de sustento</li>
                </ul>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-documento-adjunto.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Documento PDF adjunto visualizado (certificado médico, comprobante, etc.)
                </p>
              </div>
            </div>

            {/* Paso 4: Aprobar solicitud */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Aprobar una Solicitud
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si la solicitud cumple con los requisitos y deseas aprobarla, sigue estos pasos:
              </p>

              <ol className={`list-decimal list-inside space-y-3 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong className="text-green-600 dark:text-green-400">"Aprobar"</strong></li>
                <li>Se abrirá un modal de confirmación</li>
                <li>Opcionalmente, escribe un comentario</li>
                <li>Haz clic en <strong>"Confirmar"</strong></li>
              </ol>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-aprobar-modal.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal de confirmación de aprobación con campo de comentarios opcional
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-4 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                      <strong>¿Qué sucede al aprobar?</strong>
                    </p>
                    <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                      <li>El estado cambia a <strong>"APROBADO"</strong></li>
                      <li>Se registra tu nombre, fecha y hora de aprobación</li>
                      <li>Se envía <strong>notificación push</strong> al colaborador</li>
                      <li>Se actualiza el estado en <strong>SAP HCM</strong> automáticamente</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-aprobacion-exitosa.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Mensaje de confirmación exitosa mostrando estado APROBADO
                </p>
              </div>
            </div>

            {/* Paso 5: Rechazar solicitud */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Rechazar una Solicitud
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si la solicitud no cumple con los requisitos o debe ser rechazada:
              </p>

              <ol className={`list-decimal list-inside space-y-3 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong className="text-red-600 dark:text-red-400">"Rechazar"</strong></li>
                <li>Se abrirá un modal solicitando el motivo</li>
                <li><strong>Escribe obligatoriamente</strong> un comentario explicando el rechazo</li>
                <li>Haz clic en <strong>"Confirmar rechazo"</strong></li>
              </ol>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-rechazar-modal.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal de rechazo con campo de comentario obligatorio
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                      <strong>⚠️ Importante:</strong>
                    </p>
                    <p className={`text-sm ${carbon.textPrimary}`}>
                      El campo de comentarios es <strong>OBLIGATORIO</strong> al rechazar. El sistema validará
                      que escribas un motivo claro para que el colaborador entienda el rechazo.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-validacion-comentario.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Mensaje de error si se intenta rechazar sin escribir comentario
                </p>
              </div>
            </div>

            {/* Paso 6: Historial y reportes */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Consultar Historial y Generar Reportes
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Puedes consultar el historial completo de solicitudes (aprobadas, rechazadas y pendientes)
                y exportar reportes para análisis.
              </p>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-historial-completo.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista de historial mostrando todas las solicitudes con filtros disponibles
                </p>
              </div>

              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-3 mt-6`}>
                Aplicar Filtros
              </h4>
              <p className={`${carbon.textPrimary} mb-4`}>
                Usa los filtros para encontrar solicitudes específicas:
              </p>
              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li><strong>Por rango de fechas:</strong> Selecciona fecha inicio y fin</li>
                <li><strong>Por estado:</strong> APROBADO, RECHAZADO, PENDIENTE</li>
                <li><strong>Por colaborador:</strong> Busca por nombre o DNI</li>
                <li><strong>Por tipo de permiso:</strong> Personal, médico, estudios, etc.</li>
              </ul>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-filtros-aplicados.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Filtros activos mostrando resultados filtrados en la tabla
                </p>
              </div>

              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-3 mt-6`}>
                Exportar Reportes
              </h4>
              <p className={`${carbon.textPrimary} mb-4`}>
                Genera reportes en formato Excel o PDF para análisis externo:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Aplica los filtros deseados (opcional)</li>
                <li>Haz clic en el botón <strong>"Exportar"</strong></li>
                <li>Selecciona el formato: Excel (recomendado) o PDF</li>
                <li>El archivo se descargará automáticamente</li>
              </ol>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>permisos-exportar-reporte.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Opciones de exportación y archivo descargándose
                </p>
              </div>
            </div>

            {/* Resumen de flujo */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📋 Resumen del Flujo de Aprobación
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Colaborador registra solicitud → Sistema notifica al aprobador</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Aprobador revisa detalle y documentos adjuntos</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Aprobador decide: Aprobar (con comentario opcional) o Rechazar (con comentario obligatorio)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Sistema notifica al colaborador y actualiza SAP HCM</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">5️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Historial queda registrado para consultas futuras</p>
                </div>
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

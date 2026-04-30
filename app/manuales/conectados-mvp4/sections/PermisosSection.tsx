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
import { ManualImage } from '@/components/manual/ManualImage';

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
              <ManualImage
                src="/manuales/permisos/permisos-login-aprobador.png"
                alt="Pantalla de login del sistema mostrando campos de usuario y contraseña"
                caption="Pantalla de login del sistema mostrando campos de usuario y contraseña"
              />
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

              <ManualImage
                src="/manuales/permisos/permisos-bandeja-solicitudes.png"
                alt="Tabla mostrando solicitudes pendientes con columnas: Colaborador, Tipo, Fecha, Estado"
                caption="Tabla mostrando solicitudes pendientes con columnas: Colaborador, Tipo, Fecha, Estado"
              />

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

              <ManualImage
                src="/manuales/permisos/permisos-detalle-solicitud.png"
                alt="Modal mostrando información completa del colaborador, tipo de permiso, fechas, motivo y adjuntos"
                caption="Modal mostrando información completa del colaborador, tipo de permiso, fechas, motivo y adjuntos"
              />

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

              <ManualImage
                src="/manuales/permisos/permisos-documento-adjunto.png"
                alt="Documento PDF adjunto visualizado (certificado médico, comprobante, etc.)"
                caption="Documento PDF adjunto visualizado (certificado médico, comprobante, etc.)"
              />
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

              <ManualImage
                src="/manuales/permisos/permisos-aprobar-modal.png"
                alt="Modal de confirmación de aprobación con campo de comentarios opcional"
                caption="Modal de confirmación de aprobación con campo de comentarios opcional"
              />

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

              <ManualImage
                src="/manuales/permisos/permisos-aprobacion-exitosa.png"
                alt="Mensaje de confirmación exitosa mostrando estado APROBADO"
                caption="Mensaje de confirmación exitosa mostrando estado APROBADO"
              />
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

              <ManualImage
                src="/manuales/permisos/permisos-rechazar-modal.png"
                alt="Modal de rechazo con campo de comentario obligatorio"
                caption="Modal de rechazo con campo de comentario obligatorio"
              />

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

              <ManualImage
                src="/manuales/permisos/permisos-validacion-comentario.png"
                alt="Mensaje de error si se intenta rechazar sin escribir comentario"
                caption="Mensaje de error si se intenta rechazar sin escribir comentario"
              />
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

              <ManualImage
                src="/manuales/permisos/permisos-historial-completo.png"
                alt="Vista de historial mostrando todas las solicitudes con filtros disponibles"
                caption="Vista de historial mostrando todas las solicitudes con filtros disponibles"
              />

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

              <ManualImage
                src="/manuales/permisos/permisos-filtros-aplicados.png"
                alt="Filtros activos mostrando resultados filtrados en la tabla"
                caption="Filtros activos mostrando resultados filtrados en la tabla"
              />

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

              <ManualImage
                src="/manuales/permisos/permisos-exportar-reporte.png"
                alt="Opciones de exportación y archivo descargándose"
                caption="Opciones de exportación y archivo descargándose"
              />
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

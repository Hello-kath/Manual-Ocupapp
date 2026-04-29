'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FileCheck, CheckCircle, AlertCircle, Bell } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function JustificacionesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="justificaciones">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <FileCheck className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            <span>II. Justificación de Inasistencias</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="justificaciones" className="space-y-8 pt-4">

            {/* Introducción */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es una justificación de inasistencia?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Es el proceso mediante el cual un colaborador justifica una falta o inasistencia que ya ocurrió,
                adjuntando documentos de sustento (certificado médico, carta, etc.). A diferencia de los permisos,
                las justificaciones se registran <strong>después</strong> de la ausencia.
              </p>
            </div>

            {/* Paso 1: Acceder a bandeja */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceder a Bandeja de Justificaciones Pendientes
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Navega al módulo de <strong>Justificaciones</strong>. Verás las solicitudes pendientes de revisión.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                  <strong>Roles con acceso a aprobación:</strong>
                </p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Jefe Directo:</strong> Aprueba justificaciones de empleados</li>
                  <li><strong>PAT:</strong> Aprueba justificaciones de operarios</li>
                </ul>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>justificaciones-bandeja-pendientes.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Bandeja mostrando justificaciones pendientes con columnas: Colaborador, Fecha inasistencia, Tipo, Estado
                </p>
              </div>
            </div>

            {/* Paso 2: Revisar detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Revisar Detalle y Documento de Sustento
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en <strong>"Revisar"</strong> en la solicitud que deseas evaluar. Se mostrará:
              </p>

              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Información del colaborador</li>
                <li>Fecha(s) de inasistencia reportada</li>
                <li>Tipo de justificación (médica, personal, familiar, etc.)</li>
                <li>Motivo detallado</li>
                <li><strong>Documento de sustento adjunto</strong> (certificado médico, carta, etc.)</li>
                <li>Fechas de inicio y fin <strong className="text-yellow-600 dark:text-yellow-400">EDITABLES</strong></li>
              </ul>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>justificaciones-detalle-completo.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista de detalle mostrando toda la información y campos de fecha editables
                </p>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>justificaciones-documento-sustento.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Documento de sustento (certificado médico, carta, etc.) visualizado en pantalla
                </p>
              </div>
            </div>

            {/* Paso 3: Aprobar sin modificar fechas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Aprobar Justificación (Sin Modificar Fechas)
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si estás de acuerdo con las fechas registradas por el colaborador:
              </p>

              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Revisa el documento de sustento</li>
                <li><strong>No modifiques</strong> las fechas de inicio y fin</li>
                <li>Haz clic en el botón <strong className="text-green-600 dark:text-green-400">"Aprobar"</strong></li>
                <li>Opcionalmente, agrega un comentario</li>
                <li>Confirma la aprobación</li>
              </ol>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>justificaciones-aprobar-normal.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal de aprobación con fechas originales sin modificar
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                      <strong>Estado resultante: APROBADO</strong>
                    </p>
                    <p className={`text-sm ${carbon.textPrimary}`}>
                      Al aprobar sin modificar fechas, el estado final será <strong>"APROBADO"</strong>.
                      El sistema actualiza SAP HCM con las fechas originales de la solicitud.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 4: Aprobar modificando fechas (PARCIAL) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Aprobar con Modificación de Fechas (APROBADO PARCIAL)
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si consideras que el documento de sustento es válido pero cubre solo parte de los días solicitados:
              </p>

              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en los campos de <strong>Fecha inicio</strong> y/o <strong>Fecha fin</strong></li>
                <li>Modifica las fechas según lo que consideres justificado</li>
                <li>El sistema mostrará una advertencia indicando que será aprobación parcial</li>
                <li>Haz clic en <strong>"Aprobar"</strong></li>
                <li>Agrega un comentario explicando la modificación</li>
                <li>Confirma la aprobación</li>
              </ol>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>justificaciones-modificar-fechas.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Campos de fecha siendo modificados con advertencia visual de cambio
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 dark:border-orange-400 p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                      <strong>Ejemplo de caso de aprobación parcial:</strong>
                    </p>
                    <div className={`${carbon.layer01} p-3 rounded mt-2`}>
                      <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                        <strong>Solicitud original:</strong>
                      </p>
                      <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                        <li>Fecha inicio: 2026-02-18</li>
                        <li>Fecha fin: 2026-02-20 (3 días)</li>
                        <li>Motivo: Enfermedad</li>
                      </ul>
                      <p className={`text-sm ${carbon.textPrimary} mt-3 mb-2`}>
                        <strong>Documento de sustento:</strong>
                      </p>
                      <p className={`text-sm ${carbon.textPrimary}`}>
                        Certificado médico que cubre solo del 18 al 19 de febrero (2 días)
                      </p>
                      <p className={`text-sm ${carbon.textPrimary} mt-3 mb-2`}>
                        <strong>Acción del aprobador:</strong>
                      </p>
                      <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                        <li>Modifica fecha fin a: 2026-02-19</li>
                        <li>Comentario: "Se aprueba solo hasta el 19 según certificado médico"</li>
                        <li>Estado resultante: <strong className="text-orange-600 dark:text-orange-400">APROBADO PARCIAL</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>justificaciones-aprobado-parcial.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Confirmación mostrando estado APROBADO PARCIAL con fechas originales vs. aprobadas
                </p>
              </div>
            </div>

            {/* Paso 5: Rechazar justificación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Rechazar una Justificación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si el documento de sustento no es válido o la justificación no procede:
              </p>

              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong className="text-red-600 dark:text-red-400">"Rechazar"</strong></li>
                <li>Se abrirá un modal solicitando el motivo del rechazo</li>
                <li><strong className="text-red-600 dark:text-red-400">OBLIGATORIO:</strong> Escribe un comentario detallado explicando el rechazo</li>
                <li>Haz clic en <strong>"Confirmar rechazo"</strong></li>
              </ol>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                      <strong>⚠️ El comentario es OBLIGATORIO al rechazar</strong>
                    </p>
                    <p className={`text-sm ${carbon.textPrimary}`}>
                      El sistema no te permitirá rechazar sin escribir un motivo claro. Esto asegura que el
                      colaborador entienda por qué su justificación no fue aceptada.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>justificaciones-rechazar-sin-comentario.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Validación mostrando error al intentar rechazar sin escribir comentario
                </p>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>justificaciones-rechazo-con-comentario.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal de rechazo con comentario escrito y botón habilitado
                </p>
              </div>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mt-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Ejemplos de comentarios válidos:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>"El certificado médico no tiene firma ni sello del doctor"</li>
                  <li>"Las fechas del certificado no coinciden con las fechas de inasistencia"</li>
                  <li>"El documento está ilegible, solicitar uno nuevo"</li>
                  <li>"La justificación no es válida según política de la empresa"</li>
                </ul>
              </div>
            </div>

            {/* Paso 6: Notificaciones */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Notificaciones Automáticas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El sistema envía notificaciones push automáticas en tiempo real:
              </p>

              <div className="space-y-4">
                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold ${carbon.textPrimary} mb-2 flex items-center gap-2`}>
                    <Bell className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Al Aprobador (cuando colaborador registra):
                  </p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    "Nueva justificación de inasistencia de [Nombre Colaborador]"
                  </p>
                </div>

                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold ${carbon.textPrimary} mb-2 flex items-center gap-2`}>
                    <Bell className="w-4 h-4 text-green-600 dark:text-green-400" />
                    Al Colaborador (cuando se aprueba):
                  </p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    "Tu justificación de inasistencia fue aprobada" o "Tu justificación fue aprobada parcialmente"
                  </p>
                </div>

                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold ${carbon.textPrimary} mb-2 flex items-center gap-2`}>
                    <Bell className="w-4 h-4 text-red-600 dark:text-red-400" />
                    Al Colaborador (cuando se rechaza):
                  </p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    "Tu justificación de inasistencia fue rechazada - Motivo: [comentario del aprobador]"
                  </p>
                </div>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mt-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>justificaciones-notificacion-enviada.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Confirmación de notificación enviada al colaborador
                </p>
              </div>
            </div>

            {/* Resumen de estados */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📊 Resumen de Estados Posibles
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-600 text-white px-3 py-1 rounded text-sm font-semibold">PENDIENTE</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Justificación registrada, esperando revisión del aprobador
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">APROBADO</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Aprobada con fechas originales, sin modificaciones
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">APROBADO PARCIAL</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Aprobada con fechas modificadas (menos días que lo solicitado)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">RECHAZADO</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    No aprobada, documento no válido o no cumple requisitos
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

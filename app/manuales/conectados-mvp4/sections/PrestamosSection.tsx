'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CreditCard, CheckCircle, XCircle, History } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function PrestamosSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="prestamos">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span>X. Gestión de Préstamos (Gestor)</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="prestamos" className="space-y-8 pt-4">

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es la gestión de préstamos?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El Gestor puede revisar, aprobar o rechazar las solicitudes de préstamo (escolar y personal)
                presentadas por los colaboradores. También puede consultar el historial con KPIs del estado
                de todas las solicitudes procesadas.
              </p>
            </div>

            {/* Paso 1: Acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Panel de Gestión de Préstamos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión como <strong>Gestor</strong> y navega a <strong>Préstamos → Aprobaciones</strong> en el menú.
                El sistema te llevará a <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/app/gestion/loans/aprobaciones</code>.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Al ingresar verás:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Título: <strong>"Gestión de préstamos"</strong></li>
                  <li>Dos pestañas: <strong>"Préstamo escolar"</strong> y <strong>"Préstamo Personal"</strong></li>
                  <li>Tabla con las solicitudes pendientes de aprobación</li>
                  <li>Botones de <strong>Aprobar</strong> y <strong>Rechazar</strong> por cada fila</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/prestamos/prestamos-panel-aprobaciones.png"
                alt="Panel con pestañas de tipo de préstamo y tabla de solicitudes pendientes"
                caption="Panel con pestañas de tipo de préstamo y tabla de solicitudes pendientes"
              />
            </div>

            {/* Paso 2: Navegar entre tipos */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Navegar entre Tipos de Préstamo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Las solicitudes están separadas por tipo. Para cambiar de vista:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en la pestaña <strong>"Préstamo escolar"</strong> para ver solicitudes de préstamos educativos</li>
                <li>Haz clic en la pestaña <strong>"Préstamo Personal"</strong> para ver solicitudes de préstamos personales</li>
                <li>La pestaña activa se resalta con <strong>fondo verde</strong></li>
                <li>La tabla se recarga automáticamente con los datos del tipo seleccionado</li>
              </ol>
            </div>

            {/* Paso 3: Ver detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Ver Detalle de una Solicitud
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Antes de aprobar o rechazar, puedes revisar el detalle completo:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Ubica la solicitud en la tabla por DNI del colaborador</li>
                <li>Haz clic en el botón de <strong>Ver detalle</strong> de la fila</li>
                <li>Se abrirá un modal con la información completa</li>
                <li>Verifica los campos: <strong>DNI</strong>, <strong>Monto</strong>, estado <strong>"Por aprobar"</strong> y demás datos</li>
                <li>Haz clic en <strong>"Volver"</strong> para cerrar el modal</li>
              </ol>
              <ManualImage
                src="/manuales/prestamos/prestamos-modal-detalle.png"
                alt="Modal con DNI, Monto y estado &quot;Por aprobar&quot;"
                caption="Modal con DNI, Monto y estado &quot;Por aprobar&quot;"
              />
            </div>

            {/* Paso 4: Aprobar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Aprobar una Solicitud de Préstamo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para aprobar una solicitud de préstamo:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Localiza la fila del colaborador por DNI</li>
                <li>Haz clic en el botón <strong>"Aprobar"</strong> de esa fila</li>
                <li>Se abrirá el modal de aprobación</li>
                <li>Escribe un <strong>comentario</strong> en el campo de texto (requerido)</li>
                <li>Haz clic en <strong>"Confirmar"</strong> o el botón de aprobación</li>
                <li>Aparecerá un mensaje de éxito (toast verde)</li>
                <li>La solicitud <strong>desaparece de la bandeja</strong> de pendientes</li>
              </ol>
              <ManualImage
                src="/manuales/prestamos/prestamos-modal-aprobacion.png"
                alt="Modal de aprobación con campo de comentario y botón de confirmación"
                caption="Modal de aprobación con campo de comentario y botón de confirmación"
              />
            </div>

            {/* Paso 5: Rechazar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Rechazar una Solicitud de Préstamo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para rechazar una solicitud:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Localiza la fila del colaborador por DNI</li>
                <li>Haz clic en el botón <strong>"Rechazar"</strong> de esa fila</li>
                <li>Se abrirá el modal de rechazo</li>
                <li>El botón <strong>"Rechazar"</strong> estará <em>deshabilitado</em> hasta que ingreses un comentario</li>
                <li>Escribe el <strong>motivo del rechazo</strong> en el textarea</li>
                <li>El botón <strong>"Rechazar"</strong> se habilitará automáticamente</li>
                <li>Haz clic en <strong>"Rechazar"</strong> para confirmar</li>
                <li>Aparecerá un mensaje de éxito y la solicitud desaparecerá de la bandeja</li>
              </ol>

              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600 dark:border-amber-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>Importante:</strong> El campo de comentario es <strong>obligatorio</strong> para rechazar.
                  El botón "Rechazar" permanece deshabilitado hasta que se ingrese texto.
                </p>
              </div>

              <ManualImage
                src="/manuales/prestamos/prestamos-modal-rechazo.png"
                alt="Modal de rechazo con textarea de motivo y botón &quot;Rechazar&quot; habilitado"
                caption="Modal de rechazo con textarea de motivo y botón &quot;Rechazar&quot; habilitado"
              />
            </div>

            {/* Paso 6: Historial */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Consultar Historial de Préstamos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para ver el historial completo con métricas:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Navega a <strong>Préstamos → Historial</strong> en el menú</li>
                <li>URL: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/app/gestion/loans/historial-escolar</code></li>
                <li>Verás las tarjetas de KPI en la parte superior</li>
                <li>Debajo se muestra la tabla con todos los préstamos procesados</li>
                <li>Para volver a la bandeja de aprobaciones, haz clic en <strong>"Volver"</strong></li>
              </ol>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-3`}>Tarjetas de KPI disponibles:</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded border border-yellow-200 dark:border-yellow-800 text-center">
                    <p className="text-yellow-700 dark:text-yellow-300 font-semibold text-sm">Pendientes</p>
                    <p className={`text-xs ${carbon.textHelper} mt-1`}>Solicitudes por procesar</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800 text-center">
                    <p className="text-green-700 dark:text-green-300 font-semibold text-sm">Aprobados</p>
                    <p className={`text-xs ${carbon.textHelper} mt-1`}>Solicitudes aprobadas</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-800 text-center">
                    <p className="text-red-700 dark:text-red-300 font-semibold text-sm">Rechazados</p>
                    <p className={`text-xs ${carbon.textHelper} mt-1`}>Solicitudes rechazadas</p>
                  </div>
                </div>
              </div>

              <ManualImage
                src="/manuales/prestamos/prestamos-historial-kpis.png"
                alt="Vista del historial con tarjetas KPI y tabla de solicitudes procesadas"
                caption="Vista del historial con tarjetas KPI y tabla de solicitudes procesadas"
              />
            </div>

            {/* Estados */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📊 Estados de Préstamos
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-600 text-white px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">POR APROBAR</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Solicitud pendiente de revisión por el Gestor
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">APROBADO</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Solicitud aprobada, el colaborador recibirá notificación
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">RECHAZADO</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Solicitud rechazada con motivo registrado
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

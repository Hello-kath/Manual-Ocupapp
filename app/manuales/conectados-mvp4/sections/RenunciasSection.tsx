'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LogOut, CheckCircle, XCircle, Filter } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function RenunciasSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="renuncias">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <LogOut className="w-6 h-6 text-red-600 dark:text-red-400" />
            <span>VII. Gestión de Renuncias (Gestor)</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="renuncias" className="space-y-8 pt-4">

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 dark:border-red-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es la gestión de renuncias?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El Gestor puede revisar las solicitudes de renuncia enviadas por los colaboradores,
                aprobarlas indicando la fecha de cese, o rechazarlas con un comentario explicativo.
                También puede usar filtros avanzados para encontrar solicitudes específicas.
              </p>
            </div>

            {/* Paso 1: Acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso a la Bandeja de Solicitudes de Renuncia
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión como <strong>Gestor</strong> y navega a <strong>Renuncias</strong> en el menú lateral.
                URL: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/app/gestion/resignations/inbox</code>
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Al ingresar verás:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Título: <strong>"Panel de administración / Bandeja de Solicitudes de Renuncia"</strong></li>
                  <li>Tabla con el listado de solicitudes pendientes</li>
                  <li>Botones de <strong>Aprobar</strong> y <strong>Rechazar</strong> por fila</li>
                  <li>Opción de filtros avanzados</li>
                </ul>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>renuncias-bandeja-solicitudes.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Bandeja con listado de solicitudes de renuncia pendientes
                </p>
              </div>
            </div>

            {/* Paso 2: Buscar por DNI */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Buscar una Solicitud por DNI
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para ubicar rápidamente una solicitud específica:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Ubica el campo de búsqueda en la parte superior de la tabla</li>
                <li>Escribe el <strong>DNI del colaborador</strong></li>
                <li>La tabla filtrará automáticamente mostrando solo esa solicitud</li>
              </ol>
            </div>

            {/* Paso 3: Aprobar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Aprobar una Solicitud de Renuncia
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para aprobar la renuncia de un colaborador:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Localiza la solicitud en la tabla (busca por DNI si es necesario)</li>
                <li>Haz clic en el botón <strong>"Aprobar"</strong> de la fila correspondiente</li>
                <li>Se abrirá el modal de aprobación</li>
                <li>El botón <strong>"Aceptar"</strong> estará <em>deshabilitado</em> hasta completar el formulario</li>
                <li>Selecciona la <strong>Fecha de Cese</strong> en el campo de fecha</li>
                <li>Selecciona el <strong>Tipo de Aprobación</strong> en el dropdown (ej. "Aprobado")</li>
                <li>Escribe un <strong>Comentario</strong> en el textarea</li>
                <li>El botón <strong>"Aceptar"</strong> se habilitará al completar todos los campos</li>
                <li>Haz clic en <strong>"Aceptar"</strong> para confirmar la aprobación</li>
                <li>El modal se cierra y la solicitud desaparece de la bandeja de pendientes</li>
              </ol>

              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600 dark:border-amber-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>Importante:</strong> Los tres campos (Fecha de Cese, Tipo de Aprobación y Comentario)
                  son <strong>obligatorios</strong>. El botón "Aceptar" solo se habilita cuando todos están completos.
                </p>
              </div>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Campos del formulario de aprobación:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Fecha de Cese:</strong> Fecha en que el colaborador deja de prestar servicios (formato dd/mm/aaaa)</li>
                  <li><strong>Tipo de Aprobación:</strong> Selecciona del dropdown (ej. "Aprobado")</li>
                  <li><strong>Comentario:</strong> Observaciones o justificación de la decisión</li>
                </ul>
              </div>

              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>renuncias-modal-aprobacion.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal de aprobación con campos de Fecha de Cese, Tipo y Comentario
                </p>
              </div>
            </div>

            {/* Paso 4: Rechazar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Rechazar una Solicitud de Renuncia
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para rechazar la solicitud de renuncia:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Localiza la solicitud en la tabla</li>
                <li>Haz clic en el botón <strong>"Rechazar"</strong> de la fila</li>
                <li>Se abrirá el modal de rechazo</li>
                <li>Escribe el <strong>motivo del rechazo</strong> en el campo de comentario</li>
                <li>Haz clic en <strong>"Aceptar"</strong> para confirmar</li>
                <li>El modal se cierra y la solicitud desaparece de la bandeja</li>
              </ol>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>renuncias-modal-rechazo.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal de rechazo con campo de comentario obligatorio
                </p>
              </div>
            </div>

            {/* Paso 5: Filtros avanzados */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Usar Filtros Avanzados
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para búsquedas más precisas:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón de filtros avanzados (ícono de embudo)</li>
                <li>Se abrirá un panel con opciones adicionales de filtrado</li>
                <li>Ingresa el <strong>DNI</strong> del colaborador en el campo <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">#dni</code></li>
                <li>Haz clic en <strong>"Aplicar"</strong></li>
                <li>La tabla mostrará únicamente los registros que coincidan con el DNI</li>
              </ol>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>renuncias-filtros-avanzados.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Panel de filtros avanzados con campo DNI y botón Aplicar
                </p>
              </div>
            </div>

            {/* Estados */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📊 Estados de Solicitudes de Renuncia
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-600 text-white px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">PENDIENTE</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Solicitud enviada por el colaborador, en espera de decisión del Gestor
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">APROBADO</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Renuncia aprobada con fecha de cese establecida
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">RECHAZADO</div>
                  <p className={`${carbon.textPrimary} text-sm`}>
                    Solicitud rechazada con motivo registrado para el colaborador
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

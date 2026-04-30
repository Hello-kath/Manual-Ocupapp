'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Vote, Plus, Bell, Eye, Pencil, SlidersHorizontal } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function VotacionesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="votaciones">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Vote className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>VIII. Gestión de Votaciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="votaciones" className="space-y-8 pt-4">

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 dark:border-indigo-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es la gestión de votaciones?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El Administrador puede crear y gestionar votaciones para que los colaboradores de Camposol
                participen en procesos democráticos. Cada votación tiene audiencia configurable, fechas con
                hora, opción de voto anónimo y ciclo de vida con estados bien definidos.
              </p>
            </div>

            {/* Paso 1: Acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión como <strong>Administrador</strong> y navega a
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded mx-1 text-sm">/app/votes/list</code>.
              </p>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Columnas de la tabla:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Nombre votación</strong></li>
                  <li><strong>Fecha inicio</strong></li>
                  <li><strong>Fecha fin</strong></li>
                  <li><strong>Envío notificaciones</strong></li>
                  <li><strong>Audiencia definitiva</strong></li>
                  <li><strong>Estado</strong> (badge: Pendiente / Activa)</li>
                  <li><strong>Acciones</strong> (según estado)</li>
                </ul>
              </div>

              <ManualImage
                src="/manuales/votaciones/votaciones-modulo-principal.png"
                alt="Vista general del módulo con tabla de votaciones y badges de estado"
                caption="Vista general del módulo con tabla de votaciones y badges de estado"
              />
            </div>

            {/* Paso 2: Crear votación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Crear Nueva Votación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el botón circular <Plus className="w-4 h-4 inline mx-1" /> para abrir el formulario:
              </p>

              <div className="space-y-4 mb-4">
                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-1`}>Nombre de la votación</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Campo de texto libre. Ej: <em>"Votación de Prueba E2E"</em>
                  </p>
                </div>

                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-1`}>Fechas con hora</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Selecciona <strong>fecha de inicio</strong> y <strong>fecha final</strong> con hora exacta.
                    Formato: <code>01/03/2026, 10:35 p. m.</code>
                  </p>
                </div>

                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-1`}>Descripción</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Máximo <strong>1000 caracteres</strong>. Describe el propósito de la votación.
                  </p>
                </div>
              </div>

              <ManualImage
                src="/manuales/votaciones/votaciones-formulario-creacion.png"
                alt="Formulario de creación con campos de nombre, fechas y descripción"
                caption="Formulario de creación con campos de nombre, fechas y descripción"
              />
            </div>

            {/* Paso 3: Configurar audiencia */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Configurar Audiencia
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Selecciona cómo definir la audiencia de la votación mediante el toggle:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <SlidersHorizontal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Por filtro (predeterminado)</p>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Selecciona sede mediante dropdown. Puedes usar <strong>"Área de nómina"</strong> para
                    criterios adicionales. Modo activo por defecto.
                  </p>
                </div>
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Plus className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <p className={`font-semibold text-sm ${carbon.textPrimary}`}>Por lista de códigos</p>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary}`}>
                    Ingresa códigos de colaboradores separados por comas.
                    Ej: <code>12345, 67890, 11223</code>. Útil para audiencias específicas.
                  </p>
                </div>
              </div>

              <ManualImage
                src="/manuales/votaciones/votaciones-toggle-audiencia.png"
                alt="Toggle entre &quot;Por filtro&quot; y &quot;Por lista de códigos&quot; con campo de entrada"
                caption="Toggle entre &quot;Por filtro&quot; y &quot;Por lista de códigos&quot; con campo de entrada"
              />
            </div>

            {/* Paso 4: Votación anónima */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Votación Anónima
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Activa el checkbox <strong>"Votación anónima"</strong> si los votos no deben identificar al votante:
              </p>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 dark:border-indigo-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>Cuando está activado:</strong> Los votos se registran sin identificar al colaborador.
                  Útil para votaciones sensibles o elecciones de representantes.
                </p>
              </div>

              <p className={`${carbon.textPrimary} mb-3`}>
                Haz clic en <strong>"Continuar"</strong> para guardar la votación y volver a la lista.
              </p>
            </div>

            {/* Paso 5: Estados y acciones */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Estados y Acciones Disponibles
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Las acciones disponibles en cada fila dependen del estado de la votación:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className={`${carbon.surface} p-4 border border-yellow-300 dark:border-yellow-600 rounded-lg`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 text-xs font-semibold px-2 py-1 rounded-full">
                      PENDIENTE
                    </span>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary} mb-2`}>Votación creada, aún no publicada:</p>
                  <ul className={`space-y-1`}>
                    <li className="flex items-center gap-2 text-xs">
                      <Pencil className="w-3 h-3 text-blue-600" />
                      <span className={carbon.textPrimary}><strong>Editar</strong> — modificar datos</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs">
                      <Bell className="w-3 h-3 text-orange-600" />
                      <span className={carbon.textPrimary}><strong>Notificar</strong> — publicar votación</span>
                    </li>
                  </ul>
                </div>

                <div className={`${carbon.surface} p-4 border border-green-300 dark:border-green-600 rounded-lg`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 text-xs font-semibold px-2 py-1 rounded-full">
                      ACTIVA
                    </span>
                  </div>
                  <p className={`text-xs ${carbon.textPrimary} mb-2`}>Votación publicada y en curso:</p>
                  <ul className={`space-y-1`}>
                    <li className="flex items-center gap-2 text-xs">
                      <Eye className="w-3 h-3 text-blue-600" />
                      <span className={carbon.textPrimary}><strong>Ver</strong> — consultar detalles y resultados</span>
                    </li>
                  </ul>
                </div>
              </div>

              <ManualImage
                src="/manuales/votaciones/votaciones-acciones-por-estado.png"
                alt="Tabla mostrando botones de acción distintos según el estado de cada votación"
                caption="Tabla mostrando botones de acción distintos según el estado de cada votación"
              />
            </div>

            {/* Paso 6: Publicar votación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Publicar una Votación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Para publicar una votación en estado <strong>Pendiente</strong>, haz clic en el botón
                <Bell className="w-4 h-4 inline mx-1 text-orange-600" /><strong>Notificar</strong>:
              </p>

              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Se abrirá el <strong>modal de publicación</strong></li>
                <li>
                  Opcional: Marca <strong>"Voto en blanco"</strong> para permitir que los colaboradores
                  voten en blanco
                </li>
                <li>Haz clic en <strong>"Publicar ahora"</strong> para confirmar y activar la votación</li>
                <li>Usa <strong>"Cancelar"</strong> para cerrar sin publicar</li>
              </ol>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 p-4 mb-4">
                <p className={`text-sm ${carbon.textPrimary}`}>
                  <strong>⚠️ Importante:</strong> Una vez publicada, la votación cambia a estado
                  <strong> Activa</strong> y ya no puede editarse. Solo se puede consultar.
                </p>
              </div>

              <ManualImage
                src="/manuales/votaciones/votaciones-modal-publicacion.png"
                alt="Modal de publicación con checkbox &quot;Voto en blanco&quot; y botón &quot;Publicar ahora&quot;"
                caption="Modal de publicación con checkbox &quot;Voto en blanco&quot; y botón &quot;Publicar ahora&quot;"
              />
            </div>

            {/* Paso 7: Filtros y columnas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                Filtros y Columnas Personalizables
              </h3>

              <p className={`${carbon.textPrimary} mb-3`}>
                Usa el botón <SlidersHorizontal className="w-4 h-4 inline mx-1" /> para filtrar por
                <strong> Estado</strong>, <strong>Tipo</strong> y <strong>Audiencia</strong>.
              </p>

              <p className={`${carbon.textPrimary}`}>
                El selector de columnas permite mostrar u ocultar:
                <strong> Fecha inicio</strong>, <strong>Fecha fin</strong>,
                <strong> Envío notificaciones</strong>, <strong>Audiencia</strong>, <strong>Estado</strong>.
              </p>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

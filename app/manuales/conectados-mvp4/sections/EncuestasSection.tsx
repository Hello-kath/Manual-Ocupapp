'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ClipboardList, Plus, SlidersHorizontal, ToggleLeft, Trash2 } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function EncuestasSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="encuestas">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <ClipboardList className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            <span>VII. Gestión de Encuestas</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="encuestas" className="space-y-8 pt-4">

            <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-600 dark:border-pink-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es la gestión de encuestas?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El Administrador puede crear y gestionar encuestas dirigidas a los colaboradores de
                Camposol. Cada encuesta puede tener preguntas de distintos tipos, audiencia configurada
                por sede y fechas de disponibilidad con hora exacta.
              </p>
            </div>

            {/* Paso 1: Acceso */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Inicia sesión como <strong>Administrador</strong> y navega a
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded mx-1 text-sm">/app/surveys/list</code>.
              </p>

              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Verás:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Título: <strong>"Resultados Encuestas"</strong></li>
                  <li>Tabla con encuestas existentes</li>
                  <li>Botón circular <Plus className="w-3 h-3 inline mx-1" /> para crear nueva encuesta</li>
                  <li>Botón de búsqueda avanzada (<SlidersHorizontal className="w-3 h-3 inline" />)</li>
                  <li>Botón de selector de columnas</li>
                </ul>
              </div>

              <ManualImage
                src="/manuales/encuestas/encuestas-modulo-principal.png"
                alt="Vista general del módulo de encuestas con tabla y controles"
                caption="Vista general del módulo de encuestas con tabla y controles"
              />
            </div>

            {/* Paso 2: Crear encuesta */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Crear Nueva Encuesta
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el botón circular <Plus className="w-4 h-4 inline mx-1" /> para abrir el formulario de creación:
              </p>

              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-3`}>Datos generales:</h4>

              <div className="space-y-4 mb-4">
                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>¿Es obligatoria?</p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Radio buttons <strong>Sí / No</strong>. Define si la encuesta es de respuesta obligatoria
                    para los colaboradores.
                  </p>
                </div>

                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Fechas de disponibilidad</p>
                  <p className={`text-sm ${carbon.textPrimary} mb-1`}>
                    Selecciona <strong>fecha de inicio</strong> y <strong>fecha final</strong> con hora exacta.
                  </p>
                  <p className={`text-xs ${carbon.textHelper}`}>
                    Formato: <code>01/03/2026 - 10:00</code>. La fecha de inicio debe ser anterior a la fecha fin.
                  </p>
                </div>

                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Título</p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Campo de texto. Máximo <strong>100 caracteres</strong>. El contador se actualiza en tiempo
                    real (ej: <code>15/100</code>). Campo obligatorio para habilitar "Finalizar".
                  </p>
                </div>

                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Descripción</p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Área de texto. Máximo <strong>1000 caracteres</strong>. Contador visible. Campo obligatorio.
                  </p>
                </div>

                <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Sede</p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Dropdown para seleccionar la sede a la cual va dirigida la encuesta.
                    También puedes usar <strong>"Área de nómina"</strong> para criterios adicionales.
                  </p>
                </div>
              </div>

              <ManualImage
                src="/manuales/encuestas/encuestas-formulario-creacion.png"
                alt="Formulario de creación con todos los campos completados"
                caption="Formulario de creación con todos los campos completados"
              />
            </div>

            {/* Paso 3: Añadir preguntas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Añadir Preguntas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en <strong>"Añadir pregunta"</strong> para agregar una tarjeta de pregunta:
              </p>

              <ol className={`list-decimal list-inside space-y-3 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Escribe el <strong>texto de la pregunta</strong> en el campo de la tarjeta</li>
                <li>
                  Selecciona el <strong>tipo de respuesta</strong> del dropdown:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li>Respuesta corta</li>
                    <li>Respuesta larga</li>
                    <li>Opción múltiple</li>
                    <li>Casillas de verificación</li>
                    <li>Lista desplegable</li>
                  </ul>
                </li>
                <li>
                  Activa el switch <strong>"Obligatorio"</strong> si la pregunta debe ser respondida
                  obligatoriamente
                </li>
                <li>
                  Usa el botón <Trash2 className="w-3 h-3 inline mx-1" /> para eliminar una pregunta si es necesario
                </li>
                <li>Repite para cada pregunta adicional</li>
              </ol>

              <ManualImage
                src="/manuales/encuestas/encuestas-anadir-pregunta.png"
                alt="Tarjeta de pregunta con tipo de respuesta y switch de obligatorio"
                caption="Tarjeta de pregunta con tipo de respuesta y switch de obligatorio"
              />
            </div>

            {/* Paso 4: Finalizar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Guardar la Encuesta
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Una vez completados todos los campos obligatorios:
              </p>

              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>El botón <strong>"Finalizar"</strong> se habilitará automáticamente</li>
                <li>Haz clic en <strong>"Finalizar"</strong> para guardar la encuesta</li>
                <li>La encuesta aparecerá en la tabla del módulo</li>
                <li>Usa <strong>"Cancelar"</strong> para descartar sin guardar</li>
              </ul>

              <ManualImage
                src="/manuales/encuestas/encuestas-guardar-encuesta.png"
                alt="Botón Finalizar habilitado con encuesta lista para guardar"
                caption="Botón Finalizar habilitado con encuesta lista para guardar"
              />
            </div>

            {/* Paso 5: Búsqueda avanzada */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Buscar y Filtrar Encuestas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Usa el botón <SlidersHorizontal className="w-4 h-4 inline mx-1" /> para abrir el popover de búsqueda avanzada:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-1`}>Por Estado</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>Activa, Pendiente, Finalizada, etc.</p>
                </div>
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-1`}>Por Tipo</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>Tipo de encuesta configurado</p>
                </div>
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold text-sm ${carbon.textPrimary} mb-1`}>Por Audiencia</p>
                  <p className={`text-xs ${carbon.textPrimary}`}>Sede o grupo objetivo</p>
                </div>
              </div>

              <p className={`${carbon.textPrimary} mb-3`}>
                Haz clic en <strong>"Filtrar"</strong> para aplicar los filtros seleccionados.
              </p>

              <ManualImage
                src="/manuales/encuestas/encuestas-busqueda-avanzada.png"
                alt="Popover de búsqueda avanzada con selects de Estado, Tipo y Audiencia"
                caption="Popover de búsqueda avanzada con selects de Estado, Tipo y Audiencia"
              />
            </div>

            {/* Paso 6: Columnas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Personalizar Columnas y Paginación
              </h3>

              <p className={`${carbon.textPrimary} mb-3`}>
                Usa el botón de columnas para mostrar u ocultar: <strong>Fecha inicio</strong>,
                <strong> Fecha fin</strong>, <strong>Audiencia</strong>, <strong>Estado</strong>.
              </p>

              <p className={`${carbon.textPrimary}`}>
                La paginación en la parte inferior permite navegar entre páginas con botones
                Siguiente / Anterior o haciendo clic en el número de página directamente.
              </p>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

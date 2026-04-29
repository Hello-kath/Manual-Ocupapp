'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'; // Assuming Accordion components are correctly imported
import { ClipboardList, PlusCircle, Search, Filter, ListChecks, CheckSquare } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function EncuestasSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="encuestas">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <ClipboardList className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            <span>XI. Gestión de Encuestas</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="encuestas" className="space-y-8 pt-4">

            {/* Introducción */}
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-600 dark:border-teal-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es el módulo de Gestión de Encuestas?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Este módulo permite a los administradores crear, configurar y gestionar encuestas para los colaboradores.
                Facilita la recopilación de información y opiniones a través de formularios personalizables.
              </p>
            </div>

            {/* Paso 1: Acceso al módulo */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Navega a la URL <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/app/surveys/list</code>.
                Verificarás el título "Resultados Encuestas" y una tabla con las encuestas existentes.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>encuestas-vista-general.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista general del módulo de Gestión de Encuestas.
                </p>
              </div>
            </div>

            {/* Paso 2: Crear nueva encuesta */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Crear Nueva Encuesta
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el botón circular con el icono <PlusCircle className="w-4 h-4 inline" /> para iniciar el proceso de creación de una nueva encuesta.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>encuestas-boton-crear.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Botón para crear una nueva encuesta.
                </p>
              </div>
              <p className={`${carbon.textPrimary} mt-4 mb-4`}>
                Se abrirá un formulario donde podrás definir los detalles de la encuesta y añadir preguntas:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Campos del formulario:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Título:</strong> Nombre de la encuesta (máx. 100 caracteres).</li>
                  <li><strong>Descripción:</strong> Detalles adicionales (máx. 1000 caracteres).</li>
                  <li><strong>Fechas de inicio y fin:</strong> Período de actividad de la encuesta.</li>
                  <li><strong>Audiencia:</strong> Define quién puede responder la encuesta (por filtro o lista de códigos).</li>
                  <li><strong>Obligatoria:</strong> Indica si la encuesta es de respuesta obligatoria.</li>
                </ul>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>encuestas-formulario-creacion.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Formulario de creación de encuesta con campos generales.
                </p>
              </div>
            </div>

            {/* Paso 3: Añadir Preguntas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Añadir Preguntas a la Encuesta
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Dentro del formulario de creación, puedes añadir múltiples preguntas a tu encuesta:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong>"Añadir pregunta"</strong>.</li>
                <li>Ingresa el texto de la pregunta.</li>
                <li>Selecciona el <strong>Tipo de respuesta</strong> (Respuesta corta, Opción múltiple, Lista desplegable, etc.).</li>
                <li>Marca el switch <strong>"Obligatorio"</strong> si la pregunta debe ser respondida.</li>
                <li>Puedes eliminar preguntas con el icono de papelera.</li>
              </ol>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>encuestas-anadir-pregunta.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tarjeta de pregunta con campos para texto, tipo de respuesta y opción de obligatoriedad.
                </p>
              </div>
            </div>

            {/* Paso 4: Búsqueda Avanzada y Selector de Columnas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Búsqueda Avanzada y Personalización de Columnas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Utiliza el icono <Search className="w-4 h-4 inline" /> o <Filter className="w-4 h-4 inline" /> para abrir el popover de búsqueda avanzada y aplicar filtros por estado, tipo o audiencia.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>encuestas-busqueda-avanzada-popover.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Popover de búsqueda avanzada con campos de filtro.
                </p>
              </div>
              <p className={`${carbon.textPrimary} mb-4`}>
                El selector de columnas te permite elegir qué información deseas visualizar en la tabla. Haz clic en el icono <ListChecks className="w-4 h-4 inline" /> para abrir el popover.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>encuestas-selector-columnas-popover.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Popover para seleccionar columnas visibles en la tabla.
                </p>
              </div>
            </div>

            {/* Resumen de Flujo */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📋 Resumen del Flujo de Gestión de Encuestas
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Acceder al módulo de encuestas.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Crear una nueva encuesta, definiendo título, descripción y fechas.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Añadir y configurar las preguntas de la encuesta.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Utilizar la búsqueda avanzada y el selector de columnas para gestionar las encuestas.</p>
                </div>
              </div>
            </div>

            {/* Validaciones del Test */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                ✅ Validaciones Clave del Módulo
              </h4>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                <li>Acceso correcto a la URL y visibilidad de la tabla.</li>
                <li>Funcionalidad del botón de creación de encuestas.</li>
                <li>Completado y validación de los campos generales del formulario de creación.</li>
                <li>Funcionalidad de añadir, configurar y eliminar preguntas.</li>
                <li>Funcionamiento de búsqueda avanzada y selector de columnas.</li>
              </ul>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

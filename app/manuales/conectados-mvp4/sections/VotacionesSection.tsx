'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'; // Assuming Accordion components are correctly imported
import { BarChart3, PlusCircle, Search, Filter, Eye, Pencil, Bell, ListChecks, CheckSquare } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function VotacionesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="votaciones">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span>VIII. Gestión de Votaciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="votaciones" className="space-y-8 pt-4">

            {/* Introducción */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 dark:border-purple-400 p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>¿Qué es el módulo de Gestión de Votaciones?</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Este módulo permite a los administradores crear, configurar y gestionar votaciones para los colaboradores.
                Facilita la participación en procesos democráticos internos, con opciones de audiencia, anonimato y seguimiento de estados.
              </p>
            </div>

            {/* Paso 1: Acceso al módulo */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Acceso al Módulo
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Navega a la URL <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/app/votes/list</code>.
                Verificarás el título "Votaciones" y una tabla con las votaciones existentes.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>votaciones-vista-general.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Vista general del módulo de Gestión de Votaciones.
                </p>
              </div>
            </div>

            {/* Paso 2: Crear nueva votación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Crear Nueva Votación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el botón circular con el icono <PlusCircle className="w-4 h-4 inline" /> para iniciar el proceso de creación de una nueva votación.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>votaciones-boton-crear.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Botón para crear una nueva votación.
                </p>
              </div>
              <p className={`${carbon.textPrimary} mt-4 mb-4`}>
                Se abrirá un formulario donde deberás completar los detalles de la votación:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Campos del formulario:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Nombre de la votación:</strong> Título descriptivo.</li>
                  <li><strong>Fecha y hora de inicio:</strong> Cuándo comienza la votación.</li>
                  <li><strong>Fecha y hora final:</strong> Cuándo termina la votación.</li>
                  <li><strong>Descripción:</strong> Detalles adicionales (máx. 1000 caracteres).</li>
                  <li><strong>Audiencia:</strong> Define quién puede votar (ver siguiente paso).</li>
                  <li><strong>Votación anónima:</strong> Checkbox para configurar el anonimato.</li>
                </ul>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>votaciones-formulario-creacion.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Formulario de creación de votación con campos completos.
                </p>
              </div>
            </div>

            {/* Paso 3: Configuración de Audiencia y Anonimato */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Configuración de Audiencia y Anonimato
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Define la audiencia de la votación utilizando el toggle de filtros:
              </p>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                <li><strong>Por filtro:</strong> Selecciona la audiencia por criterios como sede, área de nómina, etc. (modo por defecto).</li>
                <li><strong>Por lista de códigos:</strong> Ingresa directamente los códigos de los colaboradores separados por comas.</li>
              </ul>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>votaciones-toggle-filtros.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Toggle para seleccionar el método de definición de audiencia.
                </p>
              </div>
              <p className={`${carbon.textPrimary} mb-4`}>
                También puedes configurar si la votación será anónima:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Votación Anónima:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Marca el checkbox <CheckSquare className="w-4 h-4 inline" /> <strong>"Votación anónima"</strong> si deseas que los votos se registren sin identificar al votante.</li>
                  <li>Desmárcalo si los votos deben ser identificables.</li>
                </ul>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>votaciones-checkbox-anonima.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Checkbox para configurar el anonimato de la votación.
                </p>
              </div>
            </div>

            {/* Paso 4: Visualización de la Tabla de Votaciones */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Visualización de la Tabla de Votaciones
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                La tabla principal muestra un resumen de todas las votaciones, incluyendo su estado actual:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Columnas visibles:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Nombre votación</strong></li>
                  <li><strong>Fecha inicio</strong></li>
                  <li><strong>Fecha fin</strong></li>
                  <li><strong>Envío notificaciones</strong></li>
                  <li><strong>Audiencia definitiva</strong></li>
                  <li><strong>Estado:</strong> Pendiente, Activa, Finalizada.</li>
                  <li><strong>Acciones:</strong> Botones de edición, notificación o visualización.</li>
                </ul>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>votaciones-tabla-columnas.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Tabla de votaciones con todas las columnas y badges de estado.
                </p>
              </div>
            </div>

            {/* Paso 5: Acciones por Estado */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                Acciones Disponibles según el Estado
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Las acciones que puedes realizar sobre una votación dependen de su estado:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Estados y Acciones:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Pendiente:</strong> Puedes <Pencil className="w-4 h-4 inline" /> <strong>Editar</strong> la votación o <Bell className="w-4 h-4 inline" /> <strong>Notificar/Publicar</strong>.</li>
                  <li><strong>Activa:</strong> Solo puedes <Eye className="w-4 h-4 inline" /> <strong>Ver</strong> los detalles y resultados parciales.</li>
                  <li><strong>Finalizada:</strong> Solo puedes <Eye className="w-4 h-4 inline" /> <strong>Ver</strong> los resultados finales.</li>
                </ul>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>votaciones-acciones-estado.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Botones de acción (Editar, Notificar, Ver) según el estado de la votación.
                </p>
              </div>
            </div>

            {/* Paso 6: Modal de Publicación */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                Modal de Publicación
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al hacer clic en <Bell className="w-4 h-4 inline" /> <strong>"Notificar"</strong> en una votación pendiente, se abrirá un modal de confirmación:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-semibold ${carbon.textPrimary} mb-2`}>Opciones del modal:</p>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Checkbox "Voto en blanco":</strong> Permite a los colaboradores votar en blanco.</li>
                  <li><strong>Botones "Cancelar" y "Publicar ahora":</strong> Para gestionar la publicación.</li>
                </ul>
              </div>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>votaciones-modal-publicacion.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Modal de confirmación de publicación con opción de voto en blanco.
                </p>
              </div>
            </div>

            {/* Paso 7: Búsqueda avanzada y selector de columnas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                Búsqueda Avanzada y Personalización de Columnas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Utiliza el icono <Search className="w-4 h-4 inline" /> o <Filter className="w-4 h-4 inline" /> para abrir el popover de búsqueda avanzada y aplicar filtros por estado, tipo o audiencia.
              </p>
              <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <p className={`text-sm font-mono ${carbon.textPrimary} mb-2`}>
                  🖼️ Imagen: <code>votaciones-busqueda-avanzada-popover.png</code>
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
                  🖼️ Imagen: <code>votaciones-selector-columnas-popover.png</code>
                </p>
                <p className={`text-sm ${carbon.textHelper}`}>
                  Popover para seleccionar columnas visibles en la tabla.
                </p>
              </div>
            </div>

            {/* Resumen de Flujo */}
            <div className={`${carbon.layer01} p-6 border ${carbon.border} rounded-lg`}>
              <h4 className={`text-lg font-semibold ${carbon.textPrimary} mb-4`}>
                📋 Resumen del Flujo de Gestión de Votaciones
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Acceder al módulo de votaciones.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Crear una nueva votación, definiendo nombre, fechas y descripción.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Configurar la audiencia (por filtro o lista de códigos) y el anonimato.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Visualizar las votaciones en la tabla y sus estados.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">5️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Realizar acciones (Editar, Notificar, Ver) según el estado de la votación.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">6️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Publicar votaciones pendientes a través del modal de confirmación.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">7️⃣</span>
                  <p className={`${carbon.textPrimary}`}>Utilizar la búsqueda avanzada y el selector de columnas para gestionar la información.</p>
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
                <li>Funcionalidad del botón de creación de votaciones.</li>
                <li>Completado y validación de los campos del formulario de creación.</li>
                <li>Funcionamiento del toggle de audiencia y el checkbox de votación anónima.</li>
                <li>Visualización correcta de columnas y badges de estado en la tabla.</li>
                <li>Disponibilidad de acciones (Editar, Notificar, Ver) según el estado de la votación.</li>
                <li>Apertura y funcionalidad del modal de publicación.</li>
                <li>Funcionalidad de búsqueda avanzada y selector de columnas.</li>
              </ul>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Bell, Filter, CheckCheck } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function NotificacionesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="notificaciones">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Notificaciones</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="notificaciones" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Panel de Notificaciones</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El panel de notificaciones te mantiene informado de los eventos relevantes del sistema,
                como la asignación a proyectos, cambios en campañas o comentarios en algun post.
                Se accede desde el ícono de campaña en la barra de navegación superior.
              </p>
            </div>

            {/* Paso 1 - Acceder al panel */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <Bell className="w-5 h-5" />
                Acceder al Panel de Notificaciones
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el ícono de campaña ubicado en la esquina superior derecha de la barra de navegación.
                Se desplegará el panel lateral <strong>"Notificaciones"</strong> con todas las alertas del sistema.
              </p>
              <ManualImage
                src="/manuales/fontur/notificaciones/1.notificaciones.png"
                alt="Panel de notificaciones con pestañas Todas, Leídas y No Leídas"
                caption="Panel de Notificaciones — vista general"
              />
            </div>

            {/* Paso 2 - Filtrar notificaciones */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Filter className="w-5 h-5" />
                Filtrar Notificaciones por Estado
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En la parte superior del panel encontrarás tres pestañas para filtrar las notificaciones según su estado de lectura:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-2 text-sm ${carbon.textPrimary}`}>
                  <li>
                    <strong>Todas</strong> — muestra todas las notificaciones recibidas,
                    con un contador del total acumulado
                  </li>
                  <li>
                    <strong>Leídas</strong> — filtra únicamente las notificaciones que ya fueron revisadas
                  </li>
                  <li>
                    <strong>No Leídas</strong> — muestra solo las notificaciones pendientes de revisar,
                    con su conteo resaltado
                  </li>
                </ul>
              </div>
              <p className={`${carbon.textPrimary} mb-4`}>
                Cada notificación muestra la <strong>fecha y hora</strong> del evento y una descripción del suceso,
                por ejemplo: <em>"Has sido agregado al proyecto Agencia de Viajes Salvatore"</em>.
              </p>
            </div>

            {/* Paso 3 - Gestionar notificaciones */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <CheckCheck className="w-5 h-5" />
                Gestionar Notificaciones Individuales
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Cada notificación en la lista dispone de un menú de opciones (ícono <strong>⋮</strong>) en su esquina derecha.
                Desde allí puedes marcarla como leída o realizar acciones específicas según el tipo de alerta.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>El punto de color al lado del ícono de campaña indica que la notificación <strong>no ha sido leída</strong></li>
                  <li>Al marcarla como leída, el indicador desaparece y el contador de <strong>"No Leídas"</strong> se actualiza</li>
                  <li>El contador en la pestaña <strong>"Todas"</strong> refleja el total histórico de notificaciones recibidas</li>
                </ul>
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

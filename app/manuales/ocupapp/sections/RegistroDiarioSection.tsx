'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ClipboardList, FolderInput, CalendarDays, Plus, Pencil, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function RegistroDiarioSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="registro-diario">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <ClipboardList className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Registro Diario</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="registro-diario" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin', 'colaborador']}
              note="Es la vista principal del Colaborador para registrar sus horas reales por día. El Administrador también tiene acceso (misma interfaz y mismo flujo). El Asignador NO ve este módulo. La lista de proyectos depende de tener proyectos asignados en una semana finalizada."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Registro de horas reales</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Día a día, el colaborador registra cuántas horas dedicó a cada proyecto asignado. El
                módulo muestra arriba el <strong>progreso semanal</strong> (horas registradas frente a
                las horas base de la semana) y, a la derecha, la tabla de <strong>Registros Recientes</strong>.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className={`text-sm ${carbon.textPrimary}`}>
                  <p className="font-semibold mb-1">Reglas del registro</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Solo aparecen proyectos si la semana está <strong>Finalizada</strong>. Si no, la lista se muestra vacía.</li>
                    <li>La semana queda abierta para registrar hasta el <strong>lunes 09:00 (hora Colombia)</strong> de la semana siguiente.</li>
                    <li>Se permiten <strong>varias entradas</strong> para un mismo proyecto en el mismo día.</li>
                    <li>Tope de <strong>8 horas regulares por día</strong>, salvo que se autoricen horas extra desde la planificación semanal.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 1 - Vista inicial / sin datos */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <ClipboardList className="w-5 h-5" />
                Vista de Registro Diario
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al entrar, el colaborador ve el progreso semanal, el formulario <strong>Nuevo Registro</strong>
                a la izquierda y la lista de registros de la semana a la derecha. Cuando aún no ha cargado
                horas, aparece el mensaje <em>&quot;Aún no hay registros esta semana&quot;</em>.
              </p>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/1.registro-sin-datos.png"
                alt="Vista de registro diario sin registros cargados todavía"
                caption="Registro Diario — sin registros aún"
              />
            </div>

            {/* Paso 2 - Seleccionar proyecto */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <FolderInput className="w-5 h-5" />
                Seleccionar el proyecto
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En el formulario <strong>Nuevo Registro</strong>, abre el campo <strong>Proyecto</strong> y
                elige uno de los proyectos que tienes asignados en la semana.
              </p>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/2.seleccionar-proyecto.png"
                alt="Selección del proyecto en el formulario de nuevo registro"
                caption="Seleccionar proyecto"
              />
            </div>

            {/* Paso 3 - Seleccionar fecha */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <CalendarDays className="w-5 h-5" />
                Seleccionar la fecha
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Elige el <strong>día</strong> al que corresponden las horas en el selector de
                <strong> Fecha</strong>. Solo se habilitan los días válidos de la semana en curso.
              </p>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/3.seleccionar-fecha.png"
                alt="Calendario para seleccionar la fecha del registro"
                caption="Seleccionar fecha"
              />
            </div>

            {/* Paso 4 - Registrar horas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Plus className="w-5 h-5" />
                Registrar las horas
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Ingresa la cantidad de <strong>horas</strong> (y una <strong>descripción</strong> si aplica)</li>
                <li>Haz clic en <strong>&quot;Registrar Horas&quot;</strong></li>
                <li>El sistema confirma con un mensaje de éxito y la entrada aparece en <strong>Registros Recientes</strong></li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/4.registrar-horas.png"
                alt="Horas registradas correctamente y visibles en registros recientes"
                caption="Horas registradas correctamente"
              />
            </div>

            {/* Paso 5 - Editar horas registradas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <Pencil className="w-5 h-5" />
                Editar horas registradas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Mientras la semana siga abierta, desde la columna <strong>Acciones</strong> de
                <strong> Registros Recientes</strong> puedes editar una entrada. Al guardar, el sistema
                confirma que los cambios se guardaron correctamente.
              </p>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/5.editar-horas.png"
                alt="Editar una entrada de horas ya registrada"
                caption="Editar horas registradas"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

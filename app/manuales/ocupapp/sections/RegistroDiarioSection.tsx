'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ClipboardList, Plus, Pencil, Trash2, Clock, Info, CalendarCheck } from 'lucide-react';
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
            <span>Registro Diario de Horas</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="registro-diario" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin', 'asignador', 'colaborador']}
              note="Es la vista principal del Colaborador: registra sus horas reales por día. Administrador y Asignador también ven el módulo en el menú, pero la lista de proyectos depende de tener proyectos asignados en una semana finalizada."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Registro de horas reales</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El colaborador registra, día a día, cuántas horas dedicó a cada proyecto asignado. Estos
                registros alimentan el cálculo de ocupación.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className={`text-sm ${carbon.textPrimary}`}>
                  <p className="font-semibold mb-1">Reglas del registro</p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Solo aparecen proyectos si la semana está <strong>Finalizada</strong>. Si no, la lista se muestra vacía.</li>
                    <li>Los <strong>días registrables</strong> los define el sistema (no dependen del calendario local del usuario).</li>
                    <li>La semana queda abierta para registrar hasta el <strong>lunes 09:00 (hora Colombia)</strong> de la semana siguiente.</li>
                    <li>Se permiten <strong>varias entradas</strong> para un mismo proyecto en el mismo día.</li>
                    <li>Tope de <strong>8 horas regulares por día</strong>, salvo que se autoricen horas extra.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 1 - Vista del colaborador */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <ClipboardList className="w-5 h-5" />
                Vista de Registro Diario (Colaborador)
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El colaborador ve la semana habilitada, sus proyectos asignados y los días en los que puede
                registrar horas.
              </p>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/1.registro-vista-colaborador.png"
                alt="Vista de registro diario del colaborador"
                caption="Registro Diario (vista Colaborador)"
              />
            </div>

            {/* Paso 2 - Registrar horas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Plus className="w-5 h-5" />
                Registrar horas de un día
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Selecciona el <strong>día</strong> y el <strong>proyecto</strong></li>
                <li>Ingresa la cantidad de <strong>horas</strong> (y una descripción si aplica)</li>
                <li>Guarda la entrada; puedes agregar varias entradas en el mismo día/proyecto</li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/2.registrar-horas.png"
                alt="Formulario para registrar horas de un día"
                caption="Registrar horas"
              />
            </div>

            {/* Paso 3 - Editar / eliminar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Pencil className="w-5 h-5" />
                Editar o eliminar una entrada
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Mientras la semana siga abierta para registrar, puedes <strong>editar</strong> o
                <strong> eliminar</strong> tus entradas de horas.
              </p>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/3.editar-eliminar-entrada.png"
                alt="Editar o eliminar una entrada de horas"
                caption="Editar / eliminar entrada"
              />
            </div>

            {/* Paso 4 - Tope de horas y extras */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Clock className="w-5 h-5" />
                Tope de horas y horas extra
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si intentas superar las <strong>8 horas regulares</strong> del día sin horas extra
                autorizadas, el sistema no permite guardar. Las horas extra deben habilitarse desde la
                planificación semanal.
              </p>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/4.tope-horas.png"
                alt="Mensaje al superar el tope de horas del día"
                caption="Tope de horas / horas extra"
              />
            </div>

            {/* Paso 5 - Registrar en semana desbloqueada */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <CalendarCheck className="w-5 h-5" />
                Registrar en una semana desbloqueada
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Si un administrador o asignador desbloqueó una semana pasada, esa semana aparecerá
                disponible para registrar mientras el desbloqueo siga vigente.
              </p>
              <ManualImage
                src="/manuales/ocupapp/registro-diario/5.semana-desbloqueada.png"
                alt="Registro en una semana pasada desbloqueada"
                caption="Semana desbloqueada disponible para registrar"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

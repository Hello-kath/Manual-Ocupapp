'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Users, UserPlus, Pencil, Trash2, Info, Contact } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function ColaboradoresSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="colaboradores">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Colaboradores</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="colaboradores" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin']}
              note="Módulo exclusivo del Administrador. Aquí también se asigna el ROL de cada persona (Administrador, Asignador o Colaborador). El Asignador y el Colaborador NO ven este módulo."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Gestión de Colaboradores</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Permite administrar las personas del equipo: sus datos personales y laborales, su rol,
                su área, su tipo de contrato y sus horas base semanales (que se usan para calcular la
                ocupación).
              </p>
            </div>

            {/* Paso 1 - Lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <Users className="w-5 h-5" />
                Lista de Colaboradores
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Tabla con todos los colaboradores, su rol, área y estado. Incluye búsqueda y las acciones
                de gestión.
              </p>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/1.lista-colaboradores.png"
                alt="Tabla con la lista de colaboradores"
                caption="Lista de Colaboradores"
              />
            </div>

            {/* Paso 2 - Crear */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <UserPlus className="w-5 h-5" />
                Crear Colaborador
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>&quot;Nuevo Colaborador&quot;</strong></li>
                <li>Completa los datos en el modal:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Datos personales:</strong> nombre, apellido, correo (único), celular, ciudad, fecha de nacimiento, contacto de emergencia, dirección</li>
                    <li><strong>Datos laborales:</strong> rol, área (Ingeniería, Crecimiento, Innovación, Gestión), tipo de contrato (OPS, Laboral, Pasante), código de contrato, seniority, conocimientos</li>
                    <li><strong>Horas base semanales</strong> (por defecto 40)</li>
                  </ul>
                </li>
                <li>Haz clic en <strong>&quot;Guardar&quot;</strong></li>
              </ol>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El <strong>correo</strong> es único: el sistema valida que no exista otro colaborador
                    con el mismo correo.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/2.crear-colaborador.png"
                alt="Modal para crear un nuevo colaborador"
                caption="Modal Nuevo Colaborador"
              />
            </div>

            {/* Paso 3 - Editar y rol */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Pencil className="w-5 h-5" />
                Editar Colaborador y asignar rol
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al editar un colaborador puedes cambiar sus datos y su <strong>rol</strong>. Cambiar el rol
                modifica de inmediato a qué módulos podrá acceder esa persona.
              </p>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/3.editar-colaborador.png"
                alt="Modal para editar un colaborador y cambiar su rol"
                caption="Modal Editar Colaborador"
              />
            </div>

            {/* Paso 4 - Detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Contact className="w-5 h-5" />
                Detalle del Colaborador
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Muestra la información completa del colaborador, los proyectos en los que participa y su
                historial de estado.
              </p>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/4.detalle-colaborador.png"
                alt="Detalle del colaborador con proyectos e historial"
                caption="Detalle del Colaborador"
              />
            </div>

            {/* Paso 5 - Eliminar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Colaborador
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Un colaborador eliminado <strong>no podrá iniciar sesión</strong>. Confirma en el modal
                    antes de eliminar.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/5.eliminar-colaborador.png"
                alt="Modal de confirmación para eliminar un colaborador"
                caption="Confirmación — Eliminar Colaborador"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

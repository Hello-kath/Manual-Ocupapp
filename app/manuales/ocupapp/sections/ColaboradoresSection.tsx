'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Users, Power, UserPlus, Pencil, Contact, FolderKanban, History, Info } from 'lucide-react';
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
              note="Módulo exclusivo del Administrador. Aquí se administran las personas del equipo y se asigna el ROL de cada una (Administrador, Asignador o Colaborador). El Asignador y el Colaborador NO ven este módulo en el menú."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Gestión de Colaboradores</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Permite administrar las personas del equipo: sus datos personales y contractuales, su rol,
                su área, su tipo de contrato y sus horas base semanales (que se usan para calcular la
                ocupación). También controla el <strong>estado de acceso</strong> de cada persona a la
                plataforma.
              </p>
            </div>

            {/* Paso 1 - Lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <Users className="w-5 h-5" />
                Gestión de Colaboradores (lista)
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Arriba se muestran dos indicadores (<strong>Total Colaboradores</strong> y
                <strong> Activos</strong>) y el botón <strong>&quot;Nuevo Colaborador&quot;</strong>. La
                tabla tiene las columnas: <strong>Colaborador</strong> (nombre y código de contrato),
                <strong> Correo</strong>, <strong>Área</strong>, <strong>Rol</strong>, <strong>Estado</strong>
                (Activo/Inactivo) y <strong>Acciones</strong> (ver detalle y editar).
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Búsqueda</strong>: por <strong>nombre, correo o código de contrato</strong> (sin distinguir mayúsculas; filtra en tiempo real).</li>
                  <li><strong>Ordenar</strong> (menú &quot;Más reciente&quot;): Más reciente, Más antiguo, Nombre A→Z y Nombre Z→A.</li>
                  <li><strong>Filtrar</strong> (ícono de embudo): por estado — Todos, Activo o Inactivo.</li>
                  <li><strong>Mostrar</strong>: cuántos colaboradores por página (5, 10, 15 o 20).</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/1.lista-colaboradores.png"
                alt="Gestión de colaboradores con indicadores, búsqueda, orden, filtro y tabla"
                caption="Gestión de Colaboradores"
              />
            </div>

            {/* Paso 2 - Activar / Inactivar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Power className="w-5 h-5" />
                Activar o inactivar un colaborador
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En la columna <strong>Estado</strong>, el interruptor cambia al colaborador entre
                <strong> Activo</strong> e <strong>Inactivo</strong>. Esto controla su
                <strong> acceso a la plataforma</strong>: un colaborador inactivo no puede iniciar sesión.
                Los colaboradores no se eliminan; se inactivan para conservar su información e historial.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-ocupapp-purple mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Cada cambio de estado queda registrado en el <strong>Historial de Actividad</strong>
                    del colaborador (activaciones y desactivaciones con su fecha).
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/2.activar-inactivar-colaborador.png"
                alt="Interruptor de estado Activo/Inactivo en la lista de colaboradores"
                caption="Activar / inactivar un colaborador"
              />
            </div>

            {/* Paso 3 - Crear */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <UserPlus className="w-5 h-5" />
                Crear Colaborador
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>&quot;Nuevo Colaborador&quot;</strong></li>
                <li>Completa los datos en el modal:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Acceso y Plataforma:</strong> Nombre Completo, Correo Electrónico, Rol en la Plataforma y Área/Departamento (Ingeniería, Crecimiento, Innovación o Gestión)</li>
                    <li><strong>Información Contractual:</strong> Código de Contrato, Tipo de Contrato (OPS, Laboral o Pasante) y Horas Semanales Base (por defecto 40)</li>
                  </ul>
                </li>
                <li>Haz clic en <strong>&quot;Guardar Colaborador&quot;</strong></li>
              </ol>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El <strong>correo</strong> debe ser del dominio <strong>@thebitbang.company</strong> o
                    <strong> @tbbc.ai</strong>, y no puede repetirse: el sistema valida que no exista otro
                    colaborador con el mismo correo. El <strong>código de contrato</strong> también debe ser
                    único.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/3.crear-colaborador.png"
                alt="Modal para crear un nuevo colaborador"
                caption="Modal Nuevo Colaborador"
              />
            </div>

            {/* Paso 4 - Editar y rol */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Pencil className="w-5 h-5" />
                Editar Colaborador y asignar rol
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Con el ícono de <strong>editar (lápiz)</strong> se abre el modal <strong>&quot;Editar
                Colaborador&quot;</strong>. Además de los datos de creación, en edición aparece la sección
                <strong> Perfil Profesional</strong> (Seniority y Conocimientos). Cambiar el
                <strong> Rol</strong> modifica de inmediato a qué módulos puede acceder esa persona.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    El <strong>correo</strong> solo se puede modificar mientras la persona
                    <strong> no haya iniciado sesión</strong> nunca. Una vez que entró por primera vez, el
                    campo se bloquea (<em>&quot;No se puede modificar: el colaborador ya inició sesión&quot;</em>).
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/4.editar-colaborador.png"
                alt="Modal para editar un colaborador y cambiar su rol"
                caption="Modal Editar Colaborador"
              />
            </div>

            {/* Paso 5 - Detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <Contact className="w-5 h-5" />
                Detalle del Colaborador
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Con el ícono de <strong>ver (ojo)</strong> se abre el detalle. Incluye:
              </p>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                <li>Encabezado con nombre, estado, correo, área, documento de identidad y rol, y los botones <strong>&quot;Historial de asignaciones&quot;</strong> y <strong>&quot;Editar información&quot;</strong>.</li>
                <li><strong>Historial de Actividad</strong>: línea de tiempo con las activaciones y desactivaciones.</li>
                <li><strong>Información Personal</strong>, <strong>Información Contractual</strong> y <strong>Perfil Profesional</strong>.</li>
              </ul>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/5.detalle-colaborador.png"
                alt="Detalle del colaborador con historial de actividad e información"
                caption="Detalle del Colaborador"
              />
            </div>

            {/* Paso 6 - Historial de Proyectos (dentro del detalle) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <FolderKanban className="w-5 h-5" />
                Historial de Proyectos (en el detalle)
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al pie del detalle está la tabla <strong>Historial de Proyectos</strong>, que muestra los
                proyectos en los que participa el colaborador <strong>en la semana en curso</strong>, con
                las columnas <strong>Proyecto</strong>, <strong>Estado</strong>, <strong>Horas Trab.</strong>
                (trabajadas), <strong>Horas Disp.</strong> (disponibles) y <strong>Ocupación %</strong>.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Horas Trab.</strong> = horas que el colaborador registró en ese proyecto esta semana.</li>
                  <li><strong>Horas Disp.</strong> = horas base semanales − total de horas trabajadas en la semana.</li>
                  <li><strong>Ocupación %</strong> = horas trabajadas ÷ horas base de la semana.</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/6.historial-proyectos.png"
                alt="Tabla de historial de proyectos con horas trabajadas, disponibles y ocupación"
                caption="Historial de Proyectos (semana en curso)"
              />
            </div>

            {/* Paso 7 - Editar desde el detalle */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                <Pencil className="w-5 h-5" />
                Editar desde el detalle
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El botón <strong>&quot;Editar información&quot;</strong> del encabezado abre el mismo modal
                de edición, para actualizar los datos del colaborador sin volver a la lista.
              </p>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/7.editar-desde-detalle.png"
                alt="Editar colaborador desde la vista de detalle"
                caption="Editar información desde el detalle"
              />
            </div>

            {/* Paso 8 - Historial de asignaciones */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">8</span>
                <History className="w-5 h-5" />
                Historial de asignaciones
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El botón <strong>&quot;Historial de asignaciones&quot;</strong> abre la vista de las semanas
                en las que el colaborador tuvo asignación. Arriba hay un filtro por <strong>periodo</strong>
                (Fecha inicio / Fecha fin) con <strong>&quot;Buscar&quot;</strong> y
                <strong> &quot;Limpiar filtros&quot;</strong>, y el conteo de semanas.
              </p>
              <p className={`${carbon.textPrimary} mb-4`}>
                Cada <strong>semana</strong> muestra las horas <strong>Ideales</strong> (planificadas) frente
                a las <strong>Reales</strong> (registradas), una etiqueta de <strong>semáforo</strong>
                (Saludable 80–100%, Bench &lt;80%, Burnout &gt;100%) y el <strong>estado de la semana</strong>
                (Editable, En curso, Finalizada o Solo lectura). Al expandirla, se ve el detalle por proyecto:
                <strong> Proyecto</strong>, <strong>Cliente</strong>, <strong>Horas ideales</strong>,
                <strong> Horas reales</strong> y <strong>Diferencia</strong>, con una fila de
                <strong> Total semana</strong>.
              </p>
              <ManualImage
                src="/manuales/ocupapp/colaboradores/8.historial-asignaciones.png"
                alt="Historial de asignaciones del colaborador por semana, con ideales vs reales"
                caption="Historial de asignaciones"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

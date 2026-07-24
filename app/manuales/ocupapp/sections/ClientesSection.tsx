'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Building2, UserPlus, Pencil, Power, Info, History } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function ClientesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="clientes">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Clientes</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="clientes" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin']}
              note="Módulo exclusivo del Administrador. El Asignador y el Colaborador NO ven este módulo en el menú ni pueden abrirlo por URL."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Directorio de Clientes</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El módulo de Clientes permite registrar y administrar las empresas o entidades para las
                que se ejecutan los proyectos. Cada cliente tiene un <strong>nombre</strong>, un
                <strong> NIT</strong> y, opcionalmente, un <strong>responsable/contacto</strong>, y puede
                tener uno o varios proyectos vinculados.
              </p>
            </div>

            {/* Paso 1 - Lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <Building2 className="w-5 h-5" />
                Directorio de Clientes (lista)
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Muestra la tabla de clientes. Columnas: <strong>Nombre Cliente</strong> (con su NIT),
                <strong> Estado</strong> (Activo/Inactivo), <strong>Proyectos Vinculados</strong> y
                <strong> Acciones</strong> (ver detalle y editar). Arriba a la derecha está el botón
                <strong> &quot;Nuevo Cliente&quot;</strong>.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Búsqueda</strong>: por nombre del cliente (parcial y sin distinguir mayúsculas; el campo solo admite letras, no NIT).</li>
                  <li><strong>Ordenar</strong> (menú &quot;Más reciente&quot;): Más reciente, Más antiguo, Nombre A→Z y Nombre Z→A.</li>
                  <li><strong>Filtrar</strong>: por estado — Todos, Activos o Inactivos.</li>
                  <li><strong>Mostrar</strong>: cuántos clientes por página (5, 10, 15 o 20).</li>
                </ul>
              </div>

              <ManualImage
                src="/manuales/ocupapp/clientes/1.lista-clientes.png"
                alt="Directorio de clientes con búsqueda, ordenamiento, filtro y tabla"
                caption="Directorio de Clientes"
              />
            </div>

            {/* Paso 2 - Activar / Inactivar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Power className="w-5 h-5" />
                Activar o inactivar un cliente
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En la columna <strong>Estado</strong>, el interruptor cambia el cliente entre
                <strong> Activo</strong> (verde) e <strong>Inactivo</strong> (gris). Los clientes no se
                eliminan: se inactivan para dejar de usarlos sin perder su historial.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-ocupapp-purple mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Al cambiar un estado, la tabla <strong>mantiene el orden actual</strong> hasta que
                    pulses <strong>&quot;Actualizar&quot;</strong>; así puedes cambiar varios estados sin
                    que las filas se reordenen a cada clic.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/clientes/4.activar-inactivar-cliente.png"
                alt="Interruptor de estado Activo/Inactivo en la lista de clientes"
                caption="Activar / inactivar un cliente"
              />
            </div>

            {/* Paso 3 - Crear */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <UserPlus className="w-5 h-5" />
                Crear Cliente
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>&quot;Nuevo Cliente&quot;</strong></li>
                <li>Completa los datos en el modal:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Nombre del Cliente</strong> (obligatorio, hasta 60 caracteres)</li>
                    <li><strong>NIT</strong> (obligatorio)</li>
                    <li><strong>Responsable / Contacto</strong> (opcional, hasta 60 caracteres)</li>
                  </ul>
                </li>
                <li>Haz clic en <strong>&quot;Guardar Cliente&quot;</strong> (o <strong>&quot;Cancelar&quot;</strong> para cerrar sin guardar)</li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/clientes/2.crear-cliente.png"
                alt="Modal para crear un nuevo cliente"
                caption="Modal Nuevo Cliente"
              />
            </div>

            {/* Paso 4 - Editar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Pencil className="w-5 h-5" />
                Editar Cliente
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>editar (lápiz)</strong> en la fila del cliente</li>
                <li>Modifica el nombre, el NIT o el responsable en el modal precargado</li>
                <li>Haz clic en <strong>&quot;Guardar Cambios&quot;</strong></li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/clientes/3.editar-cliente.png"
                alt="Modal para editar un cliente con datos precargados"
                caption="Modal Editar Cliente"
              />
            </div>

            {/* Paso 5 - Detalle e historial */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <History className="w-5 h-5" />
                Detalle e historial de cambios
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Con el ícono de <strong>ver (ojo)</strong> se abre el detalle del cliente. Incluye:
              </p>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                <li>Encabezado con el <strong>nombre</strong>, la etiqueta de <strong>estado</strong> y el <strong>NIT</strong>.</li>
                <li><strong>Historial de Cambios</strong>: línea de tiempo que parte de <em>&quot;Cliente creado&quot;</em> y registra cada modificación posterior (nombre, NIT, responsable o estado), mostrando el valor anterior y el nuevo.</li>
                <li><strong>Proyectos Vinculados</strong>: tabla con nombre del proyecto, estado, fecha de inicio y fecha de fin.</li>
              </ul>
              <ManualImage
                src="/manuales/ocupapp/clientes/5.detalle-cliente.png"
                alt="Detalle del cliente con historial de cambios y proyectos vinculados"
                caption="Detalle del Cliente"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

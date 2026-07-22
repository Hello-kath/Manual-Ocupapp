'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Building2, UserPlus, Pencil, Trash2, Info, History } from 'lucide-react';
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
                <strong>Gestión de Clientes</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El módulo de Clientes permite registrar y administrar las empresas o entidades para las
                que se ejecutan los proyectos. Cada cliente puede tener uno o varios proyectos asociados.
              </p>
            </div>

            {/* Paso 1 - Lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <Building2 className="w-5 h-5" />
                Lista de Clientes
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Muestra una tabla con todos los clientes registrados. Desde aquí se realizan las acciones
                principales de gestión.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Campo de <strong>búsqueda</strong> por nombre de cliente</li>
                  <li>Botón <strong>&quot;Nuevo Cliente&quot;</strong></li>
                  <li>Iconos de <strong>editar</strong> y <strong>eliminar</strong> por registro</li>
                  <li>Clic en un cliente para abrir su <strong>detalle</strong></li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/ocupapp/clientes/1.lista-clientes.png"
                alt="Tabla con la lista de clientes"
                caption="Lista de Clientes"
              />
            </div>

            {/* Paso 2 - Crear */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <UserPlus className="w-5 h-5" />
                Crear Cliente
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>&quot;Nuevo Cliente&quot;</strong></li>
                <li>Completa los datos del cliente en el modal</li>
                <li>Haz clic en <strong>&quot;Guardar&quot;</strong> (o <strong>&quot;Cancelar&quot;</strong> para cerrar sin guardar)</li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/clientes/2.crear-cliente.png"
                alt="Modal para crear un nuevo cliente"
                caption="Modal Nuevo Cliente"
              />
            </div>

            {/* Paso 3 - Editar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Pencil className="w-5 h-5" />
                Editar Cliente
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>editar (lápiz)</strong> en la fila del cliente</li>
                <li>Modifica los campos necesarios en el modal precargado</li>
                <li>Haz clic en <strong>&quot;Guardar&quot;</strong></li>
              </ol>
              <ManualImage
                src="/manuales/ocupapp/clientes/3.editar-cliente.png"
                alt="Modal para editar un cliente con datos precargados"
                caption="Modal Editar Cliente"
              />
            </div>

            {/* Paso 4 - Eliminar */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Cliente
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>eliminar (papelera)</strong></li>
                <li>Confirma en el modal de advertencia</li>
              </ol>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Revisa que el cliente no tenga proyectos activos antes de eliminarlo.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/ocupapp/clientes/4.eliminar-cliente.png"
                alt="Modal de confirmación para eliminar un cliente"
                caption="Confirmación — Eliminar Cliente"
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
                Al abrir un cliente se muestra su detalle con la información completa y el
                <strong> historial de cambios</strong> realizados sobre el registro.
              </p>
              <ManualImage
                src="/manuales/ocupapp/clientes/5.detalle-cliente.png"
                alt="Detalle del cliente con su historial de cambios"
                caption="Detalle del Cliente"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

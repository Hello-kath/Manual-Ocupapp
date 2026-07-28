'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LayoutDashboard, Menu, Info } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

export function InicioSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="inicio">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Inicio (Dashboard)</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="inicio" className="space-y-8 pt-4">

            <RoleAccess
              roles={['admin', 'asignador', 'colaborador']}
              note="Todos los roles ven el Dashboard, pero el MENÚ LATERAL cambia según el rol: el Administrador ve todos los módulos; el Asignador ve Proyectos y Asignación Semanal; el Colaborador ve Registro Diario y Perfil."
            />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Página de Inicio</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El Dashboard es lo primero que ves tras iniciar sesión. Muestra tarjetas con
                información del usuario y accesos a los módulos. La navegación principal está en el
                <strong> menú lateral izquierdo</strong>.
              </p>
            </div>

            {/* Paso 1 - Vista general */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <LayoutDashboard className="w-5 h-5" />
                Vista general del Dashboard
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al ingresar verás tarjetas con tu información y resumen. El contenido de las tarjetas
                depende de tu rol y de los datos disponibles.
              </p>
              <ManualImage
                src="/manuales/ocupapp/inicio/1.dashboard-general.png"
                alt="Vista general del dashboard con tarjetas de información"
                caption="Dashboard — vista general"
              />
            </div>

            {/* Paso 2 - Menú lateral por rol */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Menu className="w-5 h-5" />
                Menú lateral según el rol
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El menú lateral solo muestra los módulos a los que tu rol tiene acceso:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <div className="overflow-x-auto">
                  <table className={`w-full text-sm ${carbon.textPrimary}`}>
                    <thead>
                      <tr className={`border-b ${carbon.border} text-left`}>
                        <th className="py-2 pr-4">Módulo</th>
                        <th className="py-2 pr-4">Administrador</th>
                        <th className="py-2 pr-4">Asignador</th>
                        <th className="py-2">Colaborador</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={`border-b ${carbon.borderSubtle}`}><td className="py-2 pr-4">Inicio</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr className={`border-b ${carbon.borderSubtle}`}><td className="py-2 pr-4">Clientes</td><td>✅</td><td>—</td><td>—</td></tr>
                      <tr className={`border-b ${carbon.borderSubtle}`}><td className="py-2 pr-4">Colaboradores</td><td>✅</td><td>—</td><td>—</td></tr>
                      <tr className={`border-b ${carbon.borderSubtle}`}><td className="py-2 pr-4">Proyectos</td><td>✅</td><td>✅</td><td>—</td></tr>
                      <tr className={`border-b ${carbon.borderSubtle}`}><td className="py-2 pr-4">Asignación Semanal</td><td>✅</td><td>✅</td><td>—</td></tr>
                      <tr className={`border-b ${carbon.borderSubtle}`}><td className="py-2 pr-4">Registro Diario</td><td>✅</td><td>—</td><td>✅</td></tr>
                      <tr><td className="py-2 pr-4">Perfil</td><td>—</td><td>—</td><td>✅</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Si un usuario intenta abrir por URL directa un módulo que no le corresponde, el
                    sistema lo devuelve al Dashboard.
                  </p>
                </div>
              </div>
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

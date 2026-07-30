'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { OcupappManualLayout } from '@/components/layout/OcupappManualLayout';
import { TableOfContents } from '@/components/manual/TableOfContents';
import { Layers, ShieldCheck, CalendarRange, User } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { LoginSection } from './sections/LoginSection';
import { HomeSection } from './sections/HomeSection';
import { ClientesSection } from './sections/ClientesSection';
import { ProyectosSection } from './sections/ProyectosSection';
import { ColaboradoresSection } from './sections/ColaboradoresSection';
import { AsignacionSection } from './sections/AsignacionSection';
import { RegistroDiarioSection } from './sections/RegistroDiarioSection';
import { ProyectosAsignadorSection } from './sections/ProyectosAsignadorSection';
import { AsignacionAsignadorSection } from './sections/AsignacionAsignadorSection';
import { ProyectosAsignadosSection } from './sections/ProyectosAsignadosSection';
import { PerfilSection } from './sections/PerfilSection';

const tocItems = [
  { id: 'grupo-comun', title: 'Inicio de Sesión', level: 1 },
  { id: 'login', title: 'Inicio de Sesión', level: 2, parent: 'grupo-comun' },
  { id: 'grupo-admin', title: 'Administrador', level: 1 },
  { id: 'home-admin', title: 'Home del Administrador', level: 2, parent: 'grupo-admin' },
  { id: 'clientes', title: 'Clientes', level: 2, parent: 'grupo-admin' },
  { id: 'colaboradores', title: 'Colaboradores', level: 2, parent: 'grupo-admin' },
  { id: 'proyectos', title: 'Proyectos', level: 2, parent: 'grupo-admin' },
  { id: 'asignacion', title: 'Asignación Semanal', level: 2, parent: 'grupo-admin' },
  { id: 'registro-diario', title: 'Registro Diario', level: 2, parent: 'grupo-admin' },
  { id: 'grupo-asignador', title: 'Asignador', level: 1 },
  { id: 'home-asignador', title: 'Home del Asignador', level: 2, parent: 'grupo-asignador' },
  { id: 'proyectos-asignador', title: 'Proyectos', level: 2, parent: 'grupo-asignador' },
  { id: 'asignacion-asignador', title: 'Asignación Semanal', level: 2, parent: 'grupo-asignador' },
  { id: 'grupo-colaborador', title: 'Colaborador', level: 1 },
  { id: 'home-colaborador', title: 'Home del Colaborador', level: 2, parent: 'grupo-colaborador' },
  { id: 'registro-diario-colab', title: 'Registro Diario', level: 2, parent: 'grupo-colaborador' },
  { id: 'proyectos-asignados', title: 'Proyectos Asignados', level: 2, parent: 'grupo-colaborador' },
  { id: 'perfil', title: 'Perfil', level: 2, parent: 'grupo-colaborador' },
];

export default function OcupappManual() {
  const carbon = useCarbonClasses();

  const roleTrigger = (icon: React.ReactNode, title: string, description: string) => (
    <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
      <span className="flex items-center gap-3 text-left">
        {icon}
        <span>
          <span className="block">{title}</span>
          <span className={`block text-xs font-normal ${carbon.textHelper} mt-0.5`}>{description}</span>
        </span>
      </span>
    </AccordionTrigger>
  );

  return (
    <OcupappManualLayout>
      <div className="flex items-center gap-3 mb-6">
        <Layers className="w-8 h-8 text-ocupapp-purple dark:text-ocupapp-purple-light" />
        <h1 className={`text-4xl font-bold ${carbon.textPrimary}`}>
          Manual de Usuario - Ocupapp
        </h1>
      </div>

      <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-6`}>
        <p className={`${carbon.textPrimary} text-sm mb-2`}>
          <strong>Versión:</strong> 1.0 - 2026
        </p>
        <p className={`${carbon.textPrimary} text-sm mb-2`}>
          <strong>Cliente:</strong> The Bitbang Company (uso interno)
        </p>
        <p className={`${carbon.textPrimary} text-sm mb-2`}>
          <strong>Roles del sistema:</strong> Administrador, Asignador y Colaborador
        </p>
        <p className={`${carbon.textPrimary} text-sm`}>
          <strong>Organización:</strong> este manual está separado por rol. Abre el bloque de tu rol para
          ver sus módulos; dentro, cada módulo también se abre y se cierra.
        </p>
      </div>

      <p className={`${carbon.textSecondary} text-lg mb-4`}>
        Ocupapp es la aplicación interna de The Bitbang Company para <strong>gestionar la ocupación
        y la asignación de horas de los colaboradores a proyectos</strong>. Permite administrar clientes,
        proyectos y colaboradores, planificar semanalmente quién trabaja en qué proyecto y cuántas horas,
        y que cada colaborador registre sus horas reales por día contra esa planificación.
      </p>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4 mb-8">
        <p className={`text-sm ${carbon.textPrimary} mb-2`}>
          <strong>Cómo leer este manual</strong>
        </p>
        <p className={`text-sm ${carbon.textPrimary}`}>
          Ubica tu <strong>rol</strong> (Administrador, Asignador o Colaborador) y abre su bloque; lo
          <strong> común a todos</strong> aplica sin importar el rol. El menú lateral y las rutas se filtran
          por rol: cada persona solo ve los módulos a los que tiene acceso.
        </p>
      </div>

      <TableOfContents items={tocItems} />

      <Accordion type="multiple" defaultValue={['grupo-comun']} className="space-y-4">
        {/* ===================== COMÚN A TODOS ===================== */}
        <AccordionItem
          value="grupo-comun"
          id="anchor-grupo-comun"
          className="border-l-4 border-gray-400 dark:border-gray-500 pl-4"
        >
          {roleTrigger(
            <Layers className="w-7 h-7 text-gray-500 dark:text-gray-400 shrink-0" />,
            'Inicio de Sesión',
            'Cómo ingresar a Ocupapp con tu cuenta de Google.',
          )}
          <AccordionContent>
            <div id="anchor-login"><LoginSection embedded /></div>
          </AccordionContent>
        </AccordionItem>

        {/* ===================== ADMINISTRADOR ===================== */}
        <AccordionItem
          value="grupo-admin"
          id="anchor-grupo-admin"
          className="border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light pl-4"
        >
          {roleTrigger(
            <ShieldCheck className="w-7 h-7 text-ocupapp-purple dark:text-ocupapp-purple-light shrink-0" />,
            'Administrador',
            'Acceso total: clientes, colaboradores, proyectos, planificación semanal y registro diario.',
          )}
          <AccordionContent>
            <div id="anchor-home-admin"><HomeSection role="admin" /></div>
            <div id="anchor-clientes"><ClientesSection /></div>
            <div id="anchor-colaboradores"><ColaboradoresSection /></div>
            <div id="anchor-proyectos"><ProyectosSection /></div>
            <div id="anchor-asignacion"><AsignacionSection /></div>
            <div id="anchor-registro-diario"><RegistroDiarioSection /></div>
          </AccordionContent>
        </AccordionItem>

        {/* ===================== ASIGNADOR ===================== */}
        <AccordionItem
          value="grupo-asignador"
          id="anchor-grupo-asignador"
          className="border-l-4 border-blue-500 dark:border-blue-400 pl-4"
        >
          {roleTrigger(
            <CalendarRange className="w-7 h-7 text-blue-600 dark:text-blue-400 shrink-0" />,
            'Asignador',
            'Consulta proyectos y planifica la semana. No gestiona clientes, colaboradores ni registra horas.',
          )}
          <AccordionContent>
            <div id="anchor-home-asignador"><HomeSection role="asignador" /></div>
            <div id="anchor-proyectos-asignador"><ProyectosAsignadorSection /></div>
            <div id="anchor-asignacion-asignador"><AsignacionAsignadorSection /></div>
          </AccordionContent>
        </AccordionItem>

        {/* ===================== COLABORADOR ===================== */}
        <AccordionItem
          value="grupo-colaborador"
          id="anchor-grupo-colaborador"
          className="border-l-4 border-green-500 dark:border-green-400 pl-4"
        >
          {roleTrigger(
            <User className="w-7 h-7 text-green-600 dark:text-green-400 shrink-0" />,
            'Colaborador',
            'Registra sus horas, consulta sus proyectos asignados y su historial, y gestiona su perfil.',
          )}
          <AccordionContent>
            <div id="anchor-home-colaborador"><HomeSection role="colaborador" /></div>
            <div id="anchor-registro-diario-colab"><RegistroDiarioSection anchor="registro-diario-colab" /></div>
            <div id="anchor-proyectos-asignados"><ProyectosAsignadosSection /></div>
            <div id="anchor-perfil"><PerfilSection /></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className={`${carbon.layer01} p-4 mt-8 border-t ${carbon.border}`}>
        <p className={`text-sm ${carbon.textHelper} text-center`}>
          Manual de Usuario - Ocupapp | The Bitbang Company | Versión 1.0 - 2026
        </p>
        <p className={`text-xs ${carbon.textHelper} text-center mt-2`}>
          Desarrollado por TBBC
        </p>
      </div>
    </OcupappManualLayout>
  );
}

'use client';

import { OcupappManualLayout } from '@/components/layout/OcupappManualLayout';
import { TableOfContents } from '@/components/manual/TableOfContents';
import { Layers } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { LoginSection } from './sections/LoginSection';
import { RegistroSection } from './sections/RegistroSection';
import { InicioSection } from './sections/InicioSection';
import { ClientesSection } from './sections/ClientesSection';
import { ProyectosSection } from './sections/ProyectosSection';
import { ColaboradoresSection } from './sections/ColaboradoresSection';
import { AsignacionSection } from './sections/AsignacionSection';
import { RegistroDiarioSection } from './sections/RegistroDiarioSection';
import { PerfilSection } from './sections/PerfilSection';
import { ConfiguracionSection } from './sections/ConfiguracionSection';

const tocItems = [
  { id: 'login', title: 'Inicio de Sesión', level: 2 },
  { id: 'registro', title: 'Registro', level: 2 },
  { id: 'inicio', title: 'Inicio (Dashboard)', level: 2 },
  { id: 'clientes', title: 'Clientes', level: 2 },
  { id: 'proyectos', title: 'Proyectos', level: 2 },
  { id: 'colaboradores', title: 'Colaboradores', level: 2 },
  { id: 'asignacion', title: 'Asignación Semanal', level: 2 },
  { id: 'registro-diario', title: 'Registro Diario de Horas', level: 2 },
  { id: 'perfil', title: 'Perfil y Ocupación', level: 2 },
  { id: 'configuracion', title: 'Configuración', level: 2 },
];

export default function OcupappManual() {
  const carbon = useCarbonClasses();

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
          <strong>Módulos:</strong> Inicio de Sesión, Registro, Dashboard, Clientes, Proyectos,
          Colaboradores, Asignación Semanal, Registro Diario de Horas, Perfil y Ocupación, Configuración
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
          Cada sección indica, con etiquetas de color, <strong>qué roles pueden acceder</strong> a esa
          vista y <strong>cómo cambia lo que ve cada rol</strong>. Ten en cuenta que el menú lateral y
          las rutas se filtran por rol: un rol solo ve en su menú los módulos a los que tiene acceso.
        </p>
      </div>

      <TableOfContents items={tocItems} />

      <div id="anchor-login"><LoginSection /></div>
      <div id="anchor-registro"><RegistroSection /></div>
      <div id="anchor-inicio"><InicioSection /></div>
      <div id="anchor-clientes"><ClientesSection /></div>
      <div id="anchor-proyectos"><ProyectosSection /></div>
      <div id="anchor-colaboradores"><ColaboradoresSection /></div>
      <div id="anchor-asignacion"><AsignacionSection /></div>
      <div id="anchor-registro-diario"><RegistroDiarioSection /></div>
      <div id="anchor-perfil"><PerfilSection /></div>
      <div id="anchor-configuracion"><ConfiguracionSection /></div>

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

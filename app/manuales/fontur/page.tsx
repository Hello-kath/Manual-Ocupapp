'use client';

import { FonturManualLayout } from '@/components/layout/FonturManualLayout';
import { TableOfContents } from '@/components/manual/TableOfContents';
import { Layers } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { LoginSection } from './sections/LoginSection';
import { SelectProjectSection } from './sections/SelectProjectSection';
import { HomeSection } from './sections/HomeSection';
import { CampanaSection } from './sections/CampanaSection';
import { BeneficiariosSection } from './sections/BeneficiariosSection';
import { InstrumentosSection } from './sections/InstrumentosSection';
import { ReportesSection } from './sections/ReportesSection';
import { AsignacionesSection } from './sections/AsignacionesSection';
import { NotificacionesSection } from './sections/NotificacionesSection';
import { UsuariosSection } from './sections/UsuariosSection';

const tocItems = [
  { id: 'login', title: 'Inicio de Sesión', level: 2 },
  { id: 'select-project', title: 'Selección de Proyecto', level: 2 },
  { id: 'home', title: 'Página de Inicio', level: 2 },
  { id: 'notificaciones', title: 'Notificaciones', level: 2 },
  { id: 'campana', title: 'Gestionar Campaña', level: 2 },
  { id: 'beneficiarios', title: 'Beneficiarios', level: 2 },
  { id: 'instrumentos', title: 'Gestión de Instrumentos', level: 2 },
  { id: 'reportes', title: 'Gestionar Reportes', level: 2 },
  { id: 'asignaciones', title: 'Gestionar Asignaciones', level: 2 },
  { id: 'usuarios', title: 'Gestión de Usuarios', level: 2 },
];

export default function FonturManual() {
  const carbon = useCarbonClasses();

  return (
    <FonturManualLayout>
      <div className="flex items-center gap-3 mb-6">
        <Layers className="w-8 h-8 text-fontur-purple dark:text-fontur-purple-light" />
        <h1 className={`text-4xl font-bold ${carbon.textPrimary}`}>
          Manual de Usuario - Fontur
        </h1>
      </div>

      <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-6`}>
        <p className={`${carbon.textPrimary} text-sm mb-2`}>
          <strong>Versión:</strong> 1.0 - 2026
        </p>
        <p className={`${carbon.textPrimary} text-sm mb-2`}>
          <strong>Cliente:</strong> Fontur — Cámara de Industria y Turismo
        </p>
        <p className={`${carbon.textPrimary} text-sm`}>
          <strong>Módulos:</strong> Login, Selección de Proyecto, Home, Beneficiarios, Campañas,
          Asignación de Asesores, Análisis Diagnóstico, Reportes, Agente Virtual, Usuarios, Notificaciones
        </p>
      </div>

      <p className={`${carbon.textSecondary} text-lg mb-8`}>
        Guía completa para la gestión de beneficiarios, campañas, asesores, reportes y análisis
        en el sistema Fontur.
      </p>

      <TableOfContents items={tocItems} />

      <div id="anchor-login"><LoginSection /></div>
      <div id="anchor-select-project"><SelectProjectSection /></div>
      <div id="anchor-home"><HomeSection /></div>
      <div id="anchor-notificaciones"><NotificacionesSection /></div>
      <div id="anchor-campana"><CampanaSection /></div>
      <div id="anchor-beneficiarios"><BeneficiariosSection /></div>
      <div id="anchor-instrumentos"><InstrumentosSection /></div>
      <div id="anchor-reportes"><ReportesSection /></div>
      <div id="anchor-asignaciones"><AsignacionesSection /></div>
      <div id="anchor-usuarios"><UsuariosSection /></div>

      <div className={`${carbon.layer01} p-4 mt-8 border-t ${carbon.border}`}>
        <p className={`text-sm ${carbon.textHelper} text-center`}>
          Manual de Usuario - Fontur | Cámara de Industria y Turismo | Versión 1.0 - 2026
        </p>
        <p className={`text-xs ${carbon.textHelper} text-center mt-2`}>
          Desarrollado por TBBC
        </p>
      </div>
    </FonturManualLayout>
  );
}

'use client';

import { ManualLayout } from '@/components/layout/ManualLayout';
import { TableOfContents } from '@/components/manual/TableOfContents';
import { Layers } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { IntroductionSection } from './sections/IntroductionSection';
import { PermisosSection } from './sections/PermisosSection';
import { JustificacionesSection } from './sections/JustificacionesSection';
import { CertificadosSection } from './sections/CertificadosSection';
import { UtilidadesSection } from './sections/UtilidadesSection';
import { IncidenciasSection } from './sections/IncidenciasSection';
import { PrestamosSection } from './sections/PrestamosSection';
import { RenunciasSection } from './sections/RenunciasSection';
import { CtsSection } from './sections/CtsSection';
import { ConstanciaUtilidadesSection } from './sections/ConstanciaUtilidadesSection';
import { VotacionesSection } from './sections/VotacionesSection';
import { EncuestasSection } from './sections/EncuestasSection';


const tocItems = [
  { id: 'introduccion', title: 'Introducción al Sistema', level: 2 },
  { id: 'permisos', title: 'I. Gestión de Permisos', level: 2 },
  { id: 'justificaciones', title: 'II. Justificación de Inasistencias', level: 2 },
  { id: 'certificados', title: 'III. Certificados de Trabajo', level: 2 },
  { id: 'utilidades', title: 'IV. Utilidades para Personal Cesado', level: 2 },
  { id: 'renuncias', title: 'V. Gestión de Renuncias', level: 2 },
  { id: 'cts', title: 'VI. CTS', level: 2 },
  { id: 'contancia_utilidades', title: 'VII. Constancia de Utilidades', level: 2 },
  { id: 'votaciones', title: 'VIII. Gestión de Votaciones', level: 2 },
  { id: 'prestamos', title: 'IX. Gestión de Préstamos (Gestor)', level: 2 },  
  { id: 'incidencias', title: 'X. Gestión de Incidencias (PCO)', level: 2 },
  { id: 'encuestas', title: 'XI Encuestas', level: 2 },
];

export default function ConectadosMvp4Manual() {
  const carbon = useCarbonClasses();

  return (
    <ManualLayout>
      <div className="flex items-center gap-3 mb-6">
        <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <h1 className={`text-4xl font-bold ${carbon.textPrimary}`}>
          Manual de Usuario - Conectados 2.0
        </h1>
      </div>

      <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-6`}>
        <p className={`${carbon.textPrimary} text-sm mb-2`}>
          <strong>Versión:</strong> MVP 4 y MVP 5 - 2026
        </p>
        <p className={`${carbon.textPrimary} text-sm mb-2`}>
          <strong>Cliente:</strong> Camposol S.A.
        </p>
        <p className={`${carbon.textPrimary} text-sm mb-2`}>
          <strong>Módulos MVP4:</strong> Permisos, Justificaciones, Certificados, Utilidades
        </p>
        <p className={`${carbon.textPrimary} text-sm`}>
          <strong>Módulos MVP5:</strong> Incidencias, Préstamos, Renuncias
        </p>
      </div>

      <p className={`${carbon.textSecondary} text-lg mb-8`}>
        Guía completa para gestionar permisos, justificaciones, certificados, utilidades,
        incidencias, préstamos y renuncias en el sistema Conectados 2.0.
      </p>

      <TableOfContents items={tocItems} />

      <IntroductionSection />
      <PermisosSection />
      <JustificacionesSection />
      <CertificadosSection />
      <UtilidadesSection />
       <RenunciasSection />
       <CtsSection />
       <ConstanciaUtilidadesSection />
       <VotacionesSection />
       <PrestamosSection />
       <IncidenciasSection />
       <EncuestasSection />
      <div className={`${carbon.layer01} p-4 mt-8 border-t ${carbon.border}`}>
        <p className={`text-sm ${carbon.textHelper} text-center`}>
          Manual de Usuario - Conectados 2.0 | Camposol S.A. | Versión 2.0 - 2026
        </p>
        <p className={`text-xs ${carbon.textHelper} text-center mt-2`}>
          Desarrollado por TBBC
        </p>
      </div>
    </ManualLayout>
  );
}

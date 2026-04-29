'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Info, Users, FileCheck, Calendar, Briefcase } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export function IntroductionSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="introduction">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          Introducción al Sistema Conectados 2.0
        </AccordionTrigger>
        <AccordionContent>
          <section id="introduccion" className="space-y-6 pt-4">
            <div>
              <p className={`${carbon.textPrimary} leading-relaxed mb-4`}>
                Este manual describe el uso completo del sistema <strong>Conectados 2.0</strong>, la plataforma web
                de gestión de recursos humanos para Camposol S.A. El sistema permite gestionar solicitudes de permisos,
                justificaciones de inasistencias, certificados de trabajo y utilidades para personal cesado,
                optimizando los procesos administrativos y mejorando la comunicación entre colaboradores y aprobadores.
              </p>

              <h3 className={`text-lg font-semibold ${carbon.textPrimary} mt-6 mb-3`}>
                ¿Qué aprenderás en este manual?
              </h3>
              <ul className={`list-disc list-inside space-y-2 ${carbon.textPrimary} ml-4`}>
                <li>Cómo aprobar o rechazar solicitudes de permisos</li>
                <li>Cómo gestionar justificaciones de inasistencias</li>
                <li>Cómo administrar certificados de trabajo para personal cesado</li>
                <li>Cómo gestionar utilidades para ex-colaboradores</li>
                <li>Cómo usar filtros, reportes y exportaciones</li>
                <li>Qué hacer en caso de problemas o dudas</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 mt-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                      <strong>¿Qué es Conectados 2.0?</strong>
                    </p>
                    <p className={`text-sm ${carbon.textPrimary}`}>
                      Conectados 2.0 es una plataforma web diseñada para digitalizar y automatizar los procesos
                      de recursos humanos de Camposol S.A. El sistema integra múltiples módulos para gestionar
                      diferentes aspectos del ciclo de vida del colaborador.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className={`text-lg font-semibold ${carbon.textPrimary} mt-6 mb-3`}>
                Módulos del Sistema
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <h4 className={`font-semibold ${carbon.textPrimary}`}>Permisos</h4>
                  </div>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Gestión de solicitudes de permisos laborales. Los aprobadores pueden revisar, aprobar o
                    rechazar solicitudes de empleados y operarios.
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-3 mb-2">
                    <FileCheck className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    <h4 className={`font-semibold ${carbon.textPrimary}`}>Justificaciones</h4>
                  </div>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Aprobación de justificaciones de inasistencias con documentos de sustento. Permite
                    modificar fechas y generar aprobaciones parciales.
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h4 className={`font-semibold ${carbon.textPrimary}`}>Certificados</h4>
                  </div>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Gestión de certificados de trabajo para personal cesado. Historial de solicitudes,
                    generación y descarga de documentos.
                  </p>
                </div>

                <div className={`${carbon.surface} p-4 border ${carbon.border} rounded-lg`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    <h4 className={`font-semibold ${carbon.textPrimary}`}>Utilidades</h4>
                  </div>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Administración de utilidades para ex-colaboradores. Carga masiva de certificados,
                    configuración de fechas de pago y reportes.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-4 mt-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                      <strong>Ventajas del sistema Conectados 2.0:</strong>
                    </p>
                    <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                      <li>Digitalización completa de procesos de RRHH</li>
                      <li>Aprobaciones en tiempo real con notificaciones push</li>
                      <li>Trazabilidad completa de todas las acciones</li>
                      <li>Integración con SAP HCM para sincronización automática</li>
                      <li>Reportes y exportaciones personalizables</li>
                      <li>Acceso desde cualquier dispositivo con internet</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className={`text-lg font-semibold ${carbon.textPrimary} mt-6 mb-3`}>
                Roles de Usuario
              </h3>
              <p className={`${carbon.textPrimary} leading-relaxed mb-3`}>
                El sistema Conectados 2.0 maneja diferentes roles de usuario con permisos específicos:
              </p>

              <div className="space-y-3">
                <div className={`${carbon.layer01} p-3 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold ${carbon.textPrimary}`}>Jefe Directo</p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Aprueba solicitudes de permisos y justificaciones de empleados directos.
                  </p>
                </div>

                <div className={`${carbon.layer01} p-3 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold ${carbon.textPrimary}`}>PAT/PCO (Personal de Atención al Trabajador)</p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Aprueba solicitudes de operarios, gestiona certificados y administra utilidades.
                  </p>
                </div>

                <div className={`${carbon.layer01} p-3 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold ${carbon.textPrimary}`}>Analista de Nómina</p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Gestiona utilidades de personal cesado, carga certificados y configura pagos.
                  </p>
                </div>

                <div className={`${carbon.layer01} p-3 border ${carbon.border} rounded-lg`}>
                  <p className={`font-semibold ${carbon.textPrimary}`}>Colaborador</p>
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Registra solicitudes de permisos y justificaciones, recibe notificaciones de estado.
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

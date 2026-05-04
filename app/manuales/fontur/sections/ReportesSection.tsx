'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BarChart2, Plus, Trash2, Eye, BarChart } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function ReportesSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="reportes">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <BarChart2 className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Gestionar Reportes</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="reportes" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Reportes del Proyecto</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El módulo de reportes permite generar y consultar informes sobre las campañas y el desempeño
                del proyecto. Está compuesto por dos tipos de reporte: <strong>Automáticos</strong> (generados
                a partir de una campaña seleccionada) y <strong>Dinámicos</strong> (personalizables con gráficos
                configurados por el usuario). La interfaz es igual para todos los roles con acceso a este módulo.
              </p>
            </div>

            {/* ── REPORTES AUTOMÁTICOS ── */}
            <div className={`${carbon.layer01} p-4 border-l-4 border-fontur-purple dark:border-fontur-purple-light rounded-lg`}>
              <p className={`text-sm font-semibold ${carbon.textPrimary}`}>Sección: Reportes Automáticos</p>
            </div>

            {/* Paso 1 - Lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <BarChart2 className="w-5 h-5" />
                Lista de Reportes Automáticos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Accede desde el menú lateral en <strong>Gestionar Reportes → Reportes Automáticos</strong>.
                Muestra una tabla con todos los reportes creados: nombre del reporte, campaña de origen,
                fecha de creación y dos acciones por fila:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Ícono <strong>ojo</strong> — visualizar el reporte generado</li>
                  <li>Ícono <strong>papelera</strong> — eliminar el reporte</li>
                  <li>Botón <strong>"+ Crear Nuevo Reporte"</strong> en la esquina superior derecha</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/reportes/1.reportes-automaticos.png"
                alt="Tabla de reportes automáticos con nombre, campaña, fecha y acciones"
                caption="Lista de Reportes Automáticos"
              />
            </div>

            {/* Paso 2 - Crear reporte automático */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Plus className="w-5 h-5" />
                Crear Reporte Automático
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>"+ Crear Nuevo Reporte"</strong></li>
                <li>Se abre el modal <strong>"Crear Nuevo Reporte Automático"</strong> con los campos:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Nombre del reporte</strong> — texto descriptivo del reporte</li>
                    <li><strong>Descripción</strong> — propósito del reporte</li>
                    <li><strong>Fuente (Campaña)</strong> — selector con las campañas disponibles del proyecto</li>
                  </ul>
                </li>
                <li>Haz clic en <strong>"Crear Reporte"</strong> para generar, o <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/reportes/2.crear-reporte-automatico.png"
                alt="Modal de creación de reporte automático con nombre, descripción y fuente"
                caption="Modal Crear Reporte Automático"
              />
            </div>

            {/* Paso 3 - Eliminar reporte automático */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Reporte Automático
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>papelera</strong> en la fila del reporte</li>
                <li>Aparece un popover de confirmación directo en la tabla con el mensaje <em>"¿Eliminar reporte?"</em></li>
                <li>Haz clic en <strong>"Sí"</strong> para confirmar, o <strong>"No"</strong> para cancelar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/reportes/3.eliminar-reporte-automatico.png"
                alt="Confirmación de eliminación de reporte automático en la tabla"
                caption="Confirmar eliminación de Reporte Automático"
              />
            </div>

            {/* Paso 4 - Visualizar reporte automático */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Eye className="w-5 h-5" />
                Visualizar Reporte Automático
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Haz clic en el ícono de <strong>ojo</strong> para abrir la vista detallada del reporte. Muestra:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li><strong>Encabezado:</strong> nombre del reporte, descripción, fecha y botón <strong>"Descargar PDF"</strong></li>
                  <li><strong>Avances de la Campaña:</strong> nombre de la campaña y barra de <strong>Progreso General</strong></li>
                  <li><strong>Información General:</strong> tipo de campaña, rango de fechas, tipo de asignación, estado y departamentos asociados</li>
                  <li><strong>Descripción de la Campaña</strong></li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/reportes/4.visualizar-reporte-automatico.png"
                alt="Vista detallada del reporte automático con progreso y datos de campaña"
                caption="Vista Reporte Automático"
              />
            </div>

            {/* ── REPORTES DINÁMICOS ── */}
            <div className={`${carbon.layer01} p-4 border-l-4 border-fontur-purple dark:border-fontur-purple-light rounded-lg`}>
              <p className={`text-sm font-semibold ${carbon.textPrimary}`}>Sección: Reportes Dinámicos</p>
            </div>

            {/* Paso 5 - Lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <BarChart className="w-5 h-5" />
                Lista de Reportes Dinámicos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Accede desde el menú lateral en <strong>Gestionar Reportes → Reportes Dinámicos</strong>.
                Muestra la <strong>Tabla de reportes dinámicos</strong> con nombre, fecha de creación,
                descripción y el ícono de eliminar por fila. Incluye un campo de búsqueda (mínimo 3 caracteres)
                y paginación de 10 por página.
              </p>
              <ManualImage
                src="/manuales/fontur/reportes/5.reporte-dinamico.png"
                alt="Tabla de reportes dinámicos con búsqueda, nombre, fecha y descripción"
                caption="Lista de Reportes Dinámicos"
              />
            </div>

            {/* Paso 6 - Crear reporte dinámico */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <Plus className="w-5 h-5" />
                Crear Reporte Dinámico
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong>"Crear"</strong> en la parte superior derecha</li>
                <li>Se abre el modal <strong>"Crear Nuevo Reporte Dinámico"</strong> con:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Nombre del reporte</strong></li>
                    <li><strong>Descripción</strong></li>
                  </ul>
                </li>
                <li>Haz clic en <strong>"Crear"</strong> — el sistema abre la vista de detalle del reporte donde podrás agregar gráficos</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/reportes/6.crear-reporte-dinamico.png"
                alt="Modal para crear un nuevo reporte dinámico con nombre y descripción"
                caption="Modal Crear Reporte Dinámico"
              />
            </div>

            {/* Paso 7 - Eliminar reporte dinámico */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Reporte Dinámico
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>papelera</strong> en la fila del reporte</li>
                <li>Aparece el popover <em>"¿Eliminar reporte dinámico?"</em> con botones <strong>"NO"</strong> y <strong>"SÍ"</strong></li>
                <li>Haz clic en <strong>"SÍ"</strong> para confirmar la eliminación</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/reportes/7.eliminar-reporte-dinamico.png"
                alt="Popover de confirmación para eliminar un reporte dinámico"
                caption="Confirmar eliminación de Reporte Dinámico"
              />
            </div>

            {/* Paso 8 - Ver reporte dinámico */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">8</span>
                <Eye className="w-5 h-5" />
                Ver y Editar Reporte Dinámico
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al hacer clic sobre el nombre del reporte en la tabla, se abre la vista de detalle. Desde aquí puedes:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Editar el <strong>Nombre</strong> y la <strong>Descripción</strong> del reporte directamente en los campos</li>
                  <li>Ver los <strong>Gráficos Creados</strong> con sus visualizaciones interactivas</li>
                  <li>Eliminar un gráfico con el ícono de papelera sobre cada tarjeta de gráfico</li>
                  <li>Botón <strong>"Actualizar"</strong> para guardar los cambios del nombre y descripción</li>
                  <li>Botón <strong>"+ Crear nuevo gráfico"</strong> para agregar más visualizaciones</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/reportes/8.ver-reporte-dinamico.png"
                alt="Vista de detalle del reporte dinámico con gráficos y opciones de edición"
                caption="Vista Detalle — Reporte Dinámico"
              />
            </div>

            {/* Paso 9 - Crear nuevo gráfico */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">9</span>
                <BarChart className="w-5 h-5" />
                Agregar Gráfico al Reporte Dinámico
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Desde la vista de detalle, haz clic en <strong>"+ Crear nuevo gráfico"</strong></li>
                <li>Se abre el modal <strong>"Crear Nuevo Gráfico"</strong> con los campos:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Título del gráfico</strong></li>
                    <li><strong>Tipo de gráfico</strong> — selector (barras, líneas, pastel, etc.)</li>
                    <li><strong>Fuente de datos</strong> — origen de la información a graficar</li>
                    <li><strong>Tipo de respuesta</strong> — categoría de dato a visualizar</li>
                  </ul>
                </li>
                <li>Haz clic en <strong>"Crear"</strong> para agregar el gráfico al reporte, o <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/reportes/9.crear-nuevo-grafico.png"
                alt="Modal para crear un nuevo gráfico con tipo, fuente de datos y tipo de respuesta"
                caption="Modal Crear Nuevo Gráfico"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

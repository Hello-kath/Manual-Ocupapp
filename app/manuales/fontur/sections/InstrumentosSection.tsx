'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FolderOpen, Upload, Trash2, Info, FileText } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function InstrumentosSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="instrumentos">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <FolderOpen className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Gestión de Instrumentos</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="instrumentos" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Instrumentos y Plantillas</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Este módulo permite administrar los archivos de soporte del proyecto: los
                <strong> Instrumentos</strong> son documentos de trabajo usados en las campañas (PDF, DOCX, XLSX, CSV, etc.),
                y las <strong>Plantillas</strong> son formatos estandarizados reutilizables. Ambos se gestionan
                de forma independiente desde el menú <strong>Gestión Instrumentos</strong>.
              </p>
            </div>

            {/* ── INSTRUMENTOS ── */}
            <div className={`${carbon.layer01} p-4 border-l-4 border-fontur-purple dark:border-fontur-purple-light rounded-lg`}>
              <p className={`text-sm font-semibold ${carbon.textPrimary}`}>Sección: Instrumentos</p>
            </div>

            {/* Paso 1 - Lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <FileText className="w-5 h-5" />
                Lista de Instrumentos
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Muestra la <strong>Tabla de Instrumentos</strong> con todos los archivos cargados en el proyecto.
                Cada fila incluye el nombre del documento, la extensión y dos acciones:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Ícono <strong>descargar</strong> — descarga el archivo directamente</li>
                  <li>Ícono <strong>eliminar (papelera)</strong> — elimina el instrumento del sistema</li>
                  <li>Botón <strong>"Subir archivos"</strong> en la esquina superior derecha para cargar nuevos instrumentos</li>
                  <li>Paginación de <strong>10 registros por página</strong></li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/instrumentos/1.instrumentos-list.png"
                alt="Tabla de instrumentos con nombre, extensión y acciones de descarga y eliminación"
                caption="Lista de Instrumentos"
              />
            </div>

            {/* Paso 2 - Cargar instrumento */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Upload className="w-5 h-5" />
                Cargar Instrumento
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong>"Subir archivos"</strong> en la parte superior derecha</li>
                <li>Se abre el modal <strong>"Cargar instrumentos"</strong> con un área de carga</li>
                <li>Arrastra y suelta el archivo en el área indicada, o haz clic para seleccionarlo desde tu equipo</li>
                <li>Haz clic en <strong>"Guardar"</strong> para confirmar la carga, o <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Se admiten formatos <strong>PDF, DOCX, XLSX y CSV</strong>. El archivo quedará disponible
                    para ser asociado a campañas del proyecto.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/fontur/instrumentos/3.cargar-instrumento.png"
                alt="Modal para cargar un instrumento con área de arrastrar y soltar"
                caption="Modal Cargar Instrumento"
              />
            </div>

            {/* Paso 3 - Eliminar instrumento */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Instrumento
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>En la fila del instrumento, haz clic en el ícono de <strong>eliminar (papelera)</strong></li>
                <li>Se muestra un modal de confirmación con el nombre del archivo y la advertencia <em>"este proceso no puede revertirse"</em></li>
                <li>Haz clic en <strong>"Aceptar"</strong> para eliminar definitivamente, o en <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Esta acción es <strong>irreversible</strong>. Asegúrate de que el instrumento no esté
                    siendo usado en campañas activas antes de eliminarlo.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/fontur/instrumentos/2.eliminar-instrumento.png"
                alt="Modal de confirmación para eliminar un instrumento"
                caption="Modal de confirmación — Eliminar Instrumento"
              />
            </div>

            {/* ── PLANTILLAS ── */}
            <div className={`${carbon.layer01} p-4 border-l-4 border-fontur-purple dark:border-fontur-purple-light rounded-lg`}>
              <p className={`text-sm font-semibold ${carbon.textPrimary}`}>Sección: Plantillas</p>
            </div>

            {/* Paso 4 - Lista de plantillas */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <FileText className="w-5 h-5" />
                Lista de Plantillas
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Accede desde el menú lateral en <strong>Gestión Instrumentos → Plantillas</strong>. Muestra la
                <strong> Tabla de Plantillas</strong> con los formatos estandarizados del proyecto. Funciona igual
                que la tabla de instrumentos: nombre del documento, extensión y acciones de descarga y eliminación.
              </p>
              <ManualImage
                src="/manuales/fontur/instrumentos/4.plantillas-list.png"
                alt="Tabla de plantillas con nombre, extensión y acciones"
                caption="Lista de Plantillas"
              />
            </div>

            {/* Paso 5 - Cargar plantilla */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <Upload className="w-5 h-5" />
                Cargar Plantilla
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong>"Subir plantillas"</strong> en la parte superior derecha</li>
                <li>Se abre el modal <strong>"Cargar plantillas"</strong> con un área de carga</li>
                <li>Arrastra y suelta el archivo, o haz clic para seleccionarlo</li>
                <li>Haz clic en <strong>"Guardar"</strong> para confirmar, o <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/instrumentos/5.cargar-plantilla.png"
                alt="Modal para cargar una plantilla con área de arrastrar y soltar"
                caption="Modal Cargar Plantilla"
              />
            </div>

            {/* Paso 6 - Eliminar plantilla */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Plantilla
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>En la fila de la plantilla, haz clic en el ícono de <strong>eliminar (papelera)</strong></li>
                <li>Se muestra el modal de confirmación con el nombre del archivo</li>
                <li>Haz clic en <strong>"Aceptar"</strong> para eliminar, o <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/instrumentos/6.eliminar-plantilla.png"
                alt="Modal de confirmación para eliminar una plantilla"
                caption="Modal de confirmación — Eliminar Plantilla"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

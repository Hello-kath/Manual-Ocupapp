'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LayoutDashboard, Info, Megaphone, Plus, Pencil, Trash2 } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';
import { RoleAccess } from '@/components/manual/RoleAccess';

type Role = 'admin' | 'asignador' | 'colaborador';

const ROLE_LABEL: Record<Role, string> = {
  admin: 'Administrador',
  asignador: 'Asignador',
  colaborador: 'Colaborador',
};

const ROLE_MENU: Record<Role, string> = {
  admin: 'Inicio, Clientes, Colaboradores, Proyectos, Asignación Semanal y Registro Diario',
  asignador: 'Inicio, Proyectos y Asignación Semanal',
  colaborador: 'Inicio, Proyectos Asignados y Registro Diario',
};

const ROLE_NOTE: Record<Role, string> = {
  admin: 'Home del Administrador. Ve los anuncios y además puede crear, editar y eliminar anuncios.',
  asignador: 'Home del Asignador. Ve los anuncios y además puede crear, editar y eliminar anuncios (misma interfaz que el Administrador).',
  colaborador: 'Home del Colaborador. Solo ve los anuncios; no puede crear, editar ni eliminar.',
};

export function HomeSection({ role }: { role: Role }) {
  const carbon = useCarbonClasses();
  const canManage = role !== 'colaborador';
  const anchor = `home-${role}`;
  const homeImg = canManage
    ? '/manuales/ocupapp/inicio/1.home-admin.png'
    : '/manuales/ocupapp/inicio/5.home-colaborador.png';

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value={anchor}>
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-ocupapp-purple dark:text-ocupapp-purple-light" />
            <span>Home del {ROLE_LABEL[role]}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id={anchor} className="space-y-8 pt-4">

            <RoleAccess roles={[role]} note={ROLE_NOTE[role]} />

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Tu Home</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                El Home es lo primero que ves tras iniciar sesión: un <strong>saludo de bienvenida</strong>
                con la fecha y la sección de <strong>&quot;Anuncios Recientes&quot;</strong>. En tu menú
                lateral verás: <strong>{ROLE_MENU[role]}</strong>.
              </p>
            </div>

            {/* Paso 1 - Anuncios Recientes (todos) */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <Megaphone className="w-5 h-5" />
                Anuncios Recientes
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Los <strong>Anuncios Recientes</strong> son comunicados que publican el Administrador o el
                Asignador. Se muestran en un <strong>carrusel</strong> (un anuncio a la vez, con flechas y
                puntos para navegar). Cada tarjeta puede incluir:
              </p>
              <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary} mb-4`}>
                <li>Una <strong>imagen</strong> (si el anuncio la tiene)</li>
                <li>El <strong>título</strong> y la fecha (<em>&quot;Publicado el …&quot;</em>)</li>
                <li>La <strong>descripción</strong></li>
                <li>Un botón <strong>&quot;Ver enlace&quot;</strong> que abre el enlace externo en una pestaña nueva (solo si el anuncio tiene enlace)</li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Cada anuncio se muestra <strong>solo dentro de su rango de fechas</strong> (Fecha Inicio
                    a Fecha Fin, inclusive). Si no hay anuncios vigentes, aparece
                    <em> &quot;No hay anuncios recientes por el momento&quot;</em>.
                  </p>
                </div>
              </div>
              <ManualImage
                src={homeImg}
                alt={`Home del ${ROLE_LABEL[role]} con el saludo de bienvenida y los anuncios recientes`}
                caption={`Home del ${ROLE_LABEL[role]}`}
              />
            </div>

            {canManage ? (
              <>
                {/* Paso 2 - Crear anuncio */}
                <div>
                  <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                    <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                    <Plus className="w-5 h-5" />
                    Crear un anuncio
                  </h3>
                  <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                    <li>Haz clic en <strong>&quot;Crear Nuevo Anuncio&quot;</strong></li>
                    <li>Completa el formulario:
                      <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                        <li><strong>Título del Anuncio</strong> (obligatorio, hasta 100 caracteres)</li>
                        <li><strong>Descripción</strong> (obligatoria, hasta 500 caracteres)</li>
                        <li><strong>Enlace Externo</strong> (opcional; debe iniciar con http/https)</li>
                        <li><strong>Imagen</strong> (opcional; JPG, PNG, GIF o WEBP; máximo <strong>500 KB</strong>)</li>
                        <li><strong>Fecha Inicio</strong> y <strong>Fecha Fin</strong> (obligatorias; la fecha de fin no puede ser anterior a la de inicio)</li>
                      </ul>
                    </li>
                    <li>Revisa la <strong>Vista Previa</strong> (se actualiza en vivo) y pulsa <strong>&quot;Publicar Anuncio&quot;</strong></li>
                  </ol>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className={`text-sm ${carbon.textPrimary}`}>
                        Las <strong>fechas</strong> definen cuándo se muestra el anuncio en el Home: solo
                        aparece entre la Fecha Inicio y la Fecha Fin.
                      </p>
                    </div>
                  </div>
                  <ManualImage
                    src="/manuales/ocupapp/inicio/2.crear-anuncio.png"
                    alt="Formulario de Nuevo Anuncio con vista previa en vivo"
                    caption="Crear anuncio (Nuevo Anuncio)"
                  />
                </div>

                {/* Paso 3 - Editar / eliminar */}
                <div>
                  <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                    <span className="bg-ocupapp-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                    <Pencil className="w-5 h-5" />
                    Editar o eliminar un anuncio
                  </h3>
                  <p className={`${carbon.textPrimary} mb-4`}>
                    En la tarjeta del anuncio, el ícono de <strong>editar (lápiz)</strong> abre
                    <strong> &quot;Editar Anuncio&quot;</strong> con los datos precargados; ajusta lo necesario
                    y pulsa <strong>&quot;Guardar Cambios&quot;</strong>. El ícono de
                    <strong> eliminar (papelera)</strong>
                    <Trash2 className="inline w-4 h-4 mx-1" /> quita el anuncio del Home. Cuando no hay
                    anuncios, se muestra <em>&quot;No hay anuncios recientes por el momento&quot;</em>.
                  </p>
                  <ManualImage
                    src="/manuales/ocupapp/inicio/3.editar-anuncio.png"
                    alt="Formulario de Editar Anuncio con datos precargados y vista previa"
                    caption="Editar anuncio"
                  />
                  <ManualImage
                    src="/manuales/ocupapp/inicio/4.sin-anuncios.png"
                    alt="Home sin anuncios creados, con el mensaje de vacío"
                    caption="Home sin anuncios (estado vacío)"
                  />
                </div>
              </>
            ) : (
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-ocupapp-purple dark:border-ocupapp-purple-light p-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-ocupapp-purple mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Como <strong>Colaborador</strong> solo <strong>ves</strong> los anuncios en tu Home; no
                    puedes crear, editar ni eliminar. Los anuncios los publican el Administrador y el
                    Asignador.
                  </p>
                </div>
              </div>
            )}

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

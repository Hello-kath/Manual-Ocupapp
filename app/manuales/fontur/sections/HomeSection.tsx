'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Home, Shield, Image, Upload, Info, Bot, MessageSquare } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function HomeSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="home">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <Home className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Página de Inicio</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="home" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Panel de bienvenida</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Es la primera pantalla que ves al ingresar a un proyecto. Muestra un banner de bienvenida
                con tu nombre y rol, y un contenido diferente según si eres Administrador o Asesor.
              </p>
            </div>

            {/* Paso 1 - Admin */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <Shield className="w-5 h-5" />
                Vista para Administrador
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El banner muestra un saludo con tu nombre, tu rol <strong>Super Administrador</strong> y el nombre del proyecto activo.
                En la esquina inferior derecha aparece el botón <strong>"Gestionar Imágenes"</strong>.
              </p>
              <ManualImage
                src="/manuales/fontur/home/home-banner-admin.png"
                alt="Banner de bienvenida para el rol Administrador"
                caption="Banner de bienvenida — vista Administrador"
              />
              <p className={`${carbon.textPrimary} mb-4 mt-6`}>
                Al hacer scroll hacia abajo se muestra el contenido del proyecto: nombre, objetivo general,
                descripción, galería de imágenes y los objetivos específicos.
              </p>
              <ManualImage
                src="/manuales/fontur/home/home-contenido-admin.png"
                alt="Contenido del proyecto visible para el Administrador"
                caption="Contenido del proyecto — vista Administrador"
              />
            </div>

            {/* Paso 2 - Advisor */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Shield className="w-5 h-5" />
                Vista para Asesor
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                El banner muestra el saludo con el nombre del asesor, su rol <strong>ASESOR</strong> y el proyecto activo.
                El botón <strong>"Gestionar Imágenes"</strong> no es visible para este rol.
              </p>
              <ManualImage
                src="/manuales/fontur/home/home-banner-advisor.png"
                alt="Banner de bienvenida para el rol Asesor"
                caption="Banner de bienvenida — vista Asesor"
              />
              <p className={`${carbon.textPrimary} mb-4 mt-6`}>
                Al hacer scroll, el asesor ve el panel de <strong>Publicaciones</strong>:
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Botón <strong>"Crear nueva publicación"</strong> — para compartir novedades, archivos o mensajes con un beneficiario</li>
                  <li>Listado de <strong>Publicaciones del Asesor</strong> con: campaña, beneficiario, fecha, descripción y archivos adjuntos</li>
                  <li>Enlace de <strong>comentarios</strong> por publicación</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/home/home-contenido-advisor.png"
                alt="Panel de publicaciones visible para el Asesor"
                caption="Panel de publicaciones — vista Asesor"
              />
            </div>

            {/* Paso 3 - Gestionar imágenes hero */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Image className="w-5 h-5" />
                Gestionar Imágenes del Banner
              </h3>
              <p className={`${carbon.textPrimary} mb-2`}>
                Disponible únicamente para el rol <strong>Super Administrador</strong>.
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el botón <strong>"Gestionar Imágenes"</strong> en la esquina inferior derecha del banner</li>
                <li>Se abre el modal <strong>"Gestionar Imágenes del Hero"</strong> con dos pestañas:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Imágenes del sistema</strong> — imágenes predeterminadas disponibles para usar</li>
                    <li><strong>Imágenes personalizadas</strong> — imágenes subidas por el administrador</li>
                  </ul>
                </li>
                <li>Para <strong>activar una imagen</strong> en el carrusel, haz clic sobre ella — se marcará con un indicador de selección</li>
                <li>Para <strong>eliminar una imagen personalizada</strong>, haz clic en el ícono de eliminar sobre la imagen</li>
                <li>Haz clic en <strong>"Guardar cambios"</strong> para aplicar la selección, o <strong>"Cancelar"</strong> para cerrar sin guardar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/home/home-gestionar-imagenes.png"
                alt="Modal de gestión de imágenes del banner con las imágenes disponibles"
                caption="Modal Gestionar Imágenes del Banner"
              />
            </div>

            {/* Paso 4 - Subir imagen */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Upload className="w-5 h-5" />
                Subir Nueva Imagen al Banner
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Dentro del modal de gestión, para subir una imagen personalizada:
              </p>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Selecciona la pestaña <strong>"Imágenes personalizadas"</strong></li>
                <li>En el campo <strong>"Subir una URL"</strong>, ingresa la URL de la imagen y haz clic en <strong>"Subir"</strong></li>
                <li>O arrastra y suelta el archivo de imagen directamente en el área indicada</li>
                <li>La imagen aparecerá en la lista de imágenes personalizadas lista para activarse</li>
              </ol>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className={`text-sm ${carbon.textPrimary}`}>
                    Se recomienda usar imágenes de <strong>1280 × 720 px</strong> o superior,
                    en formato <strong>JPG o PNG</strong>, con un peso máximo de <strong>5 MB</strong>.
                  </p>
                </div>
              </div>
              <ManualImage
                src="/manuales/fontur/home/home-subir-imagen.png"
                alt="Pestaña de imágenes personalizadas con opción para subir una nueva imagen"
                caption="Subir imagen personalizada al banner"
              />
            </div>

            {/* Paso 5 - Acceder al Asistente Virtual desde el Home */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                <Bot className="w-5 h-5" />
                Acceder al Asistente Virtual
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                En la esquina inferior derecha de todas las vistas del sistema aparece el botón flotante
                del <strong>Asistente Virtual</strong> (ícono de chat morado). Al hacer clic se abre la
                vista <strong>"Mis Conversaciones"</strong> con el historial de conversaciones disponibles.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Cada tarjeta muestra el correo del usuario, la fecha de última actualización y el último mensaje del asistente</li>
                  <li>Botón <strong>"Nueva Conversación"</strong> en la esquina superior derecha para iniciar un nuevo chat</li>
                  <li>Haz clic sobre una conversación para abrirla y continuar el intercambio</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/home/home-lista-chat.png"
                alt="Vista Mis Conversaciones del Asistente Virtual con lista de chats y botón Nueva Conversación"
                caption="Asistente Virtual — Mis Conversaciones"
              />
            </div>

            {/* Paso 6 - Chat con el Asistente Virtual */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                <MessageSquare className="w-5 h-5" />
                Conversar con el Asistente Virtual
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                Al abrir una conversación se muestra la ventana de chat con el historial de mensajes.
                El asistente da la bienvenida y está disponible para responder preguntas sobre los
                beneficiarios y las experiencias registradas en la plataforma.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Los mensajes del <strong>Asistente</strong> aparecen en burbujas con la hora del envío</li>
                  <li>Escribe tu consulta en el campo <strong>"Escribe tu mensaje..."</strong> y presiona el botón de envío</li>
                  <li>El menú lateral permite navegar a los demás módulos sin cerrar la conversación</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/home/home-chat-asistente.png"
                alt="Ventana de chat del Asistente Virtual con mensaje de bienvenida y campo de texto"
                caption="Asistente Virtual — ventana de chat"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

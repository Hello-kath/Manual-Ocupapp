'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { UserCog, Plus, Pencil, Trash2 } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';
import { ManualImage } from '@/components/manual/ManualImage';

export function UsuariosSection() {
  const carbon = useCarbonClasses();

  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="usuarios">
        <AccordionTrigger className={`text-2xl font-bold ${carbon.textPrimary}`}>
          <div className="flex items-center gap-3">
            <UserCog className="w-6 h-6 text-fontur-purple dark:text-fontur-purple-light" />
            <span>Gestión de Usuarios</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <section id="usuarios" className="space-y-8 pt-4">

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-fontur-purple dark:border-fontur-purple-light p-4">
              <p className={`text-sm ${carbon.textPrimary} mb-2`}>
                <strong>Gestión de Usuarios</strong>
              </p>
              <p className={`text-sm ${carbon.textPrimary}`}>
                Este módulo permite administrar los usuarios del proyecto: crear nuevos asesores o
                administradores, editar su información y estado, y eliminarlos del proyecto.
                Accede desde el menú lateral en <strong>Gestión de usuarios → Usuarios</strong>.
                Solo los roles <strong>Super Administrador</strong>, <strong>Director</strong> y <strong>Administrador</strong> tienen acceso.
              </p>
            </div>

            {/* Paso 1 - Lista */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                <UserCog className="w-5 h-5" />
                Lista de Usuarios
              </h3>
              <p className={`${carbon.textPrimary} mb-4`}>
                La vista principal muestra la <strong>Lista de Usuarios</strong> con una tabla paginada
                (10 por página) y las columnas: <strong>Nombre</strong>, <strong>Apellido</strong>,
                <strong>Correo</strong>, <strong>N° de identificación</strong>, <strong>Roles</strong>,
                <strong>Estado</strong> y <strong>Acciones</strong>.
              </p>
              <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-4`}>
                <ul className={`list-disc list-inside ml-4 space-y-1 text-sm ${carbon.textPrimary}`}>
                  <li>Campo <strong>Buscar</strong> — filtra por nombre o apellido</li>
                  <li>Selector <strong>Filtrar por estado</strong> — Activo / Inactivo</li>
                  <li>Selector <strong>Filtrar por rol</strong> — filtra por rol del usuario</li>
                  <li>Botón <strong>"+ Nuevo usuario"</strong> — abre el modal de creación</li>
                  <li>Botón <strong>"Actualizar Tabla"</strong> — recarga los datos</li>
                  <li>Botón <strong>"Limpiar filtros"</strong> — reinicia todos los filtros activos</li>
                  <li>Ícono <strong>lápiz</strong> (azul) — editar usuario</li>
                  <li>Ícono <strong>papelera</strong> (rojo) — eliminar usuario del proyecto</li>
                </ul>
              </div>
              <ManualImage
                src="/manuales/fontur/usuarios/1.lista-usuarios.png"
                alt="Lista de usuarios con tabla de nombre, apellido, correo, identificación, rol, estado y acciones"
                caption="Lista de Usuarios"
              />
            </div>

            {/* Paso 2 - Crear usuario */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                <Plus className="w-5 h-5" />
                Crear Nuevo Usuario
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en <strong>"+ Nuevo usuario"</strong> en la esquina superior derecha</li>
                <li>Se abre el modal <strong>"Crear Nuevo Usuario"</strong> con los campos:
                  <ul className={`list-disc list-inside ml-6 mt-2 space-y-1 text-sm ${carbon.textPrimary}`}>
                    <li><strong>Nombre</strong> (obligatorio)</li>
                    <li><strong>Apellido</strong> (obligatorio)</li>
                    <li><strong>Identificación</strong> — número de identificación del usuario</li>
                    <li><strong>Departamento</strong> — selector de departamento</li>
                    <li><strong>Municipio</strong> — selector de municipio (depende del departamento)</li>
                    <li><strong>Celular</strong> — número de celular (máximo 10 dígitos)</li>
                    <li><strong>Correo</strong> (obligatorio) — correo electrónico</li>
                    <li><strong>Roles</strong> (obligatorio) — selector del rol asignado</li>
                    <li><strong>Contraseña</strong> (obligatorio) — contraseña de acceso</li>
                    <li><strong>Confirmar</strong> (obligatorio) — confirmación de contraseña</li>
                  </ul>
                </li>
                <li>Haz clic en <strong>"Aceptar"</strong> para crear el usuario, o <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/usuarios/2.crear-usuario.png"
                alt="Modal de creación de usuario con campos nombre, apellido, correo, rol, contraseña y confirmar"
                caption="Modal Crear Nuevo Usuario"
              />
            </div>

            {/* Paso 3 - Editar usuario */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                <Pencil className="w-5 h-5" />
                Editar Usuario
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>lápiz</strong> (azul) en la fila del usuario a modificar</li>
                <li>Se abre el modal <strong>"Editar Usuario"</strong> con todos los datos actuales precargados</li>
                <li>Modifica los campos necesarios — el modal incluye los mismos campos que la creación,
                  más el selector de <strong>Estado</strong> (toggle Activo/Inactivo)</li>
                <li>Haz clic en <strong>"Aceptar"</strong> para guardar los cambios, o <strong>"Cancelar"</strong> para cerrar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/usuarios/3.editar-usuario.png"
                alt="Modal de edición de usuario con datos precargados y toggle de estado activo"
                caption="Modal Editar Usuario"
              />
            </div>

            {/* Paso 4 - Eliminar usuario */}
            <div>
              <h3 className={`text-xl font-semibold ${carbon.textPrimary} mb-4 flex items-center gap-2`}>
                <span className="bg-fontur-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                <Trash2 className="w-5 h-5" />
                Eliminar Usuario
              </h3>
              <ol className={`list-decimal list-inside space-y-2 ${carbon.textPrimary} ml-4 mb-4`}>
                <li>Haz clic en el ícono de <strong>papelera</strong> (rojo) en la fila del usuario a eliminar</li>
                <li>Aparece un popover de confirmación en la tabla con el mensaje <em>"¿Eliminar usuario del proyecto?"</em></li>
                <li>Haz clic en <strong>"Sí"</strong> para confirmar la eliminación, o <strong>"No"</strong> para cancelar</li>
              </ol>
              <ManualImage
                src="/manuales/fontur/usuarios/4.eliminar-usuario.png"
                alt="Popover de confirmación para eliminar un usuario del proyecto con opciones No y Sí"
                caption="Confirmar Eliminación de Usuario"
              />
            </div>

          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

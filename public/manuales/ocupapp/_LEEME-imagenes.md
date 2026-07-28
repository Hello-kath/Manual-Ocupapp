# Guía de imágenes del Manual de Ocupapp

Coloca cada captura en la carpeta de su módulo, con **exactamente** el nombre indicado abajo.
Si un archivo falta, el manual muestra un placeholder con el nombre esperado (no se rompe).

> Formato recomendado: **PNG**, ancho ~1200–1600 px. Las capturas se muestran a todo el ancho.

Leyenda: ✅ = ya cargada · ⬜ = pendiente de capturar.

---

### login/
- ✅ `1.pantalla-login.png` — pantalla de inicio de sesión
- ✅ `2.seleccionar-cuenta-google.png` — ventana de Google
- ✅ `3.acceso-exitoso.png` — redirección al dashboard (Home)
- ✅ `4.error-acceso.png` — pantalla "Acceso Denegado" (cuenta no autorizada)

### inicio/
- ✅ `1.dashboard-general.png` — dashboard general (pantalla de bienvenida "Inicio")

### proyectos/  (roles: Administrador y Asignador — mismo módulo, permisos distintos)
- ✅ `1.lista-proyectos.png` — Gestión de Proyectos (lista)
- ✅ `2.nuevo-proyecto.png` — modal Nuevo Proyecto (solo Administrador)
- ✅ `3.editar-proyecto.png` — modal Editar Proyecto (solo Administrador)
- ✅ `4.filtros.png` — panel de filtros (Cliente, Estado, KAM, PM)
- ✅ `5.asignar-colaborador.png` — modal Asignar Colaboradores (desde la lista)
- ✅ `6.asignacion-exito.png` — mensaje de éxito de asignación
- ✅ `7.cambiar-estado.png` — cambiar estado del proyecto desde la tabla (Admin y Asignador)
- ✅ `8.detalle-proyecto.png` — detalle del proyecto (avance, KAM/PM, colaboradores)
- ✅ `9.asignar-desde-detalle.png` — agregar colaborador desde el detalle

### clientes/  (rol: Administrador)
- ✅ `1.lista-clientes.png` — Directorio de Clientes (búsqueda, orden, filtro, tabla)
- ✅ `2.crear-cliente.png` — modal Nuevo Cliente
- ✅ `3.editar-cliente.png` — modal Editar Cliente
- ✅ `4.activar-inactivar-cliente.png` — interruptor de estado Activo/Inactivo
- ✅ `5.detalle-cliente.png` — detalle (historial de cambios + proyectos vinculados)

### colaboradores/  (rol: Administrador)
- ✅ `1.lista-colaboradores.png` — Gestión de Colaboradores (indicadores, búsqueda, orden, filtro, tabla)
- ✅ `2.activar-inactivar-colaborador.png` — interruptor de estado (acceso a la plataforma)
- ✅ `3.crear-colaborador.png` — modal Nuevo Colaborador
- ✅ `4.editar-colaborador.png` — modal Editar Colaborador (rol + perfil profesional)
- ✅ `5.detalle-colaborador.png` — detalle (historial de actividad e info)
- ✅ `6.historial-proyectos.png` — tabla de proyectos/ocupación de la semana en curso
- ✅ `7.editar-desde-detalle.png` — editar desde el detalle
- ✅ `8.historial-asignaciones.png` — historial de asignaciones por semana (ideales vs reales)

### asignacion/  (roles: Administrador, Asignador — capturas tomadas con Admin)
- ✅ `1.panel-planificacion.png` — Panel de Planificación (hub con 3 accesos + Festivos)
- ✅ `2.planificacion-semanal.png` — Planificación Semanal Masiva (asignar proyectos/horas)
- ✅ `3.horas-extra.png` — modal Horas Extra (solo admin)
- ✅ `4.comparativa-semanal.png` — Comparativa de la semana en curso (proyectadas vs registradas)
- ✅ `5.historial-planificaciones.png` — Historial de Planificaciones (desglose de colaboradores)
- ✅ `6.crear-semana-auditoria.png` — Crear siguiente semana + Auditoría de Desbloqueos (solo admin)
- ✅ `7.festivos.png` — Festivos nacionales / sincronizar (solo admin)

### proyectos-asignador/  (rol: Asignador — vista propia del asignador)
- ✅ `1.lista-proyectos.png` — lista de proyectos (vista Asignador, sin botón Nuevo)
- ✅ `2.filtros.png` — panel de filtros
- ✅ `3.asignar-colaborador.png` — modal Asignar Colaboradores
- ✅ `4.asignacion-exito.png` — mensaje de éxito de asignación
- ✅ `5.cambiar-estado.png` — cambiar estado desde la tabla
- ✅ `6.detalle-proyecto.png` — detalle del proyecto
- ✅ `7.asignar-desde-detalle.png` — agregar colaborador desde el detalle

### asignacion-asignador/  (rol: Asignador — vista propia del asignador)
- ✅ `1.panel-planificacion.png` — Panel de Planificación (sin Festivos)
- ✅ `2.semana-en-curso.png` — cuadrante de la semana en curso
- ✅ `3.planificacion-semanal.png` — Planificación Semanal Masiva (sin horas extra)
- ✅ `4.comparativa-semanal.png` — Comparativa de la semana en curso
- ✅ `5.historial-planificaciones.png` — Historial de Planificaciones (sin desbloqueo/auditoría)
- ✅ `6.crear-siguiente-semana.png` — crear la siguiente semana

### registro-diario/  (rol principal: Colaborador; igual para Administrador)
- ✅ `1.registro-sin-datos.png` — vista inicial sin registros
- ✅ `2.seleccionar-proyecto.png` — selección de proyecto
- ✅ `3.seleccionar-fecha.png` — selección de fecha
- ✅ `4.registrar-horas.png` — horas registradas + mensaje de éxito
- ✅ `5.editar-horas.png` — editar una entrada registrada

### proyectos-asignados/  (rol: Colaborador)
- ✅ `1.proyectos-activos.png` — pestaña de proyectos activos
- ✅ `2.historial.png` — pestaña de historial (con filtros)
- ✅ `3.semanas-participacion.png` — desglose de horas por semana/día

### perfil/  (rol: Colaborador)
- ✅ `1.perfil-colaborador.png` — vista del perfil
- ✅ `2.editar-perfil.png` — formulario de edición
- ✅ `3.edicion-exito.png` — mensaje de éxito al guardar

'use client';

import { ShieldCheck } from 'lucide-react';
import { useCarbonClasses } from '@/hooks/useCarbonClasses';

export type Role = 'admin' | 'asignador' | 'colaborador';

const ROLE_LABEL: Record<Role, string> = {
  admin: 'Administrador',
  asignador: 'Asignador',
  colaborador: 'Colaborador',
};

const ROLE_STYLE: Record<Role, string> = {
  admin: 'bg-ocupapp-primary text-white',
  asignador: 'bg-ocupapp-purple text-white',
  colaborador: 'bg-ocupapp-magenta text-white',
};

interface RoleAccessProps {
  /** Roles que pueden acceder a esta vista */
  roles: Role[];
  /** Nota opcional sobre cómo cambia la vista según el rol */
  note?: string;
}

/**
 * Muestra, al inicio de cada sección, qué roles tienen acceso a la vista
 * y (opcionalmente) cómo cambia lo que ve cada rol.
 */
export function RoleAccess({ roles, note }: RoleAccessProps) {
  const carbon = useCarbonClasses();

  return (
    <div className={`${carbon.layer01} p-4 border ${carbon.border} rounded-lg mb-6`}>
      <div className="flex flex-wrap items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-ocupapp-purple dark:text-ocupapp-purple-light" />
        <span className={`text-sm font-semibold ${carbon.textPrimary} mr-1`}>
          Roles con acceso:
        </span>
        {roles.map((role) => (
          <span
            key={role}
            className={`text-xs font-medium px-2 py-1 rounded-full ${ROLE_STYLE[role]}`}
          >
            {ROLE_LABEL[role]}
          </span>
        ))}
      </div>
      {note && (
        <p className={`text-sm ${carbon.textPrimary} mt-3`}>
          <strong>Diferencias por rol:</strong> {note}
        </p>
      )}
    </div>
  );
}

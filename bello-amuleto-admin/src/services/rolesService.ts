import { request } from './api';

type Rol = {
  id: string;
  nombre: string;
  descripcion?: string;
};

type RolesResponse = {
  success: boolean;
  data?: Rol[];
};

export const listarRoles = () => {
  return request<RolesResponse>('/roles');
};

export type { Rol };

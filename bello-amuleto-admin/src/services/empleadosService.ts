import { request } from './api';

type EmpleadoPayload = {
  usuario_id: string;
  numero_empleado?: string;
  fecha_contratacion?: string;
  departamento?: string;
  activo: boolean;
};

type EmpleadoResponse = {
  success: boolean;
  message?: string;
  data?: {
    usuario_id: string;
    numero_empleado?: string;
    fecha_contratacion?: string;
    departamento?: string;
    activo: boolean;
    creado_en?: string;
  };
};

type RolAsignacionResponse = {
  success: boolean;
  message?: string;
};

export const createEmpleado = (payload: EmpleadoPayload) => {
  return request<EmpleadoResponse>('/empleados', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

export const asignarRol = (empleadoId: string, rolId: string, otorgadoPor: string) => {
  return request<RolAsignacionResponse>(`/empleados/${empleadoId}/roles`, {
    method: 'POST',
    body: JSON.stringify({
      rol_id: rolId,
      otorgado_por: otorgadoPor,
    }),
  });
};

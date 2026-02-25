import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateUserForm.css';
import { asignarRol, createEmpleado } from '../../services/empleadosService';
import { listarRoles, type Rol } from '../../services/rolesService';

type AccountStatus = 'activo' | 'inactivo';
const OTORGADO_POR_FIJO = import.meta.env.VITE_OTORGADO_POR ?? '';

const CreateUserForm = () => {
	const navigate = useNavigate();
	const [status, setStatus] = useState<AccountStatus>('activo');
	const [roles, setRoles] = useState<Rol[]>([]);
	const [rolesError, setRolesError] = useState<string | null>(null);
	const [isLoadingRoles, setIsLoadingRoles] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		usuarioId: '',
		numeroEmpleado: '',
		fechaContratacion: '',
		departamento: '',
		rolId: '',
	});

	useEffect(() => {
		let isMounted = true;
		setIsLoadingRoles(true);
		listarRoles()
			.then((response) => {
				if (!isMounted) return;
				if (!response.success) {
					setRolesError('No se pudieron cargar los roles.');
					return;
				}
				setRoles(response.data ?? []);
			})
			.catch((error: Error) => {
				if (!isMounted) return;
				setRolesError(error.message || 'No se pudieron cargar los roles.');
			})
			.finally(() => {
				if (!isMounted) return;
				setIsLoadingRoles(false);
			});

		return () => {
			isMounted = false;
		};
	}, []);

	const handleCancel = () => {
		navigate('/staff');
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitError(null);
		if (!formData.rolId) {
			setSubmitError('Selecciona un rol para continuar.');
			return;
		}
		setIsSubmitting(true);
		try {
			const response = await createEmpleado({
				usuario_id: formData.usuarioId,
				numero_empleado: formData.numeroEmpleado || undefined,
				fecha_contratacion: formData.fechaContratacion || undefined,
				departamento: formData.departamento || undefined,
				activo: status === 'activo',
			});
			if (!response.success) {
				throw new Error(response.message || 'No se pudo crear el empleado.');
			}
			const empleadoId = response.data?.usuario_id ?? formData.usuarioId;
			const rolResponse = await asignarRol(empleadoId, formData.rolId, OTORGADO_POR_FIJO);
			if (!rolResponse.success) {
				throw new Error(rolResponse.message || 'No se pudo asignar el rol.');
			}
			navigate('/staff');
		} catch (error) {
			if (error instanceof Error) {
				setSubmitError(error.message);
			} else {
				setSubmitError('Ocurrio un error inesperado.');
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = event.target;
		setFormData((current) => ({
			...current,
			[name]: value,
		}));
	};

	return (
		<div className="create-user-page">
			<div className="create-user-card">
				<div className="create-user-header">
					<div>
						<h1>Nuevo Empleado</h1>
						<p>Registra un nuevo miembro del equipo de Bello Amuleto.</p>
					</div>
					<button className="close-btn" type="button" onClick={handleCancel} aria-label="Cerrar">
						×
					</button>
				</div>

				<form className="create-user-form" onSubmit={handleSubmit}>
					<div className="form-grid">
						<div className="form-field">
							<label htmlFor="fullName">Nombre completo</label>
							<input
								id="fullName"
								name="fullName"
								placeholder="Ej. Julianna Vatore"
								type="text"
								value={formData.fullName}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-field">
							<label htmlFor="email">Correo electronico</label>
							<input
								id="email"
								name="email"
								placeholder="j.vatore@belloamuleto.com"
								type="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
					</div>

					<div className="form-grid">
						<div className="form-field">
							<label htmlFor="usuarioId">Usuario ID (Auth)</label>
							<input
								id="usuarioId"
								name="usuarioId"
								placeholder="UUID de auth"
								type="text"
								value={formData.usuarioId}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-field">
							<label htmlFor="numeroEmpleado">Numero de empleado</label>
							<input
								id="numeroEmpleado"
								name="numeroEmpleado"
								placeholder="EMP001"
								type="text"
								value={formData.numeroEmpleado}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="form-grid">
						<div className="form-field">
							<label htmlFor="fechaContratacion">Fecha de contratacion</label>
							<input
								id="fechaContratacion"
								name="fechaContratacion"
								type="date"
								value={formData.fechaContratacion}
								onChange={handleChange}
							/>
						</div>

						<div className="form-field">
							<label htmlFor="departamento">Departamento</label>
							<input
								id="departamento"
								name="departamento"
								placeholder="Ventas"
								type="text"
								value={formData.departamento}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="form-field">
						<label htmlFor="rolId">Rol</label>
						<select
							id="rolId"
							name="rolId"
							value={formData.rolId}
							onChange={handleChange}
							required
							disabled={isLoadingRoles || !!rolesError}
						>
							<option value="" disabled>
								{isLoadingRoles ? 'Cargando roles...' : 'Selecciona un rol'}
							</option>
							{roles.map((rol) => (
								<option key={rol.id} value={rol.id}>
									{rol.nombre}
								</option>
							))}
						</select>
					</div>

					<div className="status-row">
						<div>
							<span className="status-label">Estado</span>
							<p>Define el acceso inicial de la cuenta</p>
						</div>
						<label className="status-toggle">
							<input
								type="checkbox"
								checked={status === 'activo'}
								onChange={(event) => setStatus(event.target.checked ? 'activo' : 'inactivo')}
							/>
							<span className="toggle-track" />
							<span className="toggle-text">{status === 'activo' ? 'Activo' : 'Inactivo'}</span>
						</label>
					</div>

					{rolesError && <p className="form-error">{rolesError}</p>}
					{submitError && <p className="form-error">{submitError}</p>}

					<div className="form-actions">
						<button className="secondary-btn" type="button" onClick={handleCancel} disabled={isSubmitting}>
							Cancelar
						</button>
						<button className="primary-btn" type="submit" disabled={isSubmitting || isLoadingRoles}>
							{isSubmitting ? 'Guardando...' : 'Guardar empleado'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateUserForm;

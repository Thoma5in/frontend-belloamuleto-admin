//Formulario para registrar administradores
import { useState, type ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import brandIcon from '../../assets/icons/icono-bello-amuleto.png';
import './Register.css';

const Register = () => {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [role, setRole] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const onSubmit: NonNullable<ComponentProps<'form'>['onSubmit']> = (e) => {
		e.preventDefault();
		setError(null);

		if (password !== confirmPassword) {
			setError('Las contraseñas no coinciden');
			return;
		}

		console.log('Admin register submit', {
			firstName,
			lastName,
			email,
			phone,
			role,
		});
		setPassword('');
		setConfirmPassword('');
	};

	return (
		<div className="register-page">
			<div className="register-brand" aria-label="Bello Amuleto">
				<span className="register-brand-text">Bello</span>
				<img className="register-brand-icon" src={brandIcon} alt="" aria-hidden="true" />
				<span className="register-brand-text">Amuleto</span>
			</div>

			<main className="register-main">
				<section className="register-card" aria-labelledby="register-title">
					<div className="register-card-inner">
						<h1 id="register-title" className="register-title">Registro de Administradores</h1>

						<form className="register-form" onSubmit={onSubmit}>
							<div className="register-field">
								<label className="register-label" htmlFor="register-first-name">Nombre</label>
								<input
									id="register-first-name"
									className="register-input"
									type="text"
									placeholder="Nombre"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									autoComplete="given-name"
									required
								/>
							</div>

							<div className="register-field">
								<label className="register-label" htmlFor="register-last-name">Apellido</label>
								<input
									id="register-last-name"
									className="register-input"
									type="text"
									placeholder="Apellido"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									autoComplete="family-name"
									required
								/>
							</div>

							<div className="register-field">
								<label className="register-label" htmlFor="register-email">Correo</label>
								<input
									id="register-email"
									className="register-input"
									type="email"
									placeholder="correo@empresa.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									autoComplete="email"
									required
								/>
							</div>

							<div className="register-field">
								<label className="register-label" htmlFor="register-phone">Teléfono</label>
								<input
									id="register-phone"
									className="register-input"
									type="tel"
									placeholder="+57 ..."
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									autoComplete="tel"
								/>
							</div>

							<div className="register-field">
								<label className="register-label" htmlFor="register-role">Cargo / Rol</label>
								<input
									id="register-role"
									className="register-input"
									type="text"
									placeholder="Ej: Administrador"
									value={role}
									onChange={(e) => setRole(e.target.value)}
									required
								/>
							</div>

							<div className="register-field">
								<label className="register-label" htmlFor="register-password">Contraseña</label>
								<input
									id="register-password"
									className="register-input"
									type="password"
									placeholder="Contraseña"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									autoComplete="new-password"
									required
								/>
							</div>

							<div className="register-field">
								<label className="register-label" htmlFor="register-confirm-password">Confirmar contraseña</label>
								<input
									id="register-confirm-password"
									className="register-input"
									type="password"
									placeholder="Repite la contraseña"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									autoComplete="new-password"
									required
								/>
							</div>

							{error ? <div className="register-error">{error}</div> : null}

							<p className="register-help">
								¿Ya tienes cuenta?{' '}
								<a className="register-link" onClick={() => navigate('/login')}>Inicia sesión</a>
							</p>

							<button className="register-submit" type="submit">Registrar Administrador</button>
						</form>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Register;
//Formulario para registrar administradores
const Register = () => {
    return (
        <div>
            <h1>Registro de Administradores.</h1>
            <form>
                <input type = "text" placeholder="Nombre..." />
                <input type = "email" placeholder="Correo..." />
                <input type = "password" placeholder="Contraseña..." />
                <button type = "submit"> Registrar </button>
            </form>
        </div>
    )
}

export default Register;
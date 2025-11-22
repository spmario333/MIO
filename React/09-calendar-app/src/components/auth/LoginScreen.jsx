import React from 'react';
import './login.css';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux'
import { createUser, startLogin } from '../../actions/auth';
import Swal from 'sweetalert2';

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: 'mail@mail.cu',
        lPassword: '123456',

    })

    const [formCreateUserValue, handleCreateUserInputChange] = useForm({
        cEmail: 'spmario333@gmail.com',
        cPassword: '123456',
        cPassword2: '123456',
        cName: 'Mario'
    })

    const { lEmail, lPassword } = formLoginValues

    const { cEmail, cPassword, cPassword2, cName } = formCreateUserValue

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword))

    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (cPassword !== cPassword2) {
            return Swal.fire('Error', 'Las contraseñas no coinciden', 'error')
        }

        dispatch(createUser(cName, cEmail, cPassword))



    }


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='lEmail'
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='lPassword'
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='cName'
                                value={cName}
                                onChange={handleCreateUserInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='cEmail'
                                value={cEmail}
                                onChange={handleCreateUserInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='cPassword'
                                value={cPassword}
                                onChange={handleCreateUserInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name='cPassword2'
                                value={cPassword2}
                                onChange={handleCreateUserInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
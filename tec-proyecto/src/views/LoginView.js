import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginView() {
    return (
        <div className='container p-4' style={{minHeight:'70vh'}}>
            <h1 className="text-center mb-5">Login</h1>
            <div className="row justify-content-center">
                <div className="col-3 ms-5">
                    <Link className='btn btn-dark' to="/alumnos">
                        Alumnos
                    </Link>
                </div>
                <div className="col-2">
                    <Link className='btn btn-dark' to='admin'>
                        Administrador
                    </Link>
                </div>
            </div>
        </div>
    )
}

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

const Principal = () => {
    return (
        <Fragment>       
            <div>
                <nav className='nav'>
                    <a href='/' className='site-title'>
                        CETPRO
                    </a>
                    <ul>
                        <li className='nav'>
                            <a href="nosostros">Nosotros</a>
                        </li>
                        <li>
                            <a href="/sedes">Nuestras Sedes</a>
                        </li>
                        <li>
                            <a href="/especialidades">Especialidades</a>
                        </li>
                        <li>
                            <a href="/contactenos">Contáctenos</a>
                        </li>
                        <li>
                            <a href="/login">Iniciar sesion</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/mentores'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Ir a mentores</Link>
                    </div>
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/mentorizados'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Ir a mentorizados</Link>
                    </div>
                                        
                </div>

            </div>


        </Fragment>
    );
}

export default Principal;
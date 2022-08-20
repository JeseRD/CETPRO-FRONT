import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"
import imageInferior from './images/image_inferior.PNG';

const Row = ({ children }) => <div className="row">{children}</div>;

const RowMax = ({ children }) => <div className="rowMax">{children}</div>;

const RowLateral = ({ children }) => <div className="rowLateral">{children}</div>;

const Column = ({ children }) => <div className="col">{children}</div>;

const Principal = () => {
    return (
        <Fragment>       
            <header>              
                    <nav className='nav'>
                        <a href='/' className='site-title'>
                            CETPRO
                        </a>
                        <ul>
                            <li className='nav'>
                                <a href="https://www.cetproperu.edu.pe/index.php/nosotros">Nosotros</a>
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
            </header>
            
            <div id="zonePic1">

                <img src={imageInferior} ></img>

            </div>


        </Fragment>
    );
}

export default Principal;
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo_cetpro.jpg';


import "./styles.css"

const Row = ({ children }) => <div className="row">{children}</div>;

const Column = ({ children }) => <div className="col">{children}</div>;

const Box = ({ color }) => (
  <div className="box" style={{ backgroundColor: color }}></div>
);

const Login = () => {
    return (
        <div id="login">
                
                    <img id="img_logo" src={logo} ></img>

                        <div id="loginDiv">
                            
                            <form >
                                <h1>
                                    <br/>Registro
                                </h1>
                                <label>Usuario</label><br/>
                                <input id="inputForm" type="text"></input><br/>
                                <label>Contraseña</label><br/>
                                <input type="password"></input><br/><br/>
                                    <div >
                                        <Link to={'/sesionadmin'} className="btn btn-success text-uppercase py-2 px-5">Iniciar Sesion</Link>
                                    </div>
                            </form>
                        </div>
 
        </div>
        
    );
}
export default Login;
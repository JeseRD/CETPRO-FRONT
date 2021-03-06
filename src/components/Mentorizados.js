import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Mentorizados = ({mentorizados}) => {

    if(mentorizados.length === 0) return null;

    return (
        <Fragment>
            <h1 className="my-5">Mostrando mentorizados...</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    
                    <div className="col-md-12 mx-auto">
                        <div className="list-group">
                            <h1>Nombres---------------------------Objetivos--------------------------------Ciclo</h1>
                            {mentorizados.map(mentorizado => (
                                <a key={mentorizado._id} className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3  className="mb-3">{mentorizado.nombre}</h3>
                         
                                        <h3 className="nivel">
                                            {mentorizado.nivel}
                                        </h3>
                                    </div>

                                    <p className="mb-0">
                                        {mentorizado.perfiles[0]}
                                    </p>
                                    <p className="mb-0">
                                        {mentorizado.perfiles[1]}
                                    </p>
                                    <p className="mb-0">
                                        {mentorizado.perfiles[2]}
                                    </p>
                                
                                    <div className="contacto py-3 col-12 mb-5 d-flex justify-content-center" >                                        
                                        
                                        <table class="default">
         
                                                <tr>
                                                    <th>Obejtivos propuestos durante la ??ltima sesion</th>
                                                </tr>

                                                <tr>
                                                    <td>{mentorizado.objetivos[0]}</td>
                                                </tr>
                                                <tr>
                                                    <td>{mentorizado.objetivos[1]}</td>
                                                </tr>
                                                <tr>
                                                    <td>{mentorizado.objetivos[2]}</td>
                                                </tr>
                                        
                                        </table>
                                    </div>

                                    <div className="contacto py-3">
                                        <p>{mentorizado.competencias[0]}</p>
                                        <p>{mentorizado.competencias[1]}</p>
                                        <p>{mentorizado.competencias[2]}</p>
                                    </div>
                                
                                   <Link to={`/modificar-mentorizado/${mentorizado._id}`} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Actualizar</Link>
                                        
                                   
                                </a>
                                
                            ))}
                        </div>
                    </div>
                </div>

            </div>


        </Fragment>
    );
}

export default Mentorizados;
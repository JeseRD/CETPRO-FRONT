import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Mentores = ({mentores}) => {

    if(mentores.length === 0) return null;

    console.log(mentores);

    return ( 
        <Fragment>
            <h1 className="my-5">Administrador de Mentores</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <div class="btn-group btn-group-justified">
                            <Link to={'/nuevo-mentor'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Nuevo</Link>
                            <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <h1>Nombres----------------------------------------Ciclo</h1>
                            {mentores.map(mentor => (
                                <a key={mentor._id} className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3  className="mb-3">{mentor.nombre}</h3>
                                        <small className="nivel">
                                            {mentor.nivel}
                                        </small>
                                    </div>

                                    
                                </a>
                                
                            ))}
                        </div>
                    </div>
                </div>

            </div>


        </Fragment>
        
    );
}

export default Mentores;
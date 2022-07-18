import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Principal = () => {
    return (
        <Fragment>
            <h1 className="my-5">PAGINA PRINCIPAL</h1>

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
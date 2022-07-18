import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import clienteAxios from '../config/axios';

const ModificarMentorizado  = ({modificarMentorizado}, props) => {
 
    //OBSERVER PATTERN
    // Generar state como objeto
    const [nuevo,guardarnuevo] = useState({


        competencias: [],
        nivel: 0,
        objetivos: []
        
    })

    const [nuevoObjetivo,guardarnuevoObjetivo] = useState("")
    const [nuevoArrayObjetivo,guardarnuevoArrayObjetivo] = useState([])
    
    const [nuevaCompetencia,guardarnuevaCompetencia] = useState("")
    const [nuevoArrayCompetencia,guardarnuevoArrayCompetencia] = useState([])

    // Leyendo los datos del formulario

    const actualizarStateNivel = e => {
        guardarnuevo({
            ...nuevo,
            nivel : e.target.value
        })
    }


    ////////////////////////////////////////////////////////////////////////

    const actualizarStateCompetencias = e => {
        guardarnuevaCompetencia(e.target.value)
        
    }

    const actualizarStateArrayCompetencias = e => {
        guardarnuevoArrayCompetencia(nuevoArrayCompetencia => [...nuevoArrayCompetencia,nuevaCompetencia])
    }

        const StateCompetencias = () => {
            guardarnuevo({
                ...nuevo,
                competencias : nuevoArrayCompetencia
            })
        }
///////////////////////////////////////////////////////////////////////////

    const actualizarStateObjetivos = e => {
        guardarnuevoObjetivo(e.target.value)
        
    }

    const actualizarStateArrayObjetivos = e => {
        guardarnuevoArrayObjetivo(nuevoArrayObjetivo => [...nuevoArrayObjetivo,nuevoObjetivo])
    }

        const StateObjetivos = () => {
            guardarnuevo({
                ...nuevo,
                objetivos : nuevoArrayObjetivo
            })
        }
    ///////////////////////////////////////////////////////////////////////////


    const guardarCambios = e => {
        e.preventDefault();

        clienteAxios.put(`/Mentorizado/${modificarMentorizado._id}`, nuevo)
            .then(respuesta => {
                console.log(respuesta);
              
            })
    }

    return (
        <Fragment>
            <h1>Modificando datos de {modificarMentorizado.nombre}</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <form
                            onSubmit={guardarCambios}
                            className="bg-white p-5 bordered">                                                                                


                            <div className="form-group">
                                <label htmlFor="competencias">Competencias</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="competencia" 
                                    name="competencia" 
                                    placeholder=""                                     

                                    onChange={actualizarStateCompetencias}                             
                                    onBlur={actualizarStateArrayCompetencias}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="competencia" 
                                    name="competencia" 
                                    placeholder="" 
                                    onChange={actualizarStateCompetencias}
                                    onBlur={actualizarStateArrayCompetencias}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="competencia" 
                                    name="competencia" 
                                    placeholder=""
                                    onChange={actualizarStateCompetencias} 
                                    onBlur={actualizarStateArrayCompetencias}
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="Objetivos">Nuevos objetivos planteados...</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="objetivo" 
                                    name="objetivo" 
                                    placeholder=""
                                    onFocus={StateCompetencias}
                                    onChange={actualizarStateObjetivos}
                                    onBlur={actualizarStateArrayObjetivos} 
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="objetivo" 
                                    name="objetivo" 
                                    placeholder=""
                                    onChange={actualizarStateObjetivos} 
                                    onBlur={actualizarStateArrayObjetivos}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="objetivo" 
                                    name="objetivo" 
                                    placeholder=""
                                    onChange={actualizarStateObjetivos}
                                    onBlur={actualizarStateArrayObjetivos} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="nivel">Nivel</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="nivel" 
                                    name="nivel" 
                                    placeholder=""
                                    onFocus={StateObjetivos}
                                    onInput={actualizarStateNivel}
                                />
                            </div>



                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Guardar cambios"  />
                        </form>

                    </div>
                </div>
            </div>

        </Fragment>
    );
} 

export default withRouter(ModificarMentorizado) ;
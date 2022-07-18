import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import clienteAxios from '../config/axios';

const NuevoMentor = (props) => {

    // Generar state como objeto
    const [nuevo,guardarnuevo] = useState({
        nombre: '',
        perfiles:  [],
        competencias: [],
        mentorizados_id: [],
        nivel: 0
    })

    const [nuevoPerfil,guardarnuevoPerfil] = useState("")
    const [nuevoArrayPerfil,guardarnuevoArrayPerfil] = useState([])
    
    const [nuevaCompetencia,guardarnuevaCompetencia] = useState("")
    const [nuevoArrayCompetencia,guardarnuevoArrayCompetencia] = useState([])

    const [nuevoID,guardarnuevoID] = useState(0)
    const [nuevoArrayID,guardarnuevoArrayID] = useState([])

    // Leyendo los datos del formulario

    const actualizarState = e => {
        guardarnuevo({
            ...nuevo,
            [e.target.name] : e.target.value
        })
    }
    
    /////////////////////////////////////////////////////////////////
    const actualizarStatePerfiles = e => {
        guardarnuevoPerfil(e.target.value)

    }

    const actualizarStateArrayPerfiles = e => {
        guardarnuevoArrayPerfil(nuevoArrayPerfil => [...nuevoArrayPerfil,nuevoPerfil])
    }

        const StatePerfiles = () => {
            guardarnuevo({
                ...nuevo,
                perfiles : nuevoArrayPerfil
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


    const actualizarStateMentorizados = e => {
        guardarnuevoID(e.target.value)
        
    }

    const actualizarStateArrayID = e => {
        guardarnuevoArrayID(nuevoArrayID => [...nuevoArrayID,nuevoID])
    }

    const StateID = () => {
        guardarnuevo({
            ...nuevo,
            mentorizados_id : nuevoArrayID
        })
    }
//////////////////////////////////////////////////////////////////////////


    const crearnuevoMentor = e => {
        e.preventDefault();

        clienteAxios.post('/Mentor', nuevo)
            .then(respuesta => {
                console.log(respuesta);

                props.guardarConsultarMentores(true);
                //redireccionar
                props.history.push('/')
              
            })
    }
    


    return(
        <Fragment>
            <h1 className="my-5">Crear nueva mentor</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <form
                            onSubmit={crearnuevoMentor} 
                            className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre mentor</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="nombre" 
                                    name="nombre" 
                                    placeholder="Nombre mentor" 
                                    onInput={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="perfiles">Perfil</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="perfil" 
                                    name="perfil" 
                                    placeholder=""
                                    onChange={actualizarStatePerfiles}
                                    onBlur={actualizarStateArrayPerfiles}
                                    
                                />
                            </div>



                            <div className="form-group">
                                <label htmlFor="competencias">Competencias</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="competencia" 
                                    name="competencia" 
                                    placeholder="" 
                                    onFocus={StatePerfiles}

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
                                <label htmlFor="mentorizados_id">ID de los mentorizados</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="mentorizado" 
                                    name="mentorizado" 
                                    placeholder=""
                                    onFocus={StateCompetencias}
                                    onChange={actualizarStateMentorizados}
                                    onBlur={actualizarStateArrayID} 
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="mentorizado" 
                                    name="mentorizado" 
                                    placeholder=""
                                    onChange={actualizarStateMentorizados} 
                                    onBlur={actualizarStateArrayID}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="mentorizado" 
                                    name="mentorizado" 
                                    placeholder=""
                                    onChange={actualizarStateMentorizados}
                                    onBlur={actualizarStateArrayID} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mentorizados_id">Ciclo</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="nivel" 
                                    name="nivel" 
                                    placeholder=""
                                    onFocus={StateID}
                                    onInput={actualizarState}
                                />
                            </div>



                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Mentor"  />
                        </form>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default withRouter(NuevoMentor);
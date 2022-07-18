
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';
// Componentes
import Principal from './components/Principal';
import Mentores from './components/Mentores';
import Mentorizados from './components/Mentorizados';
import Hoja from './components/Hoja';
import NuevoMentor from './components/nuevoMentor';
import ModificarMentorizado from './components/modificarMentorizado';


function App() {

  //State de la app
  const [mentor, guardarMentores] = useState([]);
  const [mentorizado, guardarMentorizados] = useState([]);

  const [consultarMentores, guardarConsultarMentores] = useState(true);
  const [consultarMentorizado, guardarConsultarMentorizados] = useState(true);

  
  useEffect( () => {
    if(consultarMentores) {
      const consultarAPImentores = () => {
        clienteAxios.get('/mentores')
          .then(respuesta => {
            // colocar en el state el resultado
              guardarMentores(respuesta.data);
            // guardar consulta
            guardarConsultarMentores(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
      consultarAPImentores();
    }

    if(consultarMentorizado) {
      const consultarAPImentorizados = () => {
        clienteAxios.get('/mentorizados')
          .then(respuesta => {
            // colocar en el state el resultado
            guardarMentorizados(respuesta.data);
            //guardar consulta
            guardarConsultarMentorizados(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
      consultarAPImentorizados();
    }
    
    
  }, [consultarMentores,consultarMentorizado] );

  return (
    <Router>
      <Switch>
        <Route 
          exact path="/"
          component={Principal}
        />
        <Route 
          exact path="/mentores"
          component={() => <Mentores mentores={mentor} />}
        />

        <Route 
          exact path="/mentorizados"
          component={() => <Mentorizados mentorizados={mentorizado} />}
        />
        
        <Route 
          exact path="/modificar-mentorizado/:id"
          render={(props) => {
            const modificarMentorizado = mentorizado.filter(modificar => modificar._id === props.match.params.id)
            //console.log(modificarMentorizado);
            return (
              <ModificarMentorizado modificarMentorizado={modificarMentorizado[0]} guardarConsultarMentorizados={true}/>
            )
          }}
        />

        <Route 
          exact path="/nuevo-mentor"
          component={() => <NuevoMentor guardarConsultarMentores={guardarConsultarMentores} />}
        />

     
      </Switch>
    </Router>
  );
}

export default App;

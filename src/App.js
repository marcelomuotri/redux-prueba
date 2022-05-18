import React from 'react';


/* import { Counter } from './features/counter/Counter'; */
import './App.css';
import Contador from './app/components/Contador';
import Prueba from './app/components/Prueba';
import Tabla from './app/components/Tabla';
import Crud from './app/components/Crud';


function App() {


  return (
    <div className="App">
      <div>
        <Prueba />
        <Tabla />
        <Contador/>
        <Crud/>
       
      </div>
    </div>
  );
}

export default App;


// Components
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario'; //index
import Time from './components/Time/Time'; // no index, Time.js

// ------- Main -------
function App() {

  const [colaboradores, setColaboradores] = useState('');

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        <Time nome="Programação"/>
        <Time nome="Front-End"/>
        <Time nome="Data Sciense"/>
        <Time nome="DevOps"/>
        <Time nome="UX e Design"/>
        <Time nome="Mobile"/>
        <Time nome="Inovação e Gestão"/>
    </div>
  );
}

export default App;

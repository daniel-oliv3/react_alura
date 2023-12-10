
// Components
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';

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
    </div>
  );
}

export default App;

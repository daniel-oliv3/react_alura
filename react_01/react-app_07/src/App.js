
// Components
import Banner from './components/Banner/Banner';
import CampoTexto from './components/CampoTexto/CampoTexto';

// ------- Main -------
function App() {
  return (
    <div className="App">
        <Banner />
        <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;

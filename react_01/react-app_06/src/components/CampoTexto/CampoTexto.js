import './CampoTexto.css';


// ------- Component -------
const CampoTexto = () => {
  return (
    <div className="campo-texto">
        <label>Nome</label>
        <input type="text" placeholder="Digite o seu nome" />
    </div>
  )
}

export default CampoTexto;
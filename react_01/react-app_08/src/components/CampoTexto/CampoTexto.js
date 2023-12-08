import './CampoTexto.css';


// ------- Component -------
const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input type="text" placeholder={placeholderModificado} />
    </div>
  )
}

export default CampoTexto;
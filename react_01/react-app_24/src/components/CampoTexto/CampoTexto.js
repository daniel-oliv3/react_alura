import './CampoTexto.css';


// ------- Component -------
const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  // let valor = '';
  let valor = 'Daniel Oliveira';

  // --- função ---
  const aoDigitado = (evento) => {
    valor = evento.target.value;
    // console.log(evento.target.value);
    console.log(valor);
  }

  return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input value={valor} type="text" onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
    </div>
  )
}

export default CampoTexto;
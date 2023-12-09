// import { useState } from 'react';
import './CampoTexto.css';


// ------- Component -------
const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  // const [valor, setValor] = useState('Daniel Oliveira');

  // --- função ---
  const aoDigitado = (evento) => {
    // setValor(evento.target.value);
    // console.log(valor);
    props.aoAlterado(evento.target.value);
  }

  return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
    </div>
  )
}

export default CampoTexto;
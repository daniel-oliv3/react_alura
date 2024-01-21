import React from 'react';
import './CampoTexto.css';

interface CampoTextoProps {
  aoAlterado: (valor: string) => void
  placeholder: string
  label: string
  valor: string
  obrigatorio: boolean
}

// ------- Component -------
const CampoTexto = (props: CampoTextoProps) => {
  const placeholderModificado = `${props.placeholder}...`;

  // --- função ---
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(evento.target.value);
  }

  return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input 
          value={props.valor} 
          onChange={evento => aoDigitado} 
          required={props.obrigatorio} 
          placeholder={placeholderModificado}
        />
    </div>
  )
}

export default CampoTexto;
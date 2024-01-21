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
const CampoTexto = ({ aoAlterado, label, obrigatorio, placeholder, valor }: CampoTextoProps) => {
  const placeholderModificado = `${placeholder}...`;

  // --- função ---
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  }

  return (
    <div className="campo-texto">
        <label>{label}</label>
        <input 
          value={valor} 
          onChange={evento => aoDigitado} 
          required={obrigatorio} 
          placeholder={placeholderModificado}
        />
    </div>
  )
}

export default CampoTexto;
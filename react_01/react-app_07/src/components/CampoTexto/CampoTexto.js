import './CampoTexto.css';


// ------- Component -------
const CampoTexto = (props) => {
  // console.log(props);
  // console.log(props.label);

  // exp2
  // const placeholderModificado = `${props.placeholder}...`;

  return (
    <div className="campo-texto">
        <label>{props.label}</label>
        {/* <input type="text" placeholder={props.placeholder} /> */}
        
        {/* exp2 */}
        {/* <input type="text" placeholder={placeholderModificado} /> */}
        <input placeholder={`${props.placeholder}...`} />
    </div>
  )
}

export default CampoTexto;
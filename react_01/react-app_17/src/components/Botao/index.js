import './Botao.css';

// ------- Botão -------
const Botao = (props) => {
  return (
    <button className='botao'>
        {/* {props.props} */}
        {props.children}
    </button>
  )
}

export default Botao;
import './Botao.css';

// ------- Botão -------
const Botao = (props) => {
  return (
    <button className='botao'>
        {props.children}
    </button>
  )
}

export default Botao;
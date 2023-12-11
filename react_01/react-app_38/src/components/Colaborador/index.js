import './Colaborador.css';



// ------- Component -------
const Colaborador = ({ nome, imagem, cargo}) => { // { desestruturação }
  return (
    <div className='colaborador'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}

export default Colaborador;



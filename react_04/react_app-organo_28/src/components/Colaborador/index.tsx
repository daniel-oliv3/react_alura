import './Colaborador.css';

interface ColaboradorProps {
    nome: string;
    imagem: string;
    cargo: string;
    corDeFundo: string;
    time?: string;
}


// ------- Component -------
const Colaborador = ({ nome, imagem, cargo, corDeFundo }: ColaboradorProps) => {
  return (
    <div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
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



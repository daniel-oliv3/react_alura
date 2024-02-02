import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Colaborador from '../Colaborador';
import './Time.css';

interface TimeProps {
  corPrimaria: string
  corSecundaria: string
  nome: string
  colaboradores: IColaborador[]
}


// ------- Component -------
const Time = (props: TimeProps) => {
  const css = { backgroundColor: props.corSecundaria }

  return (
    (props.colaboradores.length > 0) ? <section className='time' style={css}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className='colaboradores'>
          {props.colaboradores.map( colaborador => 
            <Colaborador 
              corDeFundo={props.corPrimaria} 
              key={colaborador.nome} 
              nome={colaborador.nome} 
              cargo={colaborador.cargo} 
              imagem={colaborador.imagem} 
            /> 
          )}
        </div>
    </section>
    : <></>
  )
}

export default Time;
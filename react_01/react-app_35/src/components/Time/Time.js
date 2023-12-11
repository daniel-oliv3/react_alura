import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

// ------- Component -------
const Time = (props) => {

  const css = { backgroundColor: props.corSecundaria }

  return (
    <section className='time' style={css}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <Colaborador />
        <Colaborador />
    </section>
  )
}

export default Time;
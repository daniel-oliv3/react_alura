import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';


// ------- Component -------
const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Sciense',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  return (
    <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label="Time" itens={times}/>
        </form>
    </section>
  )
}

export default Formulario;
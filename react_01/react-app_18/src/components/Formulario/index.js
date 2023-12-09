import Botao from '../Botao';
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

  // --- Função ---
  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");
  }

  return (
    <section className="formulario">
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
            <Botao >
                Criar Card
            </Botao>
        </form>
    </section>
  )
}

export default Formulario;
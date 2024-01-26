import { useState } from 'react';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  times: string[]
}


// ------- Component -------
const Formulario = (props: FormularioProps) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  // --- Função ---
  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
    <section className="formulario">
        <form onSubmit={evento => aoSalvar(evento)}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
              obrigatorio={true} 
              label="Nome" 
              placeholder="Digite o seu nome"
              valor={nome}
              aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
              obrigatorio={true} 
              label="Cargo" 
              placeholder="Digite o seu cargo"
              valor={cargo}
              aoAlterado={valor => setCargo(valor)}
            />
            <CampoTexto
              // obrigatorio={false}  
              label="Imagem" 
              placeholder="Digite o endereço da imagem"
              valor={imagem}
              aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
              obrigatorio={true} 
              label="Time" 
              itens={props.times}
              valor={time}
              aoAlterado={valor => setTime(valor)}
            />
            <Botao >
                Criar Card
            </Botao>
        </form>
    </section>
  )
}

export default Formulario;
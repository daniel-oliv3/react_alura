##
### React: Desenvolvimento com JavaScript
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


##
### Parte 1
##


### 1 - Apresentação

**Apresentação**

- Documentação
    - Link: https://pt-br.legacy.reactjs.org/
    - Node: https://nodejs.org/en

- criar o projeto react
```
npx create-react-app react-app_01
```

- Roda o projeto
```
npm start
```

- Localhost:
    - Link: http://localhost:3000/

- Exemplo:
    - react-app_01


### 2 - Preparando o ambiente

**Preparando o ambiente**

Este curso é indicado para aqueles que já conhecem HTML, CSS e sabem como manipular os elementos do DOM com JavaScript.

- Node.js

Para conseguir acompanhar a criação da aplicação em React, é necessário que você tenha o Node instalado. Você pode baixá-lo aqui

- Windows

Para instalar o Node, clique no link do Node.js e baixe a versão LTS (versão recomendada).

- Node:
    - Link: https://nodejs.org/en


Para verificar se foi instalado corretamente, abra o terminal e escreva `node -v` ou `node --version`.


- Figma
    - Projeto: https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?type=design&node-id=134-128&mode=design


- Exemplo:
    - react-app_02



### 3 - Olá mundo

**Olá mundo**

- Exemplo:
    - react-app_03


### 4 - Primeiro componente Banner

**Primeiro componente Banner**

- Exemplo:
    - react-app_04


### 5 - Explorando o projeto

**Explorando o projeto**

- Exemplo:
    - react-app_05


### 6 - Campo de texto

**Campo de texto**

- Exemplo:
    - react-app_06


### 7 - Parâmetros de componente

**Parâmetros de componente**

- Exemplo:
    - react-app_07


### 8 - Criando o formulário

**Criando o formulário**

- Exemplo:
    - react-app_08


### 9 - Para saber mais: componentes funcionais

**Para saber mais: componentes funcionais**

Durante o curso, nós vamos trabalhar apenas com componentes funcionais. Essa é a forma mais simples de criar um componente React.

Mas ela não é a única forma possível. Podemos criar componentes utilizando Classes do ES6.


Vamos entender um pouco mais as diferenças?

Aqui vai um componente funcional:

```js
function BoasVindas(props) {
  return <h1>Olá, {props.nome}</h1>;
}
```

O mesmo componente, baseado em classes, seria:

```js
class BoasVindas extends React.Component {
  render() {
    return <h1>Olá, {this.props.nome}</h1>;
  }
}
```
Além da sintaxe, existem diversas diferenças. Se você quiser ir mais fundo no conceito de componentes baseado em classes, a documentação é a nossa melhor fonte.

- Componentes e Props

- Link: https://pt-br.legacy.reactjs.org/docs/components-and-props.html

- Exemplo:
    - react-app_09

### 10 - Entendendo o retorno em um componente React

**Entendendo o retorno em um componente React**

Hoje é um grande dia! Depois de completar o curso "React: desenvolvendo com JavaScript" e construir alguns projetos para adquirir prática, você finalmente recebeu uma ligação para uma entrevista de emprego para uma vaga de desenvolvedor(a) júnior React. Durante a entrevista, o(a) recrutador(a) quer verificar sua compreensão sobre os componentes React e JSX. Eles te fornecem um trecho de código e pedem para identificar o que está errado e sugerir uma correção.

```js
function Botao() {
  return {
    <button>Click me</button>
  };
}
```

- Qual é o erro no código acima e como você corrigiria-o?

- **A**: - O JSX precisa ser escrito em uma linha, não em várias.
    - Não há problema em escrever JSX em várias linhas. Na verdade, é uma prática comum para melhorar a legibilidade do código.

- **B**: - Deveria ser usada uma arrow function em vez de uma função normal.
    - Não existe uma necessidade de usar uma arrow function em vez de uma função normal neste caso. As duas formas são aceitas pelo React.

- **C**: - A função Botao está retornando um objeto, quando deveria estar retornando diretamente o JSX.
    - Alternativa correta: No React, um componente deve retorrar diretamente o JSX. O código corrigido ficaria assim:

```js
// resposta correta
function Botao() {
  return (
    <button>Click me</button>
  );
}
```

- **D**: - A tag `<button>` deve ser substituída por `<Button>`
    - A tag `<button>` não é o problema neste snippet. Realmente ela é a tag padrão para criar um botão em JSX/HTML.

- Exemplo:
    - react-app_10


### 11 - Para saber mais: Node.JS

**Para saber mais: Node.JS**

PRÓXIMA ATIVIDADE

Sabemos que mergulhos mais fundos vem com o tempo, mas nesse momento é muito importante entendermos o que é o Node.JS.
Tanto o Node quanto o NPM vão fazer parte do nosso dia a dia enquanto pessoas desenvolvedoras frontend.

- Exemplo:
    - react-app_11



### 12 - Faça como eu fiz: primeiros componentes

**Faça como eu fiz: primeiros componentes**

Chegou a sua hora de brilhar.

Crie o projeto React, remova os itens que não serão utilizados e implemente os seguintes componentes:

- Banner
- CampoTexto

Opinião do instrutor

Como foi a experiência de criar seus primeiros componentes?

Se precisar de ajuda, aqui vai o gabarito:

- Banner/index.js

```js
import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )
}
```

- CampoTexto/index.js

```js
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto
```

- Exemplo:
    - react-app_12


### 13 - O que aprendemos?

**O que aprendemos?**

- Criamos um novo projeto React;
- Criamos componentes funcionais;
- Estilizamos componentes com CSS;
- Analisamos as dependências do projeto;
- Analisamos os comandos disponíveis no package.json.

- Exemplo:
    - react-app_13

### 14 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react-app_14


##
### Parte 2
##


### 15 - Um framework declarativo

**Um framework declarativo**

- Exemplo:
    - react-app_15


### 16 - Lista dos times

**Lista dos times**

- Exemplo:
    - react-app_16


### 17 - Criando o botão

**Criando o botão**

- Exemplo:
    - react-app_17



### 18 - Escutando eventos

**Escutando eventos**

- Exemplo:
    - react-app_18


### 19 - Para saber mais: eventos HTML

**Para saber mais: eventos HTML**

No componente `Formulario`, nós aguardamos pelo evento `onSubmit`. Assim, podemos aproveitar a validação nativa do HTML dos inputs que são obrigatórios.

Mas esse não é nem de longe o único evento disponível!

Aqui, você vizualiza os eventos HTML disponíveis atualmente (em inglês).

- Event reference
    - Link: https://developer.mozilla.org/en-US/docs/Web/Events

Mas fique atento que, no universo React, os eventos são nomeados com camelCase, logo: `onclick` vira `onClick`.

- CamelCase
    - Link: https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case

Quer saber ainda mais? Se liga aqui.

- Manipulando eventos
    - Link: https://pt-br.legacy.reactjs.org/docs/handling-events.html

- Exemplo:
    - react-app_19






### 20 - forEach vs map

**forEach vs map**

Durante o curso, nós aprendemos a renderizar listas de elementos dentro dos componentes React. Falamos sobre a diferença entre o `.map` e o `.forEach`. Por que utilizamos o `.map`?

- **A**: Porque o `.map` retorna um novo array de elementos, baseado no que retornamos na função passada por callback
    - lternativa correta! Exatamente isso! Para dar um mergulho mais fundo, se liga nesse vídeo do Dev Soutinho.
    - Link: https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map

- **B**: Utilizamos o `.map` apenas por opção nossa, pois podemos obter o mesmo resultado com o `.forEach`.


- Exemplo:
    - react-app_20



### 21 - Faça como eu fiz: trabalhando com listas

**Faça como eu fiz: trabalhando com listas**

Chegou a sua hora de brilhar.

Primeiro, ajuste o `CampoTexto` para receber as props relacionadas. Depois, crie o componente `ListaSuspensa` para permitir que o usuário selecione o time do colaborador.

Em caso de dúvidas, não deixe de usar o fórum.

- Opinião do instrutor

Como foi a experiência de trabalhar com props e listas?

Se precisar de ajuda, aqui vai o gabarito:


- CampoTexto/index.js

```js
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    let valor = 'Guilherme Silveira'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto

```

- ListaSuspensa/index.js

```js
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa
```

- Exemplo:
    - react-app_21



### 22 - O que aprendemos?

**O que aprendemos?**

Nessa aula:

Aprendemos como passar `props` para um componente;
Renderizamos listas com o `.map`;
Trabalhamos com elementos aninhados usando a `prop` `children`;
Ouvimos elementos disparados pelo DOM: o `onSubmit` do nosso `form`.

- Exemplo:
    - react-app_22




##
### Parte 3
##



### 23 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react-app_23

### 24 - Manipulando o input do usuário

**Manipulando o input do usuário**

- Exemplo:
    - react-app_24


### 25 - Controlando o estado

**Controlando o estado**

- Exemplo:
    - react-app_25



### 26 - Cadastrando colaboradores

**Cadastrando colaboradores**

- Exemplo:
    - react-app_26




### 27 - Usando o estado?

**Usando o estado?**

A Isa, a nova frontend do time, está com dúvidas sobre o useState. Ela te chamou e questionou:
Qual a diferença entre controlar uma variável com o useState e criar e atribuir normalmente uma let?
Assinale abaixo a alternativa que melhor responde a essa pergunta.

- **Selecione uma alternativa**

- **A**: Sempre que queremos que o componente reaja a alguma alteração no valor de uma variável e se renderize novamente, precisamos indicar isto utilizando o useState. Do contrário, o valor vai ser alterado mas o DOM não será atualizado.
    - Alternativa correta! Exatamente isso! Para ir mais fundo nesse hook
    - **API de Referência dos Hooks**
    - Link: https://pt-br.reactjs.org/docs/hooks-reference.html#functional-updates

- **B**: Não há nenhuma diferença. O resultado final é o mesmo.

- Exemplo:
    - react-app_27



### 28 - Para saber mais: Stateless VS Statefull

**Para saber mais: Stateless VS Statefull**

React tem duas abordagens diferentes para lidar com inputs de formulários.

Um elemento de input de formulário cujo valor é controlado pelo React é chamado de componente controlado (statefull em inglês). Quando o usuário insere dados em um componente controlado, o evento que manipula essa alteração é disparado e o seu código decide se o input é válido (ou seja, renderizado com o valor atualizado). Se você não re-renderizar o elemento de formulário, permanecerá inalterado.

Um componente não controlado (stateless em inglês) funciona como um elemento de formulário fora do React. Quando um usuário insere dados em um campo de formulário (um input box, dropbox, etc), a informação atualizada é refletida sem necessidade do React fazer nada. No entanto, isso também significa que você não pode forçar o campo a ter um certo valor.


- Exemplo:
    - react-app_28


### 29 - Faça como eu fiz: controlando os inputs

**Faça como eu fiz: controlando os inputs**

Faça o controle dos valores dos `inputs` utilizando o `value` e o `onChange`.

Depois, controle o estado do formulário utilizando o `useState`.

Por fim, desenvolva o comportamento do Formulário e receba os dados do novo colaborador no `App.js`.

- **Opinião do instrutor**

Como foi a experiência de trabalhar com componentes controlados?
E enviar funções como props?
Se precisar de ajuda, aqui vai o gabarito:

- CampoTexto/index.js

```js
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto
```

- Formulario/index.js

```js
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
```

- App.js

```js
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
```

- Exemplo:
    - react-app_29



### 30 - O que aprendemos?

**O que aprendemos?**

*Nessa aula, você aprendeu como*:
Controlar inputs utilizando `value` e `onChange`;
Gerenciar o estado de um componente, utilizando o `useState`;
Trabalhar com `props` que são funções.

- Exemplo:
    - react-app_30


##
### Parte 4
##


### 31 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react-app_31


### 32 - Criando o componente Time

**Criando o componente Time**

- Exemplo:
    - react-app_32


### 33 - Elevando a lista de times

**Elevando a lista de times**


- Exemplo:
    - react-app_33



### 34 - Refatorando código duplicado

**Refatorando código duplicado**


- Exemplo:
    - react-app_34


### 35 - Card de colaborador

**Card de colaborador**


- Exemplo:
    - react-app_35


### 36 - Mapeando os colaboradores

**Mapeando os colaboradores**

- Exemplo:
    - react-app_36


### 37 - Escondendo times vazios

**Escondendo times vazios**

- Exemplo:
    - react-app_37



### 38 - Renderização condicional

**Renderização condicional**

- Analise o componente a seguir:

```js
const MaiorDeIdade = ({ colaborador }) => {

    const idade = 19;

    return (<div>
        {idade >= 18 && <p>É maior de idade</p>}
        {idade < 18 && <p>Não é maior de idade</p>}
    </div>)
}

export default MaiorDeIdade
```

- O que será renderizado?

- A: `<p>É maior de idade</p>`
    - Alternativa correta! Exatamente isso! Usamos o operador && para retornar o segundo elemento da comparação.

- B: `<p>Não é maior de idade</p>`

- Exemplo:
    - react-app_38



### 39 - Para saber mais: Prop drilling

**Para saber mais: Prop drilling**

Prop drilling, em tradução livre, significa "vazamento de props", e acontece quando você passa uma ou mais props, do pai para o filho, o filho passa para o filho dele, e assim por diante. Lidar com esse prop drilling pode ser desafiador, pois em pouco tempo fica difícil para qualquer pessoa descobrir onde os dados são inicializados, atualizados e usados de fato.

Quer saber mais? Aqui tem um artigo mega bacana sobre os desafios de se lidar com esse tipo de cenário.

- Link: https://www.alura.com.br/artigos/prop-drilling-no-react-js

- Exemplo:
    - react-app_39


### 40 - Desafio: componente do rodapé

**Desafio: componente do rodapé**

Chegou a sua hora de brilhar.

Vamos construir o componente do rodapé, que precisa ser assim:

<p align="center">
  <img alt="...." src="./src/add.png" width="70%">
</p>

- Opinião do instrutor

Vamos então ao componente?

Lembre-se que existem várias formas se atingir o mesmo resultado, aqui segue o gabarito de uma delas:

- O rodapé:

```js
//src/componentes/Rodape/index.js

import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/facebook.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/twitter.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape
```

- E o seu CSS:

```css
/* src/componentes/Rodape/index.js */

.footer {
    background: #6278F7;
    color: #FFF;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer ul li {
    display: inline-block;
    margin-right: 32px;
}

.footer ul li:last-child {
    margin-right: 0;
}
```

Por fim, basta adicionar ao `App.js`

- Exemplo:
    - react-app_40






### 41 - O que aprendemos?

**O que aprendemos?**

- Nessa aula, você aprendeu como:
    - Manipular e transformar arrays de objetos;
    - Filtrar itens de um array;
    - Renderização condicional.


- Exemplo:
    - react-app_41










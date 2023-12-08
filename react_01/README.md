##
### React: Desenvolvimento com JavaScript
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


### 1 - Apresentação

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

- Exemplo:
    - react-app_03


### 4 - Primeiro componente Banner

- Exemplo:
    - react-app_04


### 5 - Explorando o projeto

- Exemplo:
    - react-app_05


### 6 - Campo de texto

- Exemplo:
    - react-app_06


### 7 - Parâmetros de componente

- Exemplo:
    - react-app_07


### 8 - Criando o formulário

- Exemplo:
    - react-app_08


### 9 - Para saber mais: componentes funcionais

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

Hoje é um grande dia! Depois de completar o curso "React: desenvolvendo com JavaScript" e construir alguns projetos para adquirir prática, você finalmente recebeu uma ligação para uma entrevista de emprego para uma vaga de desenvolvedor(a) júnior React. Durante a entrevista, o(a) recrutador(a) quer verificar sua compreensão sobre os componentes React e JSX. Eles te fornecem um trecho de código e pedem para identificar o que está errado e sugerir uma correção.

```js
function Botao() {
  return {
    <button>Click me</button>
  };
}
```

- Qual é o erro no código acima e como você corrigiria-o?

- A: - O JSX precisa ser escrito em uma linha, não em várias.
    - Não há problema em escrever JSX em várias linhas. Na verdade, é uma prática comum para melhorar a legibilidade do código.

- B: - Deveria ser usada uma arrow function em vez de uma função normal.
    - Não existe uma necessidade de usar uma arrow function em vez de uma função normal neste caso. As duas formas são aceitas pelo React.

- C: - A função Botao está retornando um objeto, quando deveria estar retornando diretamente o JSX.
    - Alternativa correta: No React, um componente deve retorrar diretamente o JSX. O código corrigido ficaria assim:

```js
// resposta correta
function Botao() {
  return (
    <button>Click me</button>
  );
}
```

- D - A tag `<button>` deve ser substituída por `<Button>`
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

- Criamos um novo projeto React;
- Criamos componentes funcionais;
- Estilizamos componentes com CSS;
- Analisamos as dependências do projeto;
- Analisamos os comandos disponíveis no package.json.

- Exemplo:
    - react-app_13

### 14 - Projeto da aula anterior

- Exemplo:
    - react-app_14


##
### Parte 2
##


### 15 - Um framework declarativo

- Exemplo:
    - react-app_15
















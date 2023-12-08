##
### React: Desenvolvimento com JavaScript
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


### 1 - Apresentação

- Documentação
    - Link: https://pt-br.legacy.reactjs.org/

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

















































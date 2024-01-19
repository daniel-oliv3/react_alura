##
### React: Migrando para TypeScript
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


##
### Parte 1 - TypeScript
##


### 1 - Apresentação

**Apresentação**

- Documentação
    - Link: https://pt-br.legacy.reactjs.org/
    - Node: https://nodejs.org/en

- criar o projeto react
```
npx create-react-app react_app-organo_01
```

- Roda o projeto
```
npm start
```

- Localhost:
    - Link: http://localhost:3000/



- Exemplo:
    - react_app-organo_01


### 2 - Preparando o ambiente

**Preparando o ambiente**

- Visual Studio Code:
    - Link: https://code.visualstudio.com/Download
- Google Chrome
    - Link: https://www.google.com/intl/pt-BR/chrome/

Olá!
É muito bom receber você neste curso.

Espero que seja uma experiência de aprendizado incrível e que possamos vencer todos os desafios juntos. Neste curso, vamos migrar uma aplicação React feita em JavaScript para TypeScript. Durante a migração, vamos conversar sobre vantagens, desvantagens e mitos sobre o TS.

Este curso é indicado para aqueles que já conhecem React com JavaScript e querem entender como a biblioteca funciona quando utilizamos TypeScript.

Para conseguir acompanhar a criação da aplicação em React, é necessário que você tenha o Node instalado. Você pode baixá-lo aqui.

Se precisar de mais detalhes sobre a instalação, você pode consultar esse artigo.

A versão utilizada do Node no curso foi a v16.13.2.

Além disso, você também vai precisar do Organo, projeto desenvolvido no curso React: desenvolvendo com JavaScript.

Você pode baixar ou clonar o projeto diretamente do GitHub.

Depois de baixar o projeto, lembre-se de rodar os seguintes comandos:


- Para baixar e instalar as dependências:

```
npm install
```

- Para iniciar a aplicação:
```
npm start
```
Agora sim, tudo pronto para começar! Basta abrir o projeto no seu editor de texto favorito e seguir para o próximo vídeo :)


- Exemplo:
    - react_app-organo_02


### 3 - Revisando o Organo

**Revisando o Organo**

- Dependências

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

- Exemplo:
    - react_app-organo_03


### 4 - Instalando as dependências

**Instalando as dependências**

- Dependências (tsconfig.json)

```
npx tsc --init
```

- Exemplo:
    - react_app-organo_04



### 5 - Gerando o tsconfig

**Gerando o tsconfig**

- habilitar no tsconfig (linha 16)
```json
"jsx": "react", 
```


- Exemplo:
    - react_app-organo_05



### 6 - Primeira migração

**Primeira migração**


- Exemplo:
    - react_app-organo_06



### 7 - Para saber mais: JSX.Element, ReactNode e ReactElement

**Para saber mais: JSX.Element, ReactNode e ReactElement**

Durante o nosso dia a dia de pessoa desenvolvedora front-end que trabalha com React nós vamos nos deparar, em algum momento, com esses três tipos de elementos.

Vamos entender, um pouquinho mais a fundo, qual a peculiaridade de cada um deles?

O ReactElement é um objeto com um tipo e props.

O ReactNode é um ReactElement, um ReactFragment, uma string, um number ou uma lista de ReactNodes, ou null, undefined ou boolean.

O JSX.Element é um ReactElement com o tipo genérico para props e type sendo any. Ele existe para permitir que outras bibliotecas implementem o JSX de seu próprio jeito customizado.

Pra já é importante que você saiba da existência dos três para saber qual é o melhor momento para utilizar cada um.

- Exemplo:
    - react_app-organo_07



### 8 - De olho no tsconfig.json

**De olho no tsconfig.json**




Durante essa aula, nós criamos o arquivo `tsconfig.json`. Vamos relembrar algumas de suas responsabilidades? Marque a alternativa a seguir que é verdadeira.

- Selecione uma alternativa

- A: Ele especifica opções do compilador necessárias para compilar o projeto.
`Isso aí! Exatamente! Inclusive nós geramos o arquivo base utilizando um script npx:`

```json
npx tsc --init
```

`Assim, temos já uma base grande de regras e configurações que podemos ligar e desligar de acordo com a necessidade do projeto.`

- B: É nele onde especificamos as dependências dos projetos.


- C: Ele define os comandos do npm disponíveis no projeto, por exemplo, o npm start.

- Exemplo:
    - react_app-organo_08


























































































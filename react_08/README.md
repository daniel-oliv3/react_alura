##
### 8 - React: desenvolvendo uma biblioteca de componentes
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


##
### Parte 1 - Preparando o terreno
##


### 1 - Apresentação

**Apresentação**

- Documentação
    - Link: https://pt-br.legacy.reactjs.org/
    - Node: https://nodejs.org/en
    
- StoryBook: 
    - Link: https://storybook.js.org/


- criar o projeto react
```
npx create-react-app alura-book_01
```

- Roda o projeto
```
npm start
```

- Localhost:
    - Link: http://localhost:3000/



- Exemplo:
    - react_book_01



### 2 - Preparando o ambiente

**Preparando o ambiente**

- Visual Studio Code:
    - Link: https://code.visualstudio.com/Download
- Google Chrome
    - Link: https://www.google.com/intl/pt-BR/chrome/
- Node JS (LTS)
    - Link: https://nodejs.org/en/


- Preparando o ambiente

É muito bom receber você neste curso.

Espero que seja uma experiência de aprendizado incrível e que possamos vencer todos os desafios juntos. Neste curso, vamos criar uma biblioteca de componentes. Isso mesmo!

Existem algumas bibliotecas prontas para uso, como por exemplo o Ant e o MUI, mas elas já possuem toda uma identidade visual.

- Link: https://ant.design/docs/react/introduce

Nesse curso, nós vamos criar e disponibilizar quatro componentes:

- Botão
- CampoTexto
- Card
-InputQuantidade

Mas não é só isso. Nós vamos publicar essa biblioteca no NPM. E, além disso, configurar uma Action no Github para, sempre que tivermos novos commits na branch principal, publicarmos automaticamente uma nova versão.

Este curso é indicado para aqueles que já possuem conhecimento em React e querem mergulhar ainda mais fundo nessa área.

Para conseguir acompanhar a criação da aplicação em React, é necessário que você tenha o Node instalado. Você pode baixá-lo aqui. A versão do node utilizada nas aulas foi a: v16.13.2.

- Projeto inicial

Nós vamos usar um set de ferramentas de compilação e versionamento, e pra isso, você pode clonar o projeto inicial do repositório no Github.

Depois de clonar o projeto, você precisa alterar dois campos do arquivo package.json:

"name": altere para um nome customizado. O valor atual é "ds-alurabooks-base" e esse valor precisa ser único, caso contrário a gente não consegue publicar no NPM.
"author": coloque o seu nome, afinal, é o seu pacote que vai ser publicado no fim do curso!
Nesse projeto, nós não vamos utilizar o npm, mas sim o yarn.

Caso você não tenha ele disponível, execute o comando:

```
npm i -g yarn
```

E, logo depois, o seguinte comando (lembre de entrar no diretório raiz do projeto antes):

```
yarn
```
Isso vai instalar todas as dependências do projeto e você vai estar pronto para começar a desenvolver!

Atenção!
Esse curso vai utilizar o Storybook na versão 6. Se você precisa trabalhar com a versão 7, dá uma olhada nessa formação de Next.js e Tailwind.

E antes de você começar, vou te dar um pequeno spoiler:

Esse curso está repleto de desafios e com dificuldades variadas. Todos eles têm um gabarito, mas para ter um bom proveito do conteúdo e praticar bastante e recomendo muito que você invista tempo neles.

Além disso, também deixei bastante material de apoio nas aulas, para que você se aprofunde em assuntos que não são o foco principal desse curso aqui.

Vamos começar? Vem comigo descobrir como é bacana publicar uma biblioteca no NPM e compartilhar com as pessoas que conhecemos.

- Figma:
    - Link: https://www.figma.com/file/dkGogcES2G1lwH8hwrF3E6/React%3A-Alura-Books?type=design&node-id=119-3145&mode=design&t=4iqYnOYRODShWZFi-0
- Github:
    - Link: https://github.com/viniciosneves/ds-alurabooks-base

- Exemplo:
    - react_book_02


### 3 - O primeiro componente

**O primeiro componente**

```

```

- Exemplo:
    - react_book_03



















































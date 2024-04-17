##
### 6 - React: escrevendo com Typescript
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


##
### Parte 1 - Criando o projeto
##


### 1 - Apresentação

**Apresentação**

- Documentação
    - Link: https://pt-br.legacy.reactjs.org/
    - Node: https://nodejs.org/en

- criar o projeto react
```
npx create-react-app react_studies_01
```

- Roda o projeto
```
npm start
```

- Localhost:
    - Link: http://localhost:3000/


**SRP: Single Responsability Principal**

- Exemplo:
    - react_studies_01



### 2 - Preparando o ambiente: Windows

**Preparando o ambiente: Windows**

- Visual Studio Code:
    - Link: https://code.visualstudio.com/Download
- Google Chrome
    - Link: https://www.google.com/intl/pt-BR/chrome/
- Node JS (LTS)
    - Link: https://nodejs.org/en/


- Exemplo:
    - react_studies_02


### 3 - Preparando o ambiente: Linux

**Preparando o ambiente: Linux**

Para preparar o ambiente, precisaremos ter algumas coisas instaladas no computador, sendo elas:

-   Nodejs:
    -   Para instalar o Node, abra o terminal e digite sudo apt install nodejs
    -   Para conferir se o download ocorreu corretamente, digite node -v ou node --version
    -   Link: https://nodejs.org/pt-br/
-    Git
    -   Para instalar o git, abra o terminal e digite sudo apt install git-all
    -   Para conferir se o download ocorreu corretamente, digite git --version
    -   Link: https://git-scm.com/download/linux
-   Visual Studio Code
    -   Entre no link e baixe a versão de Linux.
    -   Link: https://code.visualstudio.com/download

- Exemplo:
    - react_studies_03


### 4 - Preparando o ambiente: Mac

**Preparando o ambiente: Mac**

Para preparar o ambiente, precisaremos ter algumas coisas instaladas no computador e, para isso, utilizaremos um controle de pacotes para mac super útil chamado Homebrew. Caso não tenha ele instalado, só clicar no link e seguir o comando que ele descreve para o download. Após isso, faremos download das nossas dependências para rodar o projeto, sendo elas:

- homebrew: https://brew.sh/pt-br/

- Nodejs/npm
    - Para instalar o Node na sua máquina, clique no link e baixe a versão LTS (versão recomendada)
    - Para verificar se foi instalado corretamente, abra o terminal e escreva node -v ou node --
    - Node: https://nodejs.org/en/download/
- Git
    - Para instalar o git, abra o terminal e digite brew install git
    - Para verificar se o git foi instalado corretamente, abra o terminal e escreva git --version
    - Git: https://git-scm.com/download/mac
- Visual Studio Code
    - Entre no link e baixe a versão de Mac.
    - Vscode: https://code.visualstudio.com/download

Agora podemos começar!

- Exemplo:
    - react_studies_04




### 5 - Criando o projeto

**Criando o projeto**

- criar o projeto react (TypeScript)
```
npx create-react-app react_studies_05 --template typescript --use-npm 
```

- Roda o projeto
```
npm start
```

- Localhost:
    - Link: http://localhost:3000/

- Exemplo:
    - react_studies_05


### 6 - Inicializando nosso projeto

**Inicializando nosso projeto**


Quando trabalhamos com React, podemos criar o projeto do zero, adicionando todos os arquivos necessários para trabalhar com essa biblioteca, ou podemos utilizar um único comando chamado de Create React App.

Sabendo disso, quais os comandos corretos utilizados no terminal para:

- Criar um projeto React com Typescript utilizando npm com Create React App
- Entrar na pasta do projeto
- Rodar o projeto?

- Selecione uma alternativa

- A: npx create react app projeto -template typescript |
cd projeto | npm run project

- B: npx create react-app projeto -template typescript |
cd projeto/ | npm start

- C: npm create react-app projeto template --typescript |
cd projeto/ | npm run project

- D: npx create-react-app projeto template --typescript |
cd projeto/ | npm run project

- E: npx create react app projeto -template typescript |
cd projeto | npm start

- F: npx create-react-app projeto --template typescript
--use-npm | cd projeto | npm start

`Alternativa correta! O comando create-react-app projeto --template typescript cria o projeto com a linguagem TypeScript, o comando cd projeto entra na pasta desse projeto criado e o comando npm start roda o projeto.`


- Exemplo:
    - react_studies_06











### 7 - Faça como eu fiz: Criar um projeto typescript com CRA

**Faça como eu fiz: Criar um projeto typescript com CRA**


Execute o Create React App sem instalá-lo, criando um projeto chamado alura-studies com o template typescript e informando que o projeto usará o npm.


Opinião do instrutor

`npx create-react-app alura-studies --template typescript --use-npm`
Com esse comando, estamos informando várias coisas, sendo elas:

- npx
- O comando npx, diferente do comando npm, apenas executa um pacote, sem que precisemos instalá-lo na nossa máquina, como o create-react-app normalmente só é usado no começo para criar o projeto, o ideal é executar com npx pois isso fará com que você sempre execute a última versão do pacote.
- create-react-app
O nome do pacote que queremos executar.
- alura-studies
O nome do projeto que queremos, assim como o nome da pasta.
- --template typescript
O Create React App nos permite usar vários templates, tendo como sintaxe o --template, que diz pro terminal que logo após iremos dizer qual template gostaríamos de usar, e o nome do template em si. O Create React App já tem o template typescript criado, mas caso tenha algum template que queira usar e não existe, você também pode criar o seu!,
- --use-npm
Caso o yarn esteja instalado na sua máquina, o Create React App prioriza à utilização dele, e isso irá gerar um yarn.lock dentro da nossa aplicação, e nós queremos utilizar o npm ao invés do yarn, por isso precisamos usar o comando --use-npm se quisermos garantir que o Create React App utilize o npm para instalar as dependências necessárias e também garantir que ele gere o package-lock.json ao invés do yarn.lock.


- Exemplo:
    - react_studies_07



### 8 - Entendendo o projeto

**Entendendo o projeto**

- Exemplo:
    - react_studies_08


### 9 - O que aprendemos?

**O que aprendemos?**

Nessa aula, você aprendeu como:

- Configurar o seu ambiente para rodar o projeto;
    - Aprendemos como configurar o seu ambiente para poder criar e rodar um projeto React, instalando o Node/npm e o GIT para controlarmos as versões e/ou baixarmos a aplicação do Github.
- Diferenciar npx de npm;
    - Utilizamos o npx na aplicação e aprendemos a diferenciar o comando npx do comando npm, mostrando quando é melhor usar cada um.
- Criar um projeto com create-react-app com template typescript usando npm;
    - Criamos um projeto utilizando npx, entendemos que o CRA (Create React App) tem possibilidade de criar projetos com template (optamos pelo typescript), escolhendo o npm como o nosso gerenciador de pacotes padrão.
- O Create React App estrutura o projeto.
    - Entendemos como o Create React App estrutura a aplicação, vendo dos arquivos de configuração (tsconfig, package.json, package-lock.json entre outros), até as pastas/arquivos que serão atualizados por nós (pasta src, arquivos app.tsx, index.tsx, index.css entre outros).

- Exemplo:
    - react_studies_09

##
### Parte 2 - Componentização
##



### 10 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react_studies_10



### 11 - Criando um componente

**Criando um componente**

- Exemplo:
    - react_studies_11


### 12 - Para saber mais: Sobre componentes

**Para saber mais: Sobre componentes**

Dentre todas as vantagens que o React nos proporciona, a componentização é uma das mais conhecidas, além de ser uma das marcas do React.

Vamos ver a criação de um class componente:

```jsx
class Botao extends React.Component {
  render() {
   return (
      <button>
        Botão
      </button>
    )
 }
}
```

Só com esse pequeno componente, podemos ter várias informações interessantes, vamos separá-las em informações sobre componentização (em geral, tanto class components quanto function components) tanto sobre class components especificamente.

- Sobre Componentização

Nome do Componente

O nome do componente deverá começar com letra maiúscula, mas por que?

Existe uma possibilidade no html de criar web-components, que nos permite criar tags html totalmente customizadas. Entre essas customizações, podemos customizar o nome da tag!

Para o React diferenciar um componente de um web-component, ele pede para que criemos um componente com a primeira letra maiúscula, assim ele consegue diferenciar por exemplo que `<meuBotao />` é um web-component e `<MeuBotao />` é um componente!

- return e JSX

Para podermos criar um componente, fora a regra que citamos acima, precisamos retornar JSX, e o que seria isso exatamente?

O JSX é uma forma de "escrever HTML no JS", que é a forma que explicamos, mas não é exatamente isso.

O JSX não transforma o componente <Botao /> em HTML diretamente, antes disso, ele é transformado em uma elemento React, e aquele código é transformado em algo assim:

```js
const Botao = React.createElement('button', {}, 'Botão');
```

Caso você precise fazer isso, leia sobre React.Fragment.

Sobre class Components

- React.Component e render

Para criarmos um componente com class components, precisamos estender à classe `React.Component`. Nesta classe, existe apenas uma função obrigatória chamada `render` e, dentro dela, nós retornamos o JSX que precisamos para criar o componente!

- React.Fragment: https://pt-br.legacy.reactjs.org/docs/react-api.html#reactfragment
- Web Components: https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components
- JSX: https://pt-br.legacy.reactjs.org/docs/introducing-jsx.html

- Exemplo:
    - react_studies_12


### 13 - Criando o formulário

**Criando o formulário**

- Exemplo:
    - react_studies_13


### 14 - Criando a lista

**Criando a lista**

- Exemplo:
    - react_studies_14


### 15 - Renderizando um array

**Renderizando um array**

- OBS:
- Retorno ()
```tsx
{tarefas.map((tarefa, index) => (
    //returna
))}
```
- Escopo {}
```tsx
{tarefas.map((tarefa, index) => {
    //escopo
})}
```

- Exemplo:
    - react_studies_15



### 16 - Renderização dinâmica de arrays

**Renderização dinâmica de arrays**

Temos esse array:

```tsx
const tarefas = [{ tarefa: 'React' }, { tarefa: 'Javascript' }, { tarefa: 'Typescript '}];
```

Qual é a alternativa que utiliza um método de array de forma correta para renderizar essas tarefas, colocando cada tarefa desse array dentro de um p?

- Selecione uma alternativa

- A:
```tsx
tarefas.map(item => <p> {item} </p>)
```
- B:
```tsx
tarefas.map(item => {<p> {item.tarefa} </p>})
```
- C:
```tsx
tarefas.forEach(item => <p> {item.tarefa} </p>)
```
-D:
```tsx
tarefas.map(item => <p> {item.tarefa} </p>)
```
`Alternativa correta! O map retorna um outro array, e como não foi utilizada chaves, ele está retornando um array de JSX, isso retorna os itens como esperado!`


- Exemplo:
    - react_studies_16



### 17 - Faça como eu fiz: Utilizando o map

**Faça como eu fiz: Utilizando o map**

Crie um `function component` Lista dentro do arquivo `src/components/Lista/index.tsx`. O componente contém um array chamado tarefas tendo 2 objetos representando cada tarefa, uma das tarefas é `React` e o tempo é 02:00:00 e o outro é `Javascript`, que tem o tempo de 01:00:00.

Após isso, retorne uma `div`, depois renderize esse array utilizando o método map, retornando cada item dentro de uma tag `div`, a tarefa dentro de uma tag `h3` e o tempo dentro de uma tag `span`. Não esqueça de utilizar o index como `key`;


- Opinião do instrutor

```tsx
function Lista() {
  const tarefas = [{ tarefa: 'React', tempo: '02:00:00' }, { tarefa: 'Javascript', tempo: '01:00:00'  }]
  return (
    <div>
      {tarefas.map((item, index) => (
        <div key={index}>
          <h3> {item.tarefa} </h3>
          <span> {item.tempo} </span>
        </div>
      ))}
    </div>
  )
}
```

Dessa forma, estamos utilizando o array de forma dinâmica, renderizando as tarefas de acordo com o array logo, se por acaso colocarmos de forma manual um item no array, o React entenderá que existe um novo item e renderizará a lista com o novo item! Isso além de ser muito legal respeita um dos conceitos que estamos comentando nesse curso, o Don't repeat yourself / Não se Repita (DRY), que não precisaremos repetir a estrutura JSX, apenas dizemos como gostaríamos que o React renderize nossos itens e ele se encarrega do resto!

- Exemplo:
    - react_studies_17



### 18 - O que aprendemos?

**O que aprendemos?**

Nessa aula, você aprendeu como:

- Funciona a pasta public;
    - Abordamos sobre a pasta public, para que ela serve e por que raramente mexemos nela, mostramos também o arquivo index.html e como que o React popula ele com os componentes.
- Criar um componente com class component e como utilizá-lo;
    - Criamos um componente com class component, mostrando toda a sintaxe desde o extends até o retorno e o export.
- O que é JSX;
    - Vimos que o React retorna na verdade um JSX, não um HTML, também falamos de algumas diferenças entre os dois.
- Criar um function component;
    - Também criamos um componente com function component (a forma mais atual de se escrever componentes desde a versão 16.8), e mostramos como é mais simples criarmos dessa forma.
- Utilizar o método map para renderizar arrays.
    - Renderizamos arrays de JSX com o método map, mostrando que assim conseguimos aproveitar parte do JSX e mudar apenas o valor de item para item, utilizando assim o princípio DRY (Don't Repeat Yourself).

- Exemplo:
    - react_studies_18


##
### Parte 3 - Usando CSS
##


### 19 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react_studies_19


### 20 - Aprendendo a estilizar

**Aprendendo a estilizar**

- Exemplo:
    - react_studies_20



### 21 - Estilizando com Sass

**Estilizando com Sass**

- Sass:
    - Site: https://www.npmjs.com/package/sass


- Instalando o Sass via terminal
```
npm install --save-dev sass
```

- Exemplo:
    - react_studies_21



### 22 - Usando CSS Modules

**Usando CSS Modules**

- CSS Modules:
    - Link: https://www.npmjs.com/package/typescript-plugin-css-modules

- Instalando o CSS Modules, via terminal
```
npm install -D typescript-plugin-css-modules
```

- `tsconfig.json`

```tsx
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```

- hash aleatória, `App_AppStyle_hash`

- exp

```tsx
<div className={style["novaTarefa__-container"]}>
    // code ....
</div>
```
- Exemplo:
    - react_studies_22


### 23 - Importando CSS Modules

**Importando CSS Modules**

Temos essa estrutura de arquivos:

```tsx
components/
  botao/
    index.tsx
   Botao.module.scss
```

Com o CSS Modules já configurado na aplicação, como conseguimos importar e utilizar o CSS Modules no arquivo index.tsx, sabendo que dentro de Botao.module.scss existe uma classe botao?

Selecione uma alternativa

- A: 

```tsx
import 'Botao.module.scss';

<button className="botao"> … </button>
```

- B: 

```tsx
import style from './Botao.module.scss';

<button class={style.botao}> … </button>
```

- C: 

```tsx
import style from './Botao.module.scss';

<button className={style.botao}> … </button>
```

`Alternativa correta! Dessa forma conseguimos importar dizendo onde nosso módulo está e colocando as classes CSS dentro de um objeto JS!`


- D: 

```tsx
import style from 'Botao.module.scss';

<button className={style.botao}> … </button>
```

- E: 

```tsx
import { style } from './Botao.module.scss';

<button className={style.botao}> … </button>
```

- Exemplo:
    - react_studies_23



### 24 - Para saber mais: Sobre CSS Modules

**Para saber mais: Sobre CSS Modules**

Muito legal o CSS Modules né? Mas tem várias outras curiosidades e vantagens que não mencionamos no vídeo!

Você sabia que podemos importar o CSS Modules de várias formas diferentes? Ou que podemos utilizar vários módulos no mesmo componente?

Pois é, o CSS Modules é bem mais complexo e interessante do que imaginamos e, se irmos bem a fundo nessa tecnologia, podemos deixar o nosso código bem mais interessante!

Sobre Imports
Para começar, o CSS Modules nos dá o CSS em formato object e os exporta como default, logo, podemos importar das seguintes formas:


```tsx
import style from './NomeDoComponente.module.scss';
```

```tsx
import * as style from './NomeDoComponente.module.scss';
```

```tsx
import { default as style } from './NomeDoComponente.module.scss';
```

Ainda seguindo em como importar um CSS Module, como ele é um export default, podemos nomeá-lo da forma como bem entendermos, por exemplo:

```tsx
import Foo from './NomeDoComponente.module.scss';
```

```tsx
import Bar from './NomeDoComponente.module.scss';
```

```tsx
import Banana from './NomeDoComponente.module.scss'
```

Todas as formas acima retornarão o objeto que o CSS Modules exporta!

Como agora sabemos que podemos nomear o objeto de formas diferentes, podemos também importar vários CSS Modules em um só componente!

```tsx
import BotaoStyle from './Botao.module.scss';
import ItemStyle from './Item.module.scss';
```
OBS: Todas essas formas citadas acima não são específicas de como importar um CSS Modules, e sim de como importar um export default em JS.


- Exemplo:
    - react_studies_24




### 25 - Faça como eu fiz: Transformando CSS em CSS Modules

**Faça como eu fiz: Transformando CSS em CSS Modules**

Transforme o arquivo `src/components/Botao/style.scss` em CSS Modules trocando o nome do arquivo .scss para o nome do componente, instalando o plugin `typescript-plugin-css-modules` como dependência de desenvolvimento e configurando o plugin dentro do arquivo tsconfig.json e importando a classe dentro do arquivo de forma correta dentro de `src/components/Botao/index.tsx`.

- Opinião do instrutor

Dentro do terminal:

```
npm install -D typescript-plugin-css-modules
```

Dentro de tsconfig.json:

```json
{
  "compilerOptions": {
     …
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```

Mudar o arquivo `src/components/Botao/style.scss` para `src/components/button/Botao.module.scss`

Dentro do arquivo `src/components/Botao/index.tsx`:

```tsx
import React from 'react';
import style from './Botao.module.scss;

class Botao extends React.Component {
  render() {
    return (
      <button className={style.botao}>
        Botão
      </button>
    )
  }
}

export default Botao;
```

Com o CSS Modules, a classe que seria apenas botao, será `{nomeDoArquivoCSS}_{nomeDaClasseCSS}__{hashAleatoria}`. É por isso que mudamos nosso arquivo de `style.scss` para `Botao.module.scss`, pois isso faz ficar mais evidente na hora da classe que essa classe vem do componente Botao, fazendo a própria classe ser auto documentada, pois sabemos que é a classe botao vindo do componente Botao.

- Exemplo:
    - react_studies_25



### 26 - O que aprendemos?

**O que aprendemos?**

- Nessa aula, você aprendeu como:

- Usar o CSS inline;
    - Aprendemos como criar o CSS inline direto no atributo, como variável JS e utilizando condicionais para mudar o estilo.
- Utilizar CSS e Sass no projeto;
    - Vimos como importar CSS e SASS no projeto é fácil dentro de um projeto criado com Create React App.
- Colocar o CSS Modules em um projeto com Create React App + Typescript;
    - Configuramos o projeto para aceitar CSS Modules.
- Vantagens de se utilizar CSS Modules.
    - Discutimos as vantagens de se utilizar CSS Modules na aplicação.


- Exemplo:
    - react_studies_26


##
### Parte 4 - Props
##


### 27 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react_studies_27


### 28 - Conhecendo Props

**Conhecendo Props**

- Exemplo:
    - react_studies_28


### 29 - Props padrão para filhos

**Props padrão para filhos**

Desafio proposto pela Luri, a IA da Alura.

Qual é o prop padrão que o React disponibiliza para poder utilizar JSX como filho de um componente React?

- R: Children

- Exemplo:
    - react_studies_29


### 30 - Faça como eu fiz: Adicionando Props para o Botão

**Faça como eu fiz: Adicionando Props para o Botão**

Troque o texto padrão do componenteBotão dentro de src/components/Botao/index.tsx por um prop children que terá o texto a ser exibido no componente.

- Opinião do instrutor

Dentro de src/components/Botao/index.tsx:

```tsx
import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component {
  render() {
    return (
      <button clasName={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;
```

Dessa forma, podemos utilizar o componente Botao de forma bem parecida como utilizamos uma tag nativa HTML:

```tsx
<Botao>
  Meu botão!
</Botao>
```

O React disponibiliza essa prop especial children por padrão para que possamos utilizar o componente dessa forma!

- Exemplo:
    - react_studies_30



### 31 - Refatorando a lista

**Refatorando a lista**

- Exemplo:
    - react_studies_31



### 32 - Para saber mais: Sobre Keys (Chaves no React)

**Para saber mais: Sobre Keys (Chaves no React)**

Lembra que os componentes React são criados utilizando JSX não HTML? Então, usando o mesmo processo, o React não cria um DOM, e sim um VDOM (Virtual DOM).

Não entraremos em detalhes neste curso sobre Virtual DOM, porém saiba que o React cria um DOM virtual em memória e só atualiza o DOM real quando algo dentro desse Virtual DOM realmente é atualizado.

Levando isso em consideração, como o React saberia qual seria a cópia no Virtual DOM do item 45 em um array de 50 itens, por exemplo? Ou pior, se o item 47 for removido, como ele vai saber que o item 48, 49 e 50 não foram atualizados? E os outros?

Para isso o React utiliza a propriedade key, que nada mais é que uma chave(AHÁ!) para linkar o item no Virtual DOM no DOM real, por isso não vemos a prop sendo passada para o componente Item, pois essa prop é algo interno no React que não tem utilidade para nós.

Por isso também não é recomendado que se utilize o index do array como key, pois caso o array mude, a possibilidade de vários itens desse array serem atualizados sem necessidade é imensa!

OBS: Caso você queira saber mais pode acessar à documentação do React ou o meu Alura+ sobre performance em listas com React.

- Chaves:
    - Link: https://pt-br.legacy.reactjs.org/docs/lists-and-keys.html#keys
- Melhore a performance das suas listas em React:
    - Link: https://cursos.alura.com.br/extra/alura-mais/melhore-a-performance-das-suas-listas-em-react-c1021



- Exemplo:
    - react_studies_32



### 33 - Criando o cronômetro

**Criando o cronômetro**

- Exemplo:
    - react_studies_33


### 34 - O que aprendemos?

**O que aprendemos?**


Nessa aula, você aprendeu como:

- Adicionar informações externas ao componente com Props;
    - Aprendemos a utilizar propriedades externas para reutilizar componentes de forma única.
- Funciona o props.children;
    - Vimos que o React disponibiliza uma props padrão chamada children, que ao contrário das outras props, é escrita dentro do componente, abrindo e fechando a tag como em uma tag HTML.
- O key (chaves) é importante em arrays no React;
    - Entendemos mais a fundo como o React trabalha com arrays, e como o key é importante para que ele não se perca entre os itens deste array.
- Usar spread operator de forma consciente para passar props para os componentes;
    - Utilizamos o spread operator para poder passar todos os itens de um objeto como props para o componente, também pensamos como isso pode se tornar um problema.


- Exemplo:
    - react_studies_34



##
### Parte 5 - State
##


### 35 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react_studies_35


### 36 - Introduzindo estados

**Introduzindo estados**

- Resolvendo erro `this.props.children` temporario, R: `<any, any>`

```jsx
import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <any, any>{
  render() {
    return (
      <button className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;
```

- Link1: https://cursos.alura.com.br/forum/topico-property-children-does-not-exist-on-type-readonly-214635

- Link2: https://cursos.alura.com.br/forum/topico-erro-ao-chamar-children-213930

- Exemplo:
    - react_studies_36


























































































































































































































































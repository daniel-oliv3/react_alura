##
### React: praticando React com Js
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


##
### Parte 1 - Primeiros passos
##


### 1 - Apresentação

**Apresentação**

- Documentação
    - Link: https://pt-br.legacy.reactjs.org/
    - Node: https://nodejs.org/en

- criar o projeto react
```
npx create-react-app react_cine-tag_90
```

- Roda o projeto
```
npm start
```

- Localhost:
    - Link: http://localhost:3000/



**Começando um projeto**

- Create-react-app
- Componentes
- Module CSS
- React-router-dom

**Aprofundando o conhecimento**

- Hooks
- Contextos
- Rotas dinâmicas
- Rotas aninhadas

**Extra, Extra!**

- Mock de API
- Consumo de API
- Deploy

- Exemplo:
    - react_cine-tag_90


### 91 - Preparando o ambiente

**Preparando o ambiente**

- Visual Studio Code:
    - Link: https://code.visualstudio.com/Download
- Google Chrome
    - Link: https://www.google.com/intl/pt-BR/chrome/

- Exemplo:
    - react_cine-tag_91


### 92 - Criando o projeto

**Criando o projeto**

- Exemplo:
    - react_cine-tag_92


### 93 - Preparando arquivos

**Preparando arquivos**

- Figma:
    - Link: https://www.figma.com/file/UtiurQgr5yH1ClbLzDqVHl/2802---React%3A-Praticando-React-com-Js?type=design&node-id=12-2&mode=design&t=3o5GRM1PpvfMHAMv-0


- jsconfig.json

```json
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": [
        "src"
    ]
}
```

- db.json

```json
[
    {
        "id": 1,
        "titulo": "O labirinto do Logcat",
        "capa": "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png",
        "link": "https://www.youtube.com/embed/ypvGqZGJBls"
    },
    {
        "id": 2,
        "titulo": "Um componente no espaço",
        "capa": "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img1.png",
        "link": "https://www.youtube.com/embed/jK0uiQ1ZQQQ"
    },
    {
        "id": 3,
        "titulo": "O poderoso JavaScript",
        "capa": "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img4.png",
        "link": "https://www.youtube.com/embed/N1BSG02z-Mw"
    },
    {
        "id": 4,
        "titulo": "Dart, o Caçador de Andróides",
        "capa": "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img3.png",
        "link": "https://www.youtube.com/embed/LLmBWjF6F8M"
    }
]
```

- Google Fonts
    - Link: https://fonts.google.com/
    - Montserrat: https://fonts.google.com/specimen/Montserrat?query=mont


- Head HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">
```

- Exemplo:
    - react_cine-tag_93







### 94 - Navegando entre páginas

**Navegando entre páginas**

- React Router Dom

```
npm install react-router-dom
```

- Exemplo:
    - react_cine-tag_94






### 95 - React-router-dom

**React-router-dom**

Você acabou de conhecer o pacote React-router-dom para criar a navegação entre páginas do CineTag. Se você estivesse iniciando outro projeto, qual seria a estrutura correta para conseguir declarar rotas utilizando o pacote em sua versão 6, que é usada durante esse treinamento?

- Selecione uma alternativa

- A:
```js
<Routes>
    <BrowserRouter>
        <Route path="/" element={<Inicio />} />
    </BrowserRouter>
</Routes>
```

- B:
```js
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Inicio />} />
    </Routes>
</BrowserRouter>
```

- O componente BrowserRouter é responsável por informar a nossa aplicação que teremos um roteamento de componentes a seguir, o Routes é o próprio roteador e o Route é a rota em específico


- C:
```js
<BrowserRouter>
    <Route>
        <Routes path="/" element={<Inicio />} />
    </Route>
</BrowserRouter>
```





- Exemplo:
    - react_cine-tag_95


### 96 - Componentização

**Componentização**


- URLs
- http://localhost:3000/
- http://localhost:3000/favoritos

- Exemplo:
    - react_cine-tag_96



### 97 - Para saber mais: CSS com módulos?

**Para saber mais: CSS com módulos?**

Durante a criação dos arquivos do projeto você se deparou com arquivos com nome como `CabecalhoLink.module.css` e `Cabecalho.module.css`. Mas o que quer dizer esse module?

Um módulo CSS é um arquivo CSS no qual todos os nomes de classe têm escopo local por padrão. Dessa maneira, você pode reutilizar nomes de classes em arquivos diferentes sem acontecer conflitos. Por exemplo: eu posso usar a classe container em vários componentes e pra cada container ter um estilo diferente.

O React por padrão suporta esse tipo de CSS sem precisar instalar, utilizando o padrão para nome de arquivos `[nome].module.css`. Agora, imagine que queremos trocar a cor de um botão de confirmação para verde, você irá dentro do arquivo `Botao.module.css` e definir a cor como verde:

```css
.confirmar {
    background-color: green
}
```

Ai no arquivo que tem o botão, você vai precisar importar o arquivo CSS já dando um nome pra ele:

```js
import styles from “./Botao.module.css”
```

Depois, para utilizar esses estilos você vai seguir o padrão `styles.[nomeDaClasse]`, dessa maneira:

```js
<button className={styles.confirmar}>
```

Bacana né? Assim temos um problema a menos para se preocupar, a confusão com o CSS.

Agora mudando de assunto: sempre que você quiser ir mais fundo nas questões de React abordadas durante as aulas, você pode acessar a documentação do React e a documentação oficial do React Router 6, que são nossas melhores amigas.

- Documentação do React
    - Link: https://pt-br.reactjs.org/docs/getting-started.html

- Documentação oficial do React Router 6
    - Link: https://reactrouter.com/en/v6.3.0

- Exemplo:
    - react_cine-tag_97


### 98 - Desafio: criando componentes

**Desafio: criando componentes**

Durante essa aula você aprendeu a criar seu primeiro componente do projeto e a estilizá-lo. Que tal se desafiar e usar esses conhecimentos para criar o rodapé? Para te guiar, segue os passos que devem ser feitos:

- Criar a pasta referente ao rodapé;
- Criar o arquivo index e CSS;
- Programar o HTML do componente;
- Estilizar com CSS;
- Aplicar na página inicial.

Agora é com você! Se precisar de ajuda, você pode consultar a resolução desse desafio clicando no botão “Opinião do instrutor” logo abaixo.


- Opinião do instrutor

Olá, estudante! Espero que tenha conseguido dar andamento na criação do seu Rodapé. No meu projeto, eu construí ele seguindo a estrutura do cabeçalho. Dentro do arquivo index.js eu fiz o padrão de criar a função e retornar os elementos html necessários, além de declarar o import do CSS e o export do componente:

```js
import styles from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h2>Desenvolvido por Alura.</h2>
        </footer>
    )
}

export default Rodape;
```

Já para estilizar, eu inseri dentro do arquivo `./Rodape.module.css` o seguinte código:


```css
.rodape {
    display: flex;
    justify-content: center;
    background-color: var(--preto);
}

.rodape h2 {
    font-weight: 400;
    font-size: 18px;
    color: var(--branco);
}
```

Onde transformo o rodapé em `display flex`, fazendo-o ocupar todo espaço ao fim da página e centralizar o texto com o `justify-content: center`. Depois, pintei o fundo usando a variável `--preto` que é a cor preta. Por fim, coloquei o peso da fonte como 400 deixando ela mais fina, usei o tamanho da fonte 18px e a cor do texto como branca.

Agora é só colocar o componente `<Rodapé>` na página que você precisa incluir! Não esquecendo de fazer o import dele:

```js
import Rodape from "componentes/Rodape";
```

Tanto os trechos de HTML quanto de CSS podem variar na sua solução por não serem a única maneira de serem feitos, portanto nesse quesito pode relaxar. O importante é conseguir criar o componente e usar na página.

Conseguiu resolver? Que tal dar uma olhada no fórum e ajudar quem possa estar com dúvidas? Ensinar é a melhor maneira de aprender!


- Exemplo:
    - react_cine-tag_98

### 99 - Resolução do desafio

**Resolução do desafio**

- Exemplo:
    - react_cine-tag_99


### 100 - O que aprendemos?

**O que aprendemos?**

Nessa aula, você aprendeu como:
- Analisar Figma;
- Criar um projeto React;
- Identificar arquivos que podem ser removidos da base do projeto React;
- Configurar diretório utilizado no curso com o jsconfig.json;
- Criar componentes (Cabecalho e CabecalhoLink);
- Estilizar componentes com módulo CSS;
- Praticar a criação de componentes (Rodapé).

- Exemplo:
    - react_cine-tag_100


##
### Parte 2 - Criando componentes
##


### 101 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react_cine-tag_101



### 102 - Banner

**Banner**

- Exemplo:
    - react_cine-tag_102


### 103 - Titulo

**Titulo**

- Exemplo:
    - react_cine-tag_103


### 104 - Cards

**Cards**

- Exemplo:
    - react_cine-tag_104


### 105 - Para saber mais: propriedades dos componentes

**Para saber mais: propriedades dos componentes**

Durante o desenvolvimento do projeto CineTag estamos passando informações das páginas para os componentes através de propriedades. Por exemplo para definir qual imagem vai aparecer no banner:

```js
<Banner imagem="home"></Banner>
```

- Ou qual texto irá aparecer no título:

```js
<Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
```

No React chamamos essas propriedades de props.

- O que são props?

Props são propriedades de uma classe ou função JavaScript que podem ser passados aos seus componentes filhos. É possível enviar como “prop” diferentes tipos de dados e até mesmo outros componentes. É fundamental na criação de componentes por ser o meio de comunicação entre eles.

Mas perceba que enviamos propriedades de duas maneiras diferentes. A segunda maneira, onde inserimos o texto do componente título, é chamada de props.children.

- O que é props.children?

A `props.children` (propriedade filha) é uma propriedade especial do React que contém qualquer elemento filho definido no componente. Ela é usada para exibir o que você inclui entre as tags de abertura e fechamento ao chamar um componente.

A documentação do React diz que você pode usar props.children em componentes que são genéricos, que não tem filhos pré-determinados, flexibilizando o uso do componente. Podemos ver no nosso `<Titulo>` que dependendo de onde ele for usado você pode definir como `<h1>`, `<h2>`, `<h3>`, entre outros.


- Exemplo:
    - react_cine-tag_105


### 106 - Lista dinâmica

**Lista dinâmica**

- Exemplo:
    - react_cine-tag_106


















































































































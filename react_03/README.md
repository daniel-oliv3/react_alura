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

- Gato Bonifacio
    - Link: https://thecatapi.com/api/images/get?format=src&type=png
    - Link2: https://cdn2.thecatapi.com/images/Qpnkqz6F_b.png
            


- Exemplo:
    - react_cine-tag_106




### 107 - Listando cards

**Listando cards**

O CineTag, no futuro, pretende fornecer uma área para armazenar trilhas sonoras dos filmes e permitir o acesso a usuários da plataforma. Para isso, foi criado a seguinte lista de músicas:

```json
{
    "musicas": [
    {
        "id": 1,
        "titulo": "The Power of React",
        "link": "https://www.youtube.com/watch?v=DJwirHviKms"
    },
    {
        "id": 2,
        "titulo": "My Component Will Go On",
        "link": "https://www.youtube.com/watch?v=oSnIRlvFEnA"
    },
}
```

Qual maneira a seguir possibilita renderizar o componente Card para cada música dessa lista?

- Selecione uma alternativa


- A: - Alternativa
```js
{musicas.map((musica) => (
    <Card (...musica) key={musica.id} />
))}
```

- B: - Alternativa
```js
{musicas.map((musica) => (
    <Card {...musica} key={musica.id} />
))}
```
`Nesse trecho de código foi usado o método .map. Esse método percorre a lista e retorna um card para cada item. Dentro do card foi enviado o valor de {...musica}, uma expressão chamada de destructuring (desestruturação) que descompactou o item para ser enviado cada uma das propriedades dele (id, titulo, link).`

- C: - Alternativa
```js
{musicas.map((musica) => (
    <Card {...musicas} key={musica.id} />
))}
```

- Exemplo:
    - react_cine-tag_107


### 108 - Nova rota

**Nova rota**

- URLs
- http://localhost:3000/
- http://localhost:3000/favoritos

- Exemplo:
    - react_cine-tag_108




### 109 - Desafio: construindo páginas

**Desafio: construindo páginas**

ocê já criou comigo os arquivos referentes a página de favoritos e agora é com você! Que tal aplicar os componentes já criados que existem nessa página? Alguns detalhes para se lembrar:

- Utilizar o banner e título;
- Enviar as propriedades adequadas;
- Criar um card fictício enquanto não temos uma variável de favoritos;
- Crie uma section pro conteúdo da página.

Se precisar de ajuda, você pode consultar a resolução desse desafio clicando no botão “Opinião do instrutor” logo abaixo.


- Opinião do instrutor

Para reutilizar os componentes já criados, entre no arquivo da página favoritos e dentro do return insira: ``` Meus Favoritos ``` Aqui você inseriu o componente de Banner, especificando que a imagem que deve ser impressa é a com nome “favoritos” ao enviar a propriedade imagem. Depois, complementou com o componente Titulo com o texto da página, enviando como uma propriedade filha. Por fim, criou a seção que abrange o conteúdo da página, que são os cards. Ela permite a utilização da centralização do componente Container. E como o conteúdo da página são os cards como foi citado, também colocou um Card com dados fictícios. Essa parte do card em específico é livre para você inserir os valores que desejar nas propriedades id, título e capa. **Conseguiu resolver?** Que tal dar uma olhada no fórum e ajudar quem possa estar com dúvidas? Ensinar é a melhor maneira de aprender!


- URLs
- http://localhost:3000/
- http://localhost:3000/




- Exemplo:
    - react_cine-tag_109



### 110 - Resolução do desafio

**Resolução do desafio**

- Exemplo:
    - react_cine-tag_110



### 111 - O que aprendemos?

**O que aprendemos?**

Nessa aula, você aprendeu como:

- Criar novos componentes;
- Construir novas rotas;
- Compartilhar informações entre componentes com props e children;
- Importar dados de um arquivo json;
- Usar o método .map para listar componentes.

- Exemplo:
    - react_cine-tag_111


##
### Parte 3 - Definindo contexto
##


### 112 - Projeto da aula anterior

**Projeto da aula anterior**


- Exemplo:
    - react_cine-tag_112



### 113 - Contextos

**Contextos**


- Exemplo:
    - react_cine-tag_113


### 114 - Hook personalizado

**Hook personalizado**

- React Context Dev  (Extensões)

- Link: https://chromewebstore.google.com/detail/react-context-devtool/oddhnidmicpefilikhgeagedibnefkcf?pli=1

- Exemplo:
    - react_cine-tag_114



### 115 - Desfavoritando filmes

**Desfavoritando filmes**


Olá, estudante! 😀

Espero que esteja aprendendo bastante coisa até aqui, já estamos na metade do caminho para ter o projeto cinetag completo e vim deixar um recadinho:

Na linha 30 do arquivo Favoritos.js, aproximadamente, o seguinte trecho abaixo foi desenvolvido durante a aula com o intuito de desfavoritar um filme caso ele já estivesse na lista de favoritos:

```js
novaLista.splice(novaLista.indexOf(novoFavorito), 1);
```

Mas ao testar em uma lista de favoritos, sempre o último item é removido. Isso acontece pois o método indexOf() compara o valor que colocamos entre parentêses com os elementos do Array usando igualdade estrita (o mesmo método usado pelo ===, ou triple-equals operator).

Mesmo que dois objetos diferentes possam ter as mesmas propriedades com valores iguais, eles não são considerados iguais quando comparados usando os operadores de igualdade ampla ou estrita (== ou ===). Isso ocorre porque arrays e objetos em JavaScript são comparados por referência. Portanto, o indexOf() não vai funcionar como o desejado.

Algumas das maneiras de resolver esse problema são utilizando o método filter() e findIndex().



- filter()

Essa foi uma solução passada por algum colega nos depoimentos desse curso.

O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

```js
novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
```

Desse jeito, a variável novaLista será sobrescrita para uma lista com somente os favoritos que não possuiam o id igual ao que estavamos tentando desfavoritar.

- findIndex()

Essa é uma solução apontada pelo colega Ilo Navarro.

O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a as condições dadas. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

```js
novaLista.splice(
      novaLista.findIndex(
        item => item.id === novaLista.find(item => item.id === novoFavorito.id).id
      ),
      1
    )
```

Nesse código primeiramente o método find() encontra o objeto dentro da lista que possui o id igual ao id do novoFavorito, depois é selecionado apenas a propriedade id dele ao colocar .id ao final.

Depois, ele compara novamente cada item da nova lista até encontrar qual possui o id daquele favorito repetido. Quando encontra, o método findIndex() retorna a posição dele na lista e isso permite com que o splice() o remova.

Essas não são as únicas maneiras de resolver esse problema mas sinta-se livre para usa-las! Meus agradecimentos a todos da comunidade que alertaram dessa situação e trouxeram soluções para todos estudantes.


- Exemplo:
    - react_cine-tag_115


### 116 - Usando contextos

**Usando contextos**

A CEO do CineTag, Isadora, comentou sobre a possibilidade de no futuro haver a implementação do login de usuário no projeto. A equipe de desenvolvedores, já se adiantando sobre essa demanda, começou a discutir sobre a criação de um contexto de usuário para poder compartilhar as propriedades de nome do cliente para vários componentes. Para a criação, se usaria o seguinte trecho de código:

const UsuarioContext = createContext();COPIAR CÓDIGO
Agora, para usar esse contexto nos componentes, como devemos chamá-lo?

- Selecione uma alternativa

- A: useContext(UsuarioContext)

    - `O hook useContext torna os dados do componente pai disponíveis para os componentes filhos em qualquer nível da Hierarquia sem expô-los como dados “props”, assim, no nosso caso, conseguimos acesso aos dados do contexto do usuário.`

- B: useContext(useUsuarioContext)

- C: useUsuarioContext('')


- Exemplo:
    - react_cine-tag_116




### 117 - Para saber mais: contextualizando contexts

**Para saber mais: contextualizando contexts**


Segundo a documentação do React, o Context (em português, contexto) fornece uma maneira de passar dados pela árvore de componentes sem ter que passar props manualmente em todos os níveis.

Geralmente, quando estamos desenvolvendo um projeto em React, os dados são passados de por meio de props, de componente pai para filho.

Esse uso pode ser complicado para alguns tipos de propriedades que são exigidas por muitos componentes dentro de um aplicativo, como no nosso caso em que gostaríamos de mostrar quais filmes foram favoritados seja na página inicial ou na página de favoritos. A estrutura para iniciar um contexto é a seguinte:

```js
const MeuContexto = createContext();
```

Cada objeto Context vem com um componente Provider React que permite que os componentes que estão usando esse contexto façam alterações nele.

```js
<MeuContexto.Provider value={/* algum valor */}>
```

Após abranger o componente com o provider, você consegue acesso ao componente utilizando o hook useContext(MeuContexto).

Resumidamente, o contexto fornece uma maneira de compartilhar valores como esses entre componentes sem ter que passar explicitamente um prop por todos os níveis da árvore.

Você pode visualizar a aplicação de Contexts em outro projeto React no Alura da Juliana Negreiros Conhecendo o Context API do React e no curso React: gerenciamento de estados globais com ContextAPI do Luiz Fernando.


- Documentação do React
    - Link: https://legacy.reactjs.org/docs/context.html


- Exemplo:
    - react_cine-tag_117



### 118 - Favoritar

**Favoritar**

- Exemplo:
    - react_cine-tag_118











































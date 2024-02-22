##
### React com TailwindCSS: estilizando componentes
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


##
### Parte 1 - Aquecendo os motores
##


### 1 - Apresentação

**Apresentação**

- Alura Newsletter

- Documentação
    - Link: https://pt-br.legacy.reactjs.org/
    - Node: https://nodejs.org/en
    - Vite: https://vitejs.dev/

- Yarn (Globalmente)
```
npm install --global yarn
```    

- Criar o projeto react com vite
```
yarn create vite 
```

- Nome do projeto: newsletter_01
    - Tecnologia: React
    - Com: JavaScript


- build (node_modules)
```
yarn
```

- Roda o projeto
```
yarn dev
```

- Localhost:
    - Link: http://localhost:5173/



- Exemplo:
    - newsletter_01


### 2 - Preparando o ambiente

**Preparando o ambiente**

- Visual Studio Code:
    - Link: https://code.visualstudio.com/Download
- Google Chrome
    - Link: https://www.google.com/intl/pt-BR/chrome/


- Exemplo:
    - newsletter_02



### 3 - React com vite

**React com vite**

- Exemplo:
    - newsletter_03


### 4 - Instalação do Tailwind

**Instalação do Tailwind**

- TailWindCSS:
    - Site: https://tailwindcss.com/
    - Link: https://tailwindcss.com/docs/installation


- Package Maneger 
```
yarn add -D tailwindcss postcss autoprefixer
``` 

- Cria os arquivos (`tailwind.config.js`, `postcss.config.js`)
```
npx tailwindcss init -p
``` 

-  Colar código no arquivo `tailwind.config.js`
```cjs
content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
```

- postcss.config.cjs = `postcss.config.js`
- tailwind.config.cjs = `tailwind.config.js`
- `cjs` Não funcionou -> `js` Ok

- Exemplo:
    - newsletter_04




### 5 - Teoria sobre Tailwind

**Teoria sobre Tailwind**

- Tailwindcss/telaMenor/telaMaior

- Margin: https://tailwindcss.com/docs/margin
- Paleta de cores: https://tailwindcss.com/docs/customizing-colors

- Exemplo:
    - newsletter_05


### 6 - Criando o cabeçalho

**Criando o cabeçalho**

- Container: https://tailwindcss.com/docs/container

- Exemplo:
    - newsletter_06


### 7 - Tailwind, React e Vite

**Tailwind, React e Vite**

Tailwind CSS é uma estrutura CSS de código aberto que prioriza o utilitário. Ele redefine a maneira como você estiliza os aplicativos, fornecendo uma variedade de classes CSS e pode ser usada com a biblioteca Front-end mais conhecida do mundo: o React.

Sabendo disso, analise as afirmações abaixo e marque apenas as verdadeiras.

Selecione uma alternativa

- A: Unir o React com o Tailwind de forma adequada, pode melhorar a sustentabilidade dos estilos do projeto.
`Isso aí! A união do React com Tailwind pode tornar os aplicativos mais escaláveis e de fácil manutenção, reduzindo o tempo de desenvolvimento e o tempo de manutenção do código.`

- B: O Tailwind aplicado a um projeto React, não oferece suporte para personalizar os estilos.


- C: O Tailwind só funciona se aplicado a um projeto React com Vite.

- Exemplo:
    - newsletter_07


### 8 - Para saber mais: documentação oficial

**Para saber mais: documentação oficial**

Para consolidar seu conhecimento, quero deixar 2 links importantes para sua jornada de estudo sobre React e Tailwind:

- https://tailwindcss.com/
- https://nerdcave.com/tailwind-cheat-sheet

Link da documentação oficial
Link de principais comandos e atalhos do Tailwind
Sempre que possível, consulte a documentação oficial das tecnologias que está estudando, pois, isso será de grande valia para sua carreira dev.

- Exemplo:
    - newsletter_08


### 9 - O que aprendemos?

**O que aprendemos?**


Nesta aula:
- Iniciamos o desenvolvimento do projeto React com Vite;
- Entendemos a integração entre Tailwind, PostCSS e React;
- Desenvolvemos um componente cabeçalho e demos nosso primeiro mergulho no mundo do Tailwind com React de forma prática.

- Na próxima aula:

Vamos aprofundar no Tailwind e criar o tema no projeto aplicando de forma prática o modo noturno!

- Exemplo:
    - newsletter_09


##
### Parte 2 - Conhecendo os recursos
##


### 10 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - newsletter_10


### 11 - Estruturas de extensão

**Estruturas de extensão**

- Resources:
    - Link: https://tailwindcss.com/resources
- HerosIcons:
    - Link: https://heroicons.com/
    - Documentação: https://github.com/tailwindlabs/heroicons


- Biblioteca (HeroIcons)

```
yarn add @heroicons/react
```

- Editor Setup
    - Link: https://tailwindcss.com/docs/editor-setup

- Extensãos VSCode
    - `Tailwind css intelliSense`
    - `Prettier`

- Exemplo:
    - newsletter_11


### 12 - Criando um tema

**Criando um tema**

- Dark Mode:
    - Link: https://tailwindcss.com/docs/dark-mode

- `tailwind.config.js`

```js
darkMode: 'class',
```

- Exemplo:
    - newsletter_12


### 13 - Modo noturno

**Modo noturno**

- Dark Mode:
    - Link: https://tailwindcss.com/docs/dark-mode


- Supporting system preference and manual selection
```js
window.matchMedia('(prefers-color-scheme: dark)').matches
```

- Exemplo:
    - newsletter_13


### 14 - Trabalhando com ícones

**Trabalhando com ícones**

- Customization
    - Configuration
    - Link: https://tailwindcss.com/docs/configuration


- Alterando o arquivo `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extends: {
      colors: {
        dark: {
          100: 'rgb(18, 18, 18)',
          200: 'rgb(51, 51, 51)',
        },
        alura: {
          100: '#167BF7',
          200: '#051933'
        }
      },
    }
  },
  plugins: [],
}
```

- Exemplo:
    - newsletter_14



### 15 - Informações do sistema

**Informações do sistema**

Nesta aula, aprendemos que podemos usar recursos incríveis do Tailwind e descobrir se o navegador está usando o modo dark ou não.

Porém, para aplicar essa funcionalidade, tínhamos seguinte código:

```jsx
useEffect(() => {
systemPreferences && document.documentElement.classList.add('dark')
})
const toggle = () => {
    document.documentElement.classList.toggle('dark')
}
```

- E alteramos para:

```jsx
const pageClasses = document.documentElement.classList

useEffect(() => {
systemPreferences && pageClasses.add('dark')
})
const toggle = () => {
    pageClasses.toggle('dark')
}
```

Analisando os códigos acima, podemos afirmar que:

- Selecione uma alternativa

- A: O modo dark será aplicado apenas quando o navegador estiver no modo light.


- B: O modo dark ou light será aplicado conforme o modo escolhido pelo sistema operacional.
`Isso mesmo! Além do modo ser definido pelo sistema operacional, pensamos em deixar o código mais claro e mais legível através da variável pageClasses.`

- C: O modo dark não será mais aplicado.

- Exemplo:
    - newsletter_15


### 16 - O que aprendemos?

**O que aprendemos?**

- Nesta aula:
    - Configuramos as estruturas de extensão do Tailwind para personalizar o designer;
    - Implementamos o modo noturno do projeto com Tailwind;
    - Criamos o modo dark mode e através de classes utilitárias.

- Na próxima aula:
    - Vamos criar uma lista de artigos e como trabalhar com imagens usando o Tailwind!

- Exemplo:
    - newsletter_16


##
### Parte 3 - Mergulhando no Tailwind
##


### 17 - Projeto da aula anterior

**O que aprendemos?**

- Exemplo:
    - newsletter_17





### 18 - Criando a lista de artigos

**Criando a lista de artigos**

- Criar o arquivo `articles.json` na raiz do projeto

```json
[
  {
    "title": "Novo Podcast: Bolha Dev",
    "text": [
      "A nossa bolha ficou muito mais unida e informada essa semana, com o lançamento do podcast diário Bolha Dev!  Em todas as tardes de segunda a sexta-feira, Marcus Mendes apresenta as melhores notícias da Newsletter do Filipe Deschamps, além de trazer conteúdos e dicas interessantes do Aluraverso.",
      "Confira o último episódio do Bolha Dev, em que o Marcus falou sobre a Anatel intensificando combate contra pirataria, reconhecimento facial por sonar, treinamento de drones no metaverso e muito mais!"
    ],
    "tags": ["podcast", "bolhadev"]
  },
  {
    "title": "Monitoria diária no Discord",
    "text": [
      "Desde a semana passada, estamos experimentando uma nova rotina na comunidade do Discord, na escola de Programação! Todas as tardes, os alunos e alunas aproveitam uma Monitoria com duração de uma hora, por meio do canal de voz da comunidade. Além da solução de dúvidas sobre carreira e tecnologia, acontece muita interação entre pessoas de diferentes estágios de aprendizagem.",
      "Na primeira semana da Monitoria, tivemos 135 participantes! Se você também quiser trocar uma ideia por lá, é só aparecer às 15h no canal Sala de Estudos 1, dentro de Back-end, no Discord."
    ],
    "tags": ["discord", "monitoria"]
  },
  {
    "title": "Começou o Challenge Back-End",
    "text": [
      "Começa hoje o Challenge Back-End, voltado para alunos e alunas da Alura que querem ter um projeto completo para adicionar ao portfólio e aumentar suas chances no mercado tech.",
      "Serão quatro semanas para desenvolver uma API Rest de uma aplicação de controle financeiro, realizar validações de regras de negócio, implementar um relatório de informações e também um controle de acesso.",
      "Ainda dá tempo de se inscrever e participar! Vem aprender colocando a mão na massa, sempre com o suporte do time Alura e da nossa comunidade no Discord."
    ],
    "tags": ["back-end", "node", "java"]
  },
  {
    "title": "Como fazer um bom portfólio?",
    "text": [
      "No último episódio do #HipstersPontoTube, Diogo Pires e Paulo Silveira conversaram sobre a importância do portfólio e quais são as dicas para criar essa ferramenta essencial para todos os níveis de profissionais. Eles também dão algumas dicas de carreira, respondendo perguntas como “quando é o momento certo de me aplicar nas vagas?”."
    ],
    "image": "/example.jpeg",
    "alt": "Screenshot do Youtube com o episódio do podcast rodando",
    "tags": ["carreira", "podcast"]
  }
]
```

- Link: https://raw.githubusercontent.com/cardozov/alura-newsletter/aula3/articles.json

- Exemplo:
    - newsletter_18


### 19 - Estilizando a lista

**Estilizando a lista**

- Exemplo:
    - newsletter_19





### 20 - Trabalhando com imagens

**Trabalhando com imagens**

- Filters:
  - Link: https://tailwindcss.com/docs/sepia

- shortbreak
```jsx
 { image && <img className="sm:p-4" src={image} /> }
```

- Screen Readers
  - Link: https://tailwindcss.com/docs/screen-readers

- Exemplo:
    - newsletter_20




### 21 - Listando tags

**Listando tags**

- Exemplo:
    - newsletter_21



### 22 - Acessibilidade e imagens

**Acessibilidade e imagens**

Aprendemos que podemos aplicar designs responsivos voltados para dispositivos móveis com Tailwind. Cada classe de utilitário pode ser usada em conjunto com um modificador responsivo, como espaçamentos ou textos alternativos como ilustra o código abaixo:

```jsx
<img class="sm:p-4" src="bg.jpeg">
<span class="sr-only">alt da imagem alt</span>
```

Com base no código acima, analise as afirmações abaixo e marque apenas as verdadeiras.

- Selecione uma alternativa

- A: A classe sr-only é usada para ocultar um elemento visualmente sem escondê-lo dos leitores de tela.
`Isso aí! O Tailwind possui classes utilitárias exclusivas para melhorar a acessibilidade com leitores de tela.`

- B: Ao executar esse código num ambiente com o Tailwind instalado e configurado de forma correta, o resultado seria uma imagem com espaçamento com um texto em baixo.


- C: Ao executar esse código num ambiente com o Tailwind instalado e configurado de forma correta, o resultado seria uma imagem sem espaçamento.

- Exemplo:
    - newsletter_22



























































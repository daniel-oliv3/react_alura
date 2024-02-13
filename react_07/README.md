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
    - newsletter_02


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











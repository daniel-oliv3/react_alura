##
### React com TailwindCSS: estilizando componentes
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


##
### Parte 1 - Novos usuarios
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

- Exemplo:
    - newsletter_04

























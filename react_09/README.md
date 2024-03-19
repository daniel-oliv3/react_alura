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























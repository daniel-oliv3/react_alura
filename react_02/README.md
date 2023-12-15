##
### React - 2 - React: como os componentes funcionam
##

<p align="center">
  <img alt="...." src="./src/reactjs_logo_icon_170805.png" width="70%">
</p>


##
### Parte 1
##


### 52 - Apresentação

**Apresentação**

- Documentação
    - Link: https://pt-br.legacy.reactjs.org/
    - Node: https://nodejs.org/en

- criar o projeto react
```
npx create-react-app react-app_52
```

- Roda o projeto
```
npm start
```

- Localhost:
    - Link: http://localhost:3000/

- Exemplo:
    - react-app_52


### 53 - Clonando o repositório

**Clonando o repositório**

- Exemplo:
    - react-app_53

### 54 - Para saber mais: Git e Github

**Para saber mais: Git e Github**

Caso você não tenha conhecimento sobre git, não se preocupe! Neste curso não utilizaremos com frequência , mas para a sua carreira é muito importante entender como utilizar o Git e Github.

**Git**

Git é a ferramenta utilizada pelos desenvolvedores para controlar as versões do seu código, ou seja, ao invés de você ter algo assim:


<p align="center">
  <img alt="...." src="./src/aula1-imagem1.png" width="30%">
</p>


Você pode ter algo assim:

<p align="center">
  <img alt="...." src="./src/aula1-imagem2.png" width="30%">
</p>


Ao invés de você ter pastas diferentes com códigos parecidos, você terá `branches` com códigos parecidos!

`Branches` seriam uma representação dessas pastas que você criaria sem o Git, e caso você queira ir para uma destas `branches`, você pode utilizar o comando `git checkout`, por exemplo:

- `git checkout projeto-inicial` < estou na branch projeto-inicial
- `git checkout projeto-final` < estou na branch projeto-final
- `git branch projeto-final-2` < criei uma nova branch projeto-final-2
- `git checkout projeto-final-2` < entrei na branch projeto-final-2 que eu acabei de criar
- `git branch` < sem especificar nenhuma `branch`, o git me mostra todas as branches que eu tenho localmente

Viu? Git é algo muito útil e com o tempo fica muito intuitivo!

Beleza, eu já sei como criar uma branch e como andar de uma branch para outra, mas como eu faço para criar ou pegar um projeto com git???

Então, para criar um projeto com git, primeiro você precisa saber se o projeto já contém o git, para fazer isto, tem 2 formas principais:

- 1* Olhando se na raiz do projeto existe uma pasta `.git`;
- 2* No terminal, escreva qualquer comando git (como o `git branch`, por exemplo) e veja se o terminal entende, se ele entender, o seu projeto contém git, se não, provavelmente aparecerá algo com `not a git repository`.
E para pegar um projeto que já tem git??

Bom, para pegar um projeto que tem git, primeiro você precisa saber onde achar este projeto, certo? É aí que entra o Github!

**Github**

O Github nada mais é do que um site que guarda projetos git! Estes projetos são chamados de repositórios, e você pode ter repositórios públicos ou privados.Todos os repositórios que você tem acesso podem ser **clonados** ou **“forkados”**. E o que significa `clone` ou `fork`?

Antes de comentar sobre estes dois termos, tenho que explicar sobre algo chamado `remote`. Todo repositório pode ter um ou mais `remotes`, que nada mais são que link de repositórios online (como no Github) que você pode trocar informações, sendo pegar código novo ou enviar um código novo que está na sua máquina. O nome padrão do remote normalmente é `origin`, mas você pode adicionar o nome que você quiser em outros `remotes`, caso você queira fazer esta conexão.

**clone**

Com o clone, você copia o código para a sua máquina, porém o `remote` permanece o da pessoa que você clonou, ou seja, se você copiar o código do React por exemplo, o `remote` é o link do código real, do React. Como você não tem permissão para enviar código para o repositório oficial do React, fazer isto seria negado.

**fork**

Aí que entra o fork! O fork faz uma cópia daquele repositório no seu Github! Ele não copia o código para a sua máquina, mas após esta cópia, você poderá fazer um clone do seu repositório (o repositório copiado via fork) e agora o remote estará apontando para o seu Github, não mais para o Github oficial!


Agora que você sabe mais sobre estes termos, fique a vontade para fazer um clone ou um fork do repositório do projeto! ou se continuar com dúvidas, indicamos o curso de Git e Github aqui da Alura.

- Link: https://cursos.alura.com.br/course/git-github-repositorio-commit-versoes


- Exemplo:
    - react-app_54



### 55 - Instalando dependências

**Instalando dependências**

- NPM (Node Package Maneger)
```
npm install
```

- Exemplo:
    - react-app_55



### 56 - Faça como eu fiz: do clone ao start

**Faça como eu fiz: do clone ao start**

Faça um clone do repositório, instale as dependências e rode o projeto.

- Opinião do instrutor

Para clonar o repositório, devemos utilizar o comando `git clone`, apontando para o repositório oficial ou para o seu repositório, caso você tenha feito o `fork` do repositório.

```
git clone https://github.com/daniel-oliv3/organo // ou a URL do seu repositório
```

- Após isto, devemos entrar na pasta criada:

```
cd organo
```

- E instalar as dependências, com yarn:

```
yarn
```

- Ou com npm:

```
npm install
```

- Após a instalação, devemos rodar o projeto com o script start, com yarn:

```
yarn start
```

- Ou com npm:

```
npm start 
```

- Exemplo:
    - react-app_56



### 57 - O que aprendemos?

**O que aprendemos?**

- Nessa aula, você aprendeu:
  - Como clonar um projeto;
  - A diferença entre clone e fork;
  - Como instalar dependências de um projeto;
  - Como rodar um projeto.

- Exemplo:
    - react-app_57



##
### Parte 2
##


### 58 - Projeto da aula anterior

**Projeto da aula anterior**


- Exemplo:
    - react-app_58


### 59 - Biblioteca x Framework

**Biblioteca x Framework**

- React = `Biblioteca`

- Biblioteca 
    - Menor
- Framework
    - Mais robusto

- Exemplo:
    - react-app_59


### 60 - Criando aoDeletar

**Criando aoDeletar**

- Exemplo:
    - react-app_60

### 61 - Para saber mais: Closures e o map

**Para saber mais: Closures e o map**

Na aula passado, precisamos criar um bloco para que pudéssemos utilizar o `console.log`, e utilizamos chaves para criar este bloco.

Tá Luiz, mas o que isto tem a ver com o título deste para saber mais? Vamos ver o código da função .map que temos:

```js
{colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} />)}
```

Primeiro destrincharemos esta linha de código e depois falaremos especificamente sobre o que ela tem a ver com o título.

- 1* - Como estamos utilizando o `.map`, podemos deduzir que `colaboradores` é um **array**;
- 2* - O **.map** aceita uma função como parâmetro, no nosso caso utilizamos uma `arrow function` para isto;
- 3* - A `arrow function` não necessita de um nome, ou seja, ela é uma **função anônima**;
- 4* - Como não temos chaves após a `arrow(=>)`, sabemos que ela não tem um bloco de código, apenas o retorno;
- 5* - Como não temos um bloco, sabemos que o retorno dela é o componente `Colaborador`.

Beleza, agora que conseguimos ter uma visão melhor, explica o que é `closure`!

Uma closure é um bloco dentro de uma função que nos permite colocar alguma informação dentro, ou seja, é o mesmo que um “bloco”, que é o que precisamos para colocar o console.log!

Veja estes 2 códigos:

```js
<Componente onClick={() => executarFuncao()}
```

```js
<Componente onClick={() => { executarFuncao() }}
```

Eles parecem muito parecidos, mas são diferentes! A diferença é que nesta arrow function, a primeira (sem as chaves) retorna a função e a segunda só a executa!

Na prática, isto não influencia em nada nesta parte do código, mas e aqui?

```js
{colaboradores.map((colaborador, indice) => { <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} /> })}
```


O que acontece neste caso?

Neste caso, o código não funcionaria! O map necessita de um retorno, pois a diferença entre o map e o forEach é que o map muda o item de cada array, então se ele não recebe nenhum retorno, o map interpreta todos os itens como undefined, então, caso você queira utilizar um bloco (ou uma closure) dentro do map, você é obrigado a retornar o que você quer que ele mostre.

Beleza, mas no código não tá escrito return, como eu estou retornando algo que eu não digo que estou retornando?

Aí que está a magia da coisa, você só precisa dizer que está retornando algo se você precisar utilizar a closure! Caso você não queira, apenas utilizando parênteses ou simplesmente não colocando nada, você já diz que está retornando!

Veja este código:

```js
pessoas.map(pessoa=> (
 <Pessoa nome={pessoa.nome} />
))
```

Os parênteses neste caso são iguais a não colocar nada, mas ele permite que você tenha um return de mais de uma linha! Porém como não temos uma closure, podemos apenas colocar os parênteses, sem o return! Caso você queira fazer algum cálculo, pode fazer algo assim:

```js
pessoas.map(pessoa => {
  const maiorDeIdade = pessoa.idade > 18;
  return (
   <Pessoa nome={pessoa.nome} maiorDeIdade={maiorDeIdade} />
 )
})
```

Neste caso, você está utilizando o closure (as chaves) e um return com mais de uma linha (com os parênteses) de uma vez só! Agora olhe o mesmo código:

Sem closure e sem return de mais de uma linha:


```js
pessoas.map(pessoa => <Pessoa nome={pessoa.nome} maiorDeIdade={pessoa.idade > 18} />)
```

Sem closure e com return de mais de uma linha:

```js
pessoas.map(pessoa => (
 <Pessoa nome={pessoa.nome} maiorDeIdade={pessoa.idade > 18} />
))
```

Então as chaves, os parênteses ou nada têm significado neste caso, e você agora sabe de todos eles!

- Exemplo:
    - react-app_61






















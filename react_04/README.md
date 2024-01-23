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



### 9 - Faça como eu fiz: iniciando a migração

**Faça como eu fiz: iniciando a migração**


Hora de começar a migração. Comece instalando os pacotes necessários, conforme fizemos na aula "Instalando as dependências". Depois disso, gere o arquivo tsconfig.json e por fim, implemente a migração do componente Botao.

 - Opinião do instrutor

Bem começado, metade feito. Certo?

Para instalar os pacotes necessários, você pode rodar o seguinte comando no terminal (lembre-se de entrar dentro da pasta raiz do projeto, OK?):

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
- 

```
npx tsc --init
```

E, finalmente, migramos o Botão para .tsx:

```tsx
// src/componentes/Botao/index.tsx
import { ReactElement } from 'react'
import './Botao.css'

import React from 'react';

interface BotaoProps {
    children: ReactElement
}

const Botao = (props: BotaoProps) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Botao
```

- Exemplo:
    - react_app-organo_09






### 10 - O que aprendemos?

**O que aprendemos?**

Nessa aula, você aprendeu como:
- Instalar os pacotes necessários para iniciar a migração de um projeto React de JS para TS;
- Gerar o tsconfig.json a partir do script npx;
- Aplicar as configurações do jsx;
- Diferenciar arquivos js, jsx, ts e tsx.

- Exemplo:
    - react_app-organo_10


##
### Parte 2 - Migração controlada
##



### 11 - Projeto da aula anterior

**Projeto da aula anterior**


- Exemplo:
    - react_app-organo_11


### 12 - Migrar o Banner

**Migrar o Banner**

- Exemplo:
    - react_app-organo_12



### 13 - Conhecendo tipos diferentes

**Conhecendo tipos diferentes**

- habilitar no tsconfig (linha 16)
```json
"jsx": "react-jsx", 
```

- SyntheticEvent
    - Link: https://pt-br.legacy.reactjs.org/docs/events.html

- Exemplo:
    - react_app-organo_13




### 14 - Desconstrução e tipos

**Desconstrução e tipos**


- Exemplo:
    - react_app-organo_14




### 15 - Para saber mais: sobre os pacotes @types

**Para saber mais: sobre os pacotes @types**

- O que são pacotes `@types`?

Pacotes dentro do escopo @types nos permitem ter acesso uma tonelada de definições de tipo super úteis, como, por exemplo, as definições de tipo do node.js que nos permitem usar require.

Por exemplo, o pacote `@types/node` contém definições de tipo do próprio Node.js.

- Quando usar @types?

Os pacotes @types contém definições dos tipos de muitas bibliotecas, como Express, Sequelize, React entre outras. Mas verifique se o pacote que você está usando já possui os tipos incluídos antes de instalar os tipos do `@types`.

- Exemplo:
    - react_app-organo_15



### 16 - De olho nos React Hooks

**De olho nos React Hooks**

Durante uma entrevista de emprego, a líder técnica Karina te fez uma pergunta sobre um tema recorrente no nosso dia a dia: hooks:

O que são os React Hooks e para que eles, de fato, servem?

- Selecione uma alternativa

- A: É uma função que permite conectar dois ou mais estilos a um mesmo elemento HTML.


- B: É uma ferramenta de pesquisa que ajuda você a encontrar trechos específicos no seu código.


- C: Eles permitem que você possua estado local e outros recursos do React sem escrever componentes baseados em classes.
`Isso aí! Exatamente! Essa veio direto da documentação, né? Eles resolvem vários problemas já conhecidos pelo time que mantém o projeto. Você pode entender mais a fundo sobre o assunto nesse artigo oficial.`

- Links

- Motivation
    - Link: https://legacy.reactjs.org/docs/hooks-intro.html#motivation
- Hooks at a Glance
    - Link: https://legacy.reactjs.org/docs/hooks-overview.html

- Exemplo:
    - react_app-organo_16




### 17 - Faça como eu fiz: tipando as props

**Faça como eu fiz: tipando as props**

Já dizia o Linus Torvalds, falar é fácil… eu quero ver é código!

Hora de migrar os componentes Banner e o Campo de Texto. Lembre-se que começamos renomeando o arquivo para .tsx e então vamos ajustando o código de acordo com nossa necessidade.


- Opinião do instrutor

Podemos começar pelo CampoTexto:

```tsx
//  src/componentes/CampoTexto/index.tsx

import React from 'react'

import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
}

const CampoTexto = ({ aoAlterado, label, obrigatorio, placeholder, valor } : CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto
```

- E depois ajustamos o Banner:

```tsx
import './Banner.css'

import React from 'react'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    )
}

export default Banner
```

- Sem nos esquecermos do ajuste no App.js:

```js
    <Banner enderecoImagem='/imagens/banner.png'/>
```

- Exemplo:
    - react_app-organo_17




### 18 - O que aprendemos?

**O que aprendemos?**

Nessa aula, você aprendeu como:

- Configurar o jsx no tsconfig.json;
- Configurar a tipagem de funções;
- Inferir os tipos de variáveis geradas pela desconstrução das props;
- Para que servem pacotes dentro do escopo @types.


- Exemplo:
    - react_app-organo_18


##
### Parte 3 - Tipos Complexos
##


### 19 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react_app-organo_19



### 20 - Migrando o Time

**Migrando o Time**

- Campo de txt, err

- Exemplo:
    - react_app-organo_20



### 21 - Refatorando a Lista Suspensa

**Refatorando a Lista Suspensa**

- Campo de txt, err

- Exemplo:
    - react_app-organo_21


### 22 - Refatorando o Formulário

**Refatorando o Formulário**

- Exemplo:
    - react_app-organo_22



### 23 - Para saber mais: Interface vs Types

**Para saber mais: Interface vs Types**


Existem dois tipos principais para declarar a forma de um objeto: interfaces e tipos.

Eles são bem parecidos e para a maioria dos casos funcionam da mesma forma.

Ambos suportam a extensão de outras interfaces e tipos.

Os tipos fazem isso através da interseção de tipos, enquanto interfaces possuem uma palavra-chave reservada.

A equipe da Microsoft recomenda o uso de interfaces ao invés de tipos.

Uma das maiores diferenças entre tipos e interfaces é que interfaces são abertas e tipos são fechados.

Isso significa que você pode extender interfaces declarando uma segunda vez.


```tsx
interface Cachorro {
  adestrado: boolean;
}

interface Cachorro {
  cor: string;
}
// isso funciona
```

Por outro lado, esses tipos não podem ser alterados fora da própria declaração.

```tsx
type Filhote = {
  cor: string;
};

type Filhote = {
  brinquedos: number;
};
// isso não funciona
```

Dependendo dos seus objetivos essa diferença pode ser positiva ou negativa.

Como um dos melhores recursos para ver todos os casos de uso de tipos vs interfaces, vale a pena dar uma lida nessa thread do Stackoverflow

- thread do Stackoverflow
    - Link: https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220

- Exemplo:
    - react_app-organo_23



### 24 - De olho no JSX

**De olho no JSX**

Utilizamos JSX nos nossos componentes, mas será que sabemos descrever precisamente o que ele é?

Marque a alternativa que melhor descreve o JSX:

- Selecione uma alternativa

- A: É uma arquitetura que ajuda o React a implementar o fluxo de dados unidirecional.


- B: É uma ferramenta interna do React que desmonta o componente durante seu ciclo de vida.


- C: É uma extensão de sintaxe para JS utilizada para descrever como a interface do usuário deve ser.
`Isso aí! Exatamente! Sua memória tá afiadinha. O JSX é bastante parecido com o HTML, então o processo de escrever a estrutura dos elementos é bem mais tranquilo para pessoas desenvolvedoras que possuem uma boa base em HTML.`

- Exemplo:
    - react_app-organo_24



### 25 - Faça como eu fiz: migração incremental

**Faça como eu fiz: migração incremental**


Hora de evoluir nossa migração, e dessa vez vamos atacar os seguintes componentes:

CampoTexto (atualizar props)
Colaborador
Formulario
ListaSuspensa
Time
E ajustar as configs do `tsconfig.json`.

Vamos nessa? Hora do show!

- Opinião do instrutor

Dessa vez são muitas alterações, então vou te passar um gabarito diferente.

Dá uma olhada aqui no GitHub. Nesse link você consegue ver o que mudou, o que foi criado e o que foi deletado.

Se precisar de ajuda, lembre-se de usar o fórum. Eu procuro estar sempre por lá pra tentar ajuda :)



- Exemplo:
    - react_app-organo_25






### 26 - O que aprendemos?

**O que aprendemos?**

Nessa aula, você aprendeu como:
- Criar interfaces;
- Entender a diferença entre type e Interface;
- Configurar propriedades opcionais nas interfaces;
- Tipar funções;
- Configurar o jsx no `tsconfig.json`.

- Exemplo:
    - react_app-organo_26


##
### Parte 4 - Avançando nas tipagem
##


### 27 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
    - react_app-organo_27



















// import React from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Cronometro from "../components/Cronometro";
import style from "./App.module.scss"; //importando como se fosse um obj
import { useState } from "react";
import { ITarefa } from "../types/tarefa";



// --- Principal ---
function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;

// import React from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Cronometro from "../components/Cronometro";
import style from "./App.module.scss"; //importando como se fosse um obj



// --- Principal ---
function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;

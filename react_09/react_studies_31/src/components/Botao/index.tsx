import React from 'react';
import style from './Botao.module.scss';

// --- Botão ---
class Botao extends React.Component{
  render (){
      return (
        <button className={style.botao}>
          {/* {this.props.children} */}
          Adicionar
        </button>
    )
  }
}

export default Botao;

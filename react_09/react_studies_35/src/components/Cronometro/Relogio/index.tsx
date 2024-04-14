import React from 'react';
import style from './Relogio.module.scss';

const Relogio = () => {
  return (
    <>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
    </>
  )
}

export default Relogio;




/*Exemplo 1*/
// import React from 'react';

// const Relogio = () => {
//   return (
//     <React.Fragment>
//         <span>0</span>
//         <span>0</span>
//         <span>0</span>
//         <span>:</span>
//         <span>0</span>
//         <span>0</span>
//     </React.Fragment>
//   )
// }

// export default Relogio;
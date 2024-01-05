import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do CineTag"></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;

// import { Link } from 'react-router-dom';
// import logo from './logo.png';
// import styles from './Cabecalho.module.css';

// const Cabecalho = () => {
//   return (
//     <header className={styles.Cabecalho}>
//         <Link to="./">
//             <img src={logo} alt="Logo do CineTag" />
//         </Link>
//     </header>
//   )
// }

// export default Cabecalho;

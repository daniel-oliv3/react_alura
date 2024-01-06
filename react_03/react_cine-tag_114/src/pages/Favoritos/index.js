import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Cards from "components/Cards";
import styles from './Favoritos.module.css';

function Favoritos () {
  return (
    <>
      <Banner imagem='favoritos'/>
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Cards id='1' titulo='Gato bonifacio' capa='https://thecatapi.com/api/images/get?format=src&type=png'/>
      </section>
    </>
  )
}

export default Favoritos;
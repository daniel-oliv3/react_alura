import Cabecalho from 'components/Cabecalho';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Cards from 'components/Cards';
import Rodape from 'components/Rodape';
import videos from 'json/db.json';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <>
        <Cabecalho />
        <Banner imagem="home"/>
        <Titulo>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>

        <section className={styles.container}>
          {videos.map((video) => {
            return <Cards key={video.id} {...video}/>
          })}
        </section>
        <Rodape />
    </>
  )
}
export default Inicio;
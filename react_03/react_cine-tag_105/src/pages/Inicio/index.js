import Cabecalho from 'components/Cabecalho';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Cards from 'components/Cards';
import Rodape from 'components/Rodape';
// import styles from './Inicio.module.css';

function Inicio() {
  return (
    <>
        <Cabecalho />
        <Banner imagem="home"/>
        <Titulo>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <Cards id='1'titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png'/>
        <Rodape />
    </>
  )
}
export default Inicio;
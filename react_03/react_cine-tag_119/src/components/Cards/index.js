import { useFavoritosContext } from 'contextos/Favoritos';
import styles from './Cards.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesFavoritar from './desfavoritar.png';

function Cards ({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritosContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesFavoritar; 
  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <img src={icone}
          alt="Favoritar filme" 
          className={styles.favoritar}
          onClick={() => {
            adicionarFavorito({ id, titulo, capa })
          }}
        />
    </div>
  )
}

export default Cards;
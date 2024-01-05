import styles from './Cards.module.css';
import iconeFavoritar from './favoritar.png';

function Cards ({ id, titulo, capa }) {
  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <img src={iconeFavoritar} alt="Favoritar filme" className={styles.favoritar}/>
    </div>
  )
}

export default Cards;
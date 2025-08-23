// src/components/Header/Header.jsx
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Indicadores / Áudio e Vídeo</h1>
      <p className={styles.subtitle}>Congregação São Luiz</p>
    </header>
  );
};

export default Header;
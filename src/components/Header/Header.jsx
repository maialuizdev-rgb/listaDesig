// src/components/Header/Header.jsx
import styles from './Header.module.css';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.tabs}>
        <Button variant="outlined">Lista de permissões</Button>
        <Button variant="outlined">Designações</Button>
      </div>

      <div className={styles.perfil}>
        <Button variant="outlined">Perfil</Button>
      </div>
    </header>
  );
};

export default Header;
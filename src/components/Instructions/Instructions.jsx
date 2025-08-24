import styles from './Instructions.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Instructions = () => {
  return (
    <div className={styles.instructions}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif'}}>
        DESIGNAÇÕES / PERMISSOES
      </Typography>
      <div className={styles.btnActions}>
        <Button variant="contained" sx={{ mt: 2 }}>Export all data</Button>
        <Button variant="contained" sx={{ mt: 2 }}>
          <AddIcon sx={{ scale: .8 }}/> 
          Add
        </Button>
      </div>
    </div>
  );
};

export default Instructions;
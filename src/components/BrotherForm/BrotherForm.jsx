// src/components/BrotherForm/BrotherForm.jsx
import { useState, useEffect } from 'react';
import styles from './BrotherForm.module.css';

const BrotherForm = ({ onSave, onCancel, editingBrother, isEditing = false }) => {
  const [name, setName] = useState('');
  const [positions, setPositions] = useState(['Volantes']);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (editingBrother) {
      setName(editingBrother.nome);
      setPositions(editingBrother.posicoes);
      setActive(editingBrother.ativo);
    } else {
      // Reset form when not in editing mode
      setName('');
      setPositions(['Volantes']);
      setActive(true);
    }
  }, [editingBrother]);

  const handlePositionChange = (position) => {
    if (positions.includes(position)) {
      setPositions(positions.filter(p => p !== position));
    } else {
      setPositions([...positions, position]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || positions.length === 0) return;
    
    onSave({
      nome: name,
      posicoes: positions,
      ativo: active
    });
  };

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="nome">Nome do Irmão:</label>
        <input
          type="text"
          id="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome"
          required
        />
      </div>
      
      <div className={styles.formGroup}>
        <label>Posições Permitidas:</label>
        <div className={styles.checkboxGroup}>
          {['Auditório', 'Frente', 'Fundos', 'Volantes', 'Áudio', 'Leitor'].map(position => (
            <div key={position} className={styles.checkboxItem}>
              <input
                type="checkbox"
                id={`${position.toLowerCase()}-${isEditing ? 'edit' : 'new'}`}
                checked={positions.includes(position)}
                onChange={() => handlePositionChange(position)}
              />
              <label htmlFor={`${position.toLowerCase()}-${isEditing ? 'edit' : 'new'}`}>
                {position}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <label>
          Status:
          <span 
            className={`${styles.statusToggle} ${active ? styles.active : ''}`} 
            onClick={toggleActive}
          ></span>
          <span>{active ? 'Ativo' : 'Inativo'}</span>
        </label>
      </div>
      
      <div className={styles.formActions}>
        <button type="submit" className={styles.btnSuccess}>
          {isEditing ? 'Atualizar' : 'Salvar'}
        </button>
        <button type="button" className={styles.btn} onClick={onCancel}>
          {isEditing ? 'Cancelar' : 'Limpar'}
        </button>
      </div>
    </form>
  );
};

export default BrotherForm;
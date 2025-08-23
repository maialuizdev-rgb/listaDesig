// src/components/CompleteListTable/CompleteListTable.jsx
import styles from './CompleteListTable.module.css';

const CompleteListTable = ({ brothers }) => {
  const positions = ['Auditório', 'Frente', 'Fundos', 'Volantes', 'Áudio', 'Leitor'];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
          {positions.map(position => (
            <th key={position}>{position}</th>
          ))}
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {brothers.map((brother, index) => (
          <tr key={index} className={!brother.ativo ? styles.inactive : ''}>
            <td>{brother.nome}</td>
            {positions.map(position => (
              <td key={position} className={styles.checkMark}>
                {brother.posicoes.includes(position) ? '✓' : '✗'}
              </td>
            ))}
            <td>{brother.ativo ? 'Ativo' : 'Inativo'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompleteListTable;
// src/components/IndicatorsTable/IndicatorsTable.jsx
import { useState, useEffect } from 'react';
import { getMonthDays, getCurrentMonthName } from '../../utils/dateUtils';
import { drawPositions } from '../../utils/drawUtils';
import styles from './IndicatorsTable.module.css';

const IndicatorsTable = ({ brothers }) => {
  const [drawResults, setDrawResults] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    setCurrentMonth(getCurrentMonthName());
    const days = getMonthDays();
    const results = drawPositions(days, brothers);
    setDrawResults(results);
  }, [brothers]);

  const handleDrawAll = () => {
    const days = getMonthDays();
    const results = drawPositions(days, brothers);
    setDrawResults(results);
    alert('Sorteios realizados com sucesso!');
  };

  return (
    <div>
      <div className={styles.controls}>
        <button className={styles.btn} onClick={handleDrawAll}>Sortear</button>
      </div>
      
      <div className={styles.monthHeader}>{currentMonth}</div>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th>DIA</th>
            <th>AUDITÓRIO</th>
            <th>FRENTE</th>
            <th>FUNDOS</th>
            <th>VOLANTES 1</th>
            <th>VOLANTES 2</th>
            <th>AÚDIO</th>
            <th>LEITOR</th>
          </tr>
        </thead>
        <tbody>
          {drawResults.map((result, index) => (
            <tr key={index}>
              <td>{result.dia}</td>
              <td>{result.auditório}</td>
              <td>{result.frente}</td>
              <td>{result.fundos}</td>
              <td>{result.volantes1}</td>
              <td>{result.volantes2}</td>
              <td>{result.audio}</td>
              <td>{result.leitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndicatorsTable;
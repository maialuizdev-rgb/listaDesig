import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBar from '../Search/Search';
// import { getMonthDays, getCurrentMonthName } from '../../utils/dateUtils';
// import { drawPositions } from '../../utils/drawUtils';

const IndicatorsTable = ({ brothers }) => {
  const [drawResults, setDrawResults] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    // setCurrentMonth(getCurrentMonthName());
    // const days = getMonthDays();
    // const results = drawPositions(days, brothers);
    // setDrawResults(results);

    // Simulação de dados para exemplo
    setCurrentMonth('Agosto, 2025');
    setDrawResults([
      { name: 'Irmão 1', unavailableDates: ['2025-08-10', '2025-08-15'], responsabilidades: ['Responsabilidades 1', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 2', unavailableDates: [], responsabilidades: ['Responsabilidades 2', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 3', unavailableDates: [], responsabilidades: ['Responsabilidades 3', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 4', unavailableDates: ['2025-08-16', '2025-08-22'], responsabilidades: ['Responsabilidades 4', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: ['2025-08-18', '2025-08-24'], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: ['2025-08-18', '2025-08-24'], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: [], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: [], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: [], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: [], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: [], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: ['2025-08-18', '2025-08-24'], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: ['2025-08-18', '2025-08-24'], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: ['2025-08-18', '2025-08-24'], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: ['2025-08-18', '2025-08-24'], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: ['2025-08-18', '2025-08-24'], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: ['2025-08-18', '2025-08-24'], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
      { name: 'Irmão 5', unavailableDates: ['2025-08-18', '2025-08-24'], responsabilidades: ['Responsabilidades 5', 'Outras coisas'], status: 'Ativo' },
    ]);
  }, [brothers]);

  const handleDrawAll = () => {
    // const days = getMonthDays();
    // const results = drawPositions(days, brothers);
    // setDrawResults(results);
    alert('Sorteios realizados com sucesso!');
  };

  const handleEdit = (index) => {
    console.log('Editar linha:', index);
  };

  const handleDelete = (index) => {
    console.log('Deletar linha:', index);
  };

  return (
    <>
      <Box sx={{ width: '100%', p: 2 }}>
        <TableContainer component={Paper} sx={{ boxShadow: 0, borderRadius: 2, maxHeight: 480, overflowY: 'auto'}}>
          <Table>
            <TableHead sx={{ bgcolor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#1E1E1E' }}>NOME</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1E1E1E' }}>DATA INDISPONÍVEL</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1E1E1E' }}>RESPONSABILIDADES</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1E1E1E' }}>STATUS</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: '#1E1E1E' }}>AÇÕES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drawResults.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: 'bold', color: '#A7A7A7', }}>{row.name}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#B9312E' }}>{row.unavailableDates}</TableCell>
                  <TableCell>{row.responsabilidades}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell align="center">
                    <IconButton color="primary" onClick={() => handleEdit(index)} size="small">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(index)} size="small">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default IndicatorsTable;

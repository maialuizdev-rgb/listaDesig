// src/hooks/useBrothers.js
import { useLocalStorage } from './useLocalStorage';

const initialBrothers = [
  { nome: "Andrei", posicoes: ["Auditório", "Frente", "Fundos", "Volantes", "Áudio", "Leitor"], ativo: true },
  { nome: "Antônio", posicoes: ["Auditório", "Frente", "Fundos", "Volantes"], ativo: true },
  { nome: "Arino", posicoes: ["Frente", "Fundos", "Volantes", "Leitor"], ativo: true },
  { nome: "Arthur", posicoes: ["Frente", "Fundos", "Volantes", "Áudio"], ativo: true },
  { nome: "Aurélio", posicoes: ["Auditório", "Frente", "Volantes"], ativo: true },
  { nome: "Carlos Henrique", posicoes: ["Auditório", "Frente", "Fundos", "Volantes", "Áudio"], ativo: true },
  { nome: "Cláudio D.", posicoes: ["Auditório", "Frente", "Volantes", "Leitor"], ativo: true },
  { nome: "Cláudio S.", posicoes: ["Frente", "Fundos", "Volantes", "Áudio"], ativo: true },
  { nome: "Danilo", posicoes: ["Auditório", "Frente", "Volantes"], ativo: true },
  { nome: "Ederlan", posicoes: ["Auditório", "Frente", "Fundos", "Volantes"], ativo: true },
  { nome: "Eraldo", posicoes: ["Auditório", "Frente", "Volantes"], ativo: true },
  { nome: "Ericsom", posicoes: ["Frente", "Fundos", "Volantes", "Áudio", "Leitor"], ativo: true },
  { nome: "Fábio", posicoes: ["Frente", "Fundos", "Volantes", "Áudio"], ativo: true },
  { nome: "Flávio", posicoes: ["Auditório", "Frente", "Volantes"], ativo: true },
  { nome: "Guilherme Henrique", posicoes: ["Frente", "Fundos", "Volantes", "Áudio", "Leitor"], ativo: true },
  { nome: "Gustavo Henrique", posicoes: ["Frente", "Fundos", "Volantes", "Áudio"], ativo: true },
  { nome: "Itamar", posicoes: ["Frente", "Fundos", "Volantes", "Leitor"], ativo: true },
  { nome: "Jaime", posicoes: ["Auditório", "Frente", "Volantes"], ativo: true },
  { nome: "Jarede", posicoes: ["Auditório", "Frente", "Fundos", "Volantes"], ativo: true },
  { nome: "João Miguel", posicoes: ["Frente", "Fundos", "Volantes", "Áudio", "Leitor"], ativo: true },
  { nome: "Juan", posicoes: ["Frente", "Fundos", "Volantes", "Áudio"], ativo: true },
  { nome: "Laudinei", posicoes: ["Frente", "Fundos", "Volantes", "Leitor"], ativo: true },
  { nome: "Luiz Antônio", posicoes: ["Frente", "Fundos", "Volantes", "Áudio"], ativo: true },
  { nome: "Maicon", posicoes: ["Frente", "Fundos", "Volantes", "Leitor"], ativo: true },
  { nome: "Matheus", posicoes: ["Frente", "Fundos", "Volantes", "Áudio"], ativo: true },
  { nome: "Miguel", posicoes: ["Frente", "Fundos", "Volantes"], ativo: true },
  { nome: "Moisés", posicoes: ["Frente", "Fundos", "Volantes", "Leitor"], ativo: true },
  { nome: "Rodrigo", posicoes: ["Frente", "Fundos", "Volantes", "Áudio"], ativo: true },
  { nome: "Tiago", posicoes: ["Frente", "Fundos", "Volantes", "Leitor"], ativo: true }
];

export const useBrothers = () => {
  const [brothers, setBrothers] = useLocalStorage('irmaos', initialBrothers);
  
  const addBrother = (brother) => {
    setBrothers([...brothers, brother]);
  };
  
  const updateBrother = (index, updatedBrother) => {
    const updatedBrothers = [...brothers];
    updatedBrothers[index] = updatedBrother;
    setBrothers(updatedBrothers);
  };
  
  const deleteBrother = (index) => {
    const updatedBrothers = brothers.filter((_, i) => i !== index);
    setBrothers(updatedBrothers);
  };
  
  return {
    brothers,
    addBrother,
    updateBrother,
    deleteBrother
  };
};
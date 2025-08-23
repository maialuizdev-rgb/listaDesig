// src/utils/dateUtils.js
export const getMonthDays = () => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth();
  const diasNoMes = new Date(ano, mes + 1, 0).getDate();
  
  const dias = [];
  
  for (let dia = 1; dia <= diasNoMes; dia++) {
    const data = new Date(ano, mes, dia);
    const diaSemana = data.getDay();
    
    if (diaSemana === 0 || diaSemana === 4) {
      const nomeDia = diaSemana === 0 ? "Domingo" : "Quinta";
      dias.push({
        data: data,
        dia: dia,
        nome: nomeDia,
        texto: `${dia.toString().padStart(2, '0')} ${nomeDia}`,
        semana: getWeek(data)
      });
    }
  }
  
  return dias;
};

export const getWeek = (date) => {
  const dataInicio = new Date(date.getFullYear(), 0, 1);
  const dias = Math.floor((date - dataInicio) / (24 * 60 * 60 * 1000));
  return Math.ceil((dias + dataInicio.getDay() + 1) / 7);
};

export const getCurrentMonthName = () => {
  return new Date().toLocaleString('pt-BR', { month: 'long' }).toUpperCase();
};
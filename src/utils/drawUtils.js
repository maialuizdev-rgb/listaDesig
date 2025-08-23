// src/utils/drawUtils.js
export const drawPositions = (days, brothers) => {
  const resultados = [];
  const nomesPorSemana = {};
  
  // Filtrar apenas irmãos ativos
  const irmaosAtivos = brothers.filter(irmao => irmao.ativo);
  
  days.forEach(dia => {
    const semana = dia.semana;
    
    if (!nomesPorSemana[semana]) {
      nomesPorSemana[semana] = new Set();
    }
    
    // Função para sortear um irmão para uma posição específica
    const sortearParaPosicao = (posicao) => {
      // Filtrar irmãos que podem atuar na posição e não foram sorteados na semana
      let disponiveis = irmaosAtivos.filter(irmao => 
        irmao.posicoes.includes(posicao) && 
        !nomesPorSemana[semana].has(irmao.nome)
      );
      
      // Se não houver disponíveis, buscar entre todos que podem atuar na posição
      if (disponiveis.length === 0) {
        disponiveis = irmaosAtivos.filter(irmao => irmao.posicoes.includes(posicao));
        // Limpar a semana para evitar conflitos
        nomesPorSemana[semana].clear();
      }
      
      // Embaralhar e selecionar o primeiro
      disponiveis.sort(() => Math.random() - 0.5);
      return disponiveis[0]?.nome || "N/D";
    };
    
    // Sortear para cada posição
    const auditório = sortearParaPosicao('Auditório');
    const frente = sortearParaPosicao('Frente');
    const fundos = sortearParaPosicao('Fundos');
    const volantes1 = sortearParaPosicao('Volantes');
    const volantes2 = sortearParaPosicao('Volantes');
    const audio = sortearParaPosicao('Áudio');
    const leitor = sortearParaPosicao('Leitor');
    
    // Adicionar aos sorteados da semana
    nomesPorSemana[semana].add(auditório);
    nomesPorSemana[semana].add(frente);
    nomesPorSemana[semana].add(fundos);
    nomesPorSemana[semana].add(volantes1);
    nomesPorSemana[semana].add(volantes2);
    nomesPorSemana[semana].add(audio);
    nomesPorSemana[semana].add(leitor);
    
    resultados.push({
      dia: dia.texto,
      auditório,
      frente,
      fundos,
      volantes1,
      volantes2,
      audio,
      leitor
    });
  });
  
  return resultados;
};
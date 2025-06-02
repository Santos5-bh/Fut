
fetch('data/brasil.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(times => {
    const container = document.getElementById('container');
    times.forEach(time => {
      const div = document.createElement('div');
      div.className = 'time';

      div.innerHTML = `
        <h2>${time.nome}</h2>
        <img src="${time.camisa}" alt="Camisa do ${time.nome}">
        <p><strong>Fundado em:</strong> ${time.fundacao}</p>
        <p><strong>Estádio:</strong> ${time.estadio} (${time.capacidadeEstadio} lugares)</p>
        <p><strong>Cidade:</strong> ${time.cidade} - ${time.estado}</p>
        <p><strong>Técnico:</strong> ${time.tecnico}</p>
        <p><strong>Ídolos:</strong> ${time.idolos.join(', ')}</p>
        <p><strong>Escalação 2025:</strong></p>
        <ul>
          ${time.escalacao.map(jogador => `<li>${jogador}</li>`).join('')}
        </ul>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Erro ao carregar dados dos times:', error));

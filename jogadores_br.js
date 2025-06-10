fetch('data/jogadores_br.json')
  .then(response => response.json())
  .then(players => {
    const container = document.getElementById('container');

    players.forEach(player => {
      const card = document.createElement('article');
      card.className = 'card';

      card.innerHTML = `
        <img src="${player.photo}" alt="Foto de ${player.name}">
        <div class="content">
          <h2>${player.rank}. ${player.name}</h2>
          <p class="club"><strong>Clube:</strong> ${player.club}</p>
          <p class="history">${player.history}</p>
          <div class="stats">
            <span>Títulos: ${player.titles}</span>
            <span>Gols: ${player.goals}</span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erro ao carregar jogadores:', error));
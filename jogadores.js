const data = document.currentScript.dataset

fetch(data.json)
  .then(response => response.json())
  .then(players => {
    const container = document.getElementById('container');

    players.forEach(player => {
      const card = document.createElement('article');
      card.className = 'card';

      card.innerHTML = `
      <h2><span>${player.rank}.</span> ${player.name}</h2>
      <div class="container">
        <div class="container-photo">
          <img src="${player.photo}" alt="Foto de ${player.name}">
        </div>
        <div>
          <p class="club"><strong>Clube:</strong> ${player.club}</p>
          <p class="history">${player.history}</p>
          <div class="stats">
            <span>Títulos: ${player.titles}</span>
            <span>Gols: ${player.goals}</span>
          </div>
        </div>
      </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erro ao carregar jogadores:', error));
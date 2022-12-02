
const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

export const renderAllPlayers = (playerList) => {
    if (!playerList || !playerList.length) {
      playerContainer.innerHTML = '<h3>No players to display!</h3>';
      return;
    }
    let playerContainerHTML = '';
    for (let i = 0; i < playerList.length; i++) {
      const pup = playerList[i];
      let pupHTML = `
        <div class="single-player-card">
          <div class="header-info">
            <p class="pup-title">${pup.name}</p>
            <p class="pup-number">#${pup.id}</p>
          </div>
          <img src="${pup.imageUrl}" alt="photo of ${pup.name} the puppy">
          <button class="detail-button" data-id=${pup.id}>See details</button>
          <button class="delete">Delete from Roster</button>
        </div>
      `;
      playerContainerHTML += pupHTML;
    }
    playerContainer.innerHTML = playerContainerHTML;
  }
  
  
  export const renderSinglePlayer = (playerObj) => {
    if (!playerObj || !playerObj.id) {
      playerContainer.innerHTML = "<h3>Couldn't find data for this player!</h3>";
      return;
    }
  
    let pupHTML = `
      <div class="single-player-view">
        <div class="header-info">
          <p class="pup-title">${playerObj.name}</p>
          <p class="pup-number">#${playerObj.id}</p>
        </div>
        <p>Team: ${playerObj.team ? playerObj.team.name : 'Unassigned'}</p>
        <p>Breed: ${playerObj.breed}</p>
        <img src="${playerObj.imageUrl}" alt="photo of ${
      playerObj.name
    } the puppy">
        <button id="see-all">Back to all players</button>
      </div>
    `;
  
    playerContainer.innerHTML = pupHTML;
  };
  
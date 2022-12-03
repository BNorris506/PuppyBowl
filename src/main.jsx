import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Form from './Components/Form'

//Requirements
// 1. See a list of each puppy competing in the bowl.
// 2. Click a "See Details" button or something similar on each puppy that will lead you 
//    to another page view with specific details on that puppy, such as owner and team name.
// 3. Search for a specific puppy in a search bar and see a new list with only puppies with names that match the text in the search bar.




// const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players'
// const playerContainer = document.getElementById('all-players-container');
// const newPlayerFormContainer = document.getElementById('new-player-form');
// console.log(playerContainer)

// const fetchAllPlayers = async () => {
//   try {
//       const response = await fetch(APIURL);
//       const result = await response.json();
//       if (result.error) {
//           throw result.error;
//       }
//       return result.data.players;
//     } catch (error) {
//       console.error('Uh oh, trouble fetching players!', error);
//   }
// };

// const fetchSinglePlayer = async (playerId) => {
// try {
//     const response = await fetch(`${APIURL}players/${playerId}`);
//     const result = await response.json();
//     if (result.error) {
//         throw result.error;
//     }
//     return result.data.player;
//   } catch (error) {
//     console.error('Uh oh, trouble fetching players!', error);
//   }
// };

// const renderAllPlayers = (playerList) => {
//   if (!playerList || !playerList.length) {
//     playerContainer.innerHTML = '<h3>No players to display!</h3>';
//     return;
//   }
//   let playerContainerHTML = '';
//   for (let i = 0; i < playerList.length; i++) {
//     const pup = playerList[i];
//     let pupHTML = `
//       <div class="single-player-card">
//         <div class="header-info">
//           <p class="pup-title">${pup.name}</p>
//           <p class="pup-number">#${pup.id}</p>
//         </div>
//         <img src="${pup.imageUrl}" alt="photo of ${pup.name} the puppy">
//         <button class="detail-button" data-id=${pup.id}>See details</button>
//         <button class="delete">Delete from Roster</button>
//       </div>
//     `;
//     playerContainerHTML += pupHTML;
//   }
//   playerContainer.innerHTML = playerContainerHTML;
// }


// export const renderSinglePlayer = (playerObj) => {
//   if (!playerObj || !playerObj.id) {
//     playerContainer.innerHTML = "<h3>Couldn't find data for this player!</h3>";
//     return;
//   }

//   let pupHTML = `
//     <div class="single-player-view">
//       <div class="header-info">
//         <p class="pup-title">${playerObj.name}</p>
//         <p class="pup-number">#${playerObj.id}</p>
//       </div>
//       <p>Team: ${playerObj.team ? playerObj.team.name : 'Unassigned'}</p>
//       <p>Breed: ${playerObj.breed}</p>
//       <img src="${playerObj.imageUrl}" alt="photo of ${
//     playerObj.name
//   } the puppy">
//       <button id="see-all">Back to all players</button>
//     </div>
//   `;

//   playerContainer.innerHTML = pupHTML;
// };


// //   //*************** TEST FUNCTIONS */
// export const testAllFunctions = async () => {
//     const players = await fetchAllPlayers()
//     renderAllPlayers(players);
//     fetchSinglePlayer(players);
//     console.log("I'm working and here is the proof: ")
// }

// testAllFunctions();

//************************************ */



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
    <App />
  </React.StrictMode>
)
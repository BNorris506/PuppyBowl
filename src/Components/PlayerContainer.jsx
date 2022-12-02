import React, {useState, useEffect} from 'react';

const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players'

// const test = async () => {
//     try {
//     const response = await fetch(APIURL);
//     const result = await response.json();
//     if (result.error) {
//         throw result.error;
//     }
//     console.log(result.data.players);
//     return result.data.players;
//   } catch (error) {
//     console.error('Uh oh, trouble fetching players!', error);
// }
// };

const PlayerContainer = () => {
    const [player, setPlayer] = useState([])
}

export default PlayerContainer;

//Store players as state
//Use useEffect to render/set players to all from API call 
//MAP players 
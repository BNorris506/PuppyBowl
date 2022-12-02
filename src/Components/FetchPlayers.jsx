import React from 'react';

const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players'


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        const result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result.data.players;
      } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
    }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
      const response = await fetch(`${APIURL}players/${playerId}`);
      const result = await response.json();
      if (result.error) {
          throw result.error;
      }
      return result.data.player;
    } catch (error) {
      console.error('Uh oh, trouble fetching players!', error);
    }
};
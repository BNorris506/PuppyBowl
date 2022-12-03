import React, {useState, useEffect} from 'react';

const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players'



const SinglePlayer= (props) => {
const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [puppy, setPuppy] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players${idNumber}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPuppy(result.data.players);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    //   <div id='all-players-container'>
          <div key={puppy.id} className="single-player-card">
              <div className="header-info"> 
              <p className="pup-title">{puppy.name}</p>
                <p className="pup-number">{puppy.id}</p>
              </div>
              <img src={puppy.imageUrl}/>
              <button className="detail-button" data-id={puppy.id} onClick={null}>See Details</button>
              {/* <button className="delete-button" onClick={null}>Remove Player</button> */}
            </div>
        )
    }
}

export default PlayerContainer;

//Store players as state
//Use useEffect to render/set players to all from API call 
//MAP players 
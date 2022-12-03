import React, {useState, useEffect} from 'react';

const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players'



const SinglePlayer= (props) => {
    const { selectedContact } = props;
    const {
        name,
        email,
        phone,
        address: { street, city, zipcode },
        company: { name: cName },
        } = selectedContact;
      
        return (
          <div id='single-contact'>
            <div id='contact-info'>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <div>
                Address:
                <p>
                  Street: {street}
                  <br />
                  City/Zip: {city} {zipcode}
                </p>
              </div>
              <p>Company: {cName}</p>
            </div>
          </div>
        );
      };

export default PlayerContainer;

//Store players as state
//Use useEffect to render/set players to all from API call 
//MAP players 
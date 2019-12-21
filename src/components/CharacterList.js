import React, { useEffect, useState } from "react";
import axios from "axios";
import {randomKeyNumber} from './Styles';
import CharacterCard from './CharacterCard';

export default function CharacterList({endpoint, setComponentState}) {
  const [theState, setTheState] = useState({});
  useEffect(() => {
    axios.get(endpoint)
    .then(function (response) {
      setTheState(response.data.results);
      setComponentState(response.data.result);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log("finally")
    });
    return () => {
      console.log("goodbye!");
    }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [endpoint, setComponentState]);
  return <section className="character-list">
          {Object.keys(theState).map(cartoonCharacter => <CharacterCard key={`character-card-${cartoonCharacter}-${randomKeyNumber()}`} cardInfo={theState[cartoonCharacter]}/> )}
         </section>
}

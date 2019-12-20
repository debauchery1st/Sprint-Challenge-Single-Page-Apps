import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  // const [charList, setCharList] = useState([]);
  const [theState, setTheState] = useState({});
  useEffect(() => {
    axios.get(props.endpoint)
    .then(function (response) {
      setTheState(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
    return () => {
      console.log("goodbye!");
    }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.endpoint]);

  return (
    <section className="character-list">
      {() => Object.keys(theState).map(key => <p> {theState[key]} </p>)}
      {Object.keys(theState).map(cartoonCharacter => <CharacterCard key={`card-${cartoonCharacter}`} props={props} cardInfo={theState[cartoonCharacter]} / >) }
    </section>
  );
}

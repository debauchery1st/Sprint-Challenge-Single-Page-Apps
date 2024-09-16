import React, { useEffect, useState } from "react";
import axios from "axios";

import {randomKeyNumber} from './Styles';
import LocationCard from './LocationCard';

export default function LocationList({endpoint, setComponentState}) {
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
  return <section className="location-list">
          {Object.keys(theState).map(cartoonLocation => <LocationCard key={`Location-card-${cartoonLocation}-${randomKeyNumber()}`} cardInfo={theState[cartoonLocation]}/> )}
         </section>
}


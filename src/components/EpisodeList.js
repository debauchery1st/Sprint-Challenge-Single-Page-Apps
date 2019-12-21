import React, { useEffect, useState } from "react";
import axios from "axios";
import {randomKeyNumber} from './Styles';

import EpisodeCard from './EpisodeCard';

export default function EpisodeList({endpoint, setComponentState}) {
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
  return <section className="episode-list">
          {Object.keys(theState).map(cartoonEpisode => <EpisodeCard key={`Episode-card-${cartoonEpisode}-${randomKeyNumber()}`} cardInfo={theState[cartoonEpisode]}/> )}
         </section>
}


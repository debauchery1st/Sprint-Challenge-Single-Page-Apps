import React from "react";
import {randomKeyNumber} from './Styles';

import {UL, LI, IMG} from './Styles';

export default function EpisodeCard(props) {
  const {name, air_date, episode, characters, url, created} = props.cardInfo;
  return (
    <UL>
        <LI key={`${name}-${randomKeyNumber()}`}>{name}</LI>
        <LI key={`${air_date}-${randomKeyNumber()}`}>air date: {air_date}</LI>
        <LI key={`${created}-${randomKeyNumber()}`}>created: {created}</LI>
        <LI key={`summary-${randomKeyNumber()}`}>summary: {episode}</LI>
        <LI key={`characters-${randomKeyNumber()}`}>starring: {characters}</LI>
        <LI key={`url-${randomKeyNumber()}`}>url: {url}</LI>
    </UL>
  );
}

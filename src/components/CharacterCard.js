import React from "react";
import {UL, LI, IMG, randomKeyNumber} from './Styles';

export default function CharacterCard(props) {
  const cardInfo = props.cardInfo;
  console.log(Object.keys(cardInfo))
  const showUser = [cardInfo.name, cardInfo.species, cardInfo.status];
  return <UL>
    <IMG src={cardInfo.image}></IMG>
    {showUser.map((info, idx) => <LI key={`${cardInfo.name}-${randomKeyNumber()}`}>{info}</LI>)}
    </UL>;
}

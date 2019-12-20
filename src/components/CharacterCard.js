import React from "react";
import styled from 'styled-components';

const UL = styled.ul`
`;
const LI = styled.li`
`;

export default function CharacterCard(props) {
  const cardInfo = props.cardInfo;
  console.log(Object.keys(cardInfo))
  const showUser = [cardInfo.name, cardInfo.species, cardInfo.status];

  return <UL>{showUser.map((info) => <LI>{info}</LI>)}</UL>;
}

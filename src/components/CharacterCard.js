import React from "react";
import styled from 'styled-components';

const UL = styled.ul`
`;
const LI = styled.li`
`;
const IMG = styled.img`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  :hover {
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 7px 6px rgba(0, 0, 0, 0.22);
  }
`;

export default function CharacterCard(props) {
  const cardInfo = props.cardInfo;
  console.log(Object.keys(cardInfo))
  const showUser = [cardInfo.name, cardInfo.species, cardInfo.status];
  return <UL>
    <IMG src={cardInfo.image}></IMG>
    {showUser.map((info) => <LI>{info}</LI>)}
    </UL>;
}

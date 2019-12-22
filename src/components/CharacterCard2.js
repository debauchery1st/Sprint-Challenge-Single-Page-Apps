import React from 'react';
import style from 'styled-components';
import {UL, IMG, randomKeyNumber} from './Styles';

export default function CharacterCard2(props){
  const width = (!props.width) ? '20rem':props.width; // set a default width
  const height = (!props.height) ? '24rem':props.height;  // set a default height
  const cardInfo = props.cardInfo;
  const showUser = [cardInfo.name, cardInfo.species, cardInfo.status];
  const backBkg = {alive: "#5f9fdd", dead: "#000", unknown: "purple"}[cardInfo.status.toLowerCase()] || "brown";
  const CardContainer = style.div`
  display: inline-block;
  opacity: 90%;
  margin: 0 auto;
  padding: 1rem;
  `;

  const Card = style.div`
    position: relative;
    width: ${width};
    height: ${height};
    transition: all 1s ease;
    transform-style: preserve-3d;
    :hover, :active {
      transform: rotateY(180deg);
    }
  `;

  const CardFront = style.div`
    position: absolute;
    background: #fff;
    top: 0;
    left: 0;
    width: ${width};
    height: ${height};
    border-radius: 5px;
    color: #black;
    box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    font-size: 2rem;
  `;
  const CardBack = style.div`
    position: absolute;
    background: ${backBkg};
    top: 0;
    left: 0;
    width: ${width};
    height: ${height};
    border-radius: 5px;
    color: #fbfffe;
    box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.4), 0 17px 17px 0 rgba(0, 0, 0, 0.20);
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transform: rotateY(180deg);
    `;

  const CardFrontText = style.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    font-size: 1.2rem;
  `;

  const CardBackText = style.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    font-size: 1.2rem;
  `;

  const LI = style.li`
    display: flex;
    font-size: .8rem;
  `;
  return(
    <CardContainer>
    <Card>
      <CardFront>
        <CardFrontText><IMG src={cardInfo.image}></IMG></CardFrontText>
        <br />
        <CardFrontText>{cardInfo.name}</CardFrontText>
      </CardFront>
      <CardBack status={cardInfo.status}>
        <CardBackText>
            <IMG src={cardInfo.image} width="50%" />
            <UL>{showUser.map((info, idx) => <LI key={`${cardInfo.name}-${randomKeyNumber()}`}>{info}</LI>)}</UL>
        </CardBackText>
      </CardBack>
    </Card>
  </CardContainer>
  );
}

import React from "react";
import styled from 'styled-components';

const H1 = styled.h1`
  display: block;
  font-family: 'Letter Gothic', sans-serif;
  font-weight: 500;
  letter-spacing: -.1rem;
  text-transform: uppercase;
  word-spaceing: -.3rem;
`;

const IMG = styled.img`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  :hover {
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 7px 6px rgba(0, 0, 0, 0.22);
  }
`;
const DIV = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <H1>Welcome to the ultimate fan site!</H1>
        <DIV>
          <IMG
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <IMG
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt="morty"
          />
        </DIV>
      </header>
    </section>
  );
}

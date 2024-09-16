import React from "react";
import styled from 'styled-components';

const H1 = styled.h1`
  display: block;
  font-family: 'Letter Gothic', sans-serif;
  font-weight: 1000;
  opacity: 90%
  letter-spacing: -.1rem;
  text-transform: uppercase;
  word-spaceing: -.3rem;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <H1 className="ui center">Rick &amp; Morty Fan Page</H1>
    </header>
  );
}

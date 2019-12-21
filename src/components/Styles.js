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

const randomPigment = () => `${Math.floor(Math.random() * 255)}`;

const randomColor = () => [
    randomPigment, 
    randomPigment, 
    randomPigment].map(f=>f());

const randomKeyNumber = () => randomColor().join(""); // more randome than just 1 call?

export {UL, LI, IMG, randomKeyNumber}

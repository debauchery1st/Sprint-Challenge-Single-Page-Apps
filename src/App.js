import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';

import axios from 'axios';

import styled from 'styled-components';

const NAV = styled.div`
`;

const NAVIGATE = styled.button`
  font-family: 'Letter Gothic', sans-serif;
  text-transform: uppercase;
  word-spaceing: -.3rem;
  opacity: 70%;
  background-color: inherit;
  :hover, :active {
    opacity: 100%;
  }
  padding: .5rem;
  border: none;
`;

export default function App() {
  const baseURL = 'https://rickandmortyapi.com/api/';
  // const baseURL = 'https://rick-api.herokuapp.com/api/';
  // const [apiData, setApiData] = useState({})
  const [navInfo, setNavInfo] = useState({
    characters: '',
    locations: '',
    episodes: ''
  })

  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(()=> {
    axios.get(baseURL)
    .then(function (response) {
      // handle success
      setNavInfo(response.data);
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      console.log("finally");
      // always executed
    });
  }, []);
  
  const currentPageNav = document.getElementById(`nav-${currentPage}`);
  if (!currentPage === null) currentPageNav.style.border = "1px dashed black";

  useEffect(() => {
    console.log(currentPage);    
  }, [currentPage]);

  return (
    <main>
      <NAV id="navbar">
        {<NAVIGATE id={`nav-home`} onClick={() =>setCurrentPage("home")} key="nav-home">Home</NAVIGATE>}
        {Object.keys(navInfo).map((key) => <NAVIGATE onClick={() =>setCurrentPage(key)} id={`nav-${key}`} key={`nav-${key}`}>{key}</NAVIGATE>)}
      </NAV>
      <Header />
      {

      }
      <WelcomePage />
    </main>
  );
}

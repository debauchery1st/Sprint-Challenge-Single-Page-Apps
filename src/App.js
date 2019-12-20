import React, {useState, useEffect} from "react";
import {Switch, Route, NavLink, useHistory} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

import axios from 'axios';

import styled from 'styled-components';

const NAV = styled.div`
`;

export default function App() {
  const history = useHistory();
  const baseURL = 'https://rickandmortyapi.com/api/';
  // const baseURL = 'https://rick-api.herokuapp.com/api/'; // backup URL
  const [currentPage, setCurrentPage] = useState("Home");
  const [componentState, setComponentState] = useState({});
  const [navInfo, setNavInfo] = useState({
    characters: '',
    locations: '',
    episodes: ''
  });
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
    return ()=>"goodbye!";
  }, []);  
  const historyBook = {
    home: "/",
    characters: "/characters"
  }
  useEffect(() => {
    console.log(currentPage);
    history.push(historyBook[currentPage] || "/");
  }, [currentPage]);

  return (
    <main>
      <NAV id="navbar">
        {<NavLink className="navlink" onClick={e =>{
          e.preventDefault();
          setCurrentPage("home");
        }
        } id="nav-home" key="nav-home" to="/">home</NavLink>}
        {Object.keys(navInfo).map((key) => 
        <NavLink className="navlink" onClick={e =>{
          e.preventDefault();
          setCurrentPage(key);
        }
        } id={`nav-${key}`} key={`nav-${key}`} to={`/${key}`}>{key}</NavLink>)}
      </NAV>
      <Header />
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/characters">
          <CharacterList history={history} endpoint={navInfo.characters} componentState={componentState} setComponentState={setComponentState} / >
        </Route>
      </Switch>
    </main>
  );
}

import React, {useState, useEffect} from "react";
import {Switch, Route, NavLink, useHistory} from 'react-router-dom';

import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard2';
import SearchForm from './components/SearchForm';
import LocationList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';

import axios from 'axios';

import styled from 'styled-components';

const NAV = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export default function App() {
  const history = useHistory();
  const baseURL = 'https://rickandmortyapi.com/api/';
  // const baseURL = 'https://rick-api.herokuapp.com/api/'; // backup URL
  const [currentPage, setCurrentPage] = useState("home");
  const [charListState, setCharListState] = useState({});
  const [locationListState, setLocationListState] = useState({});
  const [episodeListState, setEpisodeListState] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [navInfo, setNavInfo] = useState({
    characters: '',
    locations: '',
    episodes: ''
  });
  const [toggle, setToggle] = useState(false);
  //
  const navMap = {
    home: "/",
    characters: "/characters",
    locations: "/locations",
    episodes: "/episodes"
  };
  const nextPage = navMap[currentPage] || "/";

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
    });
    return ()=>"goodbye!";
  }, []);

  useEffect(() => {
    if (toggle) {
      // debugger
      setToggle(false);
      history.push(nextPage);
    }
  }, [toggle, history, nextPage]);

  // const loadPage = () => history.push(nextPage);
  const clearResults = () => setSearchResults([]);
  useEffect(() => {
    clearResults();
    setToggle(true);
  }, [nextPage]);

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
      <SearchForm componentState={charListState} endpoint={navInfo.characters} setSearchResults={setSearchResults}/>
      <Header />
      <div className="search-results">
      {searchResults.map(cartoonCharacter => <CharacterCard key={`card-${cartoonCharacter.name}`} cardInfo={cartoonCharacter} / >)}
      </div>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/characters">
          <CharacterList
            history={history} 
            endpoint={navInfo.characters} 
            componentState={charListState} 
            setComponentState={setCharListState} / >
        </Route>
        <Route path="/locations">
          <LocationList
            history={history}
            endpoint={navInfo.locations}
            componentState={locationListState} 
            setComponentState={setLocationListState} / >
        </Route>
        <Route path="/episodes">
          <EpisodeList
            history={history}
            endpoint={navInfo.episodes}
            componentState={episodeListState} 
            setComponentState={setEpisodeListState} / >
        </Route>
      </Switch> 
    </main>
  );
}

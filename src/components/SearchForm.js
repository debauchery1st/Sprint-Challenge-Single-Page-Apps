import React, { useState, useEffect } from "react";
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
export default function SearchForm({endpoint, setComponentState, setSearchResults}) {
  const [searchFor, setSearchFor] = useState("");
  const [theState, setTheState] = useState({});
  useEffect(() => {
    axios.get(endpoint)
    .then(function (response) {
      setTheState(response.data.results);
      // setComponentState(response.data.result);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
    return () => {
      console.log("thanks for searching with Rick and Morty!");
    }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [endpoint, setComponentState]);

  function changeHandler(e) {
    setSearchFor(e.target.value);
    // console.log(`searching for : ${e.target.value}`)
  }
  function onSumbitHandler(e) {
    const resultList= [];
    // debugger
    // console.log(`searching for : ${searchFor}!!!`);
    theState.forEach(character =>  {
      if (character.name.toLowerCase().includes(searchFor.toLowerCase())) resultList.push(character)
    });
    // console.log(resultList);
    setSearchResults(resultList)
  }

  return (
    <section className="search-form">
     <Formik onSubmit={onSumbitHandler} initialValues={{search: ""}}>
      <Form>
        <Field placeholder="search" name="search" type="text" onChange={changeHandler} value={searchFor}/>
      </Form>
     </Formik>
    </section>
  );
}

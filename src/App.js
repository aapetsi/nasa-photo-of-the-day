import React, { useState, useEffect } from "react";
import styled from "styled-components";

import POD from "./components/POD";
import SearchBox from "./components/SearchBox";

const WrapperDiv = styled.div`
  margin: 10px auto;
  width: 80%;
  font-family: "Chilanka", cursive;
  border: 2px solid purple;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState({});
  // https://lambda-github-api-server.herokuapp.com/
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => res.json())
      .then(data => {
        let imageURL = data;
        setPictureOfTheDay(imageURL);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleFormSubmit = e => {
    e.preventDefault();
    let queryDate = e.target.date.value;
    // get picture from nasa api
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${queryDate}`
    )
      .then(res => res.json())
      .then(data => {
        let imageURL = data;
        setPictureOfTheDay(imageURL);
      });
    console.log(e.target.date.value);
  };

  return (
    <WrapperDiv>
      <SearchBox handleFormSubmit={handleFormSubmit} />
      <POD data={pictureOfTheDay} />
    </WrapperDiv>
  );
};

export default App;

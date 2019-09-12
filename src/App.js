import React, { useState, useEffect } from "react";
import styled from "styled-components";

import POD from "./components/POD";

const WrapperDiv = styled.div`
  margin: 10px auto;
  width: 80%;
  font-family: "Chilanka", cursive;
  border: 2px solid purple;
  border-radius: 30px;
`;

const App = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState({});
  // https://lambda-github-api-server.herokuapp.com/
  useEffect(() => {
    fetch("https://lambda-github-api-server.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        let imageURL = data;
        setPictureOfTheDay(imageURL);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <WrapperDiv>
      <POD data={pictureOfTheDay} />
    </WrapperDiv>
  );
};

export default App;

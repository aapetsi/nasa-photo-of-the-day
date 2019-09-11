import React, { useState, useEffect } from "react";
import "./App.css";

import POD from "./components/POD";

const App = () => {
  const [, setPictureOfTheDay] = useState("");

  useEffect(() => {
    fetch("https://lambda-github-api-server.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        let imageURL = data.url;
        setPictureOfTheDay(imageURL);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <POD />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p>
    </div>
  );
};

export default App;

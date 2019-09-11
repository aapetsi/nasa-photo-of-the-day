import React, { useState, useEffect } from "react";
import "./App.css";

import POD from "./components/POD";

const App = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState({});

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

  return (
    <div className="App">
      <POD data={pictureOfTheDay} />
    </div>
  );
};

export default App;

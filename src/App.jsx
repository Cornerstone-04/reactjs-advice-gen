import React, { useState, useEffect } from "react";
// import axios from "axios";

import "./App.scss";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

const App = () => {
  const [advice, setAdvice] = useState([]);

  const getAdvice =  async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()
// console.log(data);
    setAdvice(data.slip);
  };

  useEffect(()=> {
      getAdvice()
  },[])

  return (
    <div className="app">
      <h1>Advice #{advice.id}</h1>
      <p>{advice.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>

      <div>
        <button onClick={getAdvice}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import reactDom from "react-dom";

export default function Weather({ city, temperature }) {
  {

    /*function showFahrenheit(event) {
    event.preventDefault();
    alert("Convert Temperature");
    let ftemperature = (temperature * 9) / 5 + 32;
    alert(`The temperature in fahrenheit is ${ftemperature}`);
  }*/
 
  }
  function showFahrenheit(event) {
    event.preventDefault();
    alert("Coming Soon");
  }
  return (
    <p>
      <button onClick={showFahrenheit}>Current Temperature</button>
      <br />
      <br />

      {/*Weather in {city} is {temperature} °C |{" "}
      <a href="/" onClick={showFahrenheit}>
        F
      </a>*/}

    </p>
  );
}


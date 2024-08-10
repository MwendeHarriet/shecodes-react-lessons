import React from "react";
import reactDom from "react-dom";

export default function Forecast() {
  function showForecast(event) {
    event.preventDefault;
    alert("Forecast feature is not ready yet.");
    alert;
  }
  return (
    <a onClick={showForecast} href="">
      See Forecast
    </a>
  );
}

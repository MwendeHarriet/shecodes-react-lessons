import React from "react";

export default function Weather({ city, temperature }) {
  function fahrenheitTemperature() {
    return (temperature * 9) / 5 + 32;
  }
  return (
    <div>
      The temperature in {city} is {temperature}°C and {fahrenheitTemperature()}
      °F
    </div>
  );
}

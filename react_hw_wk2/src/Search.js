import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
    setTemperature("20°C");
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={updateCity}
        placeholder="Enter city name"
      />
      {temperature && <p>{`It is ${temperature} in ${city}.`}</p>}
      <input type="submit" value="Search" />
    </form>
  );
}

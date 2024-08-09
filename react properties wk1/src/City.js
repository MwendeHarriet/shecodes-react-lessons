import React from "react";
/*
export default function City(props) {
  return <div>It is {props.value}°C in {props.city}</div>;
}*/

export default function City({ value, city }) {
  return (
    <div>
      It is {value}°C in {city}.
    </div>
  );
}

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./DogDetails.css"

function DogDetails({ dogs }) {
  const location = useLocation();
  const locationName = location.pathname.split('/')[2]
  const dog = dogs.filter((d) => {
    return d.name.toLowerCase() === locationName
  })

  return (
    dog.map(d => (
      <div>
        <img src={d.src} alt={d.name}></img>
        <h2>{d.name}</h2>
        <h3>{d.age} years old</h3>
        <ul>
          {d.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>
      </div>
    ))
  );
}

export default DogDetails;
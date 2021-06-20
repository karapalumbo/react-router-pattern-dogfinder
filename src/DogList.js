import React from "react";
import { Link } from "react-router-dom";
import './DogList.css'

function DogList({ dogs }) {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Here's a few dogs for you to love.</p>
        {dogs.map(dog => (
          <div key={dog.name}>
            <img className="dogPhoto" src={dog.src} alt={dog.name}></img>
            <h4>
                <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h4>
            
          </div>
        ))}
    </div>
  );
}


export default DogList;
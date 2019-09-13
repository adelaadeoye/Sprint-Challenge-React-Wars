import React, { useState, useEffect } from "react";
import Example from "./ContentTable";
import axios from "axios";

export default function Contents() {
  const [starWar, setStarWar] = useState([]);
  const [prevstarWar, setPrevStarWar] = useState("");
  const [nxtstarWar, setNxtStarWar] = useState("");

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
    .then(response=>{
        const result=response.data;
        console.log(result);
        const data= result.results;
        console.log(data)
        setStarWar(data)
        const next=response.data.next;
        const previous=response.data.previous;
        setNxtStarWar(next);
        setPrevStarWar(previous);

    })
    .catch(error=>{
        console.log("The data was not returned",error)
    });
    
  },[]);

 
  return (
      
        starWar.map(item => {
          return (<tr> <Example key={item.name} name={item.name} skinColor={item.skin_color} films={item.films.length} mass={item.mass} eyeColor={item.eye_color} birthYear={item.birth_year} height={item.height} species={item.species.length} starships={item.starships.length} vehicles={item.vehicles.length} 
           />;
           </tr>)
        })
      
  );

}

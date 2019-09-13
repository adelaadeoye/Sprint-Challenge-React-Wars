import React, { useState, useEffect } from "react";
import DatatablePage from "./ContentTable";
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
        const data= result.results.map(obj=>{
            return{
                name:obj.name,
                skin_color:obj.skin_color,
                mass:obj.mass,
                eye_color:obj.eye_color,
                birth_year:obj.birth_year,
                height:obj.height,
                species:obj.species,
                films:obj.films.length,
                starships:obj.starships.length,
                vehicles:obj.vehicles.length
            }
        });
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
      
        
      <DatatablePage  
           character={starWar}
           />
           
    
  )
  

}

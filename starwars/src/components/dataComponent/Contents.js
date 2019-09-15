import React, { useState, useEffect } from "react";
import DatatablePage from "./ContentTable";
import axios from "axios";
export default function Contents() {
  const [starWar, setStarWar] = useState([]);
  useEffect(() => {
    let mergeData = [];

    let linksArr = [];
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(Math.ceil(res.data.count / 10));
        const noLinks = Math.ceil(res.data.count / 10);
        for (let i = 1; i <= noLinks; i++) {
          linksArr.push(`https://swapi.co/api/people/?page=${i}`);
        }
        axios
          .all(linksArr.map(l => axios.get(l)))
          .then(
            axios.spread(function(...response) {
              response.forEach(item => {
                const result = item.data;
                const items = result.results;
                console.log(result);
                items.forEach(i => {
                  mergeData.push(i);
                });
                const data = mergeData.map(obj => {
                  return {
                    name: obj.name,
                    skin_color: obj.skin_color,
                    mass: obj.mass,
                    eye_color: obj.eye_color,
                    birth_year: obj.birth_year,
                    height: obj.height,
                    species: obj.species,
                    films: obj.films.length,
                    starships: obj.starships.length,
                    vehicles: obj.vehicles.length
                  };
                });
                // console.log(mergeData);
                setStarWar(data);
              });
            })
          )
          .catch(error => {
            console.log("The data was not returned", error);
          });
        // console.log(linksArr)
      })
      .catch(error => {
        console.log("No data recieve");
      });
  }, []);

  return <DatatablePage character={starWar} />;
}

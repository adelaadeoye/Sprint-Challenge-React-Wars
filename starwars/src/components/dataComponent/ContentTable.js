import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Table } from 'reactstrap';

export default  function Example (props) {
      return (
        <Table key={props.name}>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Name</th>
              <th>Birth Year</th>
              <th>Eye Color</th>
              <th>Skin Color</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Films Acted In</th>
              <th>No of Species</th>
              <th>No of Starships</th>
              <th>No of Vehicles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{props.name}</td>
              <td>{props.birthYear}</td>
              <td>{props.eyeColor}</td>
              <td>{props.skinColor}</td>
              <td>{props.height}</td>
              <td>{props.mass}</td>
              <td>{props.films}</td>
              <td>{props.species}</td>
              <td>{props.starships}</td>
              <td>{props.vehicles}</td>
            </tr>
            
          </tbody>
        </Table>
      );
    }
  





























// const DatatablePage = props => {
    
//   const data = {
//     columns: [
//       {
//         label: 'Name',
//         field: 'name',
//         sort: 'asc',
//         width: 270
//       },
//       {
//         label: 'Birth  Year',
//         field: 'birth_year',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Eye Color',
//         field: 'eye_color',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Skin Color',
//         field: 'skin_color',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Height',
//         field: 'height',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Mass',
//         field: 'mass',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Films Acted',
//         field: 'films',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'No of Species',
//         field: 'species',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'No of Starships',
//         field: 'starships',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'No of Vehicles',
//         field: 'vehicles',
//         sort: 'asc',
//         width: 100
//       }
//     ],
//     rows: [
//       {
//         name: props.name,
//         birth_year: props.birthYear,
//         eye_color: props.eyeColor,
//         skin_color: props.skinColor,
//         height: props.height,
//         mass: props.mass,
//         films: props.films,
//         species: props.species,
//         starships: props.starships,
//         vehicles: props.vehicles
//       }
//     ]
//   };

//   return (
//     <MDBDataTable
//       striped
//       bordered
//       hover
//       data={data}
//     />
//   );
// }

// export default DatatablePage;
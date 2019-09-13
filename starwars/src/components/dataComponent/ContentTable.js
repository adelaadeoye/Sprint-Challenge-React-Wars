import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = props => {
    
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Birth  Year',
        field: 'birth_year',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Eye Color',
        field: 'eye_color',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Skin Color',
        field: 'skin_color',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Height',
        field: 'height',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Mass',
        field: 'mass',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Films Acted',
        field: 'films',
        sort: 'asc',
        width: 100
      },
      {
        label: 'No of Species',
        field: 'species',
        sort: 'asc',
        width: 100
      },
      {
        label: 'No of Starships',
        field: 'starships',
        sort: 'asc',
        width: 100
      },
      {
        label: 'No of Vehicles',
        field: 'vehicles',
        sort: 'asc',
        width: 100
      }
    ],
    rows:props.character
    
  };
  console.log(props.character)
  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default DatatablePage;
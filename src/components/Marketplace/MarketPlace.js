import React, { useState, useEffect } from 'react';
import './MarketPlace.css';


import gql from 'graphql-tag';
import { graphql,compose } from 'react-apollo';

const InventoryList = gql`
query getItemById {
  Inventory {
    id
    title
  }
}
`


const MarketPlace = () => {
  return (
    <div
    >
    <h1>MarketPlace</h1>
    
    </div>
  );
  };

export default MarketPlace;

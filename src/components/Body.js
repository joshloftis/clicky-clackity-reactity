import React from 'react';
import Card from './Card';
import colors from '../colors.json';

const Body = props => (
  <main className="container card-area">
    <div className="row">
      {
        colors.map(color => <Card key={color.id} {...color} />)
      }
    </div>
  </main>
);

export default Body;

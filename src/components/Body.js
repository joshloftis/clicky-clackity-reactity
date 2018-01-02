import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { shuffleArray } from '../helpers';

const Body = function BodyOfApp(props) {
  shuffleArray(props.data);
  return (
    <main className="container card-area">
      <div className="row">
        {
          props.data.map(color => <Card key={color.id} {...color} />)
        }
      </div>
    </main>
  );
};

Body.propTypes = {
  data: PropTypes.array.isRequired,
};


export default Body;

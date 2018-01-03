import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { shuffleArray } from '../helpers';

const Body = (props) => {
  shuffleArray(props.data);
  return (
    <main className="container card-area">
      <div className="row">
        {
          props.data.map(color => (<Card
            key={color.id}
            handleClick={props.handleClick}
            {...color}
          />))
        }
      </div>
    </main>
  );
};

Body.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  handleClick: PropTypes.func.isRequired,
};


export default Body;

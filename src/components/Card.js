import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="col-6 col-sm-4 col-md-3">
    <img
      className="rounded mx-auto d-block img-fluid img-card"
      src={props.image}
      alt={props.name}
      data-id={props.id}
      onClick={() => props.handleClick(props.id)}
      width="175"
    />
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;

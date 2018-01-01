import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="col-6 col-sm-4 col-md-3">
    <img className="rounded mx-auto d-block img-fluid img-card" src={props.image} alt={props.name} width="175" />
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ options, onLeaveFeedback }) => (
  <button type="button" onClick={onLeaveFeedback} name={options}>
    {options}
  </button>
);
Button.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default Button;

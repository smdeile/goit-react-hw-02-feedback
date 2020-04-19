import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, CounterFeedback }) => (
  <button type="button" onClick={CounterFeedback}>
    {children}
  </button>
);
Button.propTypes = {
  children: PropTypes.string.isRequired,
  CounterFeedback: PropTypes.func.isRequired,
};
export default Button;

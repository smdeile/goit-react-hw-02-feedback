import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>Good feedback: {good}</p>
    <p>Neutral feedback: {neutral}</p>
    <p>Bad feedback: {bad}</p>
    <p>Total feedback: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

import React from 'react';
import Button from '../Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(item => (
      <Button
        options={item}
        onLeaveFeedback={onLeaveFeedback}
        key={item}
      ></Button>
    ))}
  </>
);
export default FeedbackOptions;

import React, { Component } from 'react';
import Statistics from 'Components/Statistics/Statistics';
import Button from '../Button/Button';
import Notification from '../Statistics/Notification';

export default class CounterFeedback extends Component {
  static defaultProps = { step: 1 };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonGood = () => {
    this.setState(prevState => ({
      good: prevState.good + this.props.step,
    }));
  };
  handleButtonNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + this.props.step,
    }));
  };
  handleButtonBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + this.props.step,
    }));
  };
  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    const calculateFeedback = this.state.good / Number(this.totalFeedback());
    const positivePercentage = Math.round(calculateFeedback * 100);
    return positivePercentage;
  };
  render() {
    return (
      <div>
        <Button CounterFeedback={this.handleButtonGood}>Good</Button>
        <Button CounterFeedback={this.handleButtonNeutral}>Neutral</Button>
        <Button CounterFeedback={this.handleButtonBad}>Bad</Button>
        {this.totalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        )}
      </div>
    );
  }
}

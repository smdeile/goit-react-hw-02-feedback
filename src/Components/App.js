import React, { Component } from 'react';
import Statistics from 'Components/Statistics/Statistics';
import Notification from './Statistics/Notification';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
const OPTIONS = ['good', 'neutral', 'bad'];
export default class App extends Component {
  static defaultProps = { step: 1 };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // handleButtonGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + this.props.step,
  //   }));
  // };
  // handleButtonNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + this.props.step,
  //   }));
  // };
  // handleButtonBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + this.props.step,
  //   }));
  // };
  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    const calculateFeedback = this.state.good / Number(this.totalFeedback());
    const positivePercentage = Math.round(calculateFeedback * 100);
    return positivePercentage;
  };
  onLeaveFeedback = key => {
    const stateItem = key.target.name;
    this.setState(state => ({ [stateItem]: state[stateItem] + 1 }));
  };
  render() {
    return (
      <div>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={OPTIONS}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistic">
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
        </Section>
      </div>
    );
  }
}

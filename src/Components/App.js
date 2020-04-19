import React from 'react';
import Section from './Section/Section';
import CounterFeedback from './CounterFeedback/CounterFeedback';

export default function App() {
  return (
    <div>
      <Section title="Please live feedback">
        {/* <Button CounterFeedback={CounterFeedback}>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button> */}
      </Section>
      <Section title="Statistics">
        <CounterFeedback />
      </Section>
    </div>
  );
}

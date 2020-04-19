import React from 'react';

const Section = ({ title, children }) => (
  <div>
    <p>{title}</p>
    <div>{children}</div>
  </div>
);
export default Section;

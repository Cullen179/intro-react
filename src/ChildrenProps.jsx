import React from 'react';

// Parent functional component
export default function ParentComponent() {
  // Data to be passed as props
  const name = 'John Doe';
  const age = 30;

  return (
    <ChildComponent name={name} age={age}>
      {/* Passing additional props as children */}
      <h4>This is a custom title</h4>
      <p>This is a custom paragraph</p>
    </ChildComponent>
  );
}

// Child functional component receiving props as children
function ChildComponent({ name, age, children }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <div>{children}</div>
    </div>
  );
}

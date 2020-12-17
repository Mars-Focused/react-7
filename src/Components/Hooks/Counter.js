import React, { useState } from "react";

const Counter = (props) => {
  //we don't use .this inside of functional components
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Counter.js</h2>
    </div>
  );
};

export default Counter;

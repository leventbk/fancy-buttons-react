import React, { useState } from 'react'; //optional

function CounterButton() {
  const [count, setCount] = useState(0);
  
  const increaseCount = () => {
    setCount(count + 1);

  }


  return (
    <button className="CounterButton" onClick={increaseCount}>
      You clicked me {count} amount of times
    </button>
  )
}

export default CounterButton

import React, { useState } from 'react'; //optional

function AngryButton() {
  const [anger, setAnger] = useState(0);

  const increaseAnger = () => {
    if (anger < 1) {
      setAnger(anger + 0.1);
    }
  }
  const buttonStyle = {
    backgroundColor: `rgba(255, 0, 0, ${anger})`
  }

  return (
    <button className="AngryButton" onClick={increaseAnger} style={buttonStyle}>
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  )
}

export default AngryButton
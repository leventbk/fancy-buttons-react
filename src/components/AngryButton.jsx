import React, { useReducer } from 'react';

function AngryButton() {
  const [anger, dispatch] = useReducer((anger, action) => {
    if (anger < 1) {
      return anger + action;
    } else { return 0};
  }, 0)

  const buttonStyle = {
    backgroundColor: `rgba(255, 0, 0, ${anger})`
  }

  return (
    <button className="AngryButton" onClick={() => dispatch(0.1)} style={buttonStyle}>
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  )
}

export default AngryButton
import React, { useState } from 'react'; //optional

function TextRepeaterButton() {
  const [repetitions, setRepetitions] = useState([1]); // Initialize repetitions as an empty array

  const textArray = () => {
    // Use setRepetitions to update the array with the desired number of <span> elements
    setRepetitions(prevRepetitions => [...prevRepetitions, <span key={prevRepetitions.length}>I like this text</span>]);
  }

  return (
    <button className="TextRepeaterButton" onClick={textArray}>
     {repetitions.map((element, index) => (
       // Remember to set a unique key for each <span> element
       <span key={index}>{element}</span>
     ))}
    </button>
  )
}

export default TextRepeaterButton
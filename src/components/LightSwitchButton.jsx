import React, { useState } from 'react'; //optional

function LightSwitchButton() {
  const [light, setLight] = useState(false);

  const changeLight = () => {
    setLight(!light);
  }

  return (
    <button className="LightSwitchButton" onClick={changeLight}>
    {light === true  && <span><i>💡</i> I'm on!</span>}
    {light === false && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  )
}

export default LightSwitchButton
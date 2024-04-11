import React, { useState } from "react";

const ToggleSwitch = () => {
  // State to track the current state of the switch (on/off)
  const [isOn, setIsOn] = useState(false);

  // Function to handle toggling the switch
  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState); // Toggle the state
  };

  return (
    <div className="toggle-switch" onClick={toggleSwitch}>
      <input
        type="checkbox"
        className="checkbox"
        checked={isOn}
        onChange={() => {}} // No need for onChange event handler here
      />
      <label className="label">
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;

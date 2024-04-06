import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h2>Color Picker</h2>
      <input type="color" value={color} onChange={handleChange} />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          margin: "20px 0",
        }}
      ></div>
      <p>Selected Color: {color}</p>
    </div>
  );
}

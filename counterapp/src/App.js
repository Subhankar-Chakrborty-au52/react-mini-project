import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
          }}
          onClick={handleIncrement}
        >
          Increment
        </button>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>{count}</span>
        <button
          style={{
            marginLeft: "10px",
            padding: "8px 16px",
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
          }}
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;

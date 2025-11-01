import React, { useState } from "react";
const LiveInput = () => {
const [test, setTest] = useState("");
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Live Input Example</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={test}
        onChange={(e) => setTest(e.target.value)}
      />
      <p>You typed: {test}</p>
    </div>
  );
};

export default LiveInput;

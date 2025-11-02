import React, { useState, useEffect } from "react";

export default function TimerApp() {
  const [seconds, setSeconds] = useState(0);   // track time
  const [isRunning, setIsRunning] = useState(false); // track timer state

  useEffect(() => {
    let interval;

    if (isRunning) {
      // Start the timer
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup — stop timer when paused or unmounted
    return () => clearInterval(interval);
  }, [isRunning]); // runs only when isRunning changes

  // Reset timer
  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>⏱ React Timer App</h1>
      <h2>{seconds} seconds</h2>

      <div style={{ marginTop: "20px" }}>
        {!isRunning ? (
          <button onClick={() => setIsRunning(true)}>▶️ Start</button>
        ) : (
          <button onClick={() => setIsRunning(false)}>⏸ Stop</button>
        )}
        <button onClick={handleReset} style={{ marginLeft: "10px" }}>🔁 Reset</button>
      </div>
    </div>
  );
}

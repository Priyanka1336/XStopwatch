import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 900);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <div className="flex space-x-4">
        <button type="button" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          type="button"
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

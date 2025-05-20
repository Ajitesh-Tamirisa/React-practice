// https://www.greatfrontend.com/questions/user-interface/progress-bars/

// Progress Bars

// Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up gradually as soon as they are shown.

// Requirements
// Clicking on the "Add" button adds a progress bar to the page.
// Each progress bar start filling up smoothly as soon as they're added
// Each bar takes approximately 2000ms to completely fill up.

import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [bars, setBars] = useState([]);
  return (
    <div>
      <button onClick={() => setBars((prevBars) => [...prevBars, Date.now()])}>
        Add
      </button>
      {bars.map((id) => (
        <ProgressBar key={id} />
      ))}
    </div>
  );
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bar">
      <div className="fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

// https://www.greatfrontend.com/questions/user-interface/progress-bar

// Progress Bar
// Implement a progress bar component which shows the completion progress by filling the bar proportionately to the progress (a number between 0-100, inclusive).

// Requirements
// The filled bar can be of any color. The example uses #c5c5c5 for the background color and #0d6efd for the progress color.
// The completion % is shown in the center of the filled bar.
// A ProgressBar.js skeleton component has been created for you. You are free to decide the props of <ProgressBar />.

import "./styles.css";
import React from "react";

export default function App() {
  return <ProgressBar progress="-4" />;
}

function ProgressBar({ progress }) {
  const safeProgress = Math.min(Math.max(0, progress), 100);
  return (
    <div className="progress">
      <div className="fill" style={{ width: `${safeProgress}%` }}>
        {safeProgress}%
      </div>
    </div>
  );
}

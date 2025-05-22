// Analog Clock

// Create a widget that renders the current time within an analog clock display, where the clock hands move and update like a real clock.

// Here's an example of an analog clock, but you can exercise your creativity by choosing different colors and styling it differently. It should however still function as a clock.

import { useState, useEffect } from "react";

export default function App() {
  const [hoursdeg, setHoursdeg] = useState(0);
  const [minsdeg, setMinsdeg] = useState(0);
  const [secsdeg, setSecsdeg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();
      setSecsdeg((seconds * 360) / 60);
      setMinsdeg((minutes * 360) / 60 + seconds * 0.1);
      setHoursdeg(((hours % 12) * 360) / 12 + minutes * 0.5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div
        className="hourHand"
        style={{ transform: `rotate(${hoursdeg}deg)` }}
      ></div>
      <div
        className="minutesHand"
        style={{ transform: `rotate(${minsdeg}deg)` }}
      ></div>
      <div
        className="secondsHand"
        style={{ transform: `rotate(${secsdeg}deg)` }}
      ></div>
    </div>
  );
}

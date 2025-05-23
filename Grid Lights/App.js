// https://www.greatfrontend.com/questions/user-interface/grid-lights?practice=practice&tab=coding

// Grid Lights

// Build a 3x3 grid of light cells (omitting the center cell) where you can click on the cells to activate them, turning them green. 
// When all the cells have been activated, they will be deactivated one by one in the reverse order they were activated with a 300ms interval in between.

// Demo- https://k2053q.csb.app/

import "./styles.css";
import React, { useEffect, useState, useRef } from "react";
import data from "./data.json";

export default function App() {
  const [current, setCurrent] = useState([]);
  const currentRef = useRef([]);
  currentRef.current = current;

  let array = new Array(9).fill(null);

  const handleClick = (index) => {
    if (currentRef.current.includes(index)) return;

    const updated = [...currentRef.current, index];
    setCurrent(updated);

    if (updated.length === 8) lightsOff(updated);
  };

  const lightsOff = (sequence) => {
    let idx = sequence.length - 1;

    const timer = setInterval(() => {
      const updated = currentRef.current.slice(0, idx);
      setCurrent(updated);
      idx--;

      if (idx < 0) clearInterval(timer);
    }, 300);
  };

  return (
    <div className="outerBox">
      {array.map((_, index) =>
        index === 4 ? (
          <div key={index} className="spacer"></div>
        ) : (
          <div
            key={index}
            className={`innerBox ${current.includes(index) ? "fill" : ""}`}
            onClick={() => handleClick(index)}
          ></div>
        )
      )}
    </div>
  );
}

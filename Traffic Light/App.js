// https://www.greatfrontend.com/questions/user-interface/traffic-light?practice=practice&tab=coding

// Traffic Light

// Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

// Red light: 4000ms
// Yellow light: 500ms
// Green light: 3000ms
// You are free to exercise your creativity to style the appearance of the traffic light.

import "./styles.css";
import React, { useEffect, useState } from "react";
import data from "./data.json";

export default function App() {
  const [currLight, setCurrLight] = useState("red");

  let lights = ["red", "yellow", "green"];

  useEffect(() => {
    let timeout;
    if (currLight === "red")
      timeout = setTimeout(() => setCurrLight("green"), 4000);
    if (currLight === "yellow")
      timeout = setTimeout(() => setCurrLight("red"), 500);
    if (currLight === "green")
      timeout = setTimeout(() => setCurrLight("yellow"), 3000);
    return () => clearTimeout(timeout);
  }, [currLight]);

  return (
    <div className="box">
      {lights.map((light, index) => {
        return (
          <div
            key={index}
            className={`light ${currLight === light ? light : ""}`}
          ></div>
        );
      })}
    </div>
  );
}

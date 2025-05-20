// https://www.greatfrontend.com/questions/user-interface/temperature-converter/

// Temperature Converter

// Build a simple temperature converter widget that contains two text inputs temperatures in Celsius and Fahrenheit respectively, allowing for conversion between the temperature scales.

// Requirements
// Initially, both fields are empty. When a number value is entered into a text input, the other input will be calculated and reflected.
// Round to 4 decimal places where necessary.
// If a non-numerical string is entered into one input, the other input will be blank.
// The last two requirements might not be given to you during interviews, you're expected to clarify.

// P.S. To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const convert = (value, setValue, convertedValue, setConvertedValue) => {
    setValue(value);
    setConvertedValue(Number(convertedValue.toFixed(4)));
  };

  return (
    <div>
      Temperature Converter
      <div className="container">
        <div className="inputContainer">
          <input
            type="number"
            value={celsius}
            id="celsius"
            onChange={(e) =>
              convert(
                e.target.value,
                setCelsius,
                (e.target.value * 9) / 5 + 32,
                setFahrenheit
              )
            }
          />
          <label for="celsius">Celsius</label>
        </div>
        <div className="inputContainer">
          <input
            type="number"
            value={fahrenheit}
            id="fahrenheit"
            onChange={(e) =>
              convert(
                e.target.value,
                setFahrenheit,
                ((e.target.value - 32) * 5) / 9,
                setCelsius
              )
            }
          />
          <label for="fahrenheit">Fahrenheit</label>
        </div>
      </div>
    </div>
  );
}

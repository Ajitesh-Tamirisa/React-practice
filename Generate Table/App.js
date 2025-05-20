// Generate a table of numbers given the rows and columns.

// Generated table of 4 by 5 columns

// The user enters the number of rows and columns in a form.
// When the form is submitted, a table with the respective number of rows and columns will be generated.
// The table contains rows x columns cells, each containing a number sequence from 1 to (rows x columns).

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [data, setData] = useState([[]]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let counter = 1;
    setData(
      Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => counter++)
      )
    );
  };

  return (
    <div class="App">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="rows">Rows:</label>
        <input
          type="number"
          className="formField"
          value={rows}
          onChange={(e) => setRows(e.target.value)}
        />
        <label htmlFor="cols">Cols:</label>
        <input
          type="number"
          className="formField"
          value={cols}
          onChange={(e) => setCols(e.target.value)}
        />
        <button className="formField" type="submit">
          Submit
        </button>
      </form>
      <table class="table">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Data filling logic should be-
// Even: rows * col + (row + 1)
// Odd: rows * (col + 1) - row

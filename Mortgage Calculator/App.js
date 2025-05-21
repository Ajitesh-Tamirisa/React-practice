// Mortgage Calculator

// Build a simple mortgage calculator widget that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.

// Requirements
// The user should be able to enter:
// Loan amount ($)
// Annual interest rate (%). This is also known as the annual percentage rate (APR)
// Loan term (in years)
// Using the inputs, the calculator should compute the following and display the results to the user:
// Monthly mortgage payment
// Total payment amount
// Total interest paid
// If a non-numerical string is entered into any input field, the calculator should display an error message. Additionally, the calculator should handle any other invalid inputs that may arise.
// Round the result amounts to 2 decimal places.
// The last two requirements might not be given to you during interviews, you're expected to clarify.

// The formula for calculating the monthly payment is:

// M = P(i(1+i)n)/((1+i)n - 1)

// M: Monthly mortgage payment
// P: Loan amount
// i: Monthly interest rate (APR / 12)
// n: Total number of payments (loan term in years x 12)

import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState();
  const [apr, setApr] = useState();
  const [term, setTerm] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let i = apr / 100 / 12,
      n = term * 12;
    let mp = amount * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    setMonthlyPayment(mp);
    setTotalPayment(mp * n);
    setTotalInterest(mp * n - amount);
  };

  const format = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="formField">
          <label for="amount">Loan Amount ($)</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="formField">
          <label for="apr">Annual Interest Rate (%)</label>
          <input
            id="apr"
            type="number"
            value={apr}
            onChange={(e) => setApr(Number(e.target.value))}
          />
        </div>
        <div className="formField">
          <label for="term">Loan Term</label>
          <input
            id="term"
            type="number"
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
          />
        </div>
        <div className="formField">
          <button>Submit</button>
        </div>
      </form>
      <div className="results">
        <h3>Monthly mortgage payment: {format(monthlyPayment)}</h3>
        <h3>Total payment amount: {format(totalPayment)}</h3>
        <h3>Total interest paid: {format(totalInterest)}</h3>
      </div>
    </div>
  );
}

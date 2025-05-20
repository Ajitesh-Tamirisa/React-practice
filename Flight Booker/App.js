// Build a component that books a one-way or return flight for specified dates.

// Requirements
// The user can choose from two flight options: "One-way flight" and "Return flight".
// Input date fields
// The date input fields represent the departure date and return dates.
// The return date input is displayed if the "Return flight" option is chosen, hidden otherwise.
// Form validation should be done upon submission for invalid fields:
// Dates are in the past.
// Return date is before the departure date.
// Upon successful submission, a message is displayed informing the user of the selection:
// One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
// Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"

import React, { useState } from "react";

export default function App() {

  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errors, setErrors] = useState({});

  const handleTypeChange = (event)=>{
    setType(event.target.value);
    setEndDate('');
  }

  const validate = ()=>{
    let updatedErrors = {}, isValid = true;
    if(new Date()>new Date(startDate)){
      updatedErrors.startDate = 'Start date cannot be in the past';
      isValid = false;
    }
    if(type==='return' && new Date()>new Date(endDate)){
      updatedErrors.endDate = 'End date cannot be in the past';
      isValid = false;
    }
    if(new Date(startDate)>new Date(endDate)){
      updatedErrors.other = 'Start date cannot be after End date';      
      isValid = false;
    }
    setErrors(updatedErrors);
    return isValid;
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    const formData = { type, startDate, endDate };
    if(validate()){
      let end = ` on ${startDate}`;
      if(type === 'return') end = `, departing on ${startDate} and returning on ${endDate}`;
      const message = `You have booked a ${type} flight${end}`;
      alert(message);
    }
  }

  return (
    <form className='form' onSubmit = {handleSubmit}>
      <select className='formField' value={type} onChange={handleTypeChange}>
        <option value="" disabled>-- Select flight type --</option>
        <option value='one-way'>One-way flight</option>
        <option value='return'>Return flight</option>
      </select>
      <input className='formField' type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
      {errors.startDate && <p className='formField error'>{errors.startDate}</p>}
      {type==='return' && <input className='formField' type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>}
      {errors.endDate && <p className='formField error'>{errors.endDate}</p>}
      {errors.other && <p className='formField error'>{errors.other}</p>}
      <button className='formField'>Submit</button>
    </form>
  );
}

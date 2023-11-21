import React, { useState } from 'react';
import './patient.css'

export default function Patient() {
  const [regimenData, setRegimenData] = useState({
    regimenName: '',
    startDateTime: '',
    endDateTime: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegimenData({
      ...regimenData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to an API or perform some other action
    console.log('Regimen Data:', regimenData);
    // Reset the form after submission
    setRegimenData({
      regimenName: '',
      startDateTime: '',
      endDateTime: '',
      instructions: '',
    });
  };


  return (
    <div>
      <h3>Please Enter Regimen Details</h3>
      <div className="regimen-form">
        <form onSubmit={handleSubmit}>
          <label>
            Regimen Name:
            <input
              type="text"
              name="regimenName"
              value={regimenData.regimenName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Start Date and Time:
            <input
              type="datetime-local"
              name="startDateTime"
              value={regimenData.startDateTime}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            End Date and Time:
            <input
              type="datetime-local"
              name="endDateTime"
              value={regimenData.endDateTime}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Instructions:
            <textarea
              name="instructions"
              value={regimenData.instructions}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
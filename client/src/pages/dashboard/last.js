import React from 'react';
import back from '../../icons/back.svg';
import '../../styles/activemed.css';
import formatTime from '../../functions/formatTime';
import icons from '../../icons/icons.svg';
import '../../styles/appointment.css';
import { useState } from 'react';

export default function LastComponent({ handleCurrent, medication, current }) {

    console.log(medication);

    const [formData, setFormData] = useState({
        choice: '',
        calendar: '',
        feeling: '',
        upload: '',
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic to handle form submission here
        console.log(formData);
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      return (
        <div>
            <div className='activ-med'>
      <img src={back} alt='Medication details' onClick={handleCurrent} />
      <div className='medication-item'>
        <h2>{medication.medicationname} - {medication.dose}</h2>
        <div className='medication-stop'>
            <img src={icons} alt='Stop Icon' />
                <p>Today {formatTime(medication.time)}</p>
            </div>
        </div>
    </div>

    <form method='post' onSubmit={handleSubmit}>
      <label className="radio-label">
        Did you take your drug by 9pm?
        <div className="radio-options">
          <label className="radio-option">
            <input
              type="radio"
              name="choice"
              value="yes"
              checked={formData.choice === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="choice"
              value="no"
              checked={formData.choice === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </label>

      {formData.choice === 'no' && (
        <label htmlFor="calendar">
          If no, let us know the time you took it
          <input type="time" name='calendar' value={formData.calendar} onChange={handleChange} />
        </label>
      )}

      <label htmlFor="feeling">
        Let us know how you are feeling today!
        <input type='text' name='feeling' value={formData.feeling} onChange={handleChange} required />
      </label>

      <label htmlFor="upload">
        Take a photo of your opened tablets in your hands
        <input type='file' name='upload' accept='image/*' onChange={handleChange} required />
      </label>

      <button type='submit'>Save</button>
    </form>
            </div>
    
      )      
      
}
import React, { useState } from 'react';
import back from '../../icons/back.svg';
import formatTime from '../../functions/formatTime';
import icons from '../../icons/icons.svg';

export default function LastComponent({ handleCurrent, medication, current, currentTime }) {
  const [formData, setFormData] = useState({
    choice: '',
    actualTime: '',
    feeling: '',
    upload: null, // Use null for file input
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const choice = formData.choice;
    const actualTime = formData.actualTime;
    const medication_id = medication.medication_id;

    const data = new FormData();
    data.append('choice', choice);
    data.append('actualTime', actualTime);
    data.append('normalTime', currentTime);
    data.append('feeling', formData.feeling);
    data.append('upload', formData.upload);
    data.append('medication_id', medication_id);

    try {
      const response = await fetch('/api/patient/updatemedication', {
        method: 'POST',
        body: data,
      });

      const responseData = await response.json();
      // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching activemed data:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'upload' ? files[0] : value, // Handle file input separately
    }));
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
        <label className='radio-label'>
          Did you take your drug by {formatTime(currentTime)}?
          <div className='radio-options'>
            <label className='radio-option'>
              <input
                type='radio'
                name='choice'
                value='yes'
                checked={formData.choice === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className='radio-option'>
              <input
                type='radio'
                name='choice'
                value='no'
                checked={formData.choice === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </label>

        {formData.choice === 'no' && (
          <label htmlFor='calendar'>
            If no, let us know the time you took it
            <input type='time' name='actualTime' value={formData.actualTime} onChange={handleChange} />
          </label>
        )}

        <label htmlFor='feeling'>
          Let us know how you are feeling today!
          <input type='text' name='feeling' value={formData.feeling} onChange={handleChange} required />
        </label>

        <label htmlFor='upload'>
          Take a photo of your opened tablets in your hands
          <input type='file' name='upload' accept='image/*' onChange={handleChange} required />
        </label>

        <button type='submit'>Save</button>
      </form>
    </div>
  );
}
// BookingForm.js

import React, { useState } from 'react';

const BookingForm = ({ availableTimes = [], onDateChange, submitForm }) => {
  const [localDate, setLocalDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date: localDate, time, guests, occasion });
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setLocalDate(selectedDate);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="bookDate">Choose a date</label>
          <input
            type="date"
            id="bookDate"
            value={localDate ? localDate.toISOString().split('T')[0] : ''}
            onChange={handleDateChange}
            required
          />

          <label htmlFor="bookTime">Choose a time</label>
          <select
            id="bookTime"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.length > 0 ? (
              availableTimes.map((timeSlot, index) => (
                <option key={index} value={timeSlot}>
                  {timeSlot}
                </option>
              ))
            ) : (
              <option disabled>No times available</option>
            )}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            max="10"
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
          </select>
          <div className="btnReceive">
            <input aria-label="On Click" type="submit" value="Make Your Reservation" />
          </div>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;


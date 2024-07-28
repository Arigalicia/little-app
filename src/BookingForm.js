import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
      const selectedDate = e.target.value;
      setDate(selectedDate);
      dispatch({ type: 'UPDATE_TIMES', payload: new Date(selectedDate) });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="bookDate">Choose a date</label>
            <input
            type="date"
            id="bookDate"
            value={date}
            onChange={handleDateChange}
            required />

            <label htmlFor="bookTime">Choose a time</label>
            <select
            id="bookTime"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            >
               <option value="">Select a time</option>
                {availableTimes && availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
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
            required>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
            </select>
            <div className="btnReceive">
            <input aria-label="On Click" type="submit" value="Make Your Reservation" />
            </div>
        </form>
    );
};

export default BookingForm;

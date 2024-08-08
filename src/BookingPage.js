// BookingPage.js

import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, onDateChange, submitForm }) => {
  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;



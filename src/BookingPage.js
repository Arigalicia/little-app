import React, { useState } from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <div>
            <h1>Book a Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </div>
    );
};

export default BookingPage;

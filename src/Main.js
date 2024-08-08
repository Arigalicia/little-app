// Main.js

import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import ConfirmedBooking from './ConfirmedBooking';
import BookingPage from './BookingPage';
import { initializeStore, fetchAPI } from './API';

const Main = () => {
  // eslint-disable-next-line
  const [date, setDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

  useEffect(() => {
    initializeStore();
  }, []);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const times = fetchAPI(selectedDate);
    setAvailableTimes(times);
  };

  const navigate = useNavigate();
  const submitAPI = (formData) => {
    return true;
  };
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    }
  };


  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;

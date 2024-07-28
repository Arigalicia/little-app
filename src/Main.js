import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import BookingForm from './BookingForm';
import Header from './Header';
import ConfirmedBooking from './ConfirmedBooking';
import BookingPage from './BookingPage';

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const initializeTimes = () => {
    return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.payload);
        default:
            return state;
    }
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/confirmed');
        }
    };

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

const submitAPI = (formData) => {
    // Mock API call
    console.log('Submitting form data:', formData);
    return true;
};

export default Main;

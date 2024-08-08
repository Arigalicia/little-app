// API.js
import { useState} from "react";



// Random generator function
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
};

// Fetches available times based on the date
export const fetchAPI = (date) => {
  const availableTimes = JSON.parse(localStorage.getItem('bookingByDate')) || {};
  const dateKey = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

  // If times for this date are already saved in localStorage, return them
  if (availableTimes[dateKey]) {
      return availableTimes[dateKey];
  }

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

  // Save the generated times in localStorage for persistence
  availableTimes[dateKey] = result;
  localStorage.setItem('bookingByDate', JSON.stringify(availableTimes));

  return result;
};


// Initialize localStorage with empty booking data if it doesn't exist
export const initializeStore = () => {
  if (!localStorage.getItem('bookingByDate')) {
      localStorage.setItem('bookingByDate', JSON.stringify({}));
  }
};

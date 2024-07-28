import './App.css';
import Main from './Main';
import Nav from './Nav';
//import Header from './Header';
import BookingPage from './BookingPage';
import About from './About';
import ConfirmedBooking from './ConfirmedBooking';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Main />
      </div>
  );
}

export default App;

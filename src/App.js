import './App.css';
import Main from './Main';
import Nav from './Nav';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import About from './About';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Main />
      </div>
  );
}

export default App;

import './App.css';
import Main from './Main';
import Nav from './Nav';
//import Header from './Header';
import BookingPage from './BookingPage';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Routes>
      <Route path="/about" element={<About />} />
      </Routes>
      </div>
  );
}

export default App;

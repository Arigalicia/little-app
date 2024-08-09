import './App.css';
import Main from './Main';
import Nav from './Nav';
import About from './About';
import Footer from './Footer';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/orderOnline" element={<OrderOnline />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;

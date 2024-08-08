import './App.css';
import Main from './Main';
import Nav from './Nav';
import About from './About';
import Footer from './Footer';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Routes>
      <Route path="/about" element={<About />} />
      </Routes>
      <Menu />
      <Footer />
      </div>
  );
}

export default App;

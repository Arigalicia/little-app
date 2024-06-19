import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
      </div>
  );
}

export default App;

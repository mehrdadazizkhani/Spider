import './App.css';
import { Routes, Route } from 'react-router-dom';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import './App.css';
import Header from './components/frontend/layouts/Header';
import Index from './components/frontend/Index';
import Footer from './components/frontend/layouts/Footer';
import AboutPage from './components/frontend/pages/About';
import ContactPage from './components/frontend/pages/Contact';
import PortfolioPage from './components/frontend/pages/Portfolio';
import Achievements from './components/frontend/pages/Achievements';
import Projects from './components/frontend/pages/Projects';
import StayInTouch from './components/frontend/StayInTouch';
// import { customAlert } from './components/frontend/layouts/Alerts';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#101010";
      document.title = "Atul Kumar Giri - Dark Mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.title = "Atul Kumar Giri";

    }
  }

  return (
    <div className="App">
      <Router>
        <Header mode={mode} toggleMode={toggleMode} />
        {/* <Alerts alert={alert}/> */}
        
        <Routes>
          <Route exact path="/" element={<Index mode={mode} />} />
          <Route exact path="/about" element={<AboutPage mode={mode} />} />
          <Route exact path="/contact" element={<ContactPage mode={mode} />} />
          <Route exact path="/portfolio" element={<PortfolioPage mode={mode} />} />
          <Route exact path="/achievements" element={<Achievements mode={mode} />} />
          <Route exact path="/projects" element={<Projects mode={mode} />} />
        </Routes>

        <StayInTouch mode={mode} />
        <Footer mode={mode} />              
      </Router>
    </div>
  );
}

export default App;

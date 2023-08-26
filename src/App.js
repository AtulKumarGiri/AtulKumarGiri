import './App.css';
import Header from './components/frontend/layouts/Header';
import Index from './components/frontend/Index';
import Footer from './components/frontend/layouts/Footer';
// import Home from './components/frontend/Home';

import AboutPage from './components/frontend/pages/About';
import ContactPage from './components/frontend/pages/Contact';
import PortfolioPage from './components/frontend/pages/Portfolio';
// import Services from './components/frontend/Services';
// import About from './components/frontend/pages/About';
// import WorkExperience from './components/frontend/WorkExperience';
// import Portfolio from './components/frontend/Portfolio';
import StayInTouch from './components/frontend/StayInTouch';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Index/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/contact" element={<ContactPage/>} />
          <Route exact path="/portfolio" element={<PortfolioPage/>} />
        </Routes>

        <StayInTouch />
        <Footer />              
      </Router>
    </div>
  );
}

export default App;

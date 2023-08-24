import './App.css';
import Footer from './components/frontend/layouts/Footer';
import Header from './components/frontend/layouts/Header';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import WorkExperience from './components/frontend/WorkExperience';
import Portfolio from './components/frontend/Portfolio';
import StayInTouch from './components/frontend/StayInTouch';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services/>
      {/* <WorkExperience/> */}
      {/* <Portfolio/> */}
      <StayInTouch />
      <Footer />
    </div>
  );
}

export default App;

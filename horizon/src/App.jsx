import './index.css'
import Navbar from './components/Navbar';
import TwinklingStars from './components/TwinklingStars';
import ShootingStars from './components/ShootingStars';
import Achivement from './components/achievement';
import About from './components/about';
import Rover from './components/rover';
import Sponser from './components/sponser';
import Socials from './components/socials';
import Footer from './components/footer';
function App() {


  return (
    <div className="App">
      <div className="background-container">
        <Navbar />
        <ShootingStars verticalRange={200} verticalOffset={50} />
        <TwinklingStars />
      </div>
      <div className="content-container">

        <TwinklingStars />
        <About />
        <div className="box">
          <Achivement />
        </div>
        <div className="box">
          <Rover />
        </div>
        <div className="box">
          <Sponser />
        </div>
        <div className="box">
          <Socials />
        </div>
        <div className="box">
          <Footer />
        </div>


      </div>
    </div>
  );

}

export default App
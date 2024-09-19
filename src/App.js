import './App.css';
import Aboutus from './components/Aboutus';
import Contactsection from './components/Contactsection';
import Emailsection from './components/Emailsection';
import HeroSection from './components/HeroSection';
import LatestNewsSection from './components/LatestNewsSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <Aboutus/>
     <LatestNewsSection/>
    <Emailsection/>
    <Contactsection/>
    </div>
  );
}

export default App;


import './App.css';
import About from './components/About';
import Contact from './components/contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/work';

function App() {
  return (
    <div className='content' id='home'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
    </div>
  );
}

export default App;


import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/work';

function App() {
  return (
    <div className='content'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
    </div>
  );
}

export default App;

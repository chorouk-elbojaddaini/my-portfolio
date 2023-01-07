
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className='content'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
    </div>
  );
}

export default App;

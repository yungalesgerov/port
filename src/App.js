import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Header  />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

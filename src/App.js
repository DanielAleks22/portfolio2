import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  /* Using react smooth scroll for the navigation on site (need to install it)*/
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
    </div>
  );
}

export default App;

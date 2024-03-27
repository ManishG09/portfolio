import "./App.css";
import Work from "./components /Work";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components /Home";
import Skills from "./components /Skills";
import Contact from "./components /Contact";
import About from "./components /About";




function App() {
 

  return (
    <>
    <Router>
     
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About  />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
        
        </Routes>
        
      </Router>
      
     


    </>
  );
}


export default  App ;

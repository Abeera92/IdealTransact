// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Add ScrollToTop inside Router but before your routes */}
      <ScrollToTop />
      
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
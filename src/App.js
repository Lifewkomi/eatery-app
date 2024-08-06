import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";


import Loader from "./Components/Loader";
import Navbar from "./Components/FloatingNavbar/Demo";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";


function App() {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000); // Duration should match the loader animation duration

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
      {loaded && (
        <main className="App">
          <Navbar />
          {/* <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence> */}
          <Home />
        </main>
      )}
    </>
  );
}

export default App;


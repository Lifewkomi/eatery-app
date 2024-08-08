import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from 'lenis';
import "./App.css";
import Loader from "./Components/Loader";
import Navbar from "./Components/FloatingNavbar/Demo";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";

const App = () => {
 useEffect( () => {
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
 }, [])
 
 

  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
      {loaded && (
        <main className="App">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      )} */}
      <Menu />
    </>
  );
};

export default App;

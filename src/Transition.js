import { motion } from "framer-motion";
import styled from "styled-components";

const SlideIn = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  transform-origin: bottom;
`;
const SlideOut = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  transform-origin: top;
`;
const transition = (OgComponent) => {
  return (props) => {
    console.log("Transition HOC applied"); // Log to confirm HOC application

    return (
      <>
        <OgComponent {...props} />
        <SlideIn
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <SlideOut
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };
};

export default transition;

import React from "react";
import styled from "styled-components";
import { motion} from "framer-motion";



const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c6d5c6;
  color: ${(props) => props.theme.text};
  overflow-x: hidden;
`;

const Text = styled(motion.span)`
  display: flex;
  position: relative;
  top: 13rem;
  right: 20rem;
  font-family: "Sirin stencil";
  font-size: 7rem;
  color: #000;
  padding-top: 0.5rem;
  @media screen and (max-width: 480px) {
    font-size: 26px;
    right: 80px;
    top: 70px;
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
 
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.25,
    }
  },
  
}
const item = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
}

const Loader = () => {
  return (
    <Container
      initial={{ y: "100vh", opacity: 1 }}
      animate={{ y: 0, opacity: 1}}
      exit={{ y: "-100vh", opacity: 2 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      <Text variants={container} initial="hidden" animate="visible">
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.15'>T</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.13'>U</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.11'>K</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.09'>U</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.07'>L</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.05'>E</motion.h1>
      </Text>
    </Container>
  );
};

export default Loader;

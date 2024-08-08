import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import MenuVideo from "../Assets/Videos/MeatVideo.mp4";
import img1 from '../Assets/Breakfast/breakfast (4).jpg';
import img2 from '../Assets/Breakfast/breakfast (4).jpg';
import img3 from '../Assets/Breakfast/breakfast (4).jpg';
import img4 from '../Assets/Breakfast/breakfast (4).jpg';
import img5 from '../Assets/Breakfast/breakfast (4).jpg';
import img6 from '../Assets/Breakfast/breakfast (4).jpg';


const Container = styled.section`
  height: 300vh;
  position: relative;
  /* overflow: hidden; */
  background-color: #fbe8a6;
`;
const Sticky = styled.div`
  position: sticky;
  overflow: hidden;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;
const Text = styled.h1`
  font-size: 4rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #000;
`;
const El = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 25vw;
  height: 25vh;
  ${({positionStyles}) => positionStyles}
`;
const Video = styled.video`
  object-fit: cover;
`;

const Menu = () => {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: MenuVideo,
      scale: scale4,
      positionStyles: `top: 0; left: 0%;`,
    },
    {
      src: img1,
      scale: scale5,
      positionStyles: `top: -30vh; left: 5vw;`,
    },
    {
      src: img2,
      scale: scale5,
      positionStyles: `top: -10vh; left: -25vw;`,
    },
    {
      src: img3,
      scale: scale6,
      positionStyles: `left: 27.5vw;`
    },
    {
      src: img4,
      scale: scale8,
      positionStyles: `top: 27.5vh; left: 5vw;`,
    },
    {
      src: img5,
      scale: scale9,
      positionStyles: `top: 27.5vh; left: -22.5vw;`, 
    },
    {
      src: img6,
      scale: scale6,
      positionStyles: `top: 22.5vh; left: 25vw;`,
    },
  ];

  return (
    <Container ref={containerRef}>
      <Sticky>
        <Text>Our Menu</Text>

        {/* Main Video */}
        <El>
          <ImageContainer
            style={{ scale: scale4 }}
            positionStyles={`top: 0; left: 0%;`}
          >
            <Video src={MenuVideo} muted autoPlay loop />
          </ImageContainer>
        </El>

        Images
        {pictures.map(({ src, scale, positionStyles }, index) => {
          return (
            <El key={index}>
              <ImageContainer
                className="imgcontainer"
                style={{ scale }}
                positionStyles={positionStyles}
              >
                <img src={src} fill alt="menus" />
                {/* <Video src={src} placeholder="blur" muted autoPlay loop /> */}
              </ImageContainer>
            </El>
          );
        })}

      </Sticky>
    </Container>
  );
};

export default Menu;

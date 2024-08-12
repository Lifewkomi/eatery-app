import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import MenuVideo from "../Assets/Videos/MeatVideo.mp4";
import img1 from '../Assets/Cafe.jpg';
// import img2 from '../Assets/Fries/fries.jpg';
// import img3 from '../Assets/Chicken/chicken (3).jpg';
// import img4 from '../Assets/Burgers/burger.jpg';
// import img5 from '../Assets/Meal/meal1.jpg';
// import img6 from '../Assets/Meat/meat.jpg';


const Container = styled.section`
  height: 300vh;
  position: relative;
  /* overflow: hidden; */
  background-color: #bebebe;
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

const VideoContainer = styled(motion.div)`
  position: relative;
  width: 25vw;
  height: 25vh;
  ${({positionStyles}) => positionStyles};
`;
const Video = styled.video`
  object-fit: cover;
  z-index: 999;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 25vw;
  height: 25vh;
  ${({positionStyles}) => positionStyles};
`;

const Menu = () => {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale0 = useTransform(scrollYProgress, [0, 1], [1, 1]);
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
      scale: scale0,
      positionStyles: `top: -40vh; left: 25vw;`,
    },
    // {
    //   src: img2,
    //   scale: scale5,
    //   positionStyles: `top: -10vh; left: -25vw;`,
    // },
    // {
    //   src: img3,
    //   scale: scale6,
    //   positionStyles: `left: 27.5vw;`
    // },
    // {
    //   src: img4,
    //   scale: scale8,
    //   positionStyles: `top: 27.5vh; left: 5vw;`,
    // },
    // {
    //   src: img5,
    //   scale: scale9,
    //   positionStyles: `top: 27.5vh; left: -22.5vw;`, 
    // },
    // {
    //   src: img6,
    //   scale: scale6,
    //   positionStyles: `top: 22.5vh; left: 25vw;`,
    // },
  ];

  return (
    <Container ref={containerRef}>
      <Sticky>
        {/* <Text>Our Menu</Text> */}

        {/* Main Video */}
        <El>
          <VideoContainer
            style={{ scale: scale4 }}
            positionStyles={`top: 0; left: 0%;`}
          >
            <Video src={MenuVideo} muted autoPlay loop />
          </VideoContainer>
        </El>
 
        {/*Images*/}
        {pictures.map(({ src, scale, positionStyles }, index) => {
          return (
            <El key={index}>
              
            </El>
          );
        })}

      </Sticky>
    </Container>
  );
};

export default Menu;

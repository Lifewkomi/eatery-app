import React from 'react';
import styled from 'styled-components';
import HomeImg from '../Assets/Restaurant (2).jpg';
import About from './About';

const Section = styled.section`
position: absolute;
top: 0;
left: 0;
min-height: 250vh;
min-width: 90vw;
background: #FEF9C7;
`
const IntroContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 5rem;
`
const Image = styled.img`
  padding: 1rem;
  width: 100vw;
  height: 50vh;
  object-fit: cover;
  border-radius: 2rem;
`;

const Logo = styled.div`
  h1 {
    font-family: ${(props) => props.theme.Font3};
    padding: 0 1rem;
    font-size: 8rem;
  }
  span {
    font-family: ${(props) => props.theme.Font1};
    font-size: 2rem;
    padding-left: 50px;
  }
`;
const Home = () => {
  
  return (
   <Section>
      <IntroContainer>
        <Image src={HomeImg} alt="Our Restaurant"/>
        <Logo>
          <h1>Tukule<span>Swahili for 'Let's Eat'</span></h1>
        </Logo>
      </IntroContainer>
      {/* <About /> */}
   </Section>
  );
};

export default Home;


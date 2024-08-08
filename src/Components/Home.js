import React from 'react';
import transition from '../Transition';
import styled from 'styled-components';
import HomeImg from '../Assets/Cafe.jpg';

const Section = styled.section`
position: absolute;
top: 0;
left: 0;
min-height: 150vh;
min-width: 90vw;
background: #FEF9C7;
display: flex;
`
const IntroContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 5rem;
height: 100vh;
`
const Container = styled.div`
height: 50vh;

`
const Image = styled.img`
  padding: 1rem;
  width: 100vw;
  height: 50vh;
  object-fit: fill;
  border-radius: 2rem;
`;

const Logo = styled.div`
font-family: Ebrima;
padding: 0 1rem;
font-size: 6rem;
::first-letter{
  text-transform: capitalize;
  font-family: "title";
}
span{
  font-size: 2rem;
  padding: 0 10px;
}
`
const Home = () => {
  
  return (
   <Section>
      <IntroContainer>
        <Image src={HomeImg} alt="Our Restaurant"/>
        <Logo>
          <h1>Tukule<span>Swahili for 'Let's Eat'</span></h1>
        </Logo>
      </IntroContainer>
   </Section>
  );
};

// export default transition(Menu);
export default Home;


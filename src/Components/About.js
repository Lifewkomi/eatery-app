import React from "react";
import styled from "styled-components";

const Section = styled.section`
position: sticky;
top: 0;
height: 150vh;
`

const AboutText = styled.div`
h1{
  font-size: 3rem;
}
span{
  font-size: 1.5rem;
}
`


const About = () => {
  return (
    <Section>
      <AboutText>
        <h1>About Us <span>Kutuhusu...</span></h1>
      </AboutText>
    </Section>
  );
};

export default About;

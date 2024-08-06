import React from 'react';
import transition from '../Transition';
import HomeImg from '../Assets/Restaurant.jpg';
const Home = () => {
  return (
    <div className=' relative w-screen h-screen]'>
      <img src={HomeImg} alt='Restaurant' className=' px-8 pt-8 object-cover w-screen h-[50vh] relative ' />
    </div>
  );
};

// export default transition(Home);
export default Home;


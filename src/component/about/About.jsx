import React from 'react'
import { NavLink } from 'react-router-dom';
import Common from '../common/Common';

const About = () => {
  return (
    <>
    <div className="comon">
    <Common name="Welcome to About page" img="img3.jpg" visit="/contact" btname="Contact Now"  />
   </div>
    </>
  )
}

export default About;

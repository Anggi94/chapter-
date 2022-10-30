import React from "react";
import Main from '../../components/main';
import OurServices from '../../components/our-services';
import Why from '../../components/why';
import Testimonial from '../../components/testimonial';
import Banner from '../../components/banner';

const Homepage = () => {
  return (
    <div>
      <Main />
      <OurServices />
      <Why />
      <Testimonial />
      <Banner />
    </div>
  );
};

export default Homepage;

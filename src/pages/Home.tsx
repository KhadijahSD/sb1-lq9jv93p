import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedPrograms from '../components/FeaturedPrograms';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Stats />
      <FeaturedPrograms />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
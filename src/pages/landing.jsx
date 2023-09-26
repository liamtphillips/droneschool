import React from 'react';
import { Link } from 'react-scroll';
import About from './about';
import Banner from '../components/banner';
import Drones from '../pages/drones';
import Team from '../pages/team';
import CustomerReviews from '../pages/customerReviews';
import Spline from '@splinetool/react-spline';


const Landing = () => {
  return (
    <section>
      <div className="bg-gradient-to-r from-black to-slate-900 font-raleway">
        <div className="min-h-screen flex container mx-auto">
      
          <div className="flex flex-col justify-center text-center px-10 lg:px-0 lg:text-left lg:ml-16 lg:max-w-[660px]">
            <h1 className="text-white text-3xl md:text-6xl font-raleway font-semibold ">The Sky's the Limit!</h1>
            <p className="font-exo lg:text-2xl text-lg text-white mt-10 lg:max-w-[650px]">
              Whether you're a beginner or an experienced pilot aiming to refine your skills,
              our expert instructors are here to guide you.
            </p>
            <div className="flex gap-x-3 mt-10 lg:z-10 justify-center lg:justify-start">
              <Link to="about" smooth={true} duration={500}>
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg p-4 ">
                  Learn More
                </button>
              </Link>
              <a href="/lessons">
                <button className="bg-white font-semibold rounded-lg p-4 ">View Lessons</button>
              </a>
            </div>
          </div>
          <div className="z-[-20] lg:z-10 absolute right-10 pr-14 cursor-pointer">
            <Spline scene="https://prod.spline.design/LCF7-gJ9mW9S0yoa/scene.splinecode" />
          </div>
        </div>
      </div>
      <About id="about" />
      <Banner />
      <Team />
      <Drones />
      <CustomerReviews />
    </section>
  );
};

export default Landing;

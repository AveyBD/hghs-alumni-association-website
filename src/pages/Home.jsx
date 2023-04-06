import React from "react";
import BeAMember from "../components/Home/BeAMember";
import Chapter from "../components/Home/Chapter";
import Hero from "../components/Home/Hero";
import Stats from "../components/Home/Stats";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <BeAMember />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-center font-bold text-4xl pb-6">Our Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

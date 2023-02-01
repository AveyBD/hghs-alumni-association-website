import React from "react";
import BeAMember from "../components/Home/BeAMember";
import Chapter from "../components/Home/Chapter";
import Hero from "../components/Home/Hero";
import Stats from "../components/Home/Stats";
import Navbar from "../components/Shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <BeAMember />
      <div className="shadow-lg">
        <h2 className="text-center font-bold text-4xl pb-2">Our Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
          <Chapter />
        </div>
      </div>
    </>
  );
};

export default Home;

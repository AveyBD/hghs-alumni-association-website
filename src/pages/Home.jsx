import React from "react";
import Hero from "../components/Home/Hero";
import IconBox from "../components/Home/IconBox";
import Navbar from "../components/Shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-20">
        <IconBox />
        <IconBox />
        <IconBox />
      </div>
    </>
  );
};

export default Home;

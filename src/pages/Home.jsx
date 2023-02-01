import React from "react";
import BeAMember from "../components/Home/BeAMember";
import Hero from "../components/Home/Hero";
import IconBox from "../components/Home/IconBox";
import Stats from "../components/Home/Stats";
import Navbar from "../components/Shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <BeAMember />
    </>
  );
};

export default Home;

import React from "react";
import HeroSection from "../../components/hero";
import CategorySection from "../../components/category";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
    </div>
  );
};

export default Home;

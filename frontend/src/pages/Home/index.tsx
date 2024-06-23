import React from "react";
import HeroSection from "../../components/hero";
import CategorySection from "../../components/category";
import ProductSection from "../../components/products";
import { Products } from "../../data/products";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <ProductSection
        products={Products}
        loading={true}
        error={"error occured"}
      />
    </div>
  );
};

export default Home;

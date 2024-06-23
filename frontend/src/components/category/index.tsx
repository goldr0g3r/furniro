import "./category.scss";
import React from "react";
import catImg1 from "../../assets/images/cat1.png";
import catImg2 from "../../assets/images/cat2.png";
import catImg3 from "../../assets/images/cat3.png";

type Props = {};

const CategorySection = (props: Props) => {
  return (
    <section className="category">
      <div className="category_text">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
      <div className="category_items">
        <div>
          <img src={catImg1} alt="category-dining" />
          <h2>Dining</h2>
        </div>
        <div>
          <img src={catImg2} alt="category-living-room" />
          <h2>Living</h2>
        </div>
        <div>
          <img src={catImg3} alt="category-bedroom" />
          <h2>Bedroom</h2>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

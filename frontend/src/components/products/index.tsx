import { Products } from "../../data/products";
import "./products.scss";
type Props = {
  products: any;
  loading: boolean;
  error: any;
};

const ProductSection = (props: Props) => {
  return (
    <section className="products">
      <div className="products_text">
        <h1>Our Products</h1>
      </div>
      <div className="products_items">
        {/** only 6 products */}
        {Products.slice(0, 8).map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
          </div>
        ))}
      </div>

      <button
        className="button"
        onClick={() => {
          console.log("Show More");
          Products.slice(8, 10).map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>{product.price}</h3>
            </div>
          ));
        }}
      >
        Show More
      </button>
    </section>
  );
};

export default ProductSection;

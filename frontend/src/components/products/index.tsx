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
            <h3>₹{product.price}</h3>
          </div>
        ))}
      </div>

      <button
        className="button"
        onClick={() => {
          console.log("Show More");
          const data = Products.slice(8, 10).map((product) => (
            <div key={product.id} className="product">
              <img
                src="https://th.bing.com/th/id/OIP.DgouwyI_lkxkxAJkqYk_EwHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7"
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>{product.price}</h3>
            </div>
          ));
          console.log(data);
          return data;
        }}
      >
        Show More
      </button>
      <div></div>
    </section>
  );
};

export default ProductSection;

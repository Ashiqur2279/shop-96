// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  //destruct the product prop
  const { title, rating, price, thumbnail, brand, description, category, id } =
    props.product;


    // addToCart product id
  function addToCart(props) {
    console.log(props);
  }

  // function end
  return (
    <div className="product">
      <div className="product_img">
        <img src={thumbnail} alt="image of the product" />
      </div>
      <div className="product_data">
        <h2>{title}</h2>
        <h4>price:${price}</h4>
        <p>Brand: {brand}</p>
        <p>Rating: {rating} out of 5</p>
      </div>
      <button className="btn" onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;

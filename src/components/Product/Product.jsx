// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Product.css";

const Product = (props) => {
  //destruct the product prop
  const { title, rating, price, thumbnail, brand } = props.product;

  //destruct addToCart
  const addToCart = props.addToCart;

  //destruct delete to cart
  const reduceToCart = props.reduceToCart;

  //return is here----------------
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
      <div className="add_delete_btn">
        <button
          className="btn btn_add"
          onClick={() => addToCart(props.product)}
        >
          Add to Cart
        </button>
        <button
          className="btn btn_delete"
          onClick={() => reduceToCart(props.product)}
        >
          Delete to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

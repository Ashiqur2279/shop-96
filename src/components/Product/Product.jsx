// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Product.css";

// eslint-disable-next-line react/prop-types
const Product = ({ product, addToCart, deleteToCart }) => {
  //destruct the product prop
  // eslint-disable-next-line react/prop-types
  const { title, rating, price, thumbnail, brand } = product;

  //destruct addToCart
  // const addToCart = props.addToCart;

  //destruct delete to cart
  // const reduceToCart = props.reduceToCart;

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
        <button onClick={() => addToCart(product)} className="btn btn_add">
          Add to Cart
        </button>
        <button
          onClick={() => deleteToCart(product)}
          className="btn btn_delete"
        >
          Delete to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

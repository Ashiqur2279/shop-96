// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = () => {
  // const {products, setProducts} = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    // console.log(products);
  }, []);
  return (
    <div>
      <h1 className="title">Explore Our Products - Which One You Like Most</h1>
      <div className="products_container">
        <div className="load_products_container">
          <div className="load_products">
            {products.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
          </div>
        </div>
        <div className="cart_summery">
          <h2>Cart Summery</h2>
        </div>
      </div>
    </div>
  );
};

export default Products;

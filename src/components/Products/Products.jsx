// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Products = () => {
  //product loading is start here------------------
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data.products))
    .catch((error) => console.log("Error fetching data: ", error));
  }, []);
  //product loading is end here------------------
  
  //addToCart is start here ------------------------
  const [cart, setCart] = useState([]);
  
  // function for addToCart-----------------
  function addToCart(product) {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  }
  //addToCart is end here ------------------------
  //---------------return start here-----------------
  return (
    <div>
      {/* --------loader condition-------- */}
      {products === null ? (
        <p className="loader">Loading...</p>
        ) : (
          <>
          <h1 className="title">
            Explore Our Products - Which One You Like Most
          </h1>

          {/* --------product display-------- */}
          <div className="products_container">
            <div className="load_products_container">
              <div className="load_products">
                {products.map((product) => (
                  <Product
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                  ></Product>
                ))}
              </div>
            </div>
            {/* -----------cart summery----------- */}
            <div className="cart_summery">
              <Cart cart={cart}></Cart>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;

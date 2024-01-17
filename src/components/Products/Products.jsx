// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import useLocalStorage from "../../hooks/useLocalStorage";

const Products = () => {
  //product loading is start here------------------
  const [products, setProducts] = useState(null);
  const { addItem, removeItem, cartItems } = useLocalStorage();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  const handleAddToCart = (item) => {
    addItem(item);
  };
  const handleDeleteToCart = (item) => {
    removeItem(item);
  };

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
                    addToCart={handleAddToCart}
                    deleteToCart={handleDeleteToCart}
                  ></Product>
                ))}
              </div>
            </div>
            {/* -----------cart summery----------- */}
            {cartItems.some((item) => item.quantity) && (
              <div className="cart_summery">
                <Cart cartItems={cartItems}></Cart>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;

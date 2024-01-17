// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToLocalStorage,
  deleteFromLocalStorage,
  getDataFromLocalStorage,
} from "../Utilities/LocalDatabase";

const Products = () => {

  //product loading is start here------------------
  const [products, setProducts] = useState(null);
  const [storedProduct, setStoredProduct] = useState([]);
  // const [storedProductQuantity, setStoredProductQuantity] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  // handle addToCart to local storage start
  const handleAddToCart = (item) => {
    addToLocalStorage(item.id);
    getDataFromLocalStorage(item.id);
  };

  const handleDeleteToCart = (item) => {
    deleteFromLocalStorage(item.id);
  };

  // get data from local storage to set the cart component
  useEffect(() => {
    const storedCart = getDataFromLocalStorage();

    const updateStoredProducts = [];

    //check the stored cart and products is available

    if (storedCart && products) {
      // get the product
      for (const itemId in storedCart) {
        const itemIdNumber = parseInt(itemId);

        const storedProduct = products.find(
          (product) => product.id === itemIdNumber
        );

        // get the product quantity
        const storedProductQuantity = storedCart[itemId];

        //push the product and quantity to the array
        updateStoredProducts.push({
          product: storedProduct,
          quantity: storedProductQuantity,
        });

        //set product to the state
        setStoredProduct(updateStoredProducts);
      }
    }
  }, [products]);
  console.log(storedProduct);

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
                    addToCart={handleAddToCart}
                    deleteToCart={handleDeleteToCart}
                  ></Product>
                ))}
              </div>
            </div>
            {/* -----------cart summery----------- */}
            <div className="cart_summery">
              <Cart></Cart>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;

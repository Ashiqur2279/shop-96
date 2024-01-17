// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Cart.css";

// eslint-disable-next-line react/prop-types
const Cart = ({ cartItems }) => {
  //-------------cart calculation start here-------------

  // total price calculation-------
  const totalCartPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  // 5% shipping charge calculation--------
  let shippingCharge = (totalCartPrice / 100) * 5;

  // 2% tax calculation----------
  let tax = (totalCartPrice / 100) * 2;

  // grand total calculation-----------------
  let grandTotal = totalCartPrice + shippingCharge + tax;
  //-------------cart calculation end here-------------

  //---------------db function start here---------------
  //   for (const cartProduct of cart) {
  //   const productId = cartProduct.id;
  //   addToDb(productId);
  // }

  //------------------db function end here-----------------

  return (
    <div>
      <h2 className="cart_title">Order Summery</h2>
      <div className="cart_items">
        {/* <p>Selected Items: {cart.length}</p> */}
        <p>Total Price: ${totalCartPrice.toFixed(2)} </p>
        <p>Total Shipping Charge (5%): ${shippingCharge.toFixed(2)}</p>
        <p>Tax (2%): ${tax.toFixed(2)}</p>
        <h3>Grand Total: ${grandTotal.toFixed(2)} only</h3>
      </div>
    </div>
  );
};

export default Cart;

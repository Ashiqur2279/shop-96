// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  //destruct the cart---------------
  const cart = props.cart;

  // total price calculation-------
  let totalCartPrice = 0;

  for (const cartProduct of cart) {
    console.log(cartProduct.price);
    totalCartPrice = totalCartPrice + cartProduct.price;
  }

  // 5% shipping charge calculation--------
  let shippingCharge = totalCartPrice / 100 * 5;

// 2% tax calculation----------
let tax = totalCartPrice / 100 * 2;

// grand total calculation-----------------
let grandTotal = (totalCartPrice + shippingCharge + tax).toFixed(2);

  return (
    <div>
      <h2 className="cart_title">Order Summery</h2>
      <div className="cart_items">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${totalCartPrice} </p>
        <p>Total Shipping Charge: ${shippingCharge}</p>
        <p>Tax: ${tax}</p>
        <h3>Grand Total: ${grandTotal} only</h3>
      </div>
    </div>
  );
};

export default Cart;

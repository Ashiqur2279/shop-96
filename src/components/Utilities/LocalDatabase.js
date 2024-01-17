//local storage is using for manage the cart data.
const CART_KEY = "shopping_cart";
// set item:
const addToLocalStorage = (itemId) => {
  //check does the item exist? if yes, update the value. if not, initiate the value is 1.

  let shopping_cart = JSON.parse(localStorage.getItem(CART_KEY)) || {};

  if (shopping_cart[itemId]) {
    shopping_cart[itemId]++;
  } else {
    shopping_cart[itemId] = 1;
  }
  localStorage.setItem(CART_KEY, JSON.stringify(shopping_cart));

  //   //does exist

  //   let storedCart = JSON.parse(localStorage.getItem(itemId));

  //   if (storedCart) {
  //     const updateValue = storedCart + 1;
  //     console.log("stored cart:", storedCart, "updated value", updateValue);
  //     localStorage.setItem(itemId, updateValue);
  //     console.log("value updated");
  //   } else {
  //     localStorage.setItem(itemId, 1);
  //     console.log("value added");
  //
};

// delete item:
const deleteFromLocalStorage = (itemId) => {
  // restore the stored cart and check that the item does exist? if yes, reduce the value. if not, show a alert.

  let shopping_cart = JSON.parse(localStorage.getItem(CART_KEY));
  if (shopping_cart && shopping_cart[itemId] > 0) {
    shopping_cart[itemId]--;
  } else {
    alert("Please Add this product before delete. Thanks...");
    console.error("Please Add this product before delete. Thanks...");
  }
  localStorage.setItem(CART_KEY, JSON.stringify(shopping_cart));
};

//get data from local storage----
const getDataFromLocalStorage = () => {
  const cartItem = JSON.parse(localStorage.getItem(CART_KEY));
  if (cartItem) {
    return cartItem;
  }
}

export { addToLocalStorage, deleteFromLocalStorage, getDataFromLocalStorage};

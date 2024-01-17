//use local storage to manage data ------------(beginner)
//set item (beginner way)
const addToDB = (id) => {
  //initiate the local storage key name
  let shoppingCart = {};

  //get the value from the local storage for check is it exist or not?
  const storedCart = localStorage.getItem("shopping_cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  // const quantity = localStorage.getItem(id);
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    // const newQuantity = parseInt(quantity) + 1;
    // const newQuantity = +quantity + 1; //it's a option (practice)
    // localStorage.setItem(id, newQuantity)
    shoppingCart[id] = newQuantity;
  } else {
    // localStorage.setItem(id, 1)
    shoppingCart[id] = 1;
  }
  //set the data to local storage
  localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
};

//use local storage to manage shopping cart------- (advanced way)

const updateShoppingCart = (itemId) => {
  //get the existing shopping cart from the local storage
  let shoppingCart = JSON.parse(localStorage.getItem("shopping_cart")) || {};

  //check if the item already exists in the cart
  if (shoppingCart[itemId]) {
    shoppingCart[itemId]++;
  } else {
    shoppingCart[itemId] = 1;
  }
  
  //update the shopping cart in the local storage
  localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
};

// delete item
const reduceToDB = (itemId) => {
  //get the existing data
  let shoppingCart = JSON.parse(localStorage.getItem("shopping_cart")) || {};
  if (shoppingCart[itemId]) {
    // delete shoppingCart[itemId];
    shoppingCart[itemId]--
    localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
  } else {
    alert("At first you have to add this product. Thanks...");
  }
};


export { addToDB, updateShoppingCart, reduceToDB };

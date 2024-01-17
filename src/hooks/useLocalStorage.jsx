import { useEffect, useState } from "react";

function useLocalHello() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItem = localStorage.getItem("products_cart");
    return storedCartItem ? JSON.parse(storedCartItem) : [];
  });

  useEffect(() => {
    localStorage.setItem("products_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addItem(item) {
    const existingProductIndex = cartItems.findIndex(
      (cItem) => cItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...cartItems];
      updatedProducts[existingProductIndex].quantity += 1;
      setCartItems(updatedProducts);
    } else {
      setCartItems((prevProducts) => [
        ...prevProducts,
        { ...item, quantity: 1 },
      ]);
    }
  }

  function removeItem(item) {
    const existingProductIndex = cartItems.findIndex(
      (cItem) => cItem.id === item.id
    );

    if (
      existingProductIndex !== -1 &&
      cartItems[existingProductIndex].quantity >= 1
    ) {
      const updatedProducts = [...cartItems];

      updatedProducts[existingProductIndex].quantity -= 1;
      setCartItems(updatedProducts);
    } else {
      setCartItems((prevProducts) => [...prevProducts]);
    }
  }

  return { addItem, removeItem, cartItems };
}

export default useLocalHello;

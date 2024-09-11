function addToCart(...items) {
    if (items.length === 0) {
      console.log("Your cart is empty.");
    } else if (items.length === 1) {
      console.log("One item added to cart:", items[0]);
    } else {
      console.log("Multiple items added to cart:", items);
    }
  };
  

  
const cart = ["shoes", "pants", "kurta"];

function createOrder(cartItems, callback) {
    console.log("✅ Order created for:", cartItems);
    callback(); // call the callback after order is created
}

function proceedToCart() {
    console.log("🛒 Now proceeding to cart...");
}

// Passing `proceedToCart` as a callback function
createOrder(cart, proceedToCart);

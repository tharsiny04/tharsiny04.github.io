function shopNow() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

function addToCart(productName) {
  alert(productName + " added to cart!");
}
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
});

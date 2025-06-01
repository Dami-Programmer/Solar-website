const setUpFilter = () => {
  const buttons = document.querySelectorAll(".button-group button");
  const items = document.querySelectorAll(".product-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      items.forEach((item) => {
        if (filter === "all") {
          item.classList.remove("hidden");
        } else {
          if (item.classList.contains(filter)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        }
      });
    });
  });
};

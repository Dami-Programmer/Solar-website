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

const textAnimate = () => {
  this.addEventListener("DOMContentLoaded", () => {
    const heroBg = document.getElementById("hero-bg");
    const scrollIndicator = document.getElementById("scroll-indicator");
    const title = document.querySelector(".hero-title");
    const subtitle = document.querySelector(".hero-subtitle");
    const buttons = document.querySelector(".hero-buttons");

    // Show text content with animation
    setTimeout(() => {
      title.classList.add("animate");
    }, 100);

    setTimeout(() => {
      subtitle.classList.add("animate");
    }, 400);

    setTimeout(() => {
      buttons.classList.add("animate");
    }, 700);

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const translateY = Math.min(scrollY * 0.5, 100);
      const opacity = Math.max(1 - scrollY / 700, 0);
      const scale = Math.max(1 + scrollY * 0.0005, 1);

      heroBg.style.transform = `translateY(${translateY}px) scale(${scale})`;
      heroBg.style.opacity = opacity;
      scrollIndicator.style.opacity = Math.max(1 - scrollY / 200, 0);
    });
  });
};

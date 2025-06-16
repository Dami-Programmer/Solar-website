AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
  mirror: true,
  offset: 120,
  delay: 100,
});

const setUpFilter = () => {
  const buttons = document.querySelectorAll(".button-group button");
  const items = document.querySelectorAll(".product-card");

  const aboutSection = document.querySelector(".about-section");
  const productsSection = document.getElementById("products");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      items.forEach((item) => {
        const match = filter === "all" || item.classList.contains(filter);
        item.classList.toggle("hidden", !match);
      });

      aboutSection.classList.remove("hidden");

      aboutSection.classList.remove("aos-animate");
      void aboutSection.offsetWidth;
      aboutSection.classList.add("aos-animate");

      if (typeof AOS !== "undefined") {
        AOS.refresh();
      }

      productsSection.classList.remove("hidden");
    });
  });

  aboutSection.classList.remove("hidden");
  productsSection.classList.remove("hidden");
};

const textAnimate = () => {
  this.addEventListener("DOMContentLoaded", () => {
    const heroBg = document.getElementById("hero-bg");
    const scrollIndicator = document.getElementById("scroll-indicator");
    const title = document.querySelector(".hero-title");
    const subtitle = document.querySelector(".hero-subtitle");
    const buttons = document.querySelector(".hero-buttons");

    setTimeout(() => {
      setTimeout(() => {
        title.classList.add("animate");
      }, 100);

      setTimeout(() => {
        subtitle.classList.add("animate");
      }, 400);

      setTimeout(() => {
        buttons.classList.add("animate");
      }, 700);
    }, 6000);

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

document.addEventListener("DOMContentLoaded", () => {
  setUpFilter();
});

// Initialize AOS (Animate On Scroll)
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

      // Update active button
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter product cards
      items.forEach((item) => {
        const match = filter === "all" || item.classList.contains(filter);
        item.classList.toggle("hidden", !match);
      });

      // Always show About section
      aboutSection.classList.remove("hidden");

      // ✅ Reset AOS animation on About section
      aboutSection.classList.remove("aos-animate");
      void aboutSection.offsetWidth; // Trigger reflow
      aboutSection.classList.add("aos-animate");

      // ✅ Refresh AOS in case new elements are revealed
      if (typeof AOS !== "undefined") {
        AOS.refresh(); // Use only this, not refreshHard()
      }

      // Show product section too
      productsSection.classList.remove("hidden");
    });
  });

  // Initial state
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

    // Delay the animations by 7 seconds
    setTimeout(() => {
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
    }, 6000);

    // Scroll events can still work immediately
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

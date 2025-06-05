// Example JSON data (can be loaded from an external source)
const solarProducts = [
  {
    category: "Inverter",
    subcategories: [
      {
        name: "Modified Sine Wave Inverters",
        products: [
          {
            name: "Modified Sine Wave ",
            image: "image/modi-sine-wava.jpg",
            description:
              "Simpler and more affordable, but may not be suitable for all devices.",
            // price: 350.0,
          },
        ],
      },
      {
        name: "Pure Sine Wave Inverters",
        products: [
          {
            name: "Pure Sine Wave ",
            image: "image/pure-sine-wava.jpg",
            description:
              "Produce a smooth and consistent wave, suitable for sensitive electronic devices.",
            price: 350.0,
          },
        ],
      },
      {
        name: "Hybrid Inverters",
        products: [
          {
            name: " Hybrid Inverters",
            image: "image/hybrid-inverter.jpg",
            description:
              "Combine solar and battery power, allowing for energy storage and grid interaction.",
            price: 275.0,
          },
        ],
      },
    ],
  },
  {
    category: "Solar-panel",
    subcategories: [
      {
        name: "String Inverters",
        products: [
          {
            name: "5kW String Inverter",
            image:
              "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&amp;fit=crop&amp;w=800&amp;q=80",
            description:
              "Efficient 5kW string inverter for grid-tied solar systems.",
            price: 1200.0,
          },
        ],
      },
      {
        name: "String Inverters",
        products: [
          {
            name: "5kW String Inverter",
            image:
              "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&amp;fit=crop&amp;w=800&amp;q=80",
            description:
              "Efficient 5kW string inverter for grid-tied solar systems.",
            price: 1200.0,
          },
        ],
      },
      {
        name: "String Inverters",
        products: [
          {
            name: "5kW String Inverter",
            image:
              "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&amp;fit=crop&amp;w=800&amp;q=80",
            description:
              "Efficient 5kW string inverter for grid-tied solar systems.",
            price: 1200.0,
          },
        ],
      },
    ],
  },
  {
    category: "Battery",
    subcategories: [
      {
        name: "Lithium-Ion",
        products: [
          {
            name: "10kWh Lithium Battery",
            image:
              "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&amp;fit=crop&amp;w=800&amp;q=80",
            description:
              "High-capacity 10kWh lithium battery system for solar storage.",
            price: 5500.0,
          },
        ],
      },
      {
        name: "Lithium-Ion",
        products: [
          {
            name: "10kWh Lithium Battery",
            image:
              "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&amp;fit=crop&amp;w=800&amp;q=80",
            description:
              "High-capacity 10kWh lithium battery system for solar storage.",
            price: 5500.0,
          },
        ],
      },
      {
        name: "Lithium-Ion",
        products: [
          {
            name: "10kWh Lithium Battery",
            image:
              "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&amp;fit=crop&amp;w=800&amp;q=80",
            description:
              "High-capacity 10kWh lithium battery system for solar storage.",
            price: 5500.0,
          },
        ],
      },
    ],
  },
];

// Populate the grid using ES6+ syntax
const populateProductGrid = () => {
  const grid = document.getElementById("productGrid");

  solarProducts.forEach(({ category, subcategories }) => {
    subcategories.forEach(({ products }) => {
      products.forEach(({ name, image, description, price }) => {
        const card = document.createElement("div");
        card.className = `product-card ${category.replace(/\s+/g, "-")}`;

        card.innerHTML = `
          <div class="image-container">
            <img src="${image}" alt="${name}">
            <span class="badge">${category}</span>
          </div>
          <div class="content">
            <h3>${name}</h3>
            <p>${description}</p>
            <div class="price-action">
              
              <button class="details-btn">Avaliable at the store</button>
            </div>
          </div>
        `;

        grid.appendChild(card);
      });
    });
  });
  setUpFilter();
};

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", populateProductGrid);

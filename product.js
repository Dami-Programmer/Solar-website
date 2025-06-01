// Example JSON data (can be loaded from an external source)
const solarProducts = [
  {
    category: "Inverter",
    subcategories: [
      {
        name: "Monocrystalline",
        products: [
          {
            name: "400W High-Efficiency Panel",
            image:
              "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&amp;fit=crop&amp;w=800&amp;q=80",
            description:
              "Premium 400W monocrystalline panel designed for high performance and durability.",
            price: 350.0,
          },
        ],
      },
      {
        name: "Polycrystalline",
        products: [
          {
            name: "320W Standard Panel",
            image:
              "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&amp;fit=crop&amp;w=800&amp;q=80",
            description:
              "Reliable 320W polycrystalline panel for various applications.",
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
              <span class="price">$${price.toFixed(2)}</span>
              <button class="details-btn">View Details</button>
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

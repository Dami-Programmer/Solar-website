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
          },
        ],
      },
    ],
  },
  {
    category: "Solar-panel",
    subcategories: [
      {
        name: "Jinko Solar",
        products: [
          {
            name: "Jinko Solar",
            image: "image/jinko.jpg",
            description:
              "Jinko Solar is one of the world's largest and most trusted solar panel manufacturers. ",
          },
        ],
      },
      {
        name: "Canadian Solar",
        products: [
          {
            name: "Canadian Solar",
            image: "image/monocry.jpg",
            description:
              "is a globally recognized brand that combines premium quality with great performance. ",
          },
        ],
      },
      {
        name: "Polycrystalline",
        products: [
          {
            name: "Polycrystalline",
            image: "image/poli-cry.jpg",
            description:
              "Polycrystalline (also known as poly) solar panels are made from multiple silicon crystals melted together. ",
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
            name: "Lithium Battery",
            image: "image/lithium.jpg",
            description:
              "Lithium batteries are the most advanced and powerful option available today. They are lightweight, fast-charging, and have a longer lifespan",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/block.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
      {
        name: "Lead-Acid Battery",
        products: [
          {
            name: "Lead-Acid Battery",
            image: "image/acid.jpg",
            description:
              "Lead-Acid batteries are the most common and affordable type of inverter battery used in Nigeria. ",
          },
        ],
      },
    ],
  },
  {
    category: "Street-light",
    subcategories: [
      {
        name: "Street light with CCTV",
        products: [
          {
            name: "Street light with CCTV",
            image: "image/cctv-street-light.jpg",
            description:
              "A smart solar street light that includes a built-in CCTV camera for 24/7 security. It runs on solar power, saving energy while keeping areas safe.",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/split-solar-light.jpg",
            description:
              "This light has separate solar panel and lamp units for more flexible positioning. It offers higher efficiency and better performance in low-sunlight areas.",
          },
        ],
      },
      {
        name: "Lead-Acid Battery",
        products: [
          {
            name: "Lead-Acid Battery",
            image: "image/all-in-one-light.jpg",
            description:
              "An all-in-one light with panel, battery, and LED lamp in a single compact unit. Easy to install, low maintenance, and fully powered by the sun. ",
          },
        ],
      },
    ],
  },
  {
    category: "Camera",
    subcategories: [
      {
        name: "Camera",
        products: [
          {
            name: "Lithium Battery",
            image: "image/01.jpg",
            description: "",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/03.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
      {
        name: "Lead-Acid Battery",
        products: [
          {
            name: "Lead-Acid Battery",
            image: "image/02.jpg",
            description:
              "Lead-Acid batteries are the most common and affordable type of inverter battery used in Nigeria. ",
          },
        ],
      },
    ],
  },
  {
    category: "Charge-controller",
    subcategories: [
      {
        name: "Lithium-Ion",
        products: [
          {
            name: "Lithium Battery",
            image: "image/Mppt.jpg",
            description:
              "Lithium batteries are the most advanced and powerful option available today. They are lightweight, fast-charging, and have a longer lifespan",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/Pwm.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
    ],
  },
  {
    category: "Camera",
    subcategories: [
      {
        name: "Camera",
        products: [
          {
            name: "Lithium Battery",
            image: "image/01.jpg",
            description: "",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/03.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
      {
        name: "Lead-Acid Battery",
        products: [
          {
            name: "Lead-Acid Battery",
            image: "image/02.jpg",
            description:
              "Lead-Acid batteries are the most common and affordable type of inverter battery used in Nigeria. ",
          },
        ],
      },
    ],
  },
  {
    category: "Charge-controller",
    subcategories: [
      {
        name: "Lithium-Ion",
        products: [
          {
            name: "Lithium Battery",
            image: "image/Mppt.jpg",
            description:
              "Lithium batteries are the most advanced and powerful option available today. They are lightweight, fast-charging, and have a longer lifespan",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/Pwm.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
    ],
  },
  {
    category: "Camera",
    subcategories: [
      {
        name: "Camera",
        products: [
          {
            name: "Lithium Battery",
            image: "image/01.jpg",
            description: "",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/03.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
      {
        name: "Lead-Acid Battery",
        products: [
          {
            name: "Lead-Acid Battery",
            image: "image/02.jpg",
            description:
              "Lead-Acid batteries are the most common and affordable type of inverter battery used in Nigeria. ",
          },
        ],
      },
    ],
  },
  {
    category: "Charge-controller",
    subcategories: [
      {
        name: "Lithium-Ion",
        products: [
          {
            name: "Lithium Battery",
            image: "image/Mppt.jpg",
            description:
              "Lithium batteries are the most advanced and powerful option available today. They are lightweight, fast-charging, and have a longer lifespan",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/Pwm.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
    ],
  },
  {
    category: "Gen",
    subcategories: [
      {
        name: "Camera",
        products: [
          {
            name: "Lithium Battery",
            image: "image/solar-gen-1.jpg",
            description: "",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/solar-gen-2.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
      {
        name: "Lead-Acid Battery",
        products: [
          {
            name: "Lead-Acid Battery",
            image: "image/solar-gen.jpg",
            description:
              "Lead-Acid batteries are the most common and affordable type of inverter battery used in Nigeria. ",
          },
        ],
      },
    ],
  },
  {
    category: "Fan",
    subcategories: [
      {
        name: "Lithium-Ion",
        products: [
          {
            name: "Lithium Battery",
            image: "image/fan.jpg",
            description:
              "Lithium batteries are the most advanced and powerful option available today. They are lightweight, fast-charging, and have a longer lifespan",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/fan-2.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
    ],
  },
  {
    category: "Ac",
    subcategories: [
      {
        name: "Camera",
        products: [
          {
            name: "Lithium Battery",
            image: "image/01.jpg",
            description: "",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/03.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
          },
        ],
      },
      {
        name: "Lead-Acid Battery",
        products: [
          {
            name: "Lead-Acid Battery",
            image: "image/02.jpg",
            description:
              "Lead-Acid batteries are the most common and affordable type of inverter battery used in Nigeria. ",
          },
        ],
      },
    ],
  },
  {
    category: "Pump",
    subcategories: [
      {
        name: "Lithium-Ion",
        products: [
          {
            name: "Lithium Battery",
            image: "image/Mppt.jpg",
            description:
              "Lithium batteries are the most advanced and powerful option available today. They are lightweight, fast-charging, and have a longer lifespan",
          },
        ],
      },
      {
        name: "Sealed Battery",
        products: [
          {
            name: "Sealed Battery",
            image: "image/Pwm.jpg",
            description:
              "Sealed batteries are a type of lead-acid battery that doesn't need water refilling or maintenance.",
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
      products.forEach(({ name, image, description }) => {
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

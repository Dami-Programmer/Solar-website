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
    category: "Inverter-Battery",
    subcategories: [
      {
        name: "Lithium-Ion",
        products: [
          {
            name: "Lithium Battery",
            image: "image/lithium.jpg",
            description:
              "are the most advanced and powerful option available today. They are lightweight, fast-charging, and have a longer lifespan",
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
    category: "Solar-Street-light",
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
            name: "Bullet CCTV Camera",
            image: "image/01.jpg",
            description:
              "A weatherproof surveillance camera designed for long-range outdoor monitoring. Ideal for homes, offices, and street security with infrared night vision support.",
          },
        ],
      },
      {
        name: "Camera",
        products: [
          {
            name: "Smart Security Light Camera",
            image: "image/03.jpg",
            description:
              "black outdoor security camera has two antennas and a circular array of LED lights around the lens, likely offering night vision and wireless connectivity.",
          },
        ],
      },
      {
        name: "Camera",
        products: [
          {
            name: "Infrared Bullet CCTV Camera",
            image: "image/02.jpg",
            description:
              "compact night vision surveillance camera with infrared LEDs for clear monitoring in low light. Suitable for both indoor and outdoor security systems. ",
          },
        ],
      },
    ],
  },
  {
    category: "Solar-Charge-controller",
    subcategories: [
      {
        name: "Controller",
        products: [
          {
            name: "MPPT",
            image: "image/Mppt.jpg",
            description:
              "MPPT charge controllers optimize the power output from solar panels by adjusting voltage and current for maximum efficiency.",
          },
        ],
      },
      {
        name: "Controller",
        products: [
          {
            name: "PWM",
            image: "image/Pwm.jpg",
            description:
              "PWM controllers regulate solar charging by gradually reducing the power as the battery nears full capacity, making them cost-effective for small systems.",
          },
        ],
      },
    ],
  },
  {
    category: "Solar-Gen",
    subcategories: [
      {
        name: "Power-station",
        products: [
          {
            name: "LE1000 portable power station",
            image: "image/solar-gen-1.jpg",
            description:
              "versatile battery-powered generator with multiple outlets (AC, USB, car) and a digital display, ideal for providing reliable power during outages, outdoor activities, or as a backup for various electronic devices.",
          },
        ],
      },
      {
        name: "Power-station",
        products: [
          {
            name: "Marsitek portable power station",
            image: "image/solar-gen-2.jpg",
            description:
              "is a versatile off-grid solar generator with multiple output ports and a digital display, shown here paired with a solar panel for charging.",
          },
        ],
      },
      {
        name: "Power-station",
        products: [
          {
            name: "COLASOLAR off-grid inverter system",
            image: "image/solar-gen.jpg",
            description:
              " a compact power solution featuring a single AC output socket, designed for residential or small business use. ",
          },
        ],
      },
    ],
  },
  {
    category: "Rechargeable-fan",
    subcategories: [
      {
        name: "Fan",
        products: [
          {
            name: "ORASA",
            image: "image/fan.jpg",
            description:
              "rechargeable standing fan with a remote control, designed to provide cooling even during power outages.",
          },
        ],
      },
      {
        name: "Fan",
        products: [
          {
            name: "Fanelec",
            image: "image/fan-2.jpg",
            description:
              "Rechargeable Fan with Solar Panel and Remote is an off-grid cooling and lighting solution, featuring a standing fan, two LED bulbs, and a solar panel for charging.",
          },
        ],
      },
    ],
  },
  {
    category: "Inverter-Ac",
    subcategories: [
      {
        name: "AC",
        products: [
          {
            name: "Royal split AC",
            image: "image/ac-1.jpg",
            description:
              " unit with a copper coil, typically named based on its cooling capacity and brand",
          },
        ],
      },
      {
        name: "AC",
        products: [
          {
            name: "1.5 HP inverter split AC",
            image: "image/ac-2.jpg",
            description:
              "unit with a copper coil, typically named based on its cooling capacity and brand",
          },
        ],
      },
    ],
  },
  {
    category: "Solar-Pump",
    subcategories: [
      {
        name: "Solar-pump",
        products: [
          {
            name: "Solar-pump",
            image: "image/pump-1.jpg",
            description:
              "Solar water pump system provides a sustainable and efficient solution for accessing water in various environments. ",
          },
        ],
      },
      {
        name: "Solar-pump",
        products: [
          {
            name: "Solar-pump",
            image: "image/pump-2.jpg",
            description:
              "Solar water pump system provides a sustainable and efficient solution for accessing water in various environments.",
          },
        ],
      },
    ],
  },
];

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
              
              <a href="#about" class="details-btn">Avaliable at the store</a>
            </div>
          </div>
        `;

        grid.appendChild(card);
      });
    });
  });
  setUpFilter();
  textAnimate();
};

document.addEventListener("DOMContentLoaded", populateProductGrid);

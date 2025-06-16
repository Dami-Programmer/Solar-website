document.addEventListener("DOMContentLoaded", () => {
  const loadingPage = document.getElementById("loading-page");
  const progressBar = document.getElementById("progress-bar");
  const progressPercentage = document.getElementById("progress-percentage");
  const loadingStatus = document.getElementById("loading-status");
  const particlesContainer = document.getElementById("particles-container");
  const generateSolarFactBtn = document.getElementById("generateSolarFactBtn");
  const solarFactDisplay = document.getElementById("solarFactDisplay");

  const messages = [
    "Calibrating solar arrays...",
    "Harnessing photon power...",
    "Energizing the grid...",
    "Optimizing light capture...",
    "Building sustainable solutions...",
    "Preparing for a brighter tomorrow...",
    "SolarFlow Online!",
  ];
  let currentMessageIndex = 0;

  function updateProgress(percentage) {
    progressBar.style.width = `${percentage}%`;
    progressPercentage.textContent = `${Math.floor(percentage)}%`;

    const messageThreshold = 100 / messages.length;
    const newMessageIndex = Math.min(
      Math.floor(percentage / messageThreshold),
      messages.length - 1
    );

    if (newMessageIndex !== currentMessageIndex) {
      currentMessageIndex = newMessageIndex;
      loadingStatus.style.opacity = "0";
      setTimeout(() => {
        loadingStatus.textContent = messages[currentMessageIndex];
        loadingStatus.style.opacity = "1";
      }, 300);
    }
  }

  function createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 4 + 3;
    const delay = Math.random() * 2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}vw`;
    particle.style.top = `${y}vh`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particle.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
    particle.style.setProperty("--y", `${Math.random() * 200 - 100}px`);

    particlesContainer.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  }

  const particleInterval = setInterval(createParticle, 300);

  const simulationDuration = 4000;
  const updateInterval = 50;

  const steps = simulationDuration / updateInterval;
  let currentStep = 0;

  const loadingInterval = setInterval(() => {
    currentStep++;
    let simulatedProgress = (currentStep / steps) * 100;

    simulatedProgress = Math.min(simulatedProgress + Math.random() * 5, 100);

    updateProgress(simulatedProgress);

    if (currentStep >= steps) {
      clearInterval(loadingInterval);
      clearInterval(particleInterval);
      updateProgress(100);

      setTimeout(() => {
        loadingPage.style.opacity = "0";
        setTimeout(() => {
          loadingPage.style.display = "none";
          setTimeout(() => {}, 50);
        }, 1000);
      }, 800);
    }
  }, updateInterval);
});

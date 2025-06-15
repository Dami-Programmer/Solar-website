document.addEventListener("DOMContentLoaded", () => {
  const loadingPage = document.getElementById("loading-page");
  // const mainContent = document.getElementById("main-content");
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

  // Function to update progress bar and text
  function updateProgress(percentage) {
    progressBar.style.width = `${percentage}%`;
    progressPercentage.textContent = `${Math.floor(percentage)}%`;

    // Update message based on progress
    const messageThreshold = 100 / messages.length;
    const newMessageIndex = Math.min(
      Math.floor(percentage / messageThreshold),
      messages.length - 1
    );

    if (newMessageIndex !== currentMessageIndex) {
      currentMessageIndex = newMessageIndex;
      loadingStatus.style.opacity = "0"; // Fade out current message
      setTimeout(() => {
        loadingStatus.textContent = messages[currentMessageIndex];
        loadingStatus.style.opacity = "1"; // Fade in new message
      }, 300); // Allow time for fade out
    }
  }

  // Function to create random particles
  function createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = Math.random() * 4 + 2; // Size between 2px and 6px
    const x = Math.random() * 100; // X position as percentage
    const y = Math.random() * 100; // Y position as percentage
    const duration = Math.random() * 4 + 3; // Duration between 3s and 7s
    const delay = Math.random() * 2; // Delay up to 2s

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}vw`;
    particle.style.top = `${y}vh`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    // Custom properties for particle float animation end point
    particle.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
    particle.style.setProperty("--y", `${Math.random() * 200 - 100}px`);

    particlesContainer.appendChild(particle);

    // Remove particle after its animation
    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  }

  // Periodically create particles
  const particleInterval = setInterval(createParticle, 300);

  // Simulate looading
  let currentProgress = 0;
  const simulationDuration = 4000; // Total simulation time in ms (e.g., 4 seconds)
  const updateInterval = 50; // How often to update progress in ms

  const steps = simulationDuration / updateInterval;
  let currentStep = 0;

  const loadingInterval = setInterval(() => {
    currentStep++;
    let simulatedProgress = (currentStep / steps) * 100;

    // Add a bit of randomness and ensure it doesn't go over 100 prematurely
    simulatedProgress = Math.min(simulatedProgress + Math.random() * 5, 100);

    updateProgress(simulatedProgress);

    if (currentStep >= steps) {
      clearInterval(loadingInterval);
      clearInterval(particleInterval); // Stop creating new particles
      updateProgress(100); // Ensure it hits 100%

      // After full progress, wait a moment and then transition to main content
      setTimeout(() => {
        loadingPage.style.opacity = "0"; // Fade out loading page
        setTimeout(() => {
          loadingPage.style.display = "none"; // Hide completely
          // mainContent.style.display = "flex"; // Show main content
          setTimeout(() => {
            // mainContent.style.opacity = "1"; // Fade in main content
          }, 50); // Small delay to ensure display change takes effect
        }, 1000); // Wait for loading page fade out (1 second)
      }, 800); // Additional delay after 100% before fade out (0.8 seconds)
    }
  }, updateInterval);
});

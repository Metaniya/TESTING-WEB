document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here

  const images = document.querySelectorAll(".image-container");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");

  let currentIndex = 0;

  function updateImage() {
    images.forEach((img, index) => {
      img.classList.toggle("active", index === currentIndex);
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  updateImage(); // Initialize carousel

  // Modal Functionality
  const connectBtn = document.getElementById("connect-btn");
  const modal = document.getElementById("connect-modal");
  const closeModal = document.getElementById("close-modal");

  connectBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // Show the modal
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none"; // Hide the modal
  });

  // Optional: Close modal when clicking outside it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

const imageUrls = [
    "img/dognet.jpg",
    "img/rednet.jpg",
    "img/dognet.jpg",
    // Add more image URLs as needed
  ];
  
  function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }
  
  function addNewImage(x, y) {
    const imageContainer = document.getElementById("imageContainer");
    const img = document.createElement("img");
    img.src = getRandomImageUrl();
  
    // Adjust image position to center it on the cursor
    const imgWidth = 150; // Set the width of your images here (same as in CSS)
    const imgHeight = 150; // Set the height of your images here (same as in CSS)
    const xPos = x - imgWidth / 2;
    const yPos = y - imgHeight / 2;
  
    img.style.left = xPos + "px";
    img.style.top = yPos + "px";
    imageContainer.appendChild(img);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Initial images
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      addNewImage(x, y);
    }
  
    // Add random image on mouseover
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.addEventListener("mouseover", (event) => {
      const x = event.clientX;
      const y = event.clientY;
      addNewImage(x, y);
    });
  });
  
  
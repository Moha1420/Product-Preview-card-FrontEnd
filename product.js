// Sample product data
const product = {
    name: "Sample Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$19.99",
    images: ["product-image1.jpg", "product-image2.jpg", "product-image3.jpg"]
};

let currentIndex = 0; // Index to track the current image in the array

// Function to update product details on the card
function updateProductDetails() {
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productDescription").textContent = product.description;
    document.getElementById("productPrice").textContent = product.price;
}

// Function to change the displayed product image
function changeImage(direction) {
    currentIndex += direction;

    // Ensure the index stays within the bounds of the images array
    if (currentIndex < 0) {
        currentIndex = product.images.length - 1;
    } else if (currentIndex >= product.images.length) {
        currentIndex = 0;
    }

    document.getElementById("productImage").src = product.images[currentIndex];
}

// Function to add the current product to the cart
function addToCart() {
    // You can implement your own logic for adding the product to the cart
    // For now, let's just log the product name to the console
    console.log(`Added to cart: ${product.name}`);
}

// Initial setup
updateProductDetails();

// Event listeners for image navigation buttons
document.getElementById("prevButton").addEventListener("click", () => changeImage(-1));
document.getElementById("nextButton").addEventListener("click", () => changeImage(1));

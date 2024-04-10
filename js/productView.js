import { products } from "./products.js";

document.addEventListener("DOMContentLoaded", function () {
    // Obtener el productId de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("productId");

    // Obtener el producto correspondiente al productId
    const product = getProductById(productId);

    // Renderizar el producto
    renderProduct(product);
});

// Función para obtener el producto por su id
function getProductById(productId) {
    return products[productId];
}

// Función para renderizar el producto
function renderProduct(product) {
    const productContainer = document.getElementById("productContainer");

    const productDiv = document.createElement("product");
    productDiv.classList.add("product");

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.title;

    const title = document.createElement("h2");
    title.textContent = product.title;

    const description = document.createElement("p");
    description.textContent = product.description;

    const category = document.createElement("p");
    category.textContent = product.category;

    const whatsapp = document.createElement("a");
    whatsapp.href = `${product.whatsapp}&text=${encodeURIComponent("Hola Ind. Ferechian, Me gustaria saber que talles y colores tenes en stock de este par : " + product.title + " " + product.description)}`;

    const whatsappButton = document.createElement("img");
    whatsappButton.classList.add("whatsappButton");
    whatsappButton.src = "../Images/logowhatsapp.webp";
    whatsappButton.alt = "WhatsApp";
    whatsappButton.style.width = "50px";
    whatsappButton.style.height = "50px";
    const whatsappText = document.createElement("span");
    whatsappText.textContent = "Consúltanos a nuestro WhatsApp";

    
    // Agregar elementos al contenedor del producto
    productContainer.appendChild(productDiv);
    whatsapp.appendChild(whatsappText);
    productDiv.appendChild(img);
    productDiv.appendChild(title);
    productDiv.appendChild(description);
    whatsapp.appendChild(whatsappButton);
    productDiv.appendChild(whatsapp);

}
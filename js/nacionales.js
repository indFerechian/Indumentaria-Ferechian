import { products } from "./products.js";

function renderProducts() {
    const contentProducts = document.getElementById("contentProduct");

    products.forEach((product, index) => {
        if (product.category !== "nacionales") {
            return; 
        }

        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.dataset.index = index;
        
        // Configurar el fondo del div directamente
        const img = document.createElement("img");
        img.src = product.img;
        img.alt = "product img";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.opacity = 0;

        const title = document.createElement("h2");
        title.textContent = product.title;

        const description = document.createElement("p");
        description.textContent = product.description;

        const whatsapp = document.createElement("a");
        whatsapp.href = `${product.whatsapp}&text=${encodeURIComponent("Hola Ind. Ferechian, quiero saber que talles y que colores tenes en stock de este par : " + product.title + " " + product.description)}`;

        const whatsappButton = document.createElement("img");
        whatsappButton.src = '../Images/logowhatsapp.webp'; // Coloca aquí la URL del logotipo de WhatsApp
        whatsappButton.alt = "WhatsApp";
        whatsappButton.style.width = "40px";
        whatsappButton.style.height = "40px";

        const whatsappText = document.createElement("span");
        whatsappText.textContent = "Consúltanos a nuestro WhatsApp";

        whatsapp.appendChild(whatsappText);
        whatsapp.appendChild(whatsappButton);

        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productDiv.appendChild(description);
        productDiv.appendChild(whatsapp);
        // Agregar el div del producto al contenedor principal
        contentProducts.appendChild(productDiv);

        // Agregar un manejador de eventos al div del producto para cambiar el estado del checkbox
        productDiv.addEventListener("click", () => {
            window.location.href = `./product.html?productId=${product.productId - 3}`;
            console.log(`Clic en el producto ${index}`);
            // Puedes agregar aquí la lógica adicional que necesites
        });
    });
}

// Llamada a la función renderProducts
document.addEventListener("DOMContentLoaded", renderProducts);

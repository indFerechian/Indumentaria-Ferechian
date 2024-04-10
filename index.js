import { products } from "./js/products.js";

function renderProducts() {
    const contentProducts = document.getElementById("contentProduct");

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.dataset.index = index;

        const img = document.createElement("img");
        img.src = product.img;
        img.alt = product.title;

        const title = document.createElement("h2");
        title.textContent = product.title;

        const description = document.createElement("p");
        description.textContent = product.description;

        const whatsapp = document.createElement("a");
        
        whatsapp.href = `${product.whatsapp}&text=${encodeURIComponent("Hola Ind. Ferechian, quiero saber que talles y que colores tenes en stock de este par : " + product.title + " " + product.description)}`;

        const whatsappButton = document.createElement("img");
        whatsappButton.src = './Images/logowhatsapp.webp';
        whatsappButton.alt = "WhatsApp";
        whatsappButton.style.width = "40px";
        whatsappButton.style.height = "40px";

        const whatsappText = document.createElement("span");
        whatsappText.textContent = "Consúltanos a nuestro WhatsApp ";

        whatsapp.appendChild(whatsappText);
        whatsapp.appendChild(whatsappButton);

        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productDiv.appendChild(description);
        productDiv.appendChild(whatsapp);

        productDiv.addEventListener("click", () => {
            window.location.href = `./pages/product.html?productId=${index}`;
            console.log(`Clic en el producto ${index}`);
        });

        contentProducts.appendChild(productDiv);
    });
}

document.addEventListener("DOMContentLoaded", renderProducts);

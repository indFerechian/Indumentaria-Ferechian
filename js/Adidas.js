import { products } from "./products.js";

function renderProducts() {
    const contentProducts = document.getElementById("contentProduct");

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.dataset.index = index;

        const img = document.createElement("img");
        img.src = product.img;
        img.alt = "product img";

        const title = document.createElement("h2");
        title.textContent = product.title;

        const description = document.createElement("p");
        description.textContent = product.description;

        const whatsapp = document.createElement("a");
        whatsapp.href = `${product.whatsapp}&text=${encodeURIComponent("Hola Ind. Ferechian, quiero saber que talles y que colores tenes en stock de este par : " + product.title + " " + product.description)}`;

        const whatsappButton = document.createElement("img");
        whatsappButton.src = '../Images/logowhatsapp.webp';
        whatsappButton.alt = "WhatsApp";
        whatsappButton.style.width = "40px";
        whatsappButton.style.height = "40px";

        const divWhatsapp = document.createElement("div");
        whatsapp.appendChild(whatsappButton);
        divWhatsapp.appendChild(whatsapp);

        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productDiv.appendChild(description);
        productDiv.appendChild(divWhatsapp);

        contentProducts.appendChild(productDiv);

        productDiv.addEventListener("click", () => {
            
            window.location.href = `./product.html?productId=${product.productId - 1}`;
            console.log(`Clic en el producto ${index}`);
        });
    });
}

document.addEventListener("DOMContentLoaded", renderProducts);
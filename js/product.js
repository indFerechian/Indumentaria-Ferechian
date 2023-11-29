
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
    // 'products' debería ser accesible desde aquí o debes cargarlo nuevamente
    const products = [
        {
            title: "products",
            description: "este es el producto",
            img: "./images/azulado 2.png",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',

        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',

        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',

        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',

        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',

        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',

        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        },
        {
            title: "products",
            description: "este es el producto",
            img: "./public/products/product1",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
        }
    ];

    return products[productId];
}

// Función para renderizar el producto
function renderProduct(product) {
    const productContainer = document.getElementById("productContainer");

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.title;

    const title = document.createElement("h2");
    title.textContent = product.title;
    title.style.height = "50px"; // Establece la altura a 20px

    const description = document.createElement("p");
    description.textContent = product.description;
    description.style.height = "50px"; // Establece la altura a 20px
    
    const category = document.createElement("p");
    category.textContent = product.category;

    const whatsapp = document.createElement("a");
    whatsapp.href = product.whatsapp;

    const whatsappButton = document.createElement("img");
    whatsappButton.src = "../Images/logowhatsapp.webp"; // Reemplaza con la URL correcta
    whatsappButton.alt = "WhatsApp";
    whatsappButton.style.width = "50px"; // Establece el ancho a 20px
    whatsappButton.style.height = "50px"; // Establece la altura a 20px

    // Agregar elementos al contenedor del producto
    productContainer.appendChild(title);
    productContainer.appendChild(img);
    productContainer.appendChild(description);
    whatsapp.appendChild(whatsappButton);
    productContainer.appendChild(whatsapp);
}
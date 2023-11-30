
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
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 1,
            category: "brasil"
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 2
    
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 3
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 4
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 5
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 6
    
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 7
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 8
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 9
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 10
    
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 11
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 12
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 13
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 14
    
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 15
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 16
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 17
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 18
    
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 19
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 20
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 21
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 22
    
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 23
        },
        {
            title: "products",
            description: "este es el producto",
            img: "../Images/FB_IMG_1696522236291.jpg",
            whatsapp: 'https://api.whatsapp.com/send?phone=1133112388=Hola,%20quiero%20saber%20más%20sobre%20este%20producto.',
            productId: 24
        }
    ];

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
    whatsapp.href = product.whatsapp;

    const whatsappButton = document.createElement("img");
    whatsappButton.src = "../Images/logowhatsapp.webp"; // Reemplaza con la URL correcta
    whatsappButton.alt = "WhatsApp";
    whatsappButton.style.width = "50px"; // Establece el ancho a 20px
    whatsappButton.style.height = "50px"; // Establece la altura a 20px

    // Agregar elementos al contenedor del producto
    productContainer.appendChild(productDiv);
    productDiv.appendChild(img);
    productDiv.appendChild(title);
    productDiv.appendChild(description);
    whatsapp.appendChild(whatsappButton);
    productDiv.appendChild(whatsapp);
}
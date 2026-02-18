const products = [
    {
        id: 1,
        name: "Versace Skyblue",
        price: 599,
        image: "images/bluelang.jpg"
    },
    {
        id: 2,
        name: "Versace Blue",
        price: 599,
        image: "images/blue.jpg"
    },
    {
        id: 3,
        name: "Versace Gold",
        price: 599,
        image: "images/eros.jpg"
    },
    {
        id: 4,
        name: "Versace Red",
        price: 599,
        image: "images/red.jpg"
    },
]
//console.log("All products:", products)

function renderProducts () {
    const productContainer = document.querySelector(".products-container")
    for (let i = 0; i < products.length; i++) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let price = document.createElement("p");
        let button = document.createElement("button");
        img.src = products[i].image
        div.append(img)
        console.log(div)

        price.textContent = "$" + products[i].price
        div.append(price)
       
        button.textContent = "Add to Cart"
        div.append(button)

        productContainer.classList.add("product-container")
        div.classList.add("products")
        button.classList.add("products-button")
        productContainer.append(div)
    }
}
renderProducts()
const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("products-container").classList.add("hidden");
    } else {
        document.getElementById("products-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }

}

const loadLevel = async () => {
    const url = `https://fakestoreapi.com/products/categories`
    const res = await fetch(url)
    const result = await res.json()
    const levels = ["All", ...result]
    displayLevel(levels)
}

const displayLevel = (levels) => {
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = ""
    levels.forEach(level => {
        const button = document.createElement("button");
        button.textContent = level;
        button.className = "btn btn-outline btn-primary rounded-full";
        button.addEventListener("click", () => {
            loadFilterCategory(level);
        })
        levelContainer.append(button)

    })

}
const loadFilterCategory = async (level) => {
    console.log(level)
    const url = `https://fakestoreapi.com/products/category/${level}`;
    const res = await fetch(url);
    const result = await res.json()
    console.log(result)

    if (level == "All") {
        const respones = await fetch("https://fakestoreapi.com/products")
        const allProducts = await respones.json();

        displayProducts(allProducts)
    } else {
        displayProducts(result)
    }


}

loadLevel()


const displayProducts = (products) => {
    manageSpinner(true);
    const productContainer = document.getElementById("products-container")


    productContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div")
        card.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm mt-4 h-full">
                    <figure>
                        <img src=${product.image}
                            alt=${product.title} class="h-32"/>
                    </figure>
                    <div class="card-body">
                        <div class="grid grid-cols-3 items-center">
                            <p class="bg-blue-100 text-blue-600 font-semibold text-xs rounded-lg px-2">${product?.category}
                            </p>
                            <p class="text-right text-xs col-start-3"><i class="fa-solid fa-star text-orange-300"></i>
                                <span class="text-gray-400 font-medium"> ${product.rating?.rate} / ${product.rating?.count}</span>
                            </p>
                        </div>
                        <h2 class="card-title">${product.title}</h2>
                        <p class="font-bold">$ ${product.price}
                        </p>
                        <div class="card-actions flex justify-between items-center mt-4">
                            <button class="border w-2/5 py-2 rounded-lg">
                                <i class="fa-regular fa-eye"></i>
                                Details
                            </button>
                            <button onClick="addToCart(${product.id})" class="bg-blue-600 w-2/5 py-2 rounded-lg text-white">
                                <i class="fa-solid fa-cart-shopping"></i>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
        
        `
        manageSpinner(false)
        productContainer.appendChild(card)

    });

}

const addToCart = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const result = await res.json();
    console.log(result)
    const newCart = {
        id: result.id,
        title: result.title,
        price: result.price
    };


    let swiftCart = [];
    const storedCart = localStorage.getItem("swiftCart");

    try {
        swiftCart = storedCart ? JSON.parse(storedCart) : [];

        if (!Array.isArray(swiftCart)) swiftCart = [];
    } catch (error) {

        swiftCart = [];
    }

    swiftCart.push(newCart);

    localStorage.setItem("swiftCart", JSON.stringify(swiftCart));


}

const loadProducts = async () => {

    const res = await fetch("https://fakestoreapi.com/products")
    const result = await res.json();

    displayProducts(result)

}

loadProducts()





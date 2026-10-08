// set the hamButton function
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");


hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Picture Album Enhancement
const products = [
    {
        productName: "Resurrection",
        sizes: {
            small: {
                height: "13",
                width: "8",
                price: "$7.99"
            },
            medium: {
                height: "17",
                width: "9",
                price: "$11.99"
            },
            large: {
                height: "26",
                width: "15",
                price: "$30.99"
            }
        },
        imageUrl:
            "images/resurrection.webp"
    },
    {
        productName: "Foolishness vs. Prudence",
        sizes: {
            small: {
                height: "13",
                price: "$10.99"
            },
            medium: {
                height: "17",
                price: "$16.99"
            },
            large: {
                height: "26",
                price: "$25.99"
            }
        },
        imageUrl:
            "images/foolishness-vs-prudence.webp"
    },
    {
        productName: "Knock, and It Shall Be Opened unto You",
        sizes: {
            medium: {
                height: "15",
                width: "10",
                price: "$15.99"
            }
        },
        imageUrl:
            "images/knock-and-it-shall-be-opened-unto-you.webp"
    },
    {
        productName: "Feed My Sheep",
        sizes: {
            small: {
                height: "17",
                width: "13",
                price: "$21.99"
            },
            medium: {
                height: "21",
                width: "17",
                price: "$27.99"
            },
            large: {
                height: "27",
                width: "19",
                price: "$50.99"
            }
        },
        imageUrl:
            "images/feed-my-sheep.webp"
    },
    {
        productName: "Restoration of the Melchizedek Priesthood",
        sizes: {
            medium: {
                height: "18",
                width: "19",
                price: "$25.00"
            }
        },
        imageUrl:
            "images/restoration-of-the-melchizedek-priesthood.webp"
    },
    {
        productName: "Gethsemane",
        sizes: {
            small: {
                height: "10",
                width: "10",
                price: "$13.99"
            },
            medium: {
                height: "15",
                width: "15",
                price: "$19.99"
            }
        },
        imageUrl:
            "images/gethsemane.webp"
    },
    {
        productName: "The First Vision",
        sizes: {
            medium: {
                height: "16",
                width: "19",
                price: "$27.99"
            },
            large: {
                height: "17.5",
                width: "24",
                price: "$36.99"
            }
        },
        imageUrl:
            "images/the-first-vision.webp"
    },
    {
        productName: "He Is Not Here, for He Is Risen!",
        sizes: {
            small: {
                height: "8",
                width: "11",
                price: "$13.99"
            }
        },
        imageUrl:
            "images/he-is-not-here-for-he-is-risen.webp"
    },
    {
        productName: "Jacob's Well",
        sizes: {
            small: {
                height: "9.5",
                width: "9",
                price: "$18.99"
            },
            medium: {
                height: "11",
                width: "11",
                price: "$22.99"
            }
        },
        imageUrl:
            "images/jacob-well.webp"
    },
    {
        productName: "Feed My Sheep - Version 2",
        sizes: {
            medium: {
                height: "17",
                width: "15",
                price: "$23.99"
            }
        },
        imageUrl:
            "images/feed-my-sheep-version-2.webp"
    },
    {
        productName: "Can a Mother Forget Her Child?",
        sizes: {
            small: {
                height: "12",
                width: "13",
                price: "$18.99"
            }
        },
        imageUrl:
            "images/can-mother-forget-her-child.webp"
    },
    {
        productName: "Missionary Badge Holder",
        sizes: {
            medium: {
                height: "16",
                width: "12",
                price: "$23.99"
            }
        },
        imageUrl:
            "images/missionary-badge-holder.webp"
    },
    {
        productName: "Missionary Couple Badge Holder",
        sizes: {
            large: {
                height: "16",
                width: "21",
                price: "$28.99"
            }
        },
        imageUrl:
            "images/missionary-couple-badge-holder.webp"
    },
    {
        productName: "Restoration of the Aaronic Priesthood",
        sizes: {
            medium: {
                height: "16",
                width: "16",
                price: "$26.99"
            }
        },
        imageUrl:
            "images/restoration-of-the-aaronic-priesthood.webp"
    },
    {
        productName: "Customizable Statue",
        sizes: {
            dimensions: "Custom",
            price: "Contact Us for Pricing"
        },
        imageUrl:
            "images/customizable-statue.webp"
    }

];
if (document.querySelector(".res-grid")) {
    createProductCard(products);
}

const featuredProducts = [
    products[6],
    products[11],
    products[13],
    products[14]
];

// function to create cards with product image to home page
function createFeaturedProducts(products) {
    const featuredGrid = document.querySelector(".featured-grid");

    if (!featuredGrid) return;

    featuredGrid.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("article");
        const imageContainer = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h3");

        card.classList.add("featured-card");
        imageContainer.classList.add("featured-image-container");
        img.classList.add("featured-image");

        name.textContent = product.productName;

        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", product.productName);
        img.setAttribute("loading", "lazy");

        imageContainer.appendChild(img);

        card.appendChild(imageContainer);
        card.appendChild(name);

        featuredGrid.appendChild(card);
    });
}

createFeaturedProducts(featuredProducts);

// function to set attributes to HTML using JS
function createProductCard(products, selectedSize = null) {
    document.querySelector(".res-grid").innerHTML = "";

    products.forEach(product => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let height = document.createElement("p");
        let width = document.createElement("p");
        let price = document.createElement("p");
        let img = document.createElement("img");
        let imageContainer = document.createElement("div");

        // product name
        name.textContent = product.productName;

        // image
        img.addEventListener("click", () => {
            openImage(img.src, img.alt);
        });

        // function to zoom the image
        function openImage(src, alt) {
            const modal = document.createElement("div");
            modal.classList.add("image-modal");

            const largeImage = document.createElement("img");
            largeImage.src = src;
            largeImage.alt = alt;

            modal.appendChild(largeImage);
            document.body.appendChild(modal);

            modal.addEventListener("click", () => {
                modal.remove();
            });
        }

        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.productName}`);
        img.setAttribute("loading", "lazy");

        imageContainer.classList.add("image-container");
        imageContainer.appendChild(img);

        card.appendChild(name);
        card.appendChild(imageContainer);

        // customizable product
        if (product.productName === "Customizable Statue") {
            img.addEventListener("click", () => {
                window.location.href = "contact.html";
            });
        }

        if (product.sizes.dimensions === "Custom") {
            height.innerHTML = `<span class="label">Dimensions:</span> ${product.sizes.dimensions}`;
            price.innerHTML = `<span class="label">Price:</span> ${product.sizes.price}`;

            card.appendChild(price);
            card.appendChild(height);
        }

        // size selected
        if (selectedSize) {
            let size = product.sizes[selectedSize];

            if (size) {
                // height
                if (size?.height) {
                    height.innerHTML = `<span class="label">Height:</span> ${size.height} cm`;
                    card.appendChild(height);
                }

                // width
                if (size?.width) {
                    width.innerHTML = `<span class="label">Width:</span> ${size.width} cm`;
                    card.appendChild(width);
                }

                // price
                if (size?.price) {
                    price.innerHTML = `<span class="label">Price:</span> ${size.price} dollars`;
                    card.appendChild(price);
                }
            }
        }
        document.querySelector(".res-grid").appendChild(card);
    });
}

// creating the filters 
const allLink = document.querySelector("#all");
const smallLink = document.querySelector("#small");
const mediumLink = document.querySelector("#medium");
const largeLink = document.querySelector("#large");

if (allLink && smallLink && mediumLink && largeLink) {
    // HOME
    allLink.addEventListener("click", () => {
        createProductCard(products);
        closeMenu()
    });

    // SMALL
    smallLink.addEventListener("click", () => {
        const filteredProducts = products.filter(product => product.sizes.small);
        createProductCard(filteredProducts, "small")
        closeMenu()
    });

    // MEDIUM
    mediumLink.addEventListener("click", () => {
        const filteredProducts = products.filter(product => product.sizes.medium);
        createProductCard(filteredProducts, "medium")
        closeMenu()
    });

    // LARGE
    largeLink.addEventListener("click", () => {
        const filteredProducts = products.filter(product => product.sizes.large);
        createProductCard(filteredProducts, "large")
        closeMenu()
    });
}

// function to close the menu when the filters are clicked
function closeMenu() {
    navigation.classList.remove("open");
    hamButton.classList.remove("open");
}

// footer time of last modification

const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

const today = new Date();

lastModified.textContent = "Last Modified: " + document.lastModified;
year.textContent = today.getFullYear();
// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.onkeydown = (e) => {
    if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
        return false;
};



// Scroll Reveal
ScrollReveal({
    reset: false,
    distance: '200px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.products', { origin: 'top', distance: '0px', delay: 200 });


const LoadFunction = () => {

    // Navbar anchor + hiding # in URL
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 300);
        }
    });



    // Search Box Buttons Listeners
    document.getElementById("search-box").addEventListener("input", function () {
        var searchValue = this.value.toLowerCase();
        var products = document.querySelectorAll(".product-box");
        var matchingProducts = false;

        products.forEach(function (product) {
            var productName = product
                .querySelector(".sellpass-title")
                .textContent.toLowerCase();
            if (productName.includes(searchValue)) {
                product.style.display = "table-row";
                matchingProducts = true;
            } else {
                product.style.display = "none";
            }
        });

        var noMatchMessage = document.getElementById("no-match-message");
        if (!matchingProducts) {
            noMatchMessage.style.display = "table-row";
        } else {
            noMatchMessage.style.display = "none";
        }
    });



    // Category Buttons Listeners
    document.getElementById("category").addEventListener("change", function () {
        var category = this.value;
        var products = document.querySelectorAll(".product-box");
        var matchingProducts = false;

        if (category == "All") {
            products.forEach(function (product) {
                product.style.display = "table-row";
                matchingProducts = true;
            });
        } else {
            products.forEach(function (product) {
                if (product.getAttribute("data-category") == category) {
                    product.style.display = "table-row";
                    matchingProducts = true;
                } else {
                    product.style.display = "none";
                }
            });
        }

        var noMatchMessage = document.getElementById("no-match-message");
        if (!matchingProducts) {
            noMatchMessage.style.display = "table-row";
        } else {
            noMatchMessage.style.display = "none";
        }
    });




    // Black Bar toggle
    $(document).ready(function () {
        var menuOpen = false;

        $("#btn-blackbar, .nav-blackbar-item").click(function () {
            if (!menuOpen) {
                $("body").css("overflow", "hidden");
                $("#black-bar").slideDown();
                $("#btn-blackbar").addClass("active");
                $("#blackbarbutton-icon").removeClass("fa-bars").addClass("fa-xmark");
                menuOpen = true;
            } else {
                $("body").css("overflow", "auto");
                $("#black-bar").slideUp();
                $("#btn-blackbar").removeClass("active");
                $("#blackbarbutton-icon").removeClass("fa-xmark").addClass("fa-bars");
                menuOpen = false;
            }
        });
    });


}



// lukes part
const sellpassCss = '.sellpass-modal {\n' +
    '    position: fixed;\n' +
    '    top: 0;\n' +
    '    left: 0;\n' +
    '    width: 100%;\n' +
    '    height: 100%;\n' +
    '    z-index: 99999;\n' +
    '}\n' +
    '\n' +
    '.sellpass-iframe-wrapper {\n' +
    '    position: relative;\n' +
    '    margin: auto;\n' +
    '    width: 100%;\n' +
    '    height: 100%;\n' +
    '    z-index: 1;\n' +
    '    opacity: 0;\n' +
    '\n' +
    '    transition: opacity .2s linear;\n' +
    '}\n' +
    '\n' +
    '.sellpass-iframe-wrapper.show {\n' +
    '    opacity: 1;\n' +
    '}\n' +
    '\n' +
    '.sellpass-iframe-backdrop {\n' +
    '    background: #00000075;\n' +
    '    backdrop-filter: blur(3px);\n' +
    '    width: 100%;\n' +
    '    height: 100%;\n' +
    '    position: absolute;\n' +
    '}\n' +
    '\n' +
    '.sellpass-iframe {\n' +
    '    width: 100%;\n' +
    '    height: 100%;\n' +
    '    border: none;\n' +
    '}\n' +
    '\n' +
    '.sellpass-spinner {\n' +
    '    display: inline-block;\n' +
    '    position: absolute;\n' +
    '    top: 50%;\n' +
    '    left: 50%;\n' +
    '\n' +
    '    transform: translate(-50%, -50%);\n' +
    '    z-index: 2;\n' +
    '    width: 80px;\n' +
    '    height: 80px;\n' +
    '}\n' +
    '.sellpass-spinner div {\n' +
    '    box-sizing: border-box;\n' +
    '    display: block;\n' +
    '    position: absolute;\n' +
    '    width: 64px;\n' +
    '    height: 64px;\n' +
    '    margin: 8px;\n' +
    '    border: 3px solid #fff;\n' +
    '    border-radius: 50%;\n' +
    '    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n' +
    '    border-color: #fff transparent transparent transparent;\n' +
    '}\n' +
    '.sellpass-spinner div:nth-child(1) {\n' +
    '    animation-delay: -0.45s;\n' +
    '}\n' +
    '.sellpass-spinner div:nth-child(2) {\n' +
    '    animation-delay: -0.3s;\n' +
    '}\n' +
    '.sellpass-spinner div:nth-child(3) {\n' +
    '    animation-delay: -0.15s;\n' +
    '}\n' +
    '@keyframes lds-ring {\n' +
    '    0% {\n' +
    '        transform: rotate(0deg);\n' +
    '    }\n' +
    '    100% {\n' +
    '        transform: rotate(360deg);\n' +
    '    }\n' +
    '}\n'



// Fetching Products
function showLoadingBar() {
    const loadingBar = document.getElementById('load');
    if (loadingBar) {
        loadingBar.style.display = 'block';
    }
}

function hideLoadingBar() {
    const loadingBar = document.getElementById('load');
    if (loadingBar) {
        loadingBar.style.display = 'none';
    }
}

function getCatId(data, id) {
    let categoryName = null;

    data.map((gf, i) => {
        gf.listingIds.map((gff, ii) => {
            if (gff == id) {
                categoryName = gf.name;
            }
        });
    });

    return categoryName;
}

function renderGroupsAndProducts(data) {
    const groupData = data.listings;
    const categoryData = data.categories;

    const productTable = document.querySelector('tbody');

    groupData.forEach((group) => {
        group.group.listings.forEach((product) => {
            const productRow = document.createElement('tr');
            productRow.setAttribute('class', 'product-box');
            productRow.setAttribute('data-category', getCatId(categoryData, group.id));
            productRow.setAttribute('value', getCatId(categoryData, group.id));

            const titleCell = document.createElement('td');
            titleCell.setAttribute('class', 'sellpass-title');
            titleCell.textContent = product.product.title;
            productRow.appendChild(titleCell);

            const priceCell = document.createElement('td');
            priceCell.setAttribute('class', 'sellpass-price color-price');
            priceCell.textContent = '$' + product.minPriceDetails.amount;
            productRow.appendChild(priceCell);

            const groupCell = document.createElement('td');
            groupCell.setAttribute('class', 'sellpass-group');
            groupCell.textContent = group.group.title;
            productRow.appendChild(groupCell);

            const stockCell = document.createElement('td');
            stockCell.setAttribute('class', 'sellpass-stock');
            stockCell.textContent = product.product.isInStock;
            productRow.appendChild(stockCell);
            const stockorno = (a) => {
                if (a) {
                    return `<span class="color-instock">In Stock`
                } else {
                    return `<span class="color-nostock">Out of stock`
                }
            }
            stockCell.innerHTML = `${stockorno(product.product.isInStock)}</span>`;

            const shortDescCell = document.createElement('td');
            shortDescCell.setAttribute('class', 'sellpass-short-description');
            shortDescCell.textContent = product.product.shortDescription;
            productRow.appendChild(shortDescCell);

            const categoryCell = document.createElement('td');
            categoryCell.setAttribute('class', 'sellpass-category');
            categoryCell.textContent = getCatId(categoryData, group.id);
            productRow.appendChild(categoryCell);

            const purchaseCell = document.createElement('td');
            const purchaseButton = document.createElement('button');
            purchaseButton.setAttribute('class', 'btn btn-purchase');
            purchaseButton.setAttribute('data-sellpass-product-path', product.path);
            purchaseButton.setAttribute('data-sellpass-domain', 'test2biacc.sellpass.io');
            purchaseButton.textContent = 'Purchase';
            purchaseCell.appendChild(purchaseButton);
            productRow.appendChild(purchaseCell);

            productTable.appendChild(productRow);
        });
    });
}

hideLoadingBar();

fetch("https://dev.sellpass.io/v2/public/shops/test2biacc.sellpass.io/listings", {
    headers: {
        Authorization: "FUCK YOU"
    }
})

    .then(response => response.json())
    .then(data => {

        // Process the fetched data

        // console.log(data);
        const categoryData = data.data.categories
        const categoryFilterDiv = document.querySelector('#category');
        categoryData.forEach((category, index) => {
            if (category.name == "All") {
                const button = document.createElement('option');
                button.classList.add('none');
                button.textContent = "All Products";
                button.setAttribute('data-category', 'All');
                button.setAttribute('value', 'All');
                categoryFilterDiv.appendChild(button);

            } else {
                const button = document.createElement('option');
                button.classList.add('none');
                button.textContent = category.name;
                button.setAttribute('data-category', category.name);
                button.setAttribute('value', category.name);

                if (index === 0) {
                    button.classList.add('active');
                }

                categoryFilterDiv.appendChild(button);
            }

        });

        hideLoadingBar();
        renderGroupsAndProducts(data.data);
        LoadFunction();
        const embedIframe = () => {
            const buttons = document.querySelectorAll('[data-sellpass-product-path]')
            const modal = document.createElement('div')
            const backdrop = document.createElement('div')
            const spinner = document.createElement('div')
            const styleNode = document.createElement('style')
            const iframe = document.createElement('iframe')
            const iframeWrapper = document.createElement('div')
            styleNode.innerText = sellpassCss
            modal.classList.add('sellpass-modal')
            iframeWrapper.classList.add('sellpass-iframe-wrapper')
            iframe.classList.add('sellpass-iframe')
            backdrop.classList.add('sellpass-iframe-backdrop')
            spinner.classList.add('sellpass-spinner')
            spinner.innerHTML = '<div></div><div></div><div></div><div></div>'
            buttons.forEach(elem => {
                const productId = elem.dataset.sellpassProductPath
                const shopHost = elem.dataset.sellpassDomain
                modal.appendChild(backdrop)
                modal.appendChild(iframeWrapper)
                modal.appendChild(styleNode)
                elem.addEventListener('click', () => {
                    iframe.setAttribute('src', `https://${shopHost}/embed/products/${productId}`)
                    iframeWrapper.appendChild(iframe)
                    modal.appendChild(spinner)
                    document.body.appendChild(modal)
                    iframe.onload = () => {
                        setTimeout(() => {
                            modal.removeChild(spinner)
                            iframeWrapper.classList.add('show')
                        }, 1000)
                    }
                })
            })
            window.addEventListener('message', (event) => {
                if (event.data === 'close-embed') {
                    document.body.removeChild(modal)
                    iframeWrapper.classList.remove('show')
                }
            })
        }
        embedIframe();
    })

    .catch(error => {
        // Handle errors
        console.error(error);
        hideLoadingBar();
    });

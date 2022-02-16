// ==============Cart Iteam=================
function totalMoney() {
    const caseTotal = document.getElementById('case-price');
    const caseTotalPrice = parseFloat(caseTotal.innerText);
    const phoneTotal = document.getElementById('phone-price');
    const phoneTotalPrice = parseFloat(phoneTotal.innerText);
    const subTotalId = document.getElementById("sub-total");
    const subTotal = phoneTotalPrice + caseTotalPrice;
    subTotalId.innerText = subTotal;
    const taxId = document.getElementById("tax");
    const tax = subTotal * 20 / 100;
    taxId.innerText = tax;
    const totalId = document.getElementById("total");
    const totalCoast = subTotal - tax;
    totalId.innerText = totalCoast
}

function updateProduct(productId, productprice, displyaprice, increasing) {
    const countProduct = document.getElementById(productId);
    let productNumber = countProduct.value;
    if (increasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    countProduct.value = productNumber;

    let productPriceId = document.getElementById(displyaprice);
    let totalProductPrice = productprice * productNumber;
    productPriceId.innerText = parseFloat(totalProductPrice);
    totalMoney()
}

// Phone Product
document.getElementById('phone-add').addEventListener('click', function() {
    updateProduct('phone-number', 500, 'phone-price', true);
});

document.getElementById('phone-remove').addEventListener('click', function() {
    updateProduct('phone-number', 500, 'phone-price', false);
});
//Case Product
document.getElementById('case-add').addEventListener('click', function() {
    updateProduct('case-number', 100, 'case-price', true);
});

document.getElementById('case-remove').addEventListener('click', function() {
    updateProduct('case-number', 100, 'case-price', false);
})
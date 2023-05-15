
function updateSubtotal(product) {
    let price = product.querySelector('.price span');
    let quantity = product.querySelector(".quantity input");
    /*   console.log(price,quantity);  */
    let priceValue = parseFloat(price.innerText);
    /*  recibimos el Valor que esta entroduciendo por usuario */

    let quantityValue = quantity.value;
    /* calculamos el precio subtotoal */

    let subTotalValue = priceValue * quantityValue;
    let subTotalContainer = product.querySelector(".subtotal span");
    subTotalContainer.innerText = subTotalValue;
    return subTotalValue;
    //... your code goes here
}

function calculateAll() {
    let products = document.getElementsByClassName("product");
    /*  creamos un variable que guarda valor de cada iteracion de cada producto */
    let totalValue = 0;

    for (let product of products) {
        totalValue += updateSubtotal(product);
    }
    document.querySelector("#total-value span").innerText = totalValue;

};





// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);

    let row = target.parentNode.parentNode;
    console.log(row);
    let parent = row.parentNode;
    console.log(parent);
    parent.removeChild(row);

    calculateAll();
}



function createProduct() {
    let elementRow = document.querySelector(".create-product");
    let newProdNameInput = elementRow.querySelector("input");

    let newProdNameValue = newProdNameInput.value;
    let newProdPriceInput = elementRow.querySelector("#number");
    let newProdPriceValue = Number(newProdPriceInput.value);

    /* Creamos elemento como tal
   */
    let newTableRow = document.createElement('tr');
    newTableRow.className = "product"
    newTableRow.innerHTML = `
<td class="name">
<span>${newProdNameValue}</span>
</td>
<td class="price">$<span>${newProdPriceValue}</span></td>
<td class="quantity">
<input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
<button class="btn btn-remove">Remove</button>
</td>`


    let = parentCont = document.querySelector("#cart tbody ");
    parentCont.appendChild(newTableRow);

    let removeBtn = newTableRow.querySelector(".btn-remove");
    removeBtn.addEventListener('click', removeProduct);

    /* limpiar imputs */

    newProdNameInput.value = '';
    newProdPriceInput.value = 0;

}

// ITERATION 5




window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    let removeBtns = document.querySelectorAll(
        '.btn-remove');
    for (let removeBtn of removeBtns) {
        removeBtn.addEventListener('click', removeProduct);
    }



    let createBtn = document.querySelector("#create");
    createBtn.addEventListener("click", createProduct);

});
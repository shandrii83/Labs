
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
 subTotalContainer.innerText = subTotalValue ;
 return subTotalValue;
    //... your code goes here
  }
  
  function calculateAll() {
let products = document.getElementsByClassName("product");
/*  creamos un variable que guarda valor de cada iteracion de cada producto */
let totalValue = 0;

for(let product of products){
    totalValue += updateSubtotal(product);
}
document.querySelector("#total-value span").innerText = totalValue  ;

};   

  

  
  
  // ITERATION 4
  
  function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
  }
  
  // ITERATION 5
  
  function createProduct() {
    //... your code goes here
  }
  
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  
    //... your code goes here
  });
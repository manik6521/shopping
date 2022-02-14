function updateCaseNumber(product, price, isInreasing) {
    const caseInput = document.getElementById(product + "-number");
    let productNumber = caseInput.value;
    if (isInreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if ((isInreasing == false) && (productNumber > 0)) {
        productNumber = parseInt(productNumber) - 1;
    }
    caseInput.value = productNumber;

    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;


    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + "-number").value;
    const productNumber = parseInt(productInput);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal / 10;
    document.getElementById("tax-amount").innerText = tax;
    const subTotalManu = document.getElementById("sub-total"); 
    subTotalManu.innerText = subTotal;

    document.getElementById("total-price").innerText = subTotal + tax ;
}
document.getElementById("case-plus").addEventListener("click", function () {
    updateCaseNumber("case", 59, true);

});

document.getElementById("case-minus").addEventListener("click", function () {

    updateCaseNumber("case", 59, false);

});
// phone increase decrease events

document.getElementById("phone-plus").addEventListener("click", function () {

    updateCaseNumber("phone", 1219, true);

});

document.getElementById("phone-minus").addEventListener("click", function(){
    updateCaseNumber("phone", 1219, false);
})
let subtotal=JSON.parse(localStorage.getItem("subtotal"));
let discount=JSON.parse(localStorage.getItem("discount"));
let finalprice=JSON.parse(localStorage.getItem("finalamount"));
console.log(subtotal);

document.querySelector(".rcdiscount").append(discount);
document.querySelector("#rctotal").append(subtotal);
document.querySelector("#rfinaltotal").append(finalprice);
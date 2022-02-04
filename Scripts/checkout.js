let final=JSON.parse(localStorage.getItem("finalprice"));
let subtotal=[]||JSON.parse(localStorage.getItem("subtotal"));
let discount=[]||JSON.parse(localStorage.getItem("discount"));
let finalprice=[]||JSON.parse(localStorage.getItem("finalamount"));





document.querySelector("#applydiscount").addEventListener("click",function(){
    document.querySelector(".rcdiscount").innerHTML="";
    document.querySelector("#rctotal").innerHTML="";
    document.querySelector("#rfinaltotal").innerHTML="";
    let masaidis=0;
    let input=document.querySelector("#discount").value;    
    console.log("input:",input,'masaidis',masaidis)

    if(input=="masai20"){
        masaidis=+final*(20/100);
        document.querySelector(".rcdiscount").append(masaidis);
        document.querySelector("#rctotal").append(final);
        document.querySelector("#rfinaltotal").append(final-masaidis);
        subtotal.push(final);
        localStorage.setItem('subtotal', JSON.stringify(subtotal))
        discount.push(masaidis);
        localStorage.setItem('discount', JSON.stringify(discount))
        finalprice.push(final-masaidis);
        localStorage.setItem('finalamount', JSON.stringify(finalprice))
    }
    else{
        alert("Invalid Discount");
        masaidis=0;
        document.querySelector(".rcdiscount").append(masaidis);
        document.querySelector("#rctotal").append(final);
        document.querySelector("#rfinaltotal").append(final-masaidis);
        subtotal.push(final);
        localStorage.setItem('subtotal', JSON.stringify(subtotal))
        discount.push(masaidis);
        localStorage.setItem('discount', JSON.stringify(discount))
        finalprice.push(final-masaidis);
        localStorage.setItem('finalamount', JSON.stringify(finalprice))
    }
})


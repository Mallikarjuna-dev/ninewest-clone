
// document.querySelector("#rsubtotalprice").append(total);
let cartitems = JSON.parse(localStorage.getItem("cartdetails"))
console.log('cartitems:', cartitems)
appendcart(cartitems)
let main=document.querySelector("#rcartdyanamic");
let subtotalprice=document.querySelector("#rsubtotalprice")
var totalprice_cart

let final=[]||JSON.parse(localStorage.getItem("finalprice"));


function appendcart(elem){
    totalprice_cart=0;
    elem.map((el,index)=>{
        
        let price=document.createElement("div");
        price.setAttribute("id","rprice");
        let product=document.createElement("div");
        product.setAttribute("id","rproducts");
        let quantity=document.createElement("div");
        quantity.setAttribute("id","rquantity");
        let total=document.createElement("div");
        total.setAttribute("id","rtotal");
        let imgname=document.createElement("div");
        imgname.setAttribute("class","rimgname");

                let div1=document.createElement("div");
                let div11=document.createElement("div");
                div11.setAttribute("class","rdisplay");
                let div12=document.createElement("div");
                div12.setAttribute("class","rdisplay");
                let div13=document.createElement("div");
                div13.setAttribute("class","rdisplay");
                let div14=document.createElement("div");
                div14.setAttribute("class","rdisplay");

                let p1=document.createElement("p");
                p1.textContent=el.title;
                let p11=document.createElement("p");
                p11.textContent="Size : 5";
                let p12=document.createElement("p");
                p12.textContent="Width : M";
                let p13=document.createElement("p");
                p13.textContent="Color : Black";
                let p14=document.createElement("button");
                p14.textContent="Delete"
                div11.append(p11);
                div12.append(p12);
                div13.append(p13);
                div14.append(p14);
            
                div1.append(p1,div11,div12,div13,div14);
                p14.addEventListener("click",function(){
                    deleteItem(index);
                })


                let img1=document.createElement("img");
                img1.src=el.image1;
                imgname.append(img1,div1);
                product.append(imgname);

                let p21=document.createElement("p");
                p21.textContent=`$ ${el.price}.00`;
                price.append(p21);

                let p31=document.createElement("button");
                p31.textContent="-";
                let p32=document.createElement("p");
                p32.textContent="1";
                let p33=document.createElement("button");
                p33.textContent="+";
                quantity.append(p31,p32,p33);

                let p41=document.createElement("p");
                p41.textContent=`$ ${el.price}.00`;
                total.append(p41);
                totalprice_cart+=(+el.price);
                

                let divfinal=document.createElement("div");               
                divfinal.append(product,price,quantity,total);
                divfinal.setAttribute("id","divfinal");
                document.querySelector("#rcartdyanamic").append(divfinal);
    })
    document.querySelector("#rsubtotalprice").append(`$ ${totalprice_cart}`);   
}


function deleteItem(index){
    cartitems.splice(index,1);
    localStorage.setItem("cartdetails",JSON.stringify(cartitems));
    main.innerHTML="";
    subtotalprice.innerHTML=""
    appendcart(cartitems);         
}

document.querySelector(".rcheckout").addEventListener("click",function(){
    final.push(totalprice_cart);
    localStorage.setItem('finalprice', JSON.stringify(final))
    window.location.href="checkout.html"
})
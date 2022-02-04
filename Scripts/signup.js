
var arr = JSON.parse(localStorage.getItem("signUpdatabase"))||[];
document.querySelector("#rforgot").addEventListener("click",(e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let signUpdata = {
        email: email,
        pass: password
    }
    //console.log(signUpdata)
    arr.push(signUpdata)
    console.log('arr:', arr)
    localStorage.setItem("signUpdatabase",JSON.stringify(arr));
    alert("Registeration Successfull");
    window.location.href="signin.html"

})
var database = JSON.parse(localStorage.getItem("signUpdatabase"));
document.querySelector("#rforgot").addEventListener("click",(e) => {
    e.preventDefault();
    let em = document.querySelector(".email").value;
    let pa = document.querySelector(".pass").value;
    var flag=0;
    for(let i=0;i<database.length;i++){
        if(database[i].email==em && database[i].pass==pa){
            flag=1;
            break;
        }
    }
    if(flag==1){
        alert("login successfully")
        window.location.href="index.html";
    } else{
        alert("wrong credentials")
    }
})
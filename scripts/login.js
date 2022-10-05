

 let userData = JSON.parse(localStorage.getItem("userData"));
let form = document.getElementById("form");
let myfun = (e) =>{
    e.preventDefault()
     let email = form.email.value;
     let password = form.password.value;
     if(userData.email===email&&userData.password===password){
        alert("Login successfull")
        window.location.href="index.html"
     }else{
        alert("Please enter right credentials")
     }
     console.log(userData.email,userData.password)
    console.log(userData)
}
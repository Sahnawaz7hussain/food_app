

  let form = document.querySelector("#form")
 

  function myfun(e){
    e.preventDefault()


   let email = form.email.value;
   let name = form.name.value;
   let number = form.number.value;
   let password = form.password.value;
 
    // console.log("clicked")
    // console.log(email,name,number,password)

    let u1 = new User(name)
    u1.signup(email,password,number)
   //console.log(u1)
  }


  class User{
    constructor(name){
        this.name = name;
    }
   isValidEmail(email){
    for(let i = 0;i<email.length;i++){
        if(email[i]==="#"||email[i]==="*"||email[i]==="$"){
             alert("please use valid Email")
            return false;
        }else{

            return true;
           
        }
    }
   }
   isValidPassword(password){
    return true;
   }




  signup(email,password,number){

    let isValid = false;
    isValid = this.isValidEmail(email)&&this.isValidPassword(password);
    if(isValid){
       // console.log("sign up succwssful")
        alert("Congratulations your are successfully signed Up")
        let obj = {
            "email":email,
          
            "name":this.name,
            "number":number,
            "password":password
           }

      //  console.log(obj)
        localStorage.setItem("userData",JSON.stringify(obj))
        window.location.href="login.html";

    }else{
        alert("Please submit correct credentials")
       // console.log("sign up false")
    }

  }


  }



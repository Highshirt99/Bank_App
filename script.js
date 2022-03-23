/* let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
container2.style.display = "none";
function goToHome() {
    container1.style.display = "none";
    container2.style.display = "block";
 }*/



 
 let alertBox = document.querySelector(".alertbox");
 alertBox.style.display = "none";




 function signUp(){

 checkInfo();
 
}



  function checkInfo(){
    let uName = document.getElementById("uname").value;
    let pWord =  document.getElementById("pword").value;
    let cPword = document.getElementById("confirmP").value;
    let  forms = document.getElementById('form');
    
if (cPword != pWord) {
    alertBox.style.display = "block";  
    alertBox.innerHTML = "Your passwords do not match.";
    setTimeout( () => { alertBox.style.display = "none"}  , 2000)
}
else if(cPword === pWord) {
    forms.action = 'signin.html'
  }
 }




 function takeToHome(){

    let uName2 = document.getElementById("uname").value;
    let pWord2 =  document.getElementById("pword").value;
    let  form2 = document.getElementById('form');
    let lUname = document.getElementById("sUname").value;
    let lPword = document.getElementById("sPword").value;

                if (lUname != uName2  || lPword != pWord2) {
                    alertBox.style.display = "block";  
                    alertBox.innerHTML = "Incorrect username/password.";
                    setTimeout( () => { alertBox.style.display = "none" }  , 2000)
                }

                else if (lUname === uName2 && lPword === pWord2)
                {
                    form2.action = "home.html"
                }

 }
const form= document.getElementById('myForm');
const errormsg= document.getElementsByClassName('error');
const Name= document.getElementById('Name');
const email=document.getElementById('email');
const password=document.getElementById('pass');
const confirmpassword=document.getElementById('confirmpassword');
const number=document.getElementById('number');
const address=document.getElementById('address');

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from submitting// Create an object of user data
  

      let valid = true;
//  name
    if (Name.value.trim()=== "") {
        errormsg[0].textContent = "Name is required";
        valid= false;
     
    }
   
    // email
    if (email.value.trim()=== "") {
        errormsg[1].textContent = "Email is required";
        valid= false;
    }
    else if (!email.value.includes("@")) {
        errormsg[1].textContent = "Enter a valid email";
        valid= false;
    }

    // password
    if(password.value===""){
      errormsg[2].textContent="Please enter password";
         valid= false;
    }
    else if(password.value.length <8){
      errormsg[2].textContent='Only 8 characters allowed';
         valid= false;
    }
    else if(!/[a-z]/.test(password.value)){
      errormsg[2].textContent='At least 1 lowercase letter required';
         valid= false;
    }
    else if(!/[A-Z]/.test(password.value)){
      errormsg[2].textContent='At least 1 uppercase letter required';
         valid= false;
    }
    else if(!/[0-9]/.test(password.value)){
      errormsg[2].textContent='At least 1 number  required';
         valid= false;
    }
    else if(!/[@$!%*?&]/.test(password.value)){
        errormsg[2].textContent='At least 1 symbol required';
           valid= false;
    }

    // confirm password
    if(confirmpassword.value !=password.value){
      errormsg[3].textContent='Passwords do not match';
         valid= false;
    }

    // number
    if(number.value===""){
      errormsg[4].textContent="please add phone number";
         valid= false;
    }
    else if(number.value.length!==10){
      errormsg[4].textContent="please enter valid 10 digit number";
         valid= false;
         
    }
    // address

     if (address.value.trim()=== "") {
        errormsg[5].textContent = "Address is required";
           valid= false;
        
    }
  if(valid){
      const userData = {
        name: Name.value,
        email: email.value,
        password: password.value,
        number: number.value,
        address: address.value
    };

    // Convert object → JSON string & store
    localStorage.setItem("userData", JSON.stringify(userData));

    // alert("Form submitted & data saved!");

    window.location.reload();  // or location.reload()
      alert("Form Submitted Successfully!");
    }
});

function shakeField(field, errorBox, message) {
    errorBox.textContent = message;

    field.classList.add("shake");

    setTimeout(() => {
        field.classList.remove("shake");
    }, 400);
}

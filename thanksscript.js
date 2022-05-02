let globalOTP = Math.floor(1000 + Math.random() * 9000);
let counter = 0;
function confirmation() {
  console.log("confirmation id = " + globalOTP);

  // create object which will be filled dynamically from url paramerter
  const persondetail = {};
  const urlParams = new URLSearchParams(location.search);

  for (const [key, value] of urlParams) {
    persondetail[key] = value;
  }
  let fullname = persondetail["fullname"];

  let fname = document.getElementById("firstname");
  let phonenum = document.getElementById("phonenumber");

  fname.innerHTML = fullname.substr(0, fullname.indexOf(" "));
  phonenum.innerHTML = persondetail["phone"];
}
confirmation();

function validateOTP() {
  let otp = document.getElementById("ipOTP");
  if (counter < 2) {
    counter++;
    showOtperror(3-counter + " Attemps remaining...")
    if (globalOTP.toString() === otp.value) {
      hideOtperror();
      window.location = "http://pixel6.co/";
    }
    return false;
  } else {
    
    showOtperror("redirecting to  http://pixel6.co/notfound");
    setInterval(window.location.replace("http://pixel6.co/notfound"), 1000);

 

  }
}

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

function validateotplength(evt)
{
 let otp= evt.target.value;
 let submitbutton = document.getElementById("btnotpsubmit");
 if(otp.length!=4)
 {

   submitbutton.disabled = true;
   submitbutton.style.backgroundColor="grey";

 }
 else{
  submitbutton.disabled = false;
  submitbutton.style.backgroundColor="midnightblue";
 }

}

function showOtperror(msg){
  let errorspan = document.getElementById("errotp");
  errorspan.style.display = "block";
  errorspan.style.color = "red";
  errorspan.innerHTML = msg;
  document.thanksform.ipOTP.focus();
}

function hideOtperror(){
  let errorspan = document.getElementById("errotp");
  errorspan.innerHTML = "";
  errorspan.style.display = "none";
}

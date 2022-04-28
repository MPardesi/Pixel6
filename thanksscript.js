let globalOTP=Math.floor((Math.random() * 10000));
let counter=0;
function confirmation()
{
  console.log("confirmation id = "+ globalOTP);

  // create object which will be filled dynamically from url paramerter
  const persondetail = {};
 // text.substr(0, text.indexOf(" "));
const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  persondetail[key]=value;  
}
let fullname=persondetail["fullname"];

let fname=document.getElementById("firstname");
let phonenum=document.getElementById("phonenumber");

fname.innerHTML=fullname.substr(0, fullname.indexOf(" "));
phonenum.innerHTML=persondetail['phone'];
}
confirmation();

function validateOTP()
{
if(counter<=2)
{counter++;
  let fname=document.getElementById("ipOTP");
 if(globalOTP.toString() === fname.value)
 {
  window.location='http://pixel6.co/';
 }
 return false;

}
else{
  window.location='http://pixel6.co/notfound';
}

}

// enable submit button when all feilds are valid for email validation code needs to add
function enablesubmitbutton() {
  let btnsubmit = document.getElementById("btnsubmit");
  let emailerror = document.getElementById("erremail");
  let nameerror = document.getElementById("errfullname");
  let phoneerror = document.getElementById("errphone");

  let isvalidform=emailerror.innerHTML==="valid" &&
  nameerror.innerHTML==="valid" &&
  phoneerror.innerHTML==="valid";
  btnsubmit.disabled = !isvalidform;
}


// email validation code
function emailvalidate(evt) {
  // get email textbox for its value
  let email = document.getElementById("ipemail");
  var asciival = evt.which ? evt.which : evt.keyCode;
//   if(email.value.length===0)
//     {
//         hideemailerror();
//     }
  //var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
  if (!email.value.match(mailformat) && (asciival > 31 || email.value.length>0) ) {
    displayemailerror("You have entered an invalid email address!");
    return false;
  }
  hideemailerror();
  return true;
}

function displayemailerror(msg) {
  let errorspan = document.getElementById("erremail");
  //errorspan.hidden =false;
  errorspan.style.display = "block";
  errorspan.style.color = "red";
  errorspan.innerHTML = msg;
  document.personaldetailsform.ipemail.focus();
}

function hideemailerror() {
  let errorspan = document.getElementById("erremail");
  errorspan.innerHTML = "valid";
  errorspan.style.display = "none";
}

// function emptyTextbox(evt){
//    let email= document.getElementById("ipemail");
//     if(email.value.length===0)
//     {
//         hideemailerror();
//     }
//     return true;
// }
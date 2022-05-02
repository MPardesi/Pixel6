let state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
// phone number validation

function formatPhoneNumber1(evt) {
  let formattedphone = evt.target.value;
  //(1    23)
  if (formattedphone[0] !== "(") {
    formattedphone = "(" + formattedphone; // lenght will be 2
  }
  if (formattedphone.length == 4) {
    formattedphone += ") - "; // lenght will be 8
  }
  if (formattedphone.length == 11) {
    formattedphone += " - "; // lenght will be 14
  }
  evt.target.value = formattedphone;
}

function decodephonenumber(formattedphone) {
  let decodedphone = "";
  //(1    23)

  for (let i = 0; i < formattedphone.length; i++) {
    if (
      formattedphone[i] === "(" ||
      formattedphone[i] === ")" ||
      formattedphone[i] === " " ||
      formattedphone[i] === "-"
    ) {
      continue;
    } else {
      decodedphone = decodedphone + formattedphone[i];
    }
  }
  return decodedphone;
}

function validatephonenumber(evt) {
  // only numbers are allowed
  var asciival = evt.which ? evt.which : evt.keyCode;
  // check ascii value
  if (asciival > 31 && (asciival < 48 || asciival > 57)) {
    displayphoneerror("Please provide valid phone!");
    evt.value = "";
    document.personaldetailsform.ipphone.focus();
    return false;
  }
  let phonenum = evt.target.value;
  // apply providers logo based on 1st 3 digits
  let decodedphone = decodephonenumber(phonenum);
  addproviderlogo(decodedphone);
  hidephoneerror();
  if (asciival > 31) formatPhoneNumber1(evt);

  return true;
}

function formatPhoneNumber(evt) {
  let phoneNumberString = evt.target.value;
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    evt.target.value = "(" + match[1] + ")-" + match[2] + "-" + match[3];
    return;
  }
  return null;
}

function addproviderlogo(phonenum) {
  let providerinfo = document.getElementById("phoneprovider");
  if (phonenum.length >= 3) {
    // get digit from 3 to 6 to identify state code
    let providercode = phonenum.substr(0, 3);

    if (providercode >= 621 && providercode <= 799) {
      providerinfo.innerHTML = "reliance";
    } else if (providercode >= 801 && providercode <= 920) {
      providerinfo.innerHTML = "idea";
    } else if (providercode >= 921 && providercode <= 999) {
      providerinfo.innerHTML = "vodafone";
    } else {
      providerinfo.innerHTML = "";
    }
  } else {
    providerinfo.innerHTML = "";
  }
  addstate(phonenum);
}

function addstate(phonenum) {
  let providerinfo = document.getElementById("phoneprovider");
  if (phonenum.length >= 6) {
    let providercode = phonenum.substr(3, 3);

    // range is 0 to 999, and states are 36 so each state will have approx 28 numbers
    // randomly getting state index by dividing 3 digit state code by 28

    let finalstateindex = Math.floor(providercode / 28);
    let st = state[finalstateindex];
    providerinfo.innerHTML += ", " + st;
  }
}

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

function displayphoneerror(msg) {
  let errorspan = document.getElementById("errphone");
  //errorspan.hidden =false;
  errorspan.style.display = "block";
  errorspan.style.color = "red";
  errorspan.innerHTML = msg;
  document.personaldetailsform.ipfullname.focus();
}

function hidephoneerror() {
  let errorspan = document.getElementById("errphone");
  errorspan.innerHTML = "valid";
  errorspan.style.display = "none";
}

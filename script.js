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

// full name validation
// getwordsarrray function will take full name and
//create array of words to validate furthur
function getwordsarrray(fullname) {
  let words = [];
  let index = 0;
  let tempWord = "";

  for (let i = 0; i < fullname.length; i++) {
    // this will split sentence into word
    // 2nd condition will ensure word is not empty for ex "   madhuri" and data is proper
    if (fullname[i] === " " && tempWord.trim().length > 0) {
      words[index] = tempWord;
      tempWord = "";
      index++;
    } else {
      tempWord = tempWord + fullname[i];
    }
  }
  // adding data which is leftover because for loop is finised
  if (tempWord.trim().length > 0) {
    words[index] = tempWord;
  }
  return words;
}

function validatefullname() {
  // get full name data
  let fullname = document.getElementById("ipfullname").value;

  // get array of words present in full name
  let words = getwordsarrray(fullname);
  // if full name has less than 2 words show error and return
  if (words.length < 2) {
    alert("Please provide valid full name!");
    document.personaldetailsform.ipfullname.focus();
    return false;
  }

  // if full name has more than or equal to 2 words check all words has minimum length
  // test each word is having only alphabets using regular expression
  // if any word is failing this condition throw alert message and return
  for (let i = 0; i < words.length; i++) {
    if (!/^[a-zA-Z]+$/.test(words[i]) || words[i].length < 4) {
      alert("Please provide valid full name!");
      document.personaldetailsform.ipfullname.focus();
      return false;
    }
  }

  return true;
}
// full name validation

// phone number validation

function validatephonenumber(evt) {
  // only numbers are allowed
  var asciival = evt.which ? evt.which : evt.keyCode;
  // check ascii value
  if (asciival > 31 && (asciival < 48 || asciival > 57)) {
    alert("Please provide valid phone!");
    evt.value = "";
    document.personaldetailsform.ipphone.focus();
    return false;
    return false;
  }
  let phonenum = evt.target.value;
  // apply providers logo based on 1st 3 digits
  addproviderlogo(phonenum);
  return true;
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

// phone number validation

function formValidation() {
  // validate name
  let isValidform = validatefullname();

  if (isValidform) {
    return true;
  } else {
    return false;
  }
}

//only alphabets and spaces allowed
// min two words
// each word with min 4 chars

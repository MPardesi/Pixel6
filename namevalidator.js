
function validatefullname(evt) {
  // only numbers are allowed
  let fullname = evt.target.value;
  var allowspaceandalphabets = /^[a-zA-Z ]*$/;

  var asciival = evt.which ? evt.which : evt.keyCode;
  // check ascii value
  if (asciival > 31 && !allowspaceandalphabets.test(fullname)) {
    displayerror("Please provide only alphabets!");
    return false;
  }
  hideerror();

  // get array of words present in full name
  let words = getwordsarrray(fullname);
  // if full name has less than 2 words show error and return
  if (words.length < 2) {
    displayerror("Full name must have at least 2 words");
    return false;
  }
  hideerror();

  // if full name has more than or equal to 2 words check all words has minimum length
  // test each word is having only alphabets using regular expression
  // if any word is failing this condition throw alert message and return
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < 4) {
      displayerror("each word have at least 4 leters");
      return false;
    }
  }
  hideerror();

  return true;
}

// full name validation
// getwordsarrray function will take full name and
// create array of words to validate further
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

function displayerror(msg) {
  let errorspan = document.getElementById("errfullname");
  //errorspan.hidden =false;
  errorspan.style.display = "block";
  errorspan.style.color = "red";
  errorspan.innerHTML = msg;
  document.personaldetailsform.ipfullname.focus();
}

function hideerror() {
  let errorspan = document.getElementById("errfullname");
  errorspan.innerHTML = "valid";
  errorspan.style.display = "none";
}

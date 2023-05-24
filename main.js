const container = document.querySelector(".container");
const form = document.getElementById("form");
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const userpassword = document.getElementById("userpassword");
const password2 = document.getElementById("password2");

function showError(input, messege) {
  container.classList.add("error");
  const formControl = input.parentElement;
  formControl.className = "formcontrol error";
  const small = formControl.querySelector("small");
  small.innerText = messege;
}

function showSuccess(input) {
    container.classList.add("success");
    const formControl = input.parentElement;
    formControl.className = "formcontrol success";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if ( username.value === "" || username.value.length < 3 || username.value.length > 20 ) {
    showError(username, "User Name doesn't meet the criteria");
  } else {
    showSuccess(username);
  }

  if (useremail.value.includes("@") == false || useremail.value.includes(".com") == false) {
    showError(useremail, "Your Email doesn't meet the criteria");
  }else{
    showSuccess(useremail);
  }

  if ( userpassword.value == '' || userpassword.value.length < 3 || userpassword.value.length > 20 ) {
    showError(userpassword, "Your Password doesn't meet the criteria");
  }else{
    showSuccess(userpassword);
  }

  if (password2.value !== userpassword.value) {
    showError(password2 , "Your Password doesn't meet the criteria");
  }else{
    showSuccess(password2);
  }

});

var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');

function showError(input,message) {
    var formControl = input.parentElement;
    formControl.className = 'form-control error'; 
    var small= formControl.querySelector('small');
    small.innerText = message;
    

}

function showSuccess(input){
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}


form.addEventListener('submit', function(e) {
  e.preventDefault();
  if(username.value === ''){
     showError(username , 'Username is required'); 

  } else{
      showSuccess(username);
  }

  if(email.value === ''){
    showError(email , 'Email is required'); 
    if

 } else{
     showSuccess(Email);
 }

 if(password.value === ''){
    showError(password , 'password is required'); 

 } else{
     showSuccess(password);
 }

 if(password2.value === ''){
    showError(password2 , 'Re-entering the password is required'); 

 } else{
     showSuccess(password2);
 }
});
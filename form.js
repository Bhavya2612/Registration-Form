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

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, "is required!" );
        
        }
        else{
            showSuccess(input);
        }
    })
}


form.addEventListener('submit', function(e) {
  e.preventDefault();
  checkRequired([username,email,password,password2]);

});

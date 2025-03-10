const userFullnameInput = document.getElementById('fullname');
const userEmailInput = document.getElementById('email');
const userPasswordInput = document.getElementById('password');
const userConfirmedPasswordInput = document.getElementById('confirm-password');
const updateProfileBtn = document.querySelector('#update-btn');


updateProfileBtn.addEventListener('click', function(){
    // checking if all fields are filled
    if(userPasswordInput.value == ''){
        userPasswordInput.style.border = '2px solid red';
        userConfirmedPasswordInput.style.border = '2px solid red';
    }else {
        // checking passwords are correct
        const passwordError = document.getElementById('wrong-password');
        if( userPasswordInput.value != userConfirmedPasswordInput.value){
            updateProfileBtn.type = 'button';//makes the submit button a regular button so it doesn't submit the form before the error message is displayed
            passwordError.innerHTML = 'Passwords do not match';
            passwordError.style.fontSize = '13px';
            passwordError.style.color ='red';
            userPasswordInput.style.border = '2px solid red';
            userConfirmedPasswordInput.style.border = '2px solid red';
        } else{
            userPasswordInput.style.border = '2px solid var(--black)';
            userConfirmedPasswordInput.style.border = '2px solid var(--black)';
            userFullnameInput.value = '';
            userEmailInput.value = '';
            passwordError.innerHTML = '';
            userConfirmedPasswordInput.value = '';
            userPasswordInput.value = '';
            updateProfileBtn.type = 'submit';//makes the submit button a submit button so it can submit the form
        };
    };


    
});



// validates if email is in the correct format
function validateEmail (input) {
    let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailPattern.test(input);
}

let emailInput = document.getElementById('email-input');
let emailError = document.getElementById('email-error');

//checks correctness of email while typing input
emailInput.addEventListener('input', function () {
    let email = emailInput.value;
    if  (!validateEmail(email)) {
        emailError.classList.remove('hidden');
    } else {
        emailError.classList.add('hidden');d
    }
})


//validates if phone number is in the correct format (+995)xxxxxxxxx
function validatePattern (input) {
    let phoneNumberPattern = /^\+995\d{9}$/;
    return phoneNumberPattern.test(input);
}

let phoneError = document.getElementById('phone-error');
let phoneInput = document.getElementById('phone-input');


//checks correctness of email while typing input
phoneInput.addEventListener('input', function() {
    let phone = phoneInput.value;
    if (!validatePattern(phone)) {
        phoneError.classList.remove('hidden');
    }else {
        phoneError.classList.add('hidden');
    }
 });

 //validates if subject is in the correct format - number of characters should be more than 5
 function validateSubject (input) {
    let subjectPattern = /^.{6,}$/;
    return subjectPattern.test(input);
}

let subjectInput = document.getElementById('subject-input');
let subjectError = document.getElementById('subject-error');

//checks correctness of subject while typing input 
subjectInput.addEventListener('input', function() {
    let subject = subjectInput.value;
    if (!validateSubject(subject)) {
        subjectError.classList.remove('hidden');
    }else {
        subjectError.classList.add('hidden');
    }
 });


 

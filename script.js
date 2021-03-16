// validations will eventually be put into their own functions
// current code will be refactored!
const form = document.getElementById('form'); // this allows you to grab HTML elements via the ID
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase())
}

// Check Required Fields
function checkRequired(inputArray) {
	inputArray.forEach(function(input) {
		if(input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

// Check Length
function checkLength(input, min, max) {
	if(input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

// Check email is valid
function checkEmail(input) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
			showSuccess(input);
		} else {
			showError(input, 'Email is not valid')
		}
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if(input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
	} 
}

// Get Field Name
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
	// capitalizes just the first letter of the word with .charAt(0).toUpperCase()
	// slices off the first letter of the word with slice(1)
	// concatenates them together
}

//Event Listeners
form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	checkRequired([username, email, password, password2]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);	
	checkPasswordsMatch(password, password2);
})


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

function showSuccess(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//Event Listeners
form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	if(username.value === '') {
		showError(username, 'Username is required')
	} else {
		showSuccess(username);
	}

	
})

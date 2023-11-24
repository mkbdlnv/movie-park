function nextStep(currentStep) {
    // Hide the current step
    document.getElementById('step' + currentStep).style.display = 'none';

    // Show the next step
    currentStep++;
    document.getElementById('step' + currentStep).style.display = 'block';
}

function prevStep(currentStep) {
    // Hide the current step
    document.getElementById('step' + currentStep).style.display = 'none';

    // Show the previous step
    currentStep--;
    document.getElementById('step' + currentStep).style.display = 'block';
}

function formatPhoneNumber() {
    var phoneNumberInput = document.getElementById('phoneNumber');
    var phoneNumber = phoneNumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters

    // Limit to 11 digits
    if (phoneNumber.length > 11) {
        phoneNumber = phoneNumber.slice(0, 11);
    }

    // Add +7 and space
    if (phoneNumber.length >= 1) {
        phoneNumberInput.value = '+7 ' + phoneNumber.slice(1); // Exclude the first character (+)
    }
}

function validateStep1() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    if (firstName.trim() === '' || lastName.trim() === '') {
        alert('Please fill in both first name and last name.');
    } else {
        nextStep(1);
    }
}

function validateStep2() {
    var email = document.getElementById('email').value;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        nextStep(2);
    }
}

function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    alert('Your request has been processed.');
    window.location.href = "index.html";
}
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const specialCheckbox = document.getElementById('special');
const generateButton = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');
const copyButton = document.getElementById('copy');

const generatePassword = () => {
    const length = lengthSlider.value;
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';

    if (uppercaseCheckbox.checked) {
        characters += uppercaseChars;
    }
    if (lowercaseCheckbox.checked) {
        characters += lowercaseChars;
    }
    if (numbersCheckbox.checked) {
        characters += numbers;
    }
    if (specialCheckbox.checked) {
        characters += specialChars;
    }

    if (characters.length === 0) {
        passwordDisplay.textContent = 'Select at least one character type.';
        return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newPassword += characters.charAt(randomIndex);
    }

    passwordDisplay.textContent = newPassword;
};

generateButton.addEventListener('click', generatePassword);

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

copyButton.addEventListener('click', () => {
    const passwordText = passwordDisplay.textContent;
    const textarea = document.createElement('textarea');
    textarea.value = passwordText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Password copied to clipboard!');
});

// Initial generation on page load
generatePassword();

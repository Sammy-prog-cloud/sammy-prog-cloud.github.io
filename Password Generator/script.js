function generatePassword() {
    // Define characters to include in the password
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+';

    // Set the length of the password
    const passwordLength = 12;

    // Generate the password
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    // Display the password in the input field and add a touch of style
    const passwordField = document.getElementById('password');
    passwordField.value = password;
    passwordField.style.border = '2px solid #34a1eb';
    passwordField.style.backgroundColor = '#f8f9fa';
}

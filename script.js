
  const passwordBox = document.getElementById("password");
  const length = 12;

  const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = "0123456789";
  const symbols = "@#$%^&*(){}|?><<=_";

  const allChars = UPPERCASE_LETTERS + LOWERCASE_LETTERS + numbers + symbols;

  function createPassword() {
    let password = "";
    password += UPPERCASE_LETTERS[Math.floor(Math.random() * UPPERCASE_LETTERS.length)];
    password += LOWERCASE_LETTERS[Math.floor(Math.random() * LOWERCASE_LETTERS.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
  }

  function copyPassword(){
 passwordBox.select();
 document.execCommand("copy");
  }


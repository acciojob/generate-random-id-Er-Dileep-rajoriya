function makeid(l) {
  // Define the characters set including lowercase, uppercase letters, and digits
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  // Loop through to generate a string of length 'l'
  for (let i = 0; i < l; i++) {
    // Select a random character from the characters string
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  
  return result;
}


// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(parseInt(l))); // Ensure the input is parsed as an integer

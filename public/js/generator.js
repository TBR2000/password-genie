const generator = require('generate-password');

const num = document.getElementById('number');

/*output show*/
const output = document.getElementById('output');

/*password character num*/
const pass_num = document.querySelector('#char_num');
/*password strength*/
const strength = document.querySelector('#strength');

const randomPassword = () => {
  const password = generator.generate({
	length: document.querySelector('#char_num'),
	numbers: document.getElementById('numCheck'),
  symbols: document.getElementById('symCheck'),
  lowercase: document.getElementById('smCheck'),
  uppercase: document.getElementById('capCheck'),
  strict: document.getElementById('strict'),
  });

     /* final password */
      output.value = password;


     /*check password strength*/
     if (password.length <= 5){
        strength.innerHTML = "Weak";
        strength.style.color = "red";
     }
     else if(password.length >= 20){
         strength.innerHTML = "Very Strong";
         strength.style.color = "green";
     }
     else if(password.length >= 8){
         strength.innerHTML = "Strong";
         strength.style.color = "green";
     }
     else{
         strength.innerHTML = "Normal";
         strength.style.color = "green";
     }
  };

/*password generate*/
function generate() {
  const length = pass_num.value;

  if (length >= 0) {
    randomPassword();
  } 
}
/*copy password*/
function copyFunction() {
  output.select();
  output.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Your password: " + output.value);
}
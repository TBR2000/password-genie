/*output show*/
const output = document.querySelector('output');
/*password character num*/
const pass_num = document.querySelector('#char_num').value;
//password variables
const strength = document.querySelector('#strength').value;
const length= document.querySelector('#char_num').value;
const numbers= document.querySelector('#numCheck').value;
const symbols= document.querySelector('#symCheck').value;
const lowercase= document.querySelector('#smCheck').value;
const uppercase= document.querySelector('#capCheck').value;
const strict= document.querySelector('#strict').value;



const randomPassword = async () => {
    const response = await fetch('/api/password/generating', {
        method: 'POST',
        body: JSON.stringify({ 
            length, 
            numbers, 
            symbols, 
            lowercase, 
            uppercase, 
            strict }),
        headers: { 'Content-Type': 'application/json' },
      });  
      if (response.ok) {
        //response()
        console.log(res)
      } else {
        alert(response.statusText);
      }
    
    console.log(lowercase)
}

    
  
const response = async () => {
    const password = await fetch ('/api/generator', {
        method: 'GET',
        body: JSON.stringify (password),
        headers: { 'Content-Type': 'application/json' },
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
}

/*password generate*/
function generate() {
   
if (pass_num > 0) {
  randomPassword();
    } 
}


/*copy password*/
const copyFunction = (event) => {
    event.preventDefault();
    output.select();
    output.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Your password: " + output.value);
}

document
  .querySelector("#password_generate")
  .addEventListener('click', generate);

document
  .querySelector("#copy")
  .addEventListener('click', copyFunction);  
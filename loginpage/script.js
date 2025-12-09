const myEmail = document.getElementById("email");
const myBtn = document.getElementById("Btn");
const myAge = document.getElementById("age")
let mail;
let age;


myBtn.onclick = function(e){
    e.preventDefault();
    mail = myEmail.value;
    age = myAge.value;
try{
 if(age < 18){
    alert("you must be 18yrs of age to enter this site")
}
if(!mail.includes('@')){
    window.alert('your email must include @ when filling your email');
    return;
}

else{
    window.alert("Signed up sucessfully");
}
}
catch(error){
    console.error(error)
}
}


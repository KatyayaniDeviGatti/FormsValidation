let nameInput = document.getElementById('name-input');
let emailInput = document.getElementById('email-input')
let contactInput = document.getElementById('contact-input');
let passwordInput = document.getElementById('password');
let confirmpasswordInput = document.getElementById('confirm-password');
let selectEl = document.getElementById('select')
let genderMaleEl = document.getElementById('genderMale')
let genderFemaleEl = document.getElementById('genderFemale');
let checkEl = document.getElementById('check')
let btnEl = document.getElementById("btn")

let formEl = document.getElementById('myForm');
let errorEl = document.getElementById('errorMsg');
let nameErrEl = document.getElementById('nameErr')
let emailErrEl = document.getElementById('emailErr');
let contactErrEl = document.getElementById('contactErr');
let passwordErrEl = document.getElementById('passwordErr')
let confirmpasswordErrEl = document.getElementById('confirmpasswordErr')
let radioErrMsgEl = document.getElementById("radioErrMsg")
var options = document.getElementsByName("gender");


let formData = {
    FullName:"",
    Email : "",
    ContactNumber:"",
    status : "Active",
    gender : 'Male',
    password : "",
    confirmPassword : ""
}

formEl.addEventListener("submit",function(event){
    event.preventDefault()
})

function onSubmit(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regular Expression

    if(nameInput.value == "" || contactInput.value == "" || passwordInput.value == "" || confirmpasswordInput.value == ""){
        errorEl.textContent = "All fields are Required*"
        // btnEl.disabled = "true"
    }
    else if(!emailInput.value.match(validRegex)){
        emailErrEl.textContent = "Please Enter a valid email address"
    }
    else if(contactInput.value.length != 10){
        contactErrEl.textContent = "Contact Number should be only of 10 digits"
    }
    else if(isNaN(contactInput.value)){
        contactErrEl.textContent = "Only Numbers are allowed. Please enter valid Number"
    }
    else if(passwordInput.value != confirmpasswordInput.value){
        confirmpasswordErrEl.textContent = "Please enter same password"
    }
    else if(!(options[0].checked || options[1].checked)){
        radioErrMsgEl.textContent = "Please select any one"
    }
    else{
        formData.FullName = nameInput.value
        formData.Email = emailInput.value
        formData.ContactNumber = contactInput.value
        formData.password = passwordInput.value
        formData.confirmPassword = confirmpasswordInput.value
        confirmpasswordErrEl.textContent = ""
        contactErrEl.textContent = ""
        errorEl.textContent = ""
        emailErrEl.textContent = "";
        radioErrMsgEl.textContent = ""
        console.log(formData)
        this.reset()
        
    }
}

nameInput.addEventListener("blur",function(event){
    if(nameInput.value == ""){
        nameErrEl.textContent = "Required*"
    }
    else{
        nameErrEl.textContent = ""
    }
})

emailInput.addEventListener("blur",function(event){
    if(event.target.value == ""){
        emailErrEl.textContent = "Required*"
    }
    else{
        emailErrEl.textContent = ""
    }
})

contactInput.addEventListener("blur",function(event){
    if(contactInput.value == ""){
        contactErrEl.textContent = "Required*"
    }
    else{
        contactErrEl.textContent = ""
    }
})

passwordInput.addEventListener("blur",function(event){
    if(event.target.value == ""){
        passwordErrEl.textContent = "Required*"
    }
    else{
        passwordErrEl.textContent = ""
    }
})

confirmpasswordInput.addEventListener("blur",function(event){
    if(event.target.value == ""){
        confirmpasswordErrEl.textContent = "Required*"
    }
    else{
        confirmpasswordErrEl.textContent = ""
    }
})

selectEl.addEventListener("change",function(event){
    formData.status = event.target.value;
    // console.log(formData)
})

genderMaleEl.addEventListener("change",function(event){
    formData.gender = genderMaleEl.value
    // console.log(formData)
})

genderFemaleEl.addEventListener("change",function(event){
    formData.gender = genderFemaleEl.value;
    // console.log(formData)
})

function enable(){
    if(checkEl.checked){
        btnEl.removeAttribute("disabled")
    }
    else{
        btnEl.disabled = "true"
    }
}

function reset(){
    nameInput.value = ""
    emailInput.value = ""
    contactInput.value = ""
    passwordInput.value = ""
    confirmpasswordInput.value = ""
    genderFemaleEl.checked = ""
    genderMaleEl.checked = ""
    selectEl.value = ""
    checkEl.checked = ""
    btnEl.disabled = "true"
}
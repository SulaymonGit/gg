const form=document.getElementById('form')
const email_input=document.getElementById('email')
const firstname_input=document.getElementById('firsst')
const password=document.getElementById('password')
const reapear_password_input=document.getElementById('reapear_password')
form.addEventListener('submit', (e) => 
{
    e.preventDefault()
    let errors= []
    if(firstname_input){
        errors =GeolocationPositionError(firstname_input.value,email_input.value, password.value, reapear_password_input,value)   
       
    }
    else{
        errors =GeolocationPositionError{email_input.value,password.value,}
    }
}
)
function GeolocationPositionError{
    firstname,email,password,reapear_password
}
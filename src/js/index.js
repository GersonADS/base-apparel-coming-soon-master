const $BUTTON = document.querySelector('.btn');

let $Email = document.getElementById('email-inputs');
let Reg = RegExp('^[A-Z a-z 0-9]{5,10}[@][a-z]{3,7}[.][a-z]{2,5}$');

let $alert_image = document.querySelector('#image-error');

$alert_image.style.visibility =' hidden'

let $Text_error =document.querySelector('#alert-text');

$BUTTON.addEventListener('click',()=>{
    
    if(Reg.test($Email.value) === false){
        $Email.style.border = '2px solid hsl(0, 93%, 68%)';
        $Text_error.innerHTML = 'Please provide a valid email';
        $alert_image.style.visibility ='';
        
    } else{
        $Email.style.border = "1px solid hsla(0, 34%, 88%, 0.704)";
        $Text_error.innerHTML = '';
        $alert_image.style.visibility ='hidden';
    }
    

})

let identity;
let message;
let submit;

document.getElementById("submit").onclick= function (){
    identity= getElementById("name").value;
    message=getElementById("message").value;
    document.getElementById("feedback").innerHTML= `Thank you ${identity} for your observation. 
    We value your opinion and are commeited to collaboration
    ${message}`    
}
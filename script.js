document.getElementById("submitBtn").onclick= function (){
    clientReply= document.getElementById("clientReply").value;
    clientName=document.getElementById("clientName").value;
    document.getElementById("feedback").innerHTML=clientReply;
    document.getElementById("yourName").innerHTML= `Thank you ${clientName} for your feedback.`;
    document.getElementById("idResponded").innerHTML= `${clientName} responded.`;
}
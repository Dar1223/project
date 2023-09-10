let container = document.querySelector(".container");

let qrinput = document.querySelector("#text");

let genearateBtn = document.querySelector("#genearate");
let img = document.querySelector("#qr.img")

let preinput



genearateBtn.onclick =function(){
    let input=qrinput.ariaValueMax.trim()

    if(!input || input ===preinput){
        alert("this fieldshould be empty and different with previous input")
return

    }
    else{
        preinput = input;
        genearateBtn.innerText ="Genarating qr code...."
        img.src ='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$(qrvalue)';
    
    img.onload =function(){
container.classList.add("actuve")
genearateBtn.innerText ="Generate qr code"


    }
    
    
    
    
    
    
    }














}
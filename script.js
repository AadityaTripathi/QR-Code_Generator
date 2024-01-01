let qrbox = document.getElementById("qrbox");
let qrcode = document.getElementById("qrcode");
let qrtext = document.getElementById("qrtext");

function generateQR(){
    if(qrtext.value.length > 0){
        qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        qrbox.classList.add("show-img");
    }else{
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error");
        },1000);
    }
}
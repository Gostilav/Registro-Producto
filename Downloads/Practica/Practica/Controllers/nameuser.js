import{verificationcod}from "../Controllers/conecction.js";

const recu=document.getElementById('btnrescatar')
const cer=document.getElementById('btncerrar')

async function Resetear(){
    const emailelec = document.getElementById('edtcorreo').value

    const verificar=verificationcod(emailelec)
    const validacion = await verificar

    .then((validacion) => {
        alert("Reset verification succesfull "+email)
        window.location.href="../Templates/nameuser.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}

async function sesion() {
    try{
        await logout();
        alert('sesion cerrada');
        window.location.href="../index.html";
    }catch(error){
        alert('fue erronea la cerrada de sesion: '+ error.message);
        console.error('fue erronea la cerrada de sesion:',error);
    }  
}  

window.addEventListener('DOMContentLoaded',async()=>{
    recu.addEventListener('click',Resetear)
    cer.addEventListener('click',sesion)
})
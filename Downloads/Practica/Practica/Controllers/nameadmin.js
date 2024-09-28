import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';


async function pasar() {
    window.location.href="../Templates/registro.html"
}

async function Resetear(){
    const email = document.getElementById('edtemail').value

    const verificar=verificationcod(email)
    const validation = await verificar

    .then((validation) => {
        alert("Reset verification succesfull "+email)
        window.location.href="../Templates/nameadmin.html"
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
        cerrar.addEventListener('click', sesion)
        crear.addEventListener('click',pasar)
        recuperar.addEventListener('click',Resetear)
    })
    

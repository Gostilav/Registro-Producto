import { createuser, everification, userstate } from "../Controllers/conecction.js";
userstate();

document.addEventListener('DOMContentLoaded', () => {
    const btnRegister = document.getElementById('btnregister');
    
    btnRegister.addEventListener('click', async () => {
        const email = document.getElementById('edtemail').value;
        const password = document.getElementById('edtpassword').value;

        if (!email || !password) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        try {
            const userCredential = await createuser(email, password);
            await everification();
            alert('El usuario se registró exitosamente. Verifique su correo para continuar.');
            window.location.href = "../Templates/reguser.html";
        } catch (error) {
            alert("Error en el registro: " + error.message);
            console.error("Error: ", error);
        }
    });
});

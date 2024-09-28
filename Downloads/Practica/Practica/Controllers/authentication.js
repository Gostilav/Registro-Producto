import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user.email === 'admin@gmail.com') {
                        window.location.href = 'main_admi.html'; 
                    } else {
                        window.location.href = 'main_user.html'; 
                    }
                })
                .catch((error) => {
                    document.getElementById('error-message').textContent = 'Error: ' + error.message;
                });
        });
    }

    const logoutButton = document.getElementById('btnlogout');
    
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            const auth = getAuth();
            signOut(auth).then(() => {
                window.location.href = 'index.html';
            }).catch((error) => {
                console.error('Error al cerrar sesión:', error);
            });
        });
    }
});

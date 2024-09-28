import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDKMb1__r0niapNWIx0uiN4Usm8mdKd5pY",
    authDomain: "devnube-e0176.firebaseapp.com",
    projectId: "devnube-e0176",
    storageBucket: "devnube-e0176.appspot.com",
    messagingSenderId: "160799673471",
    appId: "1:160799673471:web:beb053bb024e62612e434a",
    measurementId: "G-CWZF0HXX6R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Función para iniciar sesión
export const ctrlaccessuser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

// Función para registrar usuario
export const createuser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

// Función para cerrar sesión
export const logout = () =>
    signOut(auth);

// Función para enviar correo de verificación
export const everification = () =>
    sendEmailVerification(auth.currentUser);

// Observador de autenticación
export function userstate() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("Usuario: " + user.uid);
        } else {
            window.location.href = "../index.html";
        }
    });
}

// Función para restablecer la contraseña
export const resetPassword = (email) =>
    sendPasswordResetEmail(auth, email);

// Función para agregar producto
export const Addproducto = (codigo, nombre, descripcion, cantidad) =>
    addDoc(collection(db, "productos"), {
        codigo,
        nombre,
        descripcion,
        cantidad
    });

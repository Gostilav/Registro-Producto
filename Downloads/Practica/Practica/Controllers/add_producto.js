import { Addproducto } from "../Controllers/conecction.js";

const btnSave = document.getElementById('btnsave');

btnSave.addEventListener('click', async () => {
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const cantidad = document.getElementById('cantidad').value;

    try {
        await Addproducto(codigo, nombre, descripcion, cantidad);
        alert('Producto agregado exitosamente.');
        window.location.href = "ver_productos.html";
    } catch (error) {
        console.error("Error al agregar producto:", error);
        alert("Error al agregar producto.");
    }
});

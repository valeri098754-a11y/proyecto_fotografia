let boton_texto= document.getElementById("btnTexto");
boton_texto.addEventListener("click", function(){

    let nt = "cambiando el dom del titulo por el texto";
    let titulo_texto = document.getElementById("titulo2");
    titulo_texto.textContent= nt;
}) 


//caja color

let btn_color= document.getElementById("btnColor");
let caja_color =document.getElementById("caja");
btn_color.addEventListener("click", function(){
    //alert("algo")
    caja_color.style.backgroundColor = "#f1c40f";
   caja_color.style.borderColor = "#e67e22";

})
// ocultar
let btn_ocultar= document.getElementById("btnOcultar").addEventListener("click",()=>{
 caja.style.display = caja.style.display === "none" ? "block": "none";
});

let btn_saludar= document.getElementById("btn_saludar").addEventListener("click",()=>{
    const nombre = document.getElementById("nombre").value;
    document.getElementById("saludo").textContent= nombre ? `¡Hola, ${nombre}!` : "Escribe tu nombre.";
});
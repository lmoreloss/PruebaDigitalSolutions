//Inicializacion variables gloables
var primeros5 = true;
var especial = true;
var prodGlobal;

//Funcion para obtener data.json, asignando prodGlobal con la respuesta de json y poner los atributos de los videos e imagenes
//repitiendo mostrarProds y mostrarEspeciales cada 5 y 10 segundos
async function obtenerJSON() {
    const respuesta = await fetch('data.json');
    if (!respuesta.ok) {
        throw new Error(`Error de HTTP: ${respuesta.status}`)
    }
    const comida = await respuesta.json();
    prodGlobal = comida;
    mostrarProds();
    mostrarEspeciales();
    console.log(prodGlobal);
    document.getElementById("videoPlayer1").setAttribute('src', prodGlobal.videos.video[0]);
    document.getElementById("videoPlayer2").setAttribute('src', prodGlobal.videos.video[1]);
    document.getElementById("img1").setAttribute('src', prodGlobal.images[0]);
    document.getElementById("img2").setAttribute('src', prodGlobal.images[1]);
    document.getElementById("img3").setAttribute('src', prodGlobal.images[2]);
    setInterval(() => {
        mostrarProds();
    }, 5000);
    setInterval(() => {
        mostrarEspeciales();
    }, 10000);
}


//Funcion para intercambiar los productos entre primer conjunto y segundo conjunto, añadiendo una animacion de fade-out y fade-in
function mostrarProds() {
    document.getElementById("columnaProds").classList.add("fade-out");
    setTimeout(() => {
        if (primeros5) {
            for (let i = 0; i < 5; i++) {
                document.getElementById(`prodNrm${i}`).innerHTML = prodGlobal.products.normales[i].product;
                document.getElementById(`prodPrc${i}`).innerHTML = "$" + prodGlobal.products.normales[i].price;
            }
        } else {
            for (let i = 0; i < 5; i++) {
                document.getElementById(`prodNrm${i}`).innerHTML = prodGlobal.products.normales[i + 5].product;
                document.getElementById(`prodPrc${i}`).innerHTML = "$" + prodGlobal.products.normales[i + 5].price;
            }
        }
        primeros5 = !primeros5;
        document.getElementById("columnaProds").classList.remove("fade-out");
    }, 400)


}


//Funcion para intercambiar los productos entre primer producto especial y segundo, añadiendo una animacion de fade-out y fade-in
function mostrarEspeciales() {
    document.getElementById("colEspProds").classList.add("fade-out");
    setTimeout(()=>{
        if (especial) {
        document.getElementById("prodEsp").innerHTML = prodGlobal.products.especiales[0].product;
        document.getElementById("precEsp").innerHTML = "$" + prodGlobal.products.especiales[0].price;
    } else {
        document.getElementById("prodEsp").innerHTML = prodGlobal.products.especiales[1].product;
        document.getElementById("precEsp").innerHTML = "$" + prodGlobal.products.especiales[1].price;
    }
    especial = !especial;
    document.getElementById("colEspProds").classList.remove("fade-out");
    }, 400)
    
}

//Cuando el documento se carga, se ejecuta obtenerJSON()
document.addEventListener('DOMContentLoaded', () => {
    obtenerJSON();
})
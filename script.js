const landing = document.getElementById("landing");
const bookSection = document.getElementById("bookSection");

const openBook = document.getElementById("openBook");

const pageContent = document.getElementById("pageContent");
const pageImage = document.getElementById("pageImage");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const pageNumber = document.getElementById("pageNumber");

const popup = document.getElementById("popup");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

const secretCat = document.getElementById("secretCat");

let currentPage = 0;

/* PAGES */

const pages = [

{
title:"Bienvenida 💛",
text:"Hola Albita. Este pequeño libro fue hecho especialmente para ti. Espero que te saque una sonrisa 🌻",
image:"alba2.jpg"
},

{
title:"Capítulo 1 🌻",
text:"Oye Albita... ¿sabías que eres de esas personas que pueden alegrarme el día con solo aparecer? 😒💛",
image:"alba2.jpg"
},

{
title:"Capítulo 2 🦋",
text:"Tengo una teoría. Creo que naciste para hacerme perder la concentración. Y sí... funciona demasiado bien 😂",
image:"alba3.jpg"
},

{
title:"Capítulo 3 😎",
text:"Aquí está el mero mero. El que hizo este libro porque cierta Albana ocupa demasiado espacio en su cabeza 💛",
image:"kami2.jpg"
},

{
title:"Capítulo 4 💛",
text:"A veces veo nuestras fotos y pienso: no manches... ¿cómo terminé teniendo tanta suerte? 🌻",
image:"alba1.jpg"
},

{
title:"Capítulo 5 👶",
text:"Esta foto siempre me hace sonreír. También me hace imaginar muchas cosas bonitas 💛",
image:"alba4.jpg"
},

{
title:"Carta Secreta 💌",
text:"Gracias por escucharme. Gracias por aguantarme. Gracias por ser tú.",
image:"alba2.jpg"
},

{
title:"Datos de Albana 😂",
text:"Se te acusa oficialmente de: robar corazones, ser demasiado bonita y hacerme reír demasiado.",
image:"alba3.jpg"
},

{
title:"Lo que más me gusta de ti 🌻",
text:"Tu sonrisa, tu forma de ser, tu corazón y la forma en que haces especiales los días normales.",
image:"alba1.jpg"
},

{
title:"Final 💛",
text:"Gracias por leer hasta aquí. Este pequeño libro fue hecho pensando en ti. Con cariño, Teddy 🌻",
image:"alba4.jpg"
}

];

/* OPEN BOOK */

openBook.addEventListener("click",()=>{

landing.classList.add("hidden");
bookSection.classList.remove("hidden");

loadPage();

});

/* LOAD PAGE */

function loadPage(){

pageContent.innerHTML = `
<h2>${pages[currentPage].title}</h2>
<p>${pages[currentPage].text}</p>
`;

pageImage.src = pages[currentPage].image;

pageNumber.innerText =
`Página ${currentPage+1} / ${pages.length}`;

}

/* NAVIGATION */

nextBtn.addEventListener("click",()=>{

if(currentPage < pages.length-1){

currentPage++;

loadPage();

}

});

prevBtn.addEventListener("click",()=>{

if(currentPage > 0){

currentPage--;

loadPage();

}

});

/* POPUP */

function showPopup(text){

popup.innerText = text;

popup.style.display = "block";

setTimeout(()=>{

popup.style.display = "none";

},3000);

}

/* MUSIC */

let playing = false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

musicBtn.innerText =
"⏸️ Pausar Música";

playing = true;

}else{

music.pause();

musicBtn.innerText =
"🎵 Nuestra Canción";

playing = false;

}

});

/* SECRET CAT */

secretCat.addEventListener("click",()=>{

showPopup(
"🐱 Encontraste al michi secreto de Albita"
);

});

/* PARTICLES */

function createParticle(){

const particle =
document.createElement("div");

particle.classList.add("particle");

particle.innerHTML =
Math.random() > .5 ? "✨" : "🦋";

particle.style.left =
Math.random()*100 + "vw";

particle.style.animationDuration =
(8 + Math.random()*10) + "s";

document.getElementById("particles")
.appendChild(particle);

setTimeout(()=>{

particle.remove();

},18000);

}

setInterval(createParticle,700);

let currentPage = 1;

const pages = [
`💛 Bienvenida Albita. Este pequeño mundo fue hecho especialmente para ti 🌻`,

`🌻 Albana, oficialmente se te acusa de ser demasiado bonita y de robar corazones.`,

`💛 Cosas que amo de ti:
- Tu sonrisa
- Tu forma de ser
- Tu personalidad
- Lo mucho que amas a los gatos 🐱`,

`😂 Dato científico:
Cada vez que Albita sonríe, alguien se enamora.`,

`🦋 Si llegaste hasta aquí, significa que eres curiosa. Y sí, hay más secretos escondidos.`,

`🐱 El Consejo Supremo de los Gatos ha decidido que eres adorable.`,

`💌 Gracias por explorar este pequeño mundo. Todavía quedan sorpresas por descubrir.`
];

function startAdventure(){
document.getElementById("intro").classList.add("hidden");
document.getElementById("menu").classList.remove("hidden");
}

function openSection(sectionId){

document.querySelectorAll("section").forEach(section=>{
section.classList.add("hidden");
});

document.getElementById(sectionId).classList.remove("hidden");
}

function nextPage(){

currentPage++;

if(currentPage > pages.length){
currentPage = 1;
}

document.getElementById("bookContent").innerHTML = `
<h3>Página ${currentPage}</h3>
<p>${pages[currentPage-1]}</p>
`;

}

function photoMessage(photo){

if(photo === 1){
alert("💛 Una de mis fotos favoritas. Aquí empezó una de las mejores historias.");
}

if(photo === 2){
alert("🌻 No manches Albita, saliste bien bonita aquí.");
}

if(photo === 3){
alert("🦋 Advertencia: demasiada belleza en una sola foto.");
}

if(photo === 4){
alert("👶💛 Esta foto siempre me hace sonreír.");
}

if(photo === 5){
alert("😎 Aquí está el mero mero.");
}

}

function openLetter(number){

if(number === 1){
alert("😊 Espero que hoy tengas un día increíble, Albita.");
}

if(number === 2){
alert("💛 Si algún día estás triste, recuerda que eres muy especial.");
}

if(number === 3){
alert("🌻 Gracias por ser tú.");
}

}

function startSunflowerGame(){
alert("🌻 Próximamente: Atrapa los Girasoles.");
}

function startCatGame(){
alert("🐱 Próximamente: Encuentra al Gato.");
}

function startButterflyGame(){
alert("🦋 Próximamente: Caza Mariposas.");
}

function startMemoryGame(){
alert("💛 Próximamente: Memoria Albita.");
}

function createButterfly(){

const butterfly = document.createElement("div");

butterfly.classList.add("floating-butterfly");

butterfly.innerHTML = "🦋";

butterfly.style.left = Math.random()*100+"vw";

butterfly.style.animationDuration =
(8 + Math.random()*10)+"s";

document.body.appendChild(butterfly);

setTimeout(()=>{
butterfly.remove();
},15000);

}

setInterval(createButterfly,3000);

function createCat(){

const cat = document.createElement("div");

cat.classList.add("floating-cat");

cat.innerHTML="🐱";

document.body.appendChild(cat);

setTimeout(()=>{
cat.remove();
},22000);

}

setInterval(createCat,15000);

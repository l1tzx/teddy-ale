
const openBookBtn = document.getElementById("openBookBtn");
const landing = document.getElementById("landing");
const introBook = document.getElementById("introBook");

const popup = document.getElementById("popup");

function showPopup(text){

popup.innerText = text;
popup.style.display = "block";

setTimeout(()=>{
popup.style.display = "none";
},3000);

}

openBookBtn.addEventListener("click",()=>{

landing.classList.add("hidden");
introBook.classList.remove("hidden");

showPopup("💛 Bienvenida Albita 🌻");

});

function nextSection(id){

document.querySelectorAll("section").forEach(section=>{
section.classList.add("hidden");
});

document.getElementById(id).classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

function showPhoto(photo){

if(photo===1){

showPopup(
"💛 Una de mis fotos favoritas. Aquí empezó una historia muy bonita."
);

}

if(photo===2){

showPopup(
"🌻 No manches Albita, saliste bien bonita aquí."
);

}

if(photo===3){

showPopup(
"🦋 Advertencia: demasiada belleza en una sola imagen."
);

}

if(photo===4){

showPopup(
"👶💛 Esta foto siempre me hace sonreír."
);

}

if(photo===5){

showPopup(
"😎 Aquí está el mero mero."
);

}

}

function openLetter(number){

if(number===1){

showPopup(
"😊 Espero que este detallito te saque una sonrisa."
);

}

if(number===2){

showPopup(
"🌻 Gracias por ser una persona tan especial."
);

}

if(number===3){

showPopup(
"🐱 El consejo de los gatos ha decidido que eres adorable."
);

}

}

/* BUTTERFLIES */

function createButterfly(){

const butterfly =
document.createElement("div");

butterfly.classList.add("butterfly");

butterfly.innerHTML = "🦋";

butterfly.style.left =
Math.random()*100+"vw";

butterfly.style.animationDuration =
(8+Math.random()*8)+"s";

document.body.appendChild(butterfly);

setTimeout(()=>{
butterfly.remove();
},16000);

}

setInterval(createButterfly,2000);

/* SPARKLES */

function createSparkle(){

const sparkle =
document.createElement("div");

sparkle.classList.add("sparkle");

sparkle.innerHTML = "✨";

sparkle.style.left =
Math.random()*100+"vw";

sparkle.style.bottom =
Math.random()*100+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},6000);

}

setInterval(createSparkle,800);

let achievements = 0;

function unlockAchievement(name){

achievements++;

document.getElementById(
"achievementCounter"
).innerText =
"Logros: " + achievements;

showPopup("🏆 " + name);

}

function spinWheel(){

const rewards = [

"💛 Albita, eres increíble.",
"🌻 Bonus girasol desbloqueado.",
"😂 Albana fue declarada culpable de ser demasiado bonita.",
"🐱 Los gatos aprobaron tu visita.",
"🦋 Mariposa mágica encontrada."

];

const reward =
rewards[
Math.floor(
Math.random()*rewards.length
)
];

showPopup(reward);

unlockAchievement("Ruleta Girada");

}

function toggleNightMode(){

document.body.classList.toggle(
"nightMode"
);

unlockAchievement(
"Exploradora Nocturna"
);

}

function showAchievements(){

showPopup(
"🏆 Logros desbloqueados: " +
achievements
);

}

/* Hidden Cat Hunt */

setInterval(()=>{

const cat =
document.createElement("div");

cat.innerHTML = "🐱";

cat.style.position = "fixed";
cat.style.left =
Math.random()*90 + "vw";

cat.style.top =
Math.random()*80 + "vh";

cat.style.fontSize = "50px";

cat.style.cursor = "pointer";

cat.style.zIndex = "9999";

cat.onclick = ()=>{

unlockAchievement(
"Cat Whisperer"
);

cat.remove();

};

document.body.appendChild(cat);

setTimeout(()=>{

if(cat.parentNode){

cat.remove();

}

},8000);

},15000);

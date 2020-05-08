const toggleimage = document.querySelector("#toggle-img");
const menucontent = document.getElementById("toggle-menu");
const list = document.querySelector('#toggle-list ul');
const bodyColor = document.getElementById("bodyColor")
const wit = document.getElementById('colorWit');
const rood = document.querySelector('#colorRood');
const oranje = document.getElementById('colorOranje');
const paars = document.getElementById('colorPaars');
const groen = document.getElementById('colorGroen');
const tekst = document.getElementById('tekst');
const terug = document.getElementById('terug');
const kleur = document.getElementById("kleur" )
const alleButtons = document.getElementsByClassName(" container")
/* 
const .. = document.querySelectorAll('');
const aantalButtons = document.getElementsByTagName('li'); */


//de css van de div class toggle-menu moet bij mouseover display block worden 
//& toggle-img moet display none worden:
toggleimage.addEventListener("mouseover", function(event){
    menucontent.style.margin = '0px 0px 0px 0px';
    toggleimage.style.visibility = "hidden";
    Array.from( document.querySelectorAll('input[name="list"]:checked'), input => input.checked = false );
}, false); 

//achtergrondkleuren wijzigen (diverse kleuren) bij aanklikken van checkbox:
wit.addEventListener('change', function(e){
    if (wit.checked == true){
        
        bodyColor.style.backgroundColor = "white";
        kleur.innerHTML = "De achtergrondkleur is wit."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s"
    }  
})

rood.addEventListener('change', function(e){
    if (rood.checked == true){
        console.log(e);
        bodyColor.style.backgroundColor = "red";
        kleur.innerHTML = "De achtergrondkleur is rood."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s"
    }
})

oranje.addEventListener('change', function(e){
    if (oranje.checked == true){
        bodyColor.style.backgroundColor = "orange";
        kleur.innerHTML = "De achtergrondkleur is oranje."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s";
    }
})

paars.addEventListener('change', function(e){
    if (paars.checked == true){
        bodyColor.style.backgroundColor = "violet";
        kleur.innerHTML = "De achtergrondkleur is paars."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s";
    }
})

groen.addEventListener('change', function(e){
    if (groen.checked == true){
        bodyColor.style.backgroundColor = "greenyellow";
        kleur.innerHTML = "De achtergrondkleur is groen."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s";
    }
})

//keydown functies
window.addEventListener('keydown', function(e){
    if (e.code == "Numpad1" || e.key == "1") {
        bodyColor.style.backgroundColor = "white";
        kleur.innerHTML = "De achtergrondkleur is wit."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s";
    }
    
    else if (e.code == "Numpad2" || e.key == "2") {
        bodyColor.style.backgroundColor = "red";
        kleur.innerHTML = "De achtergrondkleur is rood."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s";
    }
    else if (e.code == "Numpad3" || e.key == "3") {
        bodyColor.style.backgroundColor = "orange";
        kleur.innerHTML = "De achtergrondkleur is oranje."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s";
    }
    else if (e.code == "Numpad4" || e.key == "4") {
        bodyColor.style.backgroundColor = "violet";
        kleur.innerHTML = "De achtergrondkleur is paars."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s";
    }
    else if (e.code == "Numpad5" || e.key == "5") {
        bodyColor.style.backgroundColor = "greenyellow";
        kleur.innerHTML = "De achtergrondkleur is groen."
        menucontent.style.margin = "0px 0px 0px -300px";
        toggleimage.style.visibility = "visible";
        toggleimage.style.transition = "ease-in all 1s";
    }
}, false)

/* terug naar de hamburger:
terug.addEventListener('click', function(e){
    bodyColor.style.backgroundColor = "white";
    menucontent.style.display = "none";
    toggleimage.style.display = "block";

}); 

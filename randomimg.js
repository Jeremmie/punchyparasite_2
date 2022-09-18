var backgroundImage = document.querySelector(".bande:nth-child(even)") // cherche l'élément header
var backgroundImage = document.querySelector(".bande:nth-child(odd)") // cherche l'élément header
var btnHover = document.querySelector(".boutton")

addEventListener("load", (event) =>{
    console.log("la page est chargée");

    var backgroundImage = document.querySelector(".bande:nth-child(even)") // cherche l'élément header
    // backgroundImage.querySelector("background-image: url(sources/img/pochette_1.jpeg);")
    backgroundImage.style.backgroundImage="url(sources/img/pochettes/pochette_"+(Math.floor( Math.random() * 5) +1)+".jpeg)"

    var backgroundImage = document.querySelector(".bande:nth-child(odd)") // cherche l'élément header
    // backgroundImage.querySelector("background-image: url(sources/img/pochette_1.jpeg);")
    backgroundImage.style.backgroundImage="url(sources/img/pochettes/pochette_"+(Math.floor( Math.random() * 5) +1)+".jpeg)"
});

addEventListener("mouseover", function(){

});
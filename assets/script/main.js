let instruction = document.getElementById("instruction");
let game = document.getElementById("game");
let beggin = document.getElementById("start");
let enemy = document.createElement("div");;
let spaceship = document.createElement("div");;

function start(){
    instruction.classList.add("hidden")
    game.appendChild(spaceship);
    spaceship.classList.add("spaceship");
    console.log(game);


}

beggin.onclick = () => {
    start();
}
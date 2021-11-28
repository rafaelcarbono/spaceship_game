let instruction = document.getElementById("instruction");
let game = document.getElementById("game");
let beggin = document.getElementById("beggin");
let enemy = document.createElement("div");
let spaceship = document.createElement("div");
let loop = {};
let y = 0;

function start(){

    instruction.classList.add("hidden")
    game.classList.remove("hidden");
    game.appendChild(spaceship);
    game.appendChild(enemy);
    spaceship.classList.add("spaceship");
    enemy.classList.add("enemy");

    loop.timer = setInterval(changeBack,100);

    function changeBack(){
        y+=1;
        backposition = parseInt(window.getComputedStyle(game).backgroundPositionY);
        game.style.cssText = 'background-position-y:' + y + 'px';
    }

}

beggin.onclick = () => {
    start();
}
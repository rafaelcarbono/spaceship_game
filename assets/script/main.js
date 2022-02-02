let instruction = document.getElementById("instruction");
let game = document.getElementById("game");
let beggin = document.getElementById("beggin");
let enemy = document.createElement("div");
let spaceship = document.createElement("div");
let loop = {};
let y = 0;
      


function movePlayer(){

    document.body.addEventListener('keydown', function (e) {
        let code = e.code;
        let move = 10;

        let gameSize = parseInt(window.getComputedStyle(game).width);

    
        if(code == 'ArrowLeft'){
            let moveL = parseInt(window.getComputedStyle(spaceship).left) - move;

            if(moveL > 10){
                spaceship.style.cssText = 'left:' + moveL + 'px';
                console.log('ArrowLeft', moveL);
            }
            

        }

        /* if(code == 'ArrowUp'){
            mover = parseInt(window.getComputedStyle(spaceship).top) - move;
            spaceship.style.cssText = 'top:' + mover + 'px';
            console.log('ArrowUp');
        }*/

        if(code == 'ArrowRight'){
            let moveR = parseInt(window.getComputedStyle(spaceship).right) - move;
            let tester = gameSize / 100;
            if(moveR > 10){
            spaceship.style.cssText = 'right:' + moveR + 'px';
            console.log('ArrowRight', moveR, tester);
        }
        }
        /*
        if(code == 'ArrowDown'){
            mover = parseInt(window.getComputedStyle(spaceship).top) + move;
            spaceship.style.cssText = 'top:' + mover + 'px';
            console.log('ArrowDown');
        }*/

        if(code == 'Space'){
            console.log('Space');
        }

      });
    
}

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

    movePlayer();

}

beggin.onclick = () => {
    start();
}
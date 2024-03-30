
const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe');

const h1 = document.querySelector('h1');

    const som_fase = new Audio();
    som_fase.src = 'musica/fase.mp3'

    const som_mario = new Audio();
    som_mario.src = 'musica/over.mp3'



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);}

    const loop = setInterval(() => {
        som_fase.play();
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        


        if (pipePosition <= 120 && pipePosition > 0 && marioPosition <80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = 'imagens/game-over.png';
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
            som_mario.play();
            som_fase.play();

            clearInterval(loop);

        }
    }, 10);


document.addEventListener('keydown', jump);
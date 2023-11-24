const winSound = new Audio("audio/meme.mp3");

const napaleon = document.querySelector('[data-movie-id="7"');
napaleon.addEventListener("mouseover", function(){
    winSound.play();
})

napaleon.addEventListener("mouseout", function(){
    winSound.pause();
})
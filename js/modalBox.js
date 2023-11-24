class Movie {
    constructor(options){
        this.id = options.id;
        this.name = options.name;
        this.tags = options.tags;
        this.duration = options.duration;
        this.country = options.country
        this.trailerLink = options.trailerLink;
        this.imgLink = options.imgLink;
        this.desciption = options.desciption;
    }
}

const movie1 = new Movie ({
    id:1,
    name:"A cherished wish", 
    tags:["cartoon", "music", "fantasy", "comedy", "adventure"], 
    duration:"90", 
    country:"USA", 
    trailerLink:
    "https://www.youtube.com/embed/OKSLmjLs6hw?controls=0",
    imgLink:"img/movie1.webp",
    desciption: "Asha is a witty idealist who makes such a strong wish that it is answered by a cosmic force — a small ball of boundless energy named a Star. Together, Asha and the Star confront the most formidable enemy — the ruler of Rosas, King Magnifico. Protecting her loved ones, Asha proves that when the will of one brave person is combined with the magic of the stars, amazing things can happen."

}) 

const movie2 = new Movie ({
    id:2,
    name:"Арғымақ. Небесные кони", 
    tags:["sport", "melodrama"], 
    duration:"125", 
    country:"Kazkhstan", 
    trailerLink:
    "https://www.youtube.com/embed/t2L6XYCm7aU?controls=0",
    imgLink:"img/movie2.webp",
    desciption: "The main character is a 50-year-old loser Mukhtar. Mukhtar received a strong psychological trauma in childhood. His brother played for the famous football club 'Pakhtakor', but, unfortunately, he died in a plane crash with the whole team back in 1979. After this tragedy, Mukhtar hated football and lost himself... Forty years later, ironically, in order to save his friend, he has to become a coach of a children's football club…"
}) 

const movie3 = new Movie ({
    id:3,
    name:"Thor", 
    tags:["thriller"], 
    duration:"90", 
    country:"Kazakhstan", 
    trailerLink:
    "https://www.youtube.com/embed/BQ0oF6cUzXw?controls=0",
    imgLink:"img/movie3.webp",
    desciption: "A person ends up in a maximum security isolation unit. He does not remember what happened and what actions led him to prison. In the cell, he meets a prisoner who agrees to help him restore the chain of events. One day his cellmate disappears without a trace. He tries to establish contact with the warden and find out what happened. Will he be able to get to the truth? The search for answers is complicated by the strict regime of the isolation ward and the lack of communication with the outside world."

}) 

const movie4 = new Movie ({
    id:4,
    name:"The Hunger Games: The Ballad of Snakes and Songbirds", 
    tags:["fantasy", "action movie", "thriller", "drama", "military"], 
    duration:"160", 
    country:"USA", 
    trailerLink:
    "https://www.youtube.com/embed/BSLQBhWCNqI?controls=0",
    imgLink:"img/movie4.webp",
    desciption: "Before becoming the despotic president of Panam, the young Coriolanus Snow was the last hope for his withering family—the once great dynasty that fell out of favor with the post-war Capitol. On the eve of the tenth annual Hunger Games, Snow is appointed mentor to Lucy Gray Baird, a tributary of District 12. Gradually, the girl attracts more and more attention of Panem, becoming the favorite of the upcoming competition. Ready to do anything to restore his family to its former greatness, Snow decides to turn the situation with Lucy to his advantage. A race against time begins, which will show who is a songbird and who is a snake."

}) 

const movie5 = new Movie ({
    id:5,
    name:"Captain Marvel 2", 
    tags:["fantasy", "action movie", "adventure"], 
    duration:"110", 
    country:"USA", 
    trailerLink:
    "https://www.youtube.com/embed/9gg3tiXBA9M?controls=0",
    imgLink:"img/movie5.webp",
    desciption:"Carol Danvers regains her lost identity, taken away by the tyrants of the Kree, and takes revenge on the Higher Mind. However, unforeseen consequences lead to Carol shouldering the burden of a destabilized universe. When she passes through a wormhole that should lead her to a Kree revolutionary, her powers are intertwined with the abilities of a Jersey City superfan, Kamala Khan, known as Miss Marvel, as well as with Carol's niece, Monica Rambo (an agent of the M.E.C. organization). They must unite and learn to act together to save the universe."

}) 

const movie6 = new Movie ({
    id: 6,
    name:"The Princess and the sorcerer Alazar", 
    tags:["fantasy", "comedy", "famyli"], 
    duration:"140", 
    country:"Czech", 
    trailerLink:
    "https://www.youtube.com/embed/ola4HYTgV5c?controls=0",
    imgLink:"img/movie6.webp",
    desciption: "Princess Ellen and Prince John live happily ever after, as they should, but Ellen's friend Amelia has enough worries. In addition to the fact that she is seriously interested in magic, she also has a double — Amelia from the past. And then an evil sorcerer has appeared, who threatens the magical city of Ira."

}) 

const movie7 = new Movie ({
    id:7,
    name:"Napoleon", 
    tags:["biographical", "military", "drama", "historical"], 
    duration:"160", 
    country:"UK, USA", 
    trailerLink:
    "https://www.youtube.com/embed/vEBzNxPeXAU?controls=0",
    imgLink:"img/movie7.webp",
    desciption: "«Napoleon» is a spectacular epic action movie that tells in detail about the rise and fall of the legendary French emperor Napoleon Bonaparte (Oscar winner Joaquin Phoenix). A truly large-scale film by the legendary Ridley Scott shows Bonaparte's difficult path to power through the prism of his volatile relationship with his only true love,"

}) 

const movie8 = new Movie ({
    id:8,
    name:"Superbrain", 
    tags:["cartoon", "adventure"], 
    duration:"90", 
    country:"South Africa", 
    trailerLink:
    "https://www.youtube.com/embed/E3pPN1Y6Mc8?controls=0",
    imgLink:"img/movie8.webp",
    desciption: "Norman is an ordinary schoolboy who is passionate about comics about aliens and believes in the existence of extraterrestrial civilizations. One day his fantasies become reality when a group of aliens connects to his head and asks for help. The intergalactic villain Superbrain is looking for new sources of intelligence, and his next target is planet Earth. Norman and his friends will have to turn on the head and beat the Superbrain. After all, they will have to fight with a genius villain."

}) 

const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8];



const modal = document.querySelector(".modal")
const modalBox = document.querySelector("#modalBox");
modal.addEventListener("click", function(){
    const frame = document.querySelector("iframe");
    frame.src = "";
    modal.style.display = "none";
    modalBox.classList.add("d-none");
})


const movieCards = document.querySelectorAll(".movieCard")

movieCards.forEach((card) => {
    card.addEventListener("click", function(){
        const movie = movies.find((element) => element.id==parseInt(card.dataset.movieId));
        modalBox.querySelector(".movieName").innerHTML = movie.name;
        modalBox.querySelector(".movieTags").innerHTML = movie.tags.join(", ");
        modalBox.querySelector("#trailer").src = movie.trailerLink;
        modalBox.querySelector("#movieImg").src = movie.imgLink;
        modalBox.querySelector(".duration").innerHTML = "Duration: " + `<span class="fw-bold">${movie.duration}</span>`;
        modalBox.querySelector(".country").innerHTML = "Country: " + `<span class="fw-bold">${movie.country}</span>`;
        modalBox.querySelector(".description").innerHTML = movie.desciption;
        modalBox.classList.remove("d-none");
        modal.style.display = "block";
    })
})


const fullBtn = document.querySelector("#fullscreenBtn");
const frame = document.querySelector("#trailer");
fullBtn.addEventListener("click", function(){
    frame.requestFullscreen();
})

document.addEventListener("keydown", e=>{
    if(e.key === 'Escape'){
        const frame = document.querySelector("iframe");
        frame.src = "";
        modal.style.display = "none";
        modalBox.classList.add("d-none");
    }
})
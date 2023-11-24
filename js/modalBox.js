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
    name:"Заветное желание", 
    tags:["мультфильм", "музыка", "фэнтези", "комедия", "приключения"], 
    duration:"90", 
    country:"USA", 
    trailerLink:
    "https://www.youtube.com/embed/OKSLmjLs6hw?controls=0",
    imgLink:"img/movie1.webp",
    desciption: "Аша — остроумная идеалистка, которая загадывает настолько сильное желание, что на него отвечает космическая сила — маленький шарик безграничной энергии по имени Звезда. Вместе, Аша и Звезда противостоят самому грозному врагу — правителю Росаса, королю Магнифико. Защищая своих близких, Аша доказывает, что, когда воля одного отважного человека соединяется с магией звезд, могут происходить удивительные вещи."

}) 

const movie2 = new Movie ({
    id:2,
    name:"Арғымақ. Небесные кони", 
    tags:["спорт", "мелодрама"], 
    duration:"125", 
    country:"Kazkhstan", 
    trailerLink:
    "https://www.youtube.com/embed/t2L6XYCm7aU?controls=0",
    imgLink:"img/movie2.webp",
    desciption: "Главный герой 50-летний неудачник Мухтар. Мухтар получил сильную, психологическую травму в детстве. Его родной брат играл за знаменитый футбольный клуб «Пахтакор», но, к большому сожалению, погиб в авикатострофе со всей командой в далеком 1979-м году. После этой трагедии, Мухтар возненавидел футбол и потерял себя... Спустя сорок лет по иронии судьбы ради спасения своего друга ему приходится стать тренером детского футбольного клуба…"
}) 

const movie3 = new Movie ({
    id:3,
    name:"Тор", 
    tags:["триллер"], 
    duration:"90", 
    country:"Kazakhstan", 
    trailerLink:
    "https://www.youtube.com/embed/BQ0oF6cUzXw?controls=0",
    imgLink:"img/movie3.webp",
    desciption: "Человек попадает в изолятор максимальной безопасности. Он не помнит, что произошло, и какие действия привели его в тюрьму. В камере он встречает заключённого, который соглашается помочь ему восстановить цепь событий. Однажды его сокамерник бесследно исчезает. Он старается наладить связь с надзирателем и узнать, что произошло. Удастся ли ему докопаться до истины? Поиски ответов затрудняет строгий режим изолятора и отсутствие связи с внешним миром."

}) 

const movie4 = new Movie ({
    id:4,
    name:"Голодные игры: Баллада о змеях и певчих птицах", 
    tags:["фантастика", "боевик", "триллер", "драма", "военный"], 
    duration:"160", 
    country:"USA", 
    trailerLink:
    "https://www.youtube.com/embed/BSLQBhWCNqI?controls=0",
    imgLink:"img/movie4.webp",
    desciption: "До того, как стать деспотичным президентом Панэма, молодой Кориолан Сноу был последней надеждой для своего увядающего рода — некогда великой династии, впавшей в немилость послевоенного Капитолия. Накануне десятых ежегодных Голодных игр Сноу назначают наставником Люси Грей Бэйрд — трибута дистрикта 12. Постепенно девушка привлекает все больше внимание Панэма, становясь фавориткой грядущего соревнования. Готовый на все, чтобы вернуть своей семье былое величие, Сноу решает обратить ситуацию с Люси в свою пользу. Начинается гонка со временем, которая покажет, кто певчая птица, а кто — змея."

}) 

const movie5 = new Movie ({
    id:5,
    name:"Капитан Марвел 2", 
    tags:["фэнтези", "боевик", "приключения"], 
    duration:"110", 
    country:"USA", 
    trailerLink:
    "https://www.youtube.com/embed/9gg3tiXBA9M?controls=0",
    imgLink:"img/movie5.webp",
    desciption:"Кэрол Дэнверс обретает свою утраченную личность, отнятую тиранами Крии, и мстит Высшему Разуму. Однако, непредвиденные последствия приводят к тому, что Кэрол взваливает на свои плечи бремя дестабилизированной вселенной. Когда она проходит через червоточину, которая должна вывести её на революционера из числа Крии, её силы переплетаются со способностями суперфанатки из Джерси-Сити, Камалы Хан, известной как Мисс Марвел, а также с племянницей Кэрол, Моникой Рамбо (агентом организации «М. Е. Ч.»). Они должны объединиться и научиться действовать сообща, чтобы спасти вселенную."

}) 

const movie6 = new Movie ({
    id: 6,
    name:"Принцесса и колдун Алазар", 
    tags:["фэнтези", "комедия", "семейный"], 
    duration:"140", 
    country:"Czech", 
    trailerLink:
    "https://www.youtube.com/embed/ola4HYTgV5c?controls=0",
    imgLink:"img/movie6.webp",
    desciption: "Принцесса Эллен и принц Джон живут, как и положено, долго и счастливо, но у подруги Эллен Амелии забот хватает. Помимо того, что она серьезно увлеклась магией, у нее еще и появляется двойник — Амелия из прошлого. А тут еще и злой колдун объявился, который угрожает волшебному городу Айра."

}) 

const movie7 = new Movie ({
    id:7,
    name:"Наполеон  ", 
    tags:["биографический", "военный", "драма", "исторический"], 
    duration:"160", 
    country:"UK, USA", 
    trailerLink:
    "https://www.youtube.com/embed/vEBzNxPeXAU?controls=0",
    imgLink:"img/movie7.webp",
    desciption: "«Наполеон» — зрелищный эпический боевик, в котором подробно рассказывается о взлёте и падении легендарного французского императора Наполеона Бонапарта (лауреат премии «Оскар» Хоакин Феникс). Понастоящему масштабный фильм легендарного Ридли Скотта показывает тяжёлый путь Бонапарта к власти через призму его изменчивых отношений с единственной настоящей любовью,"

}) 

const movie8 = new Movie ({
    id:8,
    name:"Супермозг", 
    tags:["мультфильм", "приключения"], 
    duration:"90", 
    country:"South Africa", 
    trailerLink:
    "https://www.youtube.com/embed/E3pPN1Y6Mc8?controls=0",
    imgLink:"img/movie1.webp",
    desciption: "Норман — обычный школьник, увлеченный комиксами про пришельцев и верящий в существование внеземных цивилизаций. Однажды его фантазии становятся реальностью, когда группа инопланетян подключается к его голове и просит о помощи. Межгалактический злодей Супермозг ищет новые источники разума, и его следующая цель — планета Земля. Норману и его друзьям предстоит включить голову и переиграть Супермозга. Ведь сразиться им придется со злодеем-гением."

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
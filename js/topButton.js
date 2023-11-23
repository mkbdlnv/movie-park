const btn = document.querySelector(".topButton button");

btn.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

const allCardsEl = document.querySelectorAll(".card");

allCardsEl.forEach(function(element){
    element.addEventListener("click",function(){
        
     removeActiveClass();
     element.classList.add("active");


    });
});


function removeActiveClass()
{
    allCardsEl.forEach(function(element){
        element.classList.remove("active");
    });
}

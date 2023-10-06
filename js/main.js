const resultDiv = document.getElementById("resultDiv");

let obj1 = JSON.parse(tasks);

for(let i = 0; i < obj1.length; i++) {
    resultDiv.innerHTML += `    
    // <div class="card" style="width: 18rem;">
    //     <img src="${obj1[i].image}" class="card-img-top" alt="${obj1[i].taskName}">
    //     <div class="card-body">
    //         <p class="h5 card-title">${obj1[i].taskName}</p>
    //         <p class="h6 card-text">${obj1[i].description}</p>
    //         <hr>
    //         <p class="h6 card-text">Priority level: ${obj1[i].priority}</p>
    //         <p class="h6 card-text">Deadline: ${obj1[i].deadline}</p>
    //         <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    // </div>
    `;
}

const cards = document.querySelectorAll(".card");

cards.forEach(function(card, j){
    card.addEventListener("click", function(){
        if (obj1[j].haveRead==true) {
            obj1[j].haveRead=false;
            card.classList.add("haveNotRead");
            card.classList.remove("haveRead");
            overlays[j].classList.add("hide");
        } else {
            obj1[j].haveRead=true;
            card.classList.add("haveRead");
            card.classList.remove("haveNotRead");
            overlays[j].classList.remove("hide");

        }
    })
})

const resultDiv = document.getElementById("resultDiv");

let obj1 = JSON.parse(tasks);

for(let i = 0; i < obj1.length; i++) {
    resultDiv.innerHTML += `    
    <div class="card py-3 mx-2 myCard">
        <div class="d-flex justify-content-between">
            <p class="h6">Task</p>
            <div class="d-flex justify-content-end">
                <i class="bi bi-bookmark"></i>
                <i class="bi bi-three-dots-vertical ms-2"></i>
            </div>
        </div>
        <img src="./images/walk-dog.jpg" class="img-thumbnail mb-2" alt="Take dog for a walk">
        <p class="h5 card-title">Take dog for a walk</p>
        <p class="h6 card-text">You need to take Fluffy for a walk. He needs to run and be with other dogs!</p>
        <hr>
        <p class="h6 card-text">
            <i class="bi bi-exclamation-triangle-fill"></i> Priority level: <span class="rounded bg-success myBtn">0</span>
        </p>
        <p class="h6 card-text">Deadline: 09.10.2023</p>
        <hr>
        <div class="d-flex justify-content-end">
            <a href="#" class="btn btn-danger ms-2"><i class="bi bi-trash"></i> Delete</a>
            <a href="#" class="btn btn-success ms-2"><i class="bi bi-check-circle"></i> Done</a>
        </div>
    </div>
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

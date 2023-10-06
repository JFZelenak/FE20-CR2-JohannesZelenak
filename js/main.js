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
        <img src="${obj1[i].image}" class="img-thumbnail mb-2" alt="${obj1[i].taskName}">
        <p class="h5 card-title">${obj1[i].taskName}</p>
        <p class="h6 card-text">${obj1[i].description}</p>
        <hr>
        <p class="h6 card-text">
            <i class="bi bi-exclamation-triangle-fill"></i> Priority level: <span class="btn btn-success myPriorityBtn">${obj1[i].priority}</span>
        </p>
        <p class="h6 card-text">Deadline: ${obj1[i].deadline}</p>
        <hr>
        <div class="d-flex justify-content-end">
            <span class="btn btn-danger myDeleteBtn ms-2"><i class="bi bi-trash"></i> Delete</span>
            <span class="btn btn-success myDoneBtn ms-2"><i class="bi bi-check-circle"></i> Done</span>
        </div>
    </div>
    `;
}

const cards = document.querySelectorAll(".myCard");
const texts1 = document.querySelectorAll(".card-title");
const texts2 = document.querySelectorAll(".card-text");
const priorityBtns = document.querySelectorAll(".myPriorityBtn");
const deleteBtns = document.querySelectorAll(".myDeleteBtn");
const doneBtns = document.querySelectorAll(".myDoneBtn");

priorityBtns.forEach(function(btn, j){

    btn.addEventListener("click", function(){
        if (obj1[j].priority == 4 || obj1[j].priority == 3 ) {
            btn.classList.remove("btn-warning");
            btn.classList.add("btn-danger");
        } else if (obj1[j].priority < 3 && obj1[j].priority > 0) {
            btn.classList.remove("btn-success");
            btn.classList.add("btn-warning");
        }

        if(obj1[j].priority < 5){
            obj1[j].priority++;
            this.innerHTML = obj1[j].priority;
        } else {
            console.log(`${obj1[j].taskName} max. priority reached!`)
        }        
    })
})

deleteBtns.forEach(function(btn, j){
    btn.addEventListener("click", function(){
        cards[j].style.opacity = "0";
        cards[j].style.transition = "700ms all linear";
        setTimeout(() => {cards[j].remove();}, 700);
    })
})

doneBtns.forEach(function(btn, j){
    btn.addEventListener("click", function(){
        if (cards[j].style.opacity == 0.5) {
            texts1[j].style.textDecoration = "none";
            cards[j].style.color = "black";
            cards[j].style.boxShadow = "0px 0px 8px rgba(102, 95, 87, 0.5)";
            cards[j].style.opacity = "1";
        } else {
            texts1[j].style.textDecoration = "line-through";
            cards[j].style.color = "grey";
            cards[j].style.boxShadow = "0px 0px 0px rgba(102, 95, 87, 0.5)";
            cards[j].style.opacity = "0.5";
        }


    })
})
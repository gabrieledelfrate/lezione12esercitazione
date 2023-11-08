function aggiungiTask (){
    const nuovoTask = document.createElement("li")
    nuovoTask.innerText = document.getElementById("newTask").value
    const contenitore = document.querySelector("ul")
    contenitore.appendChild(nuovoTask)
    event.preventDefault()
}

const pulsante = document.querySelector("button")
pulsante.addEventListener("click", aggiungiTask)

const listaTask = document.querySelectorAll("ul li")
listaTask.forEach(task => {
    task.addEventListener(`click`, ()=>
     {
        task.classList.add(`completato`);
    })
})
function eliminaTask (){
    const nuovoTask = document.querySelectorAll("li")
    nuovoTask.remove
}

function aggiungiTasto (){
    const nuovoTasto = document.createElement("button")
    const contenitoreB = document.querySelectorAll("li")
    contenitoreB.appendChild(nuovoTasto)
}

const nuovoTasto = document.createElement("button")
nuovoTasto.addEventListener("click", eliminaTask)


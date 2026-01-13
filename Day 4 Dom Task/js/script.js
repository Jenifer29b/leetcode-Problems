let ul = document.getElementById("todo")

let todos = ["waking@5", "BibleReading", "Prayer", "Gettingready", "Breakfast"]

todos.forEach((todo) => {
    let li = document.createElement("li")
     li.textContent = todo
   
    ul.appendChild(li)
})

let addbtn = document.getElementById("btn")

addbtn.addEventListener("click", () => {
    let value = document.getElementById("txt").value
    let li = document.createElement("li")
    li.textContent = value
    ul.appendChild(li)

     let update = document.createElement("button")
     update.textContent = "Update"
    

    update.addEventListener("click", () => {
        let text = document.createElement("input")
        text.type = "text"
        text.value = value

        let save = document.createElement("button")
        save.textContent = "Save"
        li.textContent = "";
        li.append(text,save)

        

        

    })

    ul.appendChild(update)
    document.getElementById("txt").value = ""
    console.log("item added")
})

let clearbtn = document.getElementById("btn1")

clearbtn.addEventListener("click", (e) => {
    document.querySelectorAll("li").forEach((li) => li.remove())
    console.log(e.target)
})


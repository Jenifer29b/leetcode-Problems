let ul = document.getElementById("todoList")

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove()
        console.log("Li deleted")
    console.log(e.target)
    console.log(e.currentTarget)
    }
    
})

document.getElementById("addTask").addEventListener("click", () => {
    let li = document.createElement("li")
    li.textContent = "newItem 1"
    ul.append(li)
})
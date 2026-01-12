let btn = document.getElementById("addBtn")

btn.addEventListener("click", () => {
    let item = document.getElementById("itemInput").value.trim()
    if (item.length === 0) {
        console.log("item needed")
        return
    }
    let li = document.createElement("li")
    li.setAttribute("id", "mylist")
    li.textContent = item
    
    let remove = document.createElement("button")
    remove.textContent = "Delete"
    remove.addEventListener("click", () => {
        li.remove()
    })

    li.appendChild(remove)
    document.getElementById("list").appendChild(li)
    document.getElementById("itemInput").value = ""

     let ul = document.getElementById("list")
console.log("total Count ", ul.children.length)
    
})






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

    let update = document.createElement("button")
    update.textContent = "Update"

    update.addEventListener("click", () => {
        let input = document.createElement("input")
        input.type = "text"
        input.value = item

        let save = document.createElement("button")
        save.textContent = "Save"
        li.textContent = ""
        li.append(input,save, remove)
        
        save.addEventListener("click", () => {
            if (input.value.trim().length === 0) return;
            li.textContent = input.value 
        li.append(update,remove)
        })
        

    })


    
    li.appendChild(update)
    li.appendChild(remove)
    document.getElementById("list").appendChild(li)
    document.getElementById("itemInput").value = ""

     let ul = document.getElementById("list")
console.log("total Count ", ul.children.length)
    
})






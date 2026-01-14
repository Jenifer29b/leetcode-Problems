let ul = document.getElementById("list")

ul.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
        alert(e.target.textContent)
    }
})

let ul1 = document.getElementById("menu")

ul1.addEventListener("click", (e) => {
    if (e.target.closest(".btn")) {
        alert(e.target.textContent)
    }
})

let list = document.getElementById("todo")
let value = document.getElementById("txt")

document.getElementById("btns").addEventListener("click", (e) => {
    if (e.target.closest("#addbtn")) {
        let li = document.createElement("li")
        li.textContent = value.value
        list.appendChild(li)
        value.value= ""
        return
    } 
    const li = e.target.closest("#delbtn");
  if (li && list.contains(li)) {
    li.remove();
  }
    


})
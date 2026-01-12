let ul = document.createElement("ul")
ul.setAttribute("id","mylist")
let li1 = document.createElement("li")
li1.textContent = "Apple"
let li2 = document.createElement("li")
li2.textContent = "Banana"
let li3 = document.createElement("li")
li3.textContent = "Guava"
let li4 = document.createElement("li")
li4.textContent="kiwi"

ul.append(li1, li2, li3, li4)

let items = ["Orange", "Strawberry", "blueberry", "papaya"]

items.forEach((item) => {
    let li = document.createElement("li")
    li.textContent = item
console.log("items added")
    ul.appendChild(li)
})

document.body.appendChild(ul)
console.log("item added")
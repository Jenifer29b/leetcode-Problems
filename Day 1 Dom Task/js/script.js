// let head = document.getElementById("head")
// console.log("heading : ", head.textContent)

// let list = document.getElementById("list")
// console.log(list.textContent)

// let inner = document.getElementsByClassName("two")
// console.log(inner[0].innerHTML)

// let title = document.getElementById("main-title")
// console.log(title)
// console.log(title.innerText)

// let list = document.getElementsByTagName("ul")
// console.log(list[0].innerHTML)

// let para = document.getElementsByClassName("info")
// console.log(para[0].innerHTML)
// console.log(para.length)
// console.log(para[1].innerHTML)

// let lists = document.getElementsByTagName("li")
// console.log(lists[0].textContent)
// console.log(lists[1].textContent)
// console.log(lists[2].textContent)

// let para1 = document.querySelector(".info")
// console.log(para1.textContent)

// let value = document.getElementById("username")
// console.log(value.value)

// let img = document.getElementById("logo")
// console.log(img.getAttribute("src"))
// console.log(img.getAttribute("alt"))
// console.log(img.id)

// let title1 = document.title
// console.log(title1)

// let list1 = document.querySelectorAll("li")

// list1.forEach((lis)=>console.log(lis.innerHTML))

let para1 = document.getElementsByClassName("one")
console.log(para1[0].innerText) // some items may hidden
console.log(para1[0].textContent)

console.log(document.getElementsByClassName("info").length)
let result = document.querySelectorAll(".info")

result.forEach((val)=>console.log(val.textContent))

let input = document.getElementById("username")
console.log(input.value)

let items = document.querySelectorAll("li")
console.log((items[items.length - 1]).textContent)

for (let i = items.length - 1; i >= 0; i--){
    console.log(items[i].textContent)
}

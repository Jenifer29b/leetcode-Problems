let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    btn1.innerText = "Button Clicked"
    btn1.innerHTML = "<b>Button Clicked</b>"
    btn1.style.color = "red"
    btn1.style.fontSize = "20px"
})

let btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {
    console.log("toggle activated")
    btn2.classList.toggle("dark")
})

let btn3 = document.getElementById("btn3")

btn3.addEventListener("click", () => {
    btn3.classList.add("highlight")
    console.log("hightlight added")
    btn3.classList.remove()
})



let password = document.getElementById("password")
let show = document.getElementById("btn5")
let hide = document.getElementById("btn6")

show.addEventListener("click", () => {
    password.setAttribute("type","text")
})

hide.addEventListener("click", () => {
    password.setAttribute("type","password")
})
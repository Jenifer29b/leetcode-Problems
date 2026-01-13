let btn = document.getElementById("btn")

btn.addEventListener("click", (e) => {
    let p = document.getElementById("output")
    p.textContent = "Button Clicked"
    console.log(e.target)
})

let input = document.getElementById("nameInput")

input.addEventListener("input", () => {
    let text = document.getElementById("liveText")
    text.textContent = input.value 
    console.log(input.value.length)
    
})

let submit = document.getElementById("btnsubmit")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let value = document.getElementById("formMsg")
    value.textContent = "Form Submitted Successfully"
})

document.addEventListener("keydown", (e) => {
    console.log(e.key)
})
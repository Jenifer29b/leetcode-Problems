let btn = document.getElementById("btn")
btn.style.color = "blue";
btn.style.fontSize = "20px"

btn.addEventListener("click", () => {
    btn.innerText = "Button Clicked"
    document.getElementById("text").innerHTML = "<b>This is a paragraph</b>"
    document.getElementById("text").classList.toggle("active")
    document.getElementById("img").setAttribute("src","https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg")
    document.getElementById("img").removeAttribute("width")
    document.getElementById("img").classList.toggle("hidden")
})


let namebtn = document.getElementById("nameBtn")

namebtn.addEventListener("click", () => {
    let value = document.getElementById("nameInput").value
    document.getElementById("nameText").textContent = value
    document.getElementById("nameText").innerHTML = `<b>${value}</b>`
})
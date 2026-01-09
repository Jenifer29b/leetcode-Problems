

let maincontent = document.getElementsByClassName("maincon")
// maincontent[0].classList.add("para")
// maincontent.classList.toggle("maincontent")

// console.log(maincontent.textContent)

let togglebtn = document.getElementById("toggle")

togglebtn.addEventListener("click", () => {
    alert("button clicked")
    
    
    document.getElementsByClassName("maincon")[0].classList.toggle("active")
})
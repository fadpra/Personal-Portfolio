const yrbtn = document.querySelectorAll(".yrbtn")
const yr10 = document.querySelector(".yr10")
const yr11 = document.querySelector(".yr11")
const yr12 = document.querySelector(".yr12")
const schoolPlace = document.querySelector(".placeinfo")

yrbtn.forEach(btn => {
    btn.addEventListener("click",() => {
        yrbtn.forEach(otherBtn => {
            otherBtn.classList.remove("active")
        })
        if(btn.id === yr10.className) {
            yr10.style.display = "block"
            yr11.style.display = "none"
            yr12.style.display = "none"
            schoolPlace.style.display = "none"
        } else if(btn.id === yr11.className) {
            yr10.style.display = "none"
            yr11.style.display = "block"
            yr12.style.display = "none"
            schoolPlace.style.display = "none"
        } if(btn.id === yr12.className) {
            yr10.style.display = "none"
            yr11.style.display = "none"
            yr12.style.display = "block"
            schoolPlace.style.display = "none"
        }
        btn.classList.add("active")
    })
})
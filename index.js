const imgElm = document.querySelector("img")

document.addEventListener("keydown", (e) => {
    let currentMargin = parseInt(getComputedStyle(imgElm).marginLeft)

    if (e.code === "ArrowRight") {
        imgElm.style.marginLeft = (currentMargin + 10) + "px"
    } else if (e.code === "ArrowLeft") {
        imgElm.style.marginLeft = (currentMargin - 10) + "px"
    }
})
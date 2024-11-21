
let countValue = document.getElementById("count");
let inc = document.getElementById("in")
let dec = document.getElementById("de")
let reset = document.getElementById("reset")

let count = 0
function display() {
    countValue.textContent = count;
}

reset.addEventListener("click", () => {
    count = 0
    display()
})

inc.addEventListener("click", function () {
    count=count+5;
    display()
})

dec.addEventListener("click", function () {
    count=count-5
    display()

})

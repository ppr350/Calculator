const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".button_section")

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target
        const action = key.dataset.action
        if (!action) {
            console.log("number key")
        }
    }
})
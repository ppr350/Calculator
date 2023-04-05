const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".button_section")
const previousOperand = document.querySelector(".previous-operand")
const currentOperand = document.querySelector(".current-operand")

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = currentOperand.textContent
        if (!action) {
            if (displayedNum === "0") {
                currentOperand.textContent = keyContent
            } else {
                currentOperand.textContent = displayedNum + keyContent
            }
            console.log("number key")
        } if (
            action == "add" ||
            action == "subtract" ||
            action == "multiply" ||
            action == "divide"
        ) {
            console.log("operator key")
        } if (action === "decimal") {
            if (displayedNum.includes(".")) {
                // Code here to skip the second decimal point //
            }
            else {
                currentOperand.textContent = displayedNum + keyContent
            }
        } if (action === "all_clear") {
            console.log("all clear")
        } if (action === "clear_entry") {
            console.log("clear entry")
        } if (action === "calculate") {
            console.log("calculate")
        }
    }
})


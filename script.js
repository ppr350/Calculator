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
            if (previousOperand.textContent/*more code here*/) {
                // Code here to replace the last operator to the newly pressed operator
                 
            } if (previousOperand.textContent === "0") {
                previousOperand.textContent = currentOperand.textContent + " " + keyContent;
            } else {
                previousOperand.textContent += " " + currentOperand.textContent + " " + keyContent + " "
            }
            currentOperand.textContent = "0";
        } if (action === "decimal") {
            if (displayedNum.includes(".")) {
            /* No code here except for a "return" statement so it won't input anything at all...
            and it also won't run outside of the if-else */
            return;
            } else {
                currentOperand.textContent = displayedNum + keyContent
                console.log("decimal point")
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

let num1 = "";
let num2 = "";
let operator = "";

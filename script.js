// link the calculator class :
const calculator = document.querySelector(".calculator")

// link the button_section class :
const keys = calculator.querySelector(".button_section")

// link the previous_operand class
const previousOperand = document.querySelector(".previous-operand")

// link the current_operand class
const currentOperand = document.querySelector(".current-operand")

// when a button is pressed :
keys.addEventListener("click", e => {

    // indentify which button is pressed :
    if (e.target.matches("button")) {

        // make a variable called "key" to access the pressed button :
        const key = e.target

        // make a variable called "action" and chain it with the "key" variable to get the data-attribute inside it :
        const action = key.dataset.action

        // make a variable called "keyContent" and chain it with the "key" variable to get the textContent inside it :
        const keyContent = key.textContent

        // make a variable called "displayNum" and chain it with the global scope "currendOperand" to access the value in it :
        const displayedNum = currentOperand.textContent

        // if the button pressed is number button :
        if (!action) {

            // update the current_operand display to the number pressed if the display shows "0" (default) :
            if (displayedNum === "0") {

                currentOperand.textContent = keyContent

            // append the newly pressed number at the end of the current_operand :
            } else {
                currentOperand.textContent = displayedNum + keyContent
            }
            console.log("number key")

        // if the button pressed is operator button :
        } if (
            action == "add" ||
            action == "subtract" ||
            action == "multiply" ||
            action == "divide"
        ) { 

            // if the last value in previousOperand is an operator, update it to the newly pressed operator :
            if (previousOperand.textContent/*more code here*/) {
                // Code here to replace the last operator to the newly pressed operator
                 
            // if previousOperand shows "0"; replace it with the currentOperand value + the newly pressed operator :
            } if (previousOperand.textContent === "0") {
                previousOperand.textContent = currentOperand.textContent + " " + keyContent;

            // if previousOperand is not at its default mode, append the value in currentOperand to it :
            } else {
                previousOperand.textContent += " " + currentOperand.textContent + " " + keyContent + " "
            }

            // change currentOperand to default mode "0" :
            currentOperand.textContent = "0";

        // if the button pressed is decimal button :
        } if (action === "decimal") {

            // if displayNum contains a decimal point :
            if (displayedNum.includes(".")) {

            // ignore the second decimal point and return it :
            return;

            // otherwise, append it to displayNum :
            } else {
                currentOperand.textContent = displayedNum + keyContent
                console.log("decimal point")
            }

        // if the button pressed is "AC" :
        } if (action === "all_clear") {

            // it clear everything on both screen and return the calculator to default mode :
            console.log("all clear")

        // if the button pressed is "CE" :
        } if (action === "clear_entry") {

            // it delete the last entry on currentOperand :
            console.log("clear entry")

        // if the button pressed is "="(calculate) :
        } if (action === "calculate") {

            // it calculates the given value by taking 2 values (which should be in seperate variable) and an operator :
            console.log("calculate")

            // if the input has more than one operations, the calculator should evaluate each set of number at a time ** :
            // i.e : 12 + 7 - 5 * 3 = 42
        }
    }
})

// place to store the values and operator for calculation :
let num1 = "";
let num2 = "";
let operator = "";

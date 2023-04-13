// link the calculator class :
const calculator = document.querySelector(".calculator")

// link the button_section class :
const keys = calculator.querySelector(".button_section")

// link the previous_operand class
const previousOperand = document.querySelector(".previous-operand")

// link the current_operand class
const currentOperand = document.querySelector(".current-operand")

// place to store the values and operator for calculation :
let num1 = "";
let num2 = "";
let operator = "";

// track the proviously pressed input
let newInput = "";
let oldInput = "none";

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

        // make a variable called "upperDisplayNum" and chain it with the global scope "previousOperand" to access the value in it :
        const upperDisplayNum = previousOperand.textContent

        // if the button pressed is number button :
        if (!action) {

            // update the current_operand display to the number pressed if the display shows "0" (default) :
            if (displayedNum === "0") {

                currentOperand.textContent = keyContent

                // log the input to previousInput :
                newInput = keyContent
                console.log(`SCENARIO 01: currentOperand (displayNum) was "0" before "${keyContent}" was entered.`)

                console.log(`old input is ${oldInput}`)
                console.log(`new input is ${newInput}`)

            // append the newly pressed number at the end of the current_operand :
            } else {
                console.log(`SCENARIO 02: currentOperand has value "${displayedNum}" and now will have "${keyContent}" append to it.`)
                currentOperand.textContent = displayedNum + keyContent

                // log the input to previousInput :
                oldInput = newInput;
                // log the new input to newInput :
                newInput = keyContent;
                console.log(`old input is ${oldInput}`);
                console.log(`new input is ${newInput}`);
            }

        // if the button pressed is operator button :
        } if (
            action == "add" ||
            action == "subtract" ||
            action == "multiply" ||
            action == "divide"
        ) { 
            /*oldInput = newInput;
            newInput = action;
            // log the previous input to oldInput :
            console.log(`old input is ${oldInput}`);
            console.log(`new input is ${newInput}`);*/

            // if the value in currentOperand is "0", do nothing :
            /*if (action === newInput) {
                console.log("detected 2 actions successfully")
                newInput === action;
                const lastChar = previousOperand.textContent.slice(-2)
                console.log(lastChar)

                // Code here to replace the last operator to the newly pressed operator :

                // log the input to newInput :
                // newInput = keyContent
                    
                // if previousOperand shows "0"; replace it with the currentOperand value + the newly pressed operator :
            }*/ if (displayedNum !== "0" && previousOperand.textContent === "0") {
                previousOperand.textContent = currentOperand.textContent + " " + keyContent;
                console.log(`SCENARIO 03: previousOperand was "0" and now replaced by "${displayedNum} ${key.textContent}".`)

                // log the input to previousInput :
                oldInput = newInput;
                // log the new input to newInput :
                newInput = keyContent;
                console.log(`old input is ${oldInput}`);
                console.log(`new input is ${newInput}`);

            } if (displayedNum == "0" && previousOperand.textContent == "0") {

                // Subtraction is the only action that can be the first thing t show in displayNum (currentOperand) :
                console.log("SCENARIO 04: user tries to calculate negative numbers, it should be allowed.")
                currentOperand.textContent == "-"
                oldInput = newInput;
                newInput = action;

            } if (displayedNum == "0" && previousOperand.textContent == "0" && action != "subtract") {
                console.log("SCENARIO 05: This action should skip because user has entered an invalid option.")
                // Do nothing and pass it :
                return;              

            // if the last value in previousOperand is an operator, update it to the newly pressed operator :
            

            // if previousOperand is not at its default mode, append the value in currentOperand to it :
            } if (action == "subtract") {
                // code here :

            } else {
                console.log("SCENARIO 06: values in currentOperand is transferred to previousOperand, so currentOperand is default to 0 now.")

                currentOperand.textContent = "0";


            }

            // change currentOperand to default mode "0" :
            //currentOperand.textContent = "0";

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

                // log the old input to previousInput :
                oldInput = newInput;
                // log the new input to newInput :
                newInput = keyContent;
                console.log(`old input is ${oldInput}`);
                console.log(`new input is ${newInput}`);
            }

        // if the button pressed is "AC" :
        } if (action === "all_clear") {
            // clear everything on screen (default mode):
            currentOperand.textContent = "0";
            previousOperand.textContent = "0";

            // clear everything on log history :
            oldInput = "";
            newInput = "";
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

// function to trasfer previousInput = ""
function previousInput() {

}
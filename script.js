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

            const regexNewInputIsOperator = /[x÷\+-]/;
            const regexOperatorLast = /[x÷\+-]$/;
            const regexHasOperator = /[x÷\+-]/;

            // update the current_operand display to the number pressed if the display shows "0" (default) :
            if (displayedNum === "0") {
                if (previousOperand.textContent === "0") {

                    currentOperand.textContent = keyContent;

                    // log the input to previousInput :
                    oldInput = newInput;
                    newInput = keyContent;
                    console.log(`SCENARIO 01: currentOperand (displayNum) was "0" before "${keyContent}" was entered.`)

                    console.log(`old input is ${oldInput}`)
                    console.log(`new input is ${newInput}`)
                    
                } if (previousOperand.textContent.match(regexOperatorLast)) {
                    currentOperand.textContent = keyContent;

                    oldInput = newInput;
                    newInput = keyContent;
                    console.log(`old input is ${oldInput}`)
                    console.log(`new input is ${newInput}`)
                }


            }

            // append the newly pressed number at the end of the current_operand :
            if (displayedNum != "0") {
                if (newInput.match(regexNewInputIsOperator)) {
                    const regexHasOperatorAndNum = /^[0-9]+[x÷\+-][0-9]+$/;
                    previousOperand.textContent = displayedNum + " " + newInput;
                    currentOperand.textContent = keyContent;

                    // log the input to previousInput :
                    oldInput = newInput;
                    // log the new input to newInput :
                    newInput = keyContent;
                    console.log(`old input is ${oldInput}`)
                    console.log(`new input is ${newInput}`)

                    console.log("previousOperand has numbers and an operator.")

                } if (previousOperand.textContent == "0") {
                    console.log(`SCENARIO 02: currentOperand has value "${displayedNum}" and now will have "${keyContent}" append to it.`)
                    currentOperand.textContent = displayedNum + keyContent

                    // log the input to previousInput :
                    oldInput = newInput;
                    // log the new input to newInput :
                    newInput = keyContent;
                    console.log(`old input is ${oldInput}`);
                    console.log(`new input is ${newInput}`);

                } if (displayedNum != "0" && previousOperand.textContent.match(regexOperatorLast)) {
                    currentOperand.textContent = displayedNum + keyContent;

                    // log the input to previousInput :
                    oldInput = newInput;
                    // log the new input to newInput :
                    newInput = keyContent;
                    console.log(`old input is ${oldInput}`);
                    console.log(`new input is ${newInput}`);
                    console.log("SCENARIO 11: currendOperand has a value and user is adding more onto it.")
                }
            }

        // if the button pressed is operator button :
        } if (
            action == "add" ||
            action == "subtract" ||
            action == "multiply" ||
            action == "divide"
        ) { 
            if (displayedNum == "-") {
                console.log("SCENARIO 05: This action should skip because user has entered an invalid option.")
                return;
                
            } if (displayedNum == "0" && previousOperand.textContent == "0") {
                
                if (action == "subtract") {
                    // Subtraction is the only action that can be the first thing t show in displayNum (currentOperand) :
                    console.log("SCENARIO 04: user tries to calculate negative numbers, it should be allowed.")
                    currentOperand.textContent = keyContent;

                    //oldInput = newInput;
                    newInput = keyContent;
                    console.log(`old input is ${oldInput}`);
                    console.log(`new input is ${newInput}`);

                    // added a return here to prevent the code to continue :
                    return;

                    } else {
                        // if the value in currentOperand is "0", do nothing :
                        // Do nothing and pass it :
                        console.log("SCENARIO 05: This action should skip because user has entered an invalid option.")
                        return;     
                    }
            } if (previousOperand.textContent != "0") {
                console.log("previousOperand is not 0.")

                // Regex :
                const regexNewInputIsOperator = /[x÷\+-]/;
                const regexOperatorLast = /[x÷\+-]$/;

                if (displayedNum == "0" && previousOperand.textContent.match(regexOperatorLast) && newInput.match(regexNewInputIsOperator)) {
                    console.log("SCENARIO 07: Detected 2 actions successfully, replaced the operator to the updated one.")

                    // use Regex to replce the last character (the operator symbol) to the newest one :
                    const updatePreviousOperand = previousOperand.textContent.replace(/.$/,`${keyContent}`)

                    operator = keyContent;
                    console.log(`operator is ${operator}`);

                    // copy the content in the new string to previousOperand :
                    previousOperand.textContent = updatePreviousOperand;
                    
                    newInput = keyContent;
                    console.log(`old input is ${oldInput}`)
                    console.log(`new input is ${newInput}`)

                } if (displayedNum != "0") {
                    console.log("currentOperand is not 0.")
                    const regexHasOperatorAndNum = /^[0-9]+/;

                    if (previousOperand.textContent.match(regexHasOperatorAndNum)) {
                        console.log("Reaching second round calculation stage.")

                        if (newInput.match(/[0-9]/) /*|| oldInput == regexOperatorLast*/ ) {
                            console.log("SCENARIO 10: Second round of calculation.")
                            previousOperand.textContent = displayedNum + " " + operator;
                            
                            const regexNum1 = /^[0-9]+/;
                            const regexNum2 = /[0-9]+/;
                            //num1 == previousOperand.textContent.match(regexNum1);
                            num2 = parseFloat(displayedNum);
                            currentOperand.textContent = "0"

                            //operator = operator;
                            console.log(`Operator is ${operator}.`)

                            console.log(`num1 is ${num1}.`);
                            console.log(`num2 is ${num2}.`);


                            previousOperand.textContent = num1 + " " + operator + " " + num2;
                            calculate(num1, num2, operator)




                        } else {
                            console.log("detected number")
                            console.log("SCENARIO 08: The calculator should calculate the input now.")

                            //num2 = parseFloat(displayedNum)
                            console.log(`num2 is ${num2}`)

                            // it should calculate the first set of input :

                            //previousOperand.textContent = previousOperand.textContent + " " + displayedNum;
                            // log the input to previousInput :
                            oldInput = newInput;
                            // log the new input to newInput :
                            newInput = keyContent;

                            // call the calculte function :
                            calculate(num1, num2, operator)

                            console.log(`old input is ${oldInput}`);
                            console.log(`new input is ${newInput}`);

                            num1 = displayedNum;

                        }
                    }
                }
                    
            // if previousOperand shows "0"; replace it with the currentOperand value + the newly pressed operator :
            } else {

                num1 = parseFloat(displayedNum);
                console.log(`num1 is ${num1}`);

                operator = keyContent;
                console.log(`operator is ${operator}`);

                console.log("SCENARIO 06: values in currentOperand is transferred to previousOperand, so currentOperand is default to 0 now.");

                previousOperand.textContent = currentOperand.textContent + " " + keyContent;
                console.log(`SCENARIO 03: previousOperand was "0" and now replaced by "${displayedNum} ${key.textContent}".`);
                // log the input to previousInput :
                oldInput = newInput;
                // log the new input to newInput :
                newInput = keyContent;
                console.log(`old input is ${oldInput}`);
                console.log(`new input is ${newInput}`);

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

            if (currentOperand.textContent.length == 1) {
                console.log("SCENARIO 09: return currentOperand to 0.")
                currentOperand.textContent = "0";
            } else if (currentOperand.textContent.length > 1 ) {

                // it delete the last entry on currentOperand :
                console.log("SCENARIO 10: clear last entry.")
                let deleteLastChar = currentOperand.textContent.slice(0, -1);
                currentOperand.textContent = deleteLastChar;
            }

        // if the button pressed is "="(calculate) :
        } if (action === "calculate") {
            const regexHasOperator = /[x÷\+-]$/;
            if (previousOperand.textContent.match(regexHasOperator) && (currentOperand.textContent != 0)) {
                console.log("detected number")
                // it calculates the given value by taking 2 values (which should be in seperate variable) and an operator :
                console.log("SCENARIO 07: the calculator should carry our calculation if values are provided sufficiently.")
                num2 = parseFloat(displayedNum)

                // move the previous input number(s) to previousOperand to make place for the answer :
                previousOperand.textContent = num1 + " " + operator + " " + num2;

                console.log(`num2 is ${num2}`)
                // call the calculte function :
                calculate(parseFloat(num1), parseFloat(num2), operator)

                oldInput = newInput;
                // log the new input to newInput :
                newInput = keyContent;
                console.log(`old input is ${oldInput}`);
                console.log(`new input is ${newInput}`);
                // if the input has more than one operations, the calculator should evaluate each set of number at a time ** :
                // i.e : 12 + 7 - 5 * 3 = 42
            } else if (newInput = "=") {
                console.log("Do nothing")
                return;
            }
        }
    }
})

// function to trasfer previousInput = ""
function previousInput() {

}


function calculate() {
    let result = ""
    if (operator === "÷") {
        result = num1 / num2
    } else if (operator === "x") {
        result = num1 * num2
    } else if (operator === "-") {
        result = num1 - num2
    } else if (operator === "+") {
        result = num1 + num2
    }
    console.log(`The answer is ${result}.`)
    currentOperand.textContent = result;
    num1 = result;
    num2 = undefined;
    console.log(`num1 is ${num1}`);
    console.log(`num2 is ${num2}`);
}








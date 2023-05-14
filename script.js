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


        // if the button pressed is number button :
        if (!action) {

            const regexNewInputIsOperator = /[x÷\+-]/;
            const regexOperatorLast = /[x÷\+-]$/;
            const regexHasOperator = /[x÷\+-]/;

            // update the current_operand display to the number pressed if the display shows "0" (default) :
            if (displayedNum.length >= 12) {
                return;
            } else if (displayedNum === "0") {
                if (previousOperand.textContent === "0") {

                    currentOperand.textContent = keyContent;

                    // log the input to previousInput :
                    oldInput = newInput;
                    newInput = keyContent;
                    console.log(`SCENARIO 01: currentOperand (displayNum) was "0" before "${keyContent}" was entered.`)

                    console.log(`old input is ${oldInput}`)
                    console.log(`new input is ${newInput}`)
                    return;
                    
                } else if (previousOperand.textContent.match(regexOperatorLast)) {
                    currentOperand.textContent = keyContent;

                    oldInput = newInput;
                    newInput = keyContent;
                    console.log(`old input is ${oldInput}`)
                    console.log(`new input is ${newInput}`)
                    return;

                } else if (result == "0" && previousOperand.textContent.match(regexHasOperator)) {
                    console.log("it should carry on")
                    if (newInput.match(regexHasOperator)) {
                        previousOperand.textContent = currentOperand.textContent + " " + newInput;
                        currentOperand.textContent = keyContent;
                        return;

                    } else if (newInput == "=") {
                        previousOperand.textContent = "0";
                        currentOperand.textContent = keyContent;
                        oldInput = newInput;
                        newInput = keyContent;
                        console.log(`old input is ${oldInput}`)
                        console.log(`new input is ${newInput}`)
                        return;
                    }
                }


            }

            // append the newly pressed number at the end of the current_operand :
            if (displayedNum != "0") {
                if (newInput.match(regexNewInputIsOperator) || newInput == "=") {

                    const regexHasNumAtTheBack = /[0-9]$/;
                    const regexHasOperator = /[x÷\+-]/
                    const regexHasOperatorAtTheEnd = /[x÷\+-]$/

                    if (previousOperand.textContent.match(regexHasNumAtTheBack)
                        && previousOperand.textContent.match(regexHasOperator)) {
                        console.log("It should take a number")
                        
                        if (newInput.match(regexHasOperator)) {
                            // newInput is still an operator at the moment
                            previousOperand.textContent = displayedNum + " " + newInput;
                            currentOperand.textContent = keyContent;

                            // log the input to previousInput :
                            oldInput = newInput;
                            // log the new input to newInput :
                            newInput = keyContent;
                            console.log(`old input is ${oldInput}`)
                            console.log(`new input is ${newInput}`)
                            num2 = keyContent;
                            console.log(`num2 is ${num2}.`);



                            operator = oldInput;
                            console.log(`Operator is ${operator}.`)


                            console.log("previousOperand has numbers and an operator.")
                            return;
                        } else if (newInput == "=") {
                            previousOperand.textContent = "0";
                            currentOperand.textContent = keyContent;
                            oldInput = newInput;
                            newInput = keyContent;
                            console.log(`old input is ${oldInput}`)
                            console.log(`new input is ${newInput}`)
                            return;
                        }
                    }

                } else if (previousOperand.textContent == "0") {
                    console.log(`SCENARIO 02: currentOperand has value "${displayedNum}" and now will have "${keyContent}" append to it.`)
                    currentOperand.textContent = displayedNum + keyContent

                    // log the input to previousInput :
                    oldInput = newInput;
                    // log the new input to newInput :
                    newInput = keyContent;
                    console.log(`old input is ${oldInput}`);
                    console.log(`new input is ${newInput}`);

                } else if (displayedNum != "0" && previousOperand.textContent.match(regexOperatorLast)
                    && newInput != regexHasOperator) {
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
                
            } else if (displayedNum == "0" && previousOperand.textContent == "0") {
                
                if (action == "subtract") {
                    // Subtraction is the only action that can be the first thing t show in displayNum (currentOperand) :
                    console.log("SCENARIO 04: user tries to operate negative numbers, it should be allowed.")
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
            } else if (previousOperand.textContent != "0") {
                console.log("previousOperand is not 0.")

                // Regex :
                const regexNewInputIsOperator = /[x÷\+-]/;
                const regexOperatorLast = /[x÷\+-]$/;
                if (previousOperand.textContent.match(regexNewInputIsOperator) && newInput == "=" && currentOperand.textContent == result) {
                    newInput = keyContent;
                    previousOperand.textContent = currentOperand.textContent + " " + keyContent;
                    currentOperand.textContent = "0";
                    operator = keyContent;
                    return;
                
                } else if (previousOperand.textContent.match(regexNewInputIsOperator)
                && previousOperand.textContent.match(/[0-9]$/)
                && currentOperand.textContent == result
                && newInput == operator) {
                    operator = keyContent;
                    newInput = keyContent;
                    console.log(`Operator is ${operator}.`)
                    console.log(`New input is ${newInput}.`)

                    

                } else if (currentOperand.textContent == "0" && previousOperand.textContent.match(regexOperatorLast)) {

                    if (newInput.match(regexNewInputIsOperator) || newInput == "=") {
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
                        return;

                    } else if (newInput == currentOperand.textContent) {

                        num2 = parseFloat(displayedNum);
                        currentOperand.textContent = "0";

                        //operator = operator;
                        console.log(`Operator is ${operator}.`)

                        console.log(`num1 is ${num1}.`);
                        console.log(`num2 is ${num2}.`);


                        previousOperand.textContent = num1 + " " + operator + " " + num2;
                        operate(num1, num2, operator)

                        operator = keyContent;
                        console.log(`Operator is ${operator}.`)

                        oldInput = newInput;
                        newInput = keyContent;
                        console.log(`oldInput is ${oldInput}.`)
                        console.log(`newInput is ${newInput}.`)
                        return;
                    }

                } else if (currentOperand.textContent != "0") {
                    console.log("currentOperand is not 0.")
                    const regexHasOperator = /[x÷\+-]/;

                    if (previousOperand.textContent.match(regexHasOperator)) {
                        console.log("Reaching second round calculation stage.")

                        if (newInput.match(/[0-9]/) /*|| oldInput == regexOperatorLast*/ ) {
                            console.log("SCENARIO 10: Second round of calculation.")
                            previousOperand.textContent = displayedNum + " " + operator;
                            
                            const regexNum1 = /^[0-9]+/;
                            const regexNum2 = /[0-9]+/;
                            //num1 == previousOperand.textContent.match(regexNum1);
                            num2 = parseFloat(displayedNum);
                            currentOperand.textContent = "0";

                            //operator = operator;
                            console.log(`Operator is ${operator}.`)

                            console.log(`num1 is ${num1}.`);
                            console.log(`num2 is ${num2}.`);


                            previousOperand.textContent = num1 + " " + operator + " " + num2;
                            operate(num1, num2, operator)

                            operator = keyContent;
                            console.log(`Operator is ${operator}.`)

                            oldInput = newInput;
                            newInput = keyContent;
                            console.log(`oldInput is ${oldInput}.`)
                            console.log(`newInput is ${newInput}.`)
                            return;


                        } else if (newInput === "=") {
                            previousOperand.textContent = displayedNum + " " + keyContent;
                            //num2 = parseFloat(displayedNum);
                            currentOperand.textContent = "0";
                            operator = keyContent;
                            console.log(`Operator is ${operator}.`)
                            console.log(`num1 is ${num1}.`);
                            console.log(`num2 is ${num2}.`);
                            return;

                        } else {
                            console.log("detected number")
                            console.log("SCENARIO 08: The calculator should operate the input now.")

                            //num2 = parseFloat(displayedNum)
                            console.log(`num2 is ${num2}`)

                            // it should operate the first set of input :

                            //previousOperand.textContent = previousOperand.textContent + " " + displayedNum;
                            // log the input to previousInput :
                            oldInput = newInput;
                            // log the new input to newInput :
                            newInput = keyContent;

                            // call the calculte function :
                            operate(num1, num2, operator)

                            console.log(`old input is ${oldInput}`);
                            console.log(`new input is ${newInput}`);

                            num1 = displayedNum;
                            return;
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
            num1 = "";
            num2 = "";
            console.log("all clear")

        // if the button pressed is "CE" :
        } if (action === "clear_entry") {

            if (currentOperand.textContent.length > 1 ) {

                // it delete the last entry on currentOperand :
                console.log("SCENARIO 10: clear last entry.")
                let deleteLastChar = currentOperand.textContent.slice(0, -1);
                currentOperand.textContent = deleteLastChar;
                newInput = currentOperand.textContent.substring(currentOperand.textContent.length -1);

                let getOldInput = currentOperand.textContent.substring(currentOperand.textContent.length -2);
                oldInput = getOldInput.slice(0, -1);
                console.log(getOldInput)

                console.log(`New input is ${newInput}.`);
                console.log(`Old input is ${oldInput}.`);
                return;

            } else if (currentOperand.textContent.length == 1) {
                if (currentOperand.textContent != "0") {
                console.log("SCENARIO 09: return currentOperand to 0.")
                currentOperand.textContent = "0";

                newInput = "";
                oldInput = "";
                num1 = "";
                num2 = "";
                //return;

                } else if (currentOperand.textContent == "0") {
                    previousOperand.textContent = "0";
                    oldInput = "";
                    newInput = "";
                    num1 = "";
                    num2 = "";
                    console.log("all clear")
                }
            }

        // if the button pressed is "="(operate) :
        } if (action === "calculate") {
            const regexHasOperator = /[x÷\+-]$/;
            console.log("User press =.")
            
            if (previousOperand.textContent.match(regexHasOperator) && (currentOperand.textContent != 0)) {
                console.log("detected number")
                // it operates the given value by taking 2 values (which should be in seperate variable) and an operator :
                console.log("SCENARIO 07: the calculator should carry our calculation if values are provided sufficiently.")
                num2 = parseFloat(displayedNum)

                // move the previous input number(s) to previousOperand to make place for the answer :
                previousOperand.textContent = num1 + " " + operator + " " + num2;

                console.log(`num2 is ${num2}`)
                // call the calculte function :
                operate(parseFloat(num1), parseFloat(num2), operator)

                oldInput = newInput;
                // log the new input to newInput :
                newInput = keyContent;
                console.log(`old input is ${oldInput}`);
                console.log(`new input is ${newInput}`);
                // if the input has more than one operations, the calculator should evaluate each set of number at a time ** :
                // i.e : 12 + 7 - 5 * 3 = 42
                return;

            } else if (newInput == currentOperand.textContent) {

                num2 = parseFloat(displayedNum);
                currentOperand.textContent = "0";

                //operator = operator;
                console.log(`Operator is ${operator}.`)

                console.log(`num1 is ${num1}.`);
                console.log(`num2 is ${num2}.`);


                previousOperand.textContent = num1 + " " + operator + " " + num2;
                operate(num1, num2, operator)

                operator = keyContent;
                console.log(`Operator is ${operator}.`)

                oldInput = newInput;
                newInput = keyContent;
                console.log(`oldInput is ${oldInput}.`)
                console.log(`newInput is ${newInput}.`)
                return;

            } else if (newInput = "=") {
                console.log("Do nothing")
                return;

            } else if (num1 === result) {
                console.log("should operate this")
            }
        }
    }
})

// function to trasfer previousInput = ""
function previousInput() {

}

let result = ""

function operate() {
    //let result = ""
    if (operator === "÷") {
        result = num1 / num2
    } else if (operator === "x") {
        result = num1 * num2
    } else if (operator === "-") {
        result = num1 - num2
    } else if (operator === "+") {
        result = num1 + num2
    }
    if (result.length >= 12) {
        for (let i = 12; i < result.length; i--) {
            console.log("it's working")
        }
    }
    console.log(`The answer is ${result}.`)
    currentOperand.textContent = result;
    num1 = result;
    num2 = undefined;
    console.log(`num1 is ${num1}`);
    console.log(`num2 is ${num2}`);
}

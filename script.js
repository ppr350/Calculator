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

        // regex :
        const regexOperatorLast = /[x÷\+-]$/;
        const regexHasOperator = /[x÷\+-]/;
        const regexNumberLast = /[0-9]$/;

            // stop getting input when displayNum has exceed max input limit :
            if (displayedNum.length >= 12) {
                return;

            // update the current_operand display to the number pressed if the display shows "0" (default) :         
            } else if (displayedNum === "0") {

                if (previousOperand.textContent === "0") {

                    currentOperand.textContent = keyContent;

                    oldInput = newInput;
                    newInput = keyContent;

                    return;
                    
                } else if (previousOperand.textContent.match(regexOperatorLast)) {

                    currentOperand.textContent = keyContent;

                    oldInput = newInput;
                    newInput = keyContent;

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

                        return;
                    }
                }

            }

            // append the newly pressed number at the end of the current_operand :
            if (displayedNum != "0") {

                if (newInput.match(regexHasOperator) || newInput == "=") {

                    if (previousOperand.textContent.match(regexNumberLast)
                        && previousOperand.textContent.match(regexHasOperator)) {
                        
                        if (newInput.match(regexHasOperator)) {

                            // newInput is still an operator at the moment
                            previousOperand.textContent = displayedNum + " " + newInput;
                            currentOperand.textContent = keyContent;

                            oldInput = newInput;
                            newInput = keyContent;

                            num2 = keyContent;

                            operator = oldInput;

                            return;

                        } else if (newInput == "=") {

                            previousOperand.textContent = "0";
                            currentOperand.textContent = keyContent;

                            oldInput = newInput;
                            newInput = keyContent;

                            return;
                        }
                    }

                } else if (previousOperand.textContent == "0") {

                    currentOperand.textContent = displayedNum + keyContent

                    oldInput = newInput;
                    newInput = keyContent;

                } else if (displayedNum != "0"
                && previousOperand.textContent.match(regexOperatorLast)
                && newInput != regexHasOperator) {

                    currentOperand.textContent = displayedNum + keyContent;

                    oldInput = newInput;
                    newInput = keyContent;

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

                // skip invalid action :
                return;
                
            } else if (displayedNum == "0" && previousOperand.textContent == "0") {
                
                if (action == "subtract") {

                    // Subtraction is the only action that can be the first thing t show in displayNum (currentOperand) :
                    currentOperand.textContent = keyContent;

                    newInput = keyContent;

                    return;

                } else {

                    // if the value in currentOperand is "0", do nothing :
                    return;     
                }
            } else if (previousOperand.textContent != "0") {

                // Regex :
                const regexHasOperator = /[x÷\+-]/;
                const regexOperatorLast = /[x÷\+-]$/;

                if (previousOperand.textContent.match(regexHasOperator) && newInput == "=" && currentOperand.textContent == result) {
                    newInput = keyContent;

                    previousOperand.textContent = currentOperand.textContent + " " + keyContent;
                    currentOperand.textContent = "0";
                    operator = keyContent;

                    return;
                
                } else if (previousOperand.textContent.match(regexHasOperator)

                && previousOperand.textContent.match(/[0-9]$/)
                && currentOperand.textContent == result
                && newInput == operator) {

                    operator = keyContent;
                    newInput = keyContent;

                } else if (currentOperand.textContent == "0" && previousOperand.textContent.match(regexOperatorLast)) {

                    if (newInput.match(regexHasOperator) || newInput == "=") {

                        // use Regex to replce the last character (the operator symbol) to the newest one :
                        const updatePreviousOperand = previousOperand.textContent.replace(/.$/,`${keyContent}`)

                        operator = keyContent;

                        // copy the content in the new string to previousOperand :
                        previousOperand.textContent = updatePreviousOperand;
                        
                        newInput = keyContent;

                        return;

                    } else if (newInput == currentOperand.textContent) {

                        num2 = parseFloat(displayedNum);
                        currentOperand.textContent = "0";

                        previousOperand.textContent = num1 + " " + operator + " " + num2;
                        operate(num1, num2, operator)

                        operator = keyContent;

                        oldInput = newInput;
                        newInput = keyContent;

                        return;
                    }

                } else if (currentOperand.textContent != "0") {

                    if (previousOperand.textContent.match(regexHasOperator)) {

                        if (newInput.match(/[0-9]/)) {

                            console.log("SCENARIO 10: Second round of calculation.")
                            previousOperand.textContent = displayedNum + " " + operator;
                            
                            const regexNum1 = /^[0-9]+/;
                            const regexNum2 = /[0-9]+/;

                            //num1 == previousOperand.textContent.match(regexNum1);
                            num2 = parseFloat(displayedNum);
                            currentOperand.textContent = "0";
            
                            previousOperand.textContent = num1 + " " + operator + " " + num2;
                            operate(num1, num2, operator)

                            operator = keyContent;

                            oldInput = newInput;
                            newInput = keyContent;

                            return;


                        } else if (newInput === "=") {

                            previousOperand.textContent = displayedNum + " " + keyContent;

                            currentOperand.textContent = "0";
                            operator = keyContent;

                            return;

                        } else {

                            oldInput = newInput;
                            newInput = keyContent;

                            // call the calculate function :
                            operate(num1, num2, operator)

                            num1 = displayedNum;

                            return;
                        }
                    }
                }
                    
            // if previousOperand shows "0"; replace it with the currentOperand value + the newly pressed operator :
            } else {

                num1 = parseFloat(displayedNum);

                operator = keyContent;

                previousOperand.textContent = currentOperand.textContent + " " + keyContent;

                oldInput = newInput;
                newInput = keyContent;

                currentOperand.textContent = "0";
            }


        // if the button pressed is decimal button :
        } if (action === "decimal") {

            // if displayNum contains a decimal point :
            if (displayedNum.includes(".")) {
                if (displayedNum != result) {

                    // ignore the second decimal point and return it :
                    return;

                } else if (displayedNum == result) {

                    oldInput = "";
                    newInput = keyContent;
                    num1 = "";
                    num2 = "";

                    previousOperand.textContent = "0";
                    currentOperand.textContent = "0" + keyContent;

                }

            // otherwise, append it to displayNum :
            } else if (currentOperand.textContent = result 
            && previousOperand.textContent.match(/^[0-9]+/)
            && previousOperand.textContent.match(/[x÷\+-]/)
            && previousOperand.textContent.match(/[0-9]+$/)) {
                if (newInput = "=") {

                    // clear everything on screen (default mode):
                    currentOperand.textContent = "0";
                    previousOperand.textContent = "0";

                    // clear everything on log history :
                    oldInput = "";
                    newInput = "";
                    num1 = "";
                    num2 = "";

                    currentOperand.textContent += keyContent;
                    console.log("successful")
                    return

                } else if (newInput == "+" || newInput == "-" || newInput == "x" || newInput == "÷") {

                    console.log("should not behave the way it does.")
                    return;
                }
                
            } else {

                currentOperand.textContent = displayedNum + keyContent

                oldInput = newInput;
                newInput = keyContent;

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
            operator = ""

        // if the button pressed is "CE" :
        } if (action === "clear_entry") {

            if (currentOperand.textContent.length > 1 ) {

                // it delete the last entry on currentOperand :
                let deleteLastChar = currentOperand.textContent.slice(0, -1);
                currentOperand.textContent = deleteLastChar;
                newInput = currentOperand.textContent.substring(currentOperand.textContent.length -1);

                let getOldInput = currentOperand.textContent.substring(currentOperand.textContent.length -2);
                oldInput = getOldInput.slice(0, -1);

                return;

            } else if (currentOperand.textContent.length == 1) {

                if (currentOperand.textContent != "0") {

                    currentOperand.textContent = "0";

                    newInput = "";
                    oldInput = "";
                    num1 = "";
                    num2 = "";

                } else if (currentOperand.textContent == "0") {

                    previousOperand.textContent = "0";
                    oldInput = "";
                    newInput = "";
                    num1 = "";
                    num2 = "";
                }
            }

        // if the button pressed is "="(operate) :
        } if (action === "calculate") {

            const regexHasOperatorLast = /[x÷\+-]$/;

            if (previousOperand.textContent.match(regexHasOperatorLast) && (currentOperand.textContent != 0)) {

                num2 = parseFloat(displayedNum)

                // move the previous input number(s) to previousOperand to make place for the answer :
                previousOperand.textContent = num1 + " " + operator + " " + num2;

                // call the calculte function :
                operate(parseFloat(num1), parseFloat(num2), operator)

                oldInput = newInput;
                newInput = keyContent;

                // if the input has more than one operations, the calculator should evaluate each set of number at a time ** :
                // i.e : 12 + 7 - 5 * 3 = 42

                return;

            } else if (num1 === result) {

                return;

            } else if (newInput == currentOperand.textContent) {

                num2 = parseFloat(displayedNum);
                currentOperand.textContent = "0";

                previousOperand.textContent = num1 + " " + operator + " " + num2;
                operate(num1, num2, operator)

                operator = keyContent;

                oldInput = newInput;
                newInput = keyContent;

                return;

            } else if (newInput == "=") {

                return;

            } /* else if (previousOperand.textContent = "0") {
                if (oldInput)
            }*/
        }
    }
})

// result log :
let result = ""

function operate() {

    if (operator === "÷") {
        if (num2 == "0") {
            currentOperand.textContent = "0";
            previousOperand.textContent = "0";

            // clear everything on log history :
            oldInput = "";
            newInput = "";
            num1 = "";
            num2 = "";
            alert("You've been Rick Rolled!")
            return;

        } else {
            result = num1 / num2
        }
    } else if (operator === "x") {
        result = num1 * num2
    } else if (operator === "-") {
        result = num1 - num2
    } else if (operator === "+") {
        result = num1 + num2
    }


    console.log(`The answer is ${result}.`)

    num1 = result;
    num2 = undefined;

    if (result.toString().length < 12) {

        currentOperand.textContent = result;
        return result;

    } else {
        let exponentialResult = result.toExponential(4);
        result = exponentialResult;

        currentOperand.textContent = result;

    }

}

window.addEventListener("keydown", function (e) {

    document.querySelector(`button[data-action="${e.key}"]`)

    console.log(e);
});

window.addEventListener("keydown", function (e) {
    if (e.key == '=') {
        console.log("=");
        document.getElementById("=").click();
    } else if (e.key == 'Backspace') {
        console.log("Backspace")
        document.getElementById("ce").click();
    } else if (e.key == 'x') {
        console.log("x")
        document.getElementById("x").click();
    } else if (e.key == '-') {
        console.log("-")
        document.getElementById("-").click();
    } else if (e.key == '+') {
        console.log("+")
        document.getElementById("+").click();
    } else if (e.key == '/') {
        console.log("÷")
        document.getElementById("÷").click();
    } else if (e.key == '.') {
        console.log(".")
        document.getElementById(".").click();
    } else if (e.key == '0') {
        console.log("0")
        document.getElementById("0").click();
    } else if (e.key == '1') {
        console.log("1")
        document.getElementById("1").click();
    } else if (e.key == '2') {
        console.log("2")
        document.getElementById("2").click();
    } else if (e.key == '3') {
        console.log("3")
        document.getElementById("3").click();
    } else if (e.key == '4') {
        console.log("4")
        document.getElementById("4").click();
    } else if (e.key == '5') {
        console.log("5")
        document.getElementById("5").click();
    } else if (e.key == '6') {
        console.log("6")
        document.getElementById("6").click();
    } else if (e.key == '7') {
        console.log("7")
        document.getElementById("7").click();
    } else if (e.key == '8') {
        console.log("8")
        document.getElementById("8").click();
    } else if (e.key == '9') {
        console.log("9")
        document.getElementById("9").click();
    }
}) 


# Calculator

## What calculator does under the hood

### When user press a button, it has to figure out what button was pressed:

#### if the button is a number :
- it registers the number
- It shows the number on the current screen
- If the current screen is on its default mode, it shows “0”. In this case, the number replaces the “0”
- It can also be after one of the operators was entered. In this case, the previous screen shows all the previously entered values
- If the current screen has other values on it, the calculator should append the number to the current screen

#### If the button is a decimal point:
- The calculator should check for a few possibilities
- One, if the screen is on default mode, it should append the decimal after the “0” like this “0 .”
- Two, if there is already one decimal point on the current screen, the calculator should ignore the entry 
- Three, if the previously entered button was an operator, the current screen should shows “0”, in this case, it should also append the decimal after it like this “0 .”

#### If the button is an operator :
- If the screen is on default mode, it should ignore it
- If the current screen has value, the calculator should take it, move both the operator and the value up to the previous screen. So that the current screen shows “0” and waits for the second set of value for calculation
- If the last item on previous screen is an operator, the new operator should replace the one on previous screen

#### If the button is AC :
- It should clear all user inputs and reset itself to its default mode

#### If the button is CE :
- It should delete the previous user entry on the currentOperand, and reset the value in the newInput to “none”

#### If the button is Equal :
- It take num1, num2 and operator variables to carry out the calculation 
- It should trigger the line of code to move the values in currentOperand to previousOperand to empty out the space in the former in order to display the answer 

### How to make the calculator remembers the values user enter for calculation later

#### For calculation :
- Create three empty variable on a global scope  called num1, num2 and operator
- Create an event listener, when an operator is entered under normal behaviour (such as when current screen has a value), it triggers the event listener to take the number value and store it to num1, and take the operator value to operator
- To take the num2, an event listener is needed to listen to either an equal button
- Alternatively, if the calculator detects a second operator is entered when there are sufficient values inside num1, num2 and operator, the second operator that has just entered should trigger the calculation. The answer therefore should displayed in previousOperand, and be stored in now newly reset num1, and the last operator that has triggered the calculation is now operator, the next set of number will be num2

#### For taking previous value :
- 2 variable are created in order to record the last 2 actions.
- newInput is the button that user has just entered, and the string inside newInput will be moved to oldInput is when the user enters a new button in order to store the latest input
- If the oldInput value is an operator (addition, deduction, multiplication or division), and newInput is also an operator. It should trigger a code to : 1. Update the operator in previousOperand to the newest one 2. Update the value inside the operator variable to the newest value
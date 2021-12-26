### Basic functions
- Users are able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42
- Answers with long decimals are rounded to 8 numbers so they don’t overflow the screen
- Pressing = before entering all of the numbers or pressing the same operator more than once leads to "Error, reset!" message
- Pressing “clear” wipes out any existing data, the user is starting fresh after pressing “clear”
- Display "Error, reset!" message if the user tries to divide by 0
- Buttons '+/-', '%' and '.' are not functioning yet, only present for the purpose of designing for now

### To be worked on
- After '=' is hit, the operation is over, user cannot click other operator buttons to continue calculating with the sum
- Operator can only be chosen once at a time, if user changes their mind, they need to hit AC and restart the calculation
- Buttons '+/-', '%' and '.'
- Add a “backspace” button, so the user can undo if they click the wrong number
- Add keyboard support

### Live demo
https://linh15.github.io/calculator/


// gets access to the id of the display
const displayVal = document.getElementById('display');





//this line takes the input and appends them to the display

const addToDisplay = (num) =>  displayVal.value += num;

//this function that clears the display
const clearDisplay = () =>  displayVal.value = '';


//this function that makes the calculation by passing the values into eval(), which evaluates the values
const  calcFunc = () =>  displayVal.value = eval(displayVal.value)

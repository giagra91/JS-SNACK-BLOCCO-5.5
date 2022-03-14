const mainArray = [1, 2, 3, 4 , 5, 6, 7];

let firstNumber = Math.floor(Math.random()* mainArray.length);
let secondNumber = Math.floor(Math.random() * firstNumber);
console.log(firstNumber, secondNumber);

function createNewArray (arrayOne, numOne, numTwo){
    return arrayOne.slice(numTwo,numOne);
}

console.table(createNewArray(mainArray, firstNumber,secondNumber));
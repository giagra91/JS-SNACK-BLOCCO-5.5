const mainArray = [1, 2, 3, 4 , 5, 6, 7];

let firstNumber = randomInt(0, mainArray.length -1);
let secondNumber = randomInt(0, firstNumber - 1);
console.log(firstNumber, secondNumber);

function createNewArray (arrayOne, numOne, numTwo){
    const newArray= [];
    for (let i = numTwo ; i <= numOne ; i++){
        newArray.push(arrayOne[i]);
    }
    return newArray;
}

console.table(createNewArray(mainArray, firstNumber,secondNumber));

function randomInt (min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
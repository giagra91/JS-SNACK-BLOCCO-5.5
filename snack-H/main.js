const firstArray = [1, 2, 3, 4]; 

const secondArray = ["a", "b", "c", "d"]; 

const thirdArray =[];

function joinTwoArrays(arrayOne, arrayTwo, newArray) {
    for (let i = 0; i < arrayOne.length; i++){
        newArray.push(arrayOne[i]);
        newArray.push(arrayTwo[i]);
    }
};

joinTwoArrays(firstArray, secondArray, thirdArray);
console.log(thirdArray)
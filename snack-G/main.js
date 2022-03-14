function reverseString(string){
    return string.split("").reverse().join("");
};
console.log(reverseString(`ciao`));

const list = [
    456, 845, 659, 7885, 456, 321, 144, 659, 654, 12, 741, `prova`, `casa`, `boolean`, `classe`, `computer`, `snack`, `esercizio`, `javascript`, `lunedì`,
];

function reverseNumber(number){
    return number = - number;
};
console.log(reverseNumber(562));

const newList = list.map((element) => (isNaN(parseInt(element))) ? reverseString(element) : reverseNumber(element));
console.log(newList)

//PART 1

const numbers = [10,20,30,40,50];

const [firstNumber,secondNumber]= numbers;

console.log(firstNumber,secondNumber);

console.log(numbers.length);

//PART 2

var myString = "Adil";
var myNumber = 20;
var myBoolean = true;

console.log(typeof(myString));
console.log(typeof(myNumber));
console.log(typeof(myBoolean));
 

//PART 3

console.log(firstNumber + secondNumber);
console.log(firstNumber-secondNumber);
console.log(firstNumber*secondNumber);
console.log(firstNumber/secondNumber);
console.log(firstNumber%secondNumber);
 
console.log(firstNumber==secondNumber);
console.log(firstNumber===secondNumber);
console.log(firstNumber!=secondNumber);
console.log(firstNumber!==secondNumber);
console.log(firstNumber<secondNumber);
console.log(firstNumber>secondNumber);
console.log(firstNumber<=secondNumber);
console.log(firstNumber>=secondNumber);

//PART 4

var isEvenAndPositive = firstNumber % 2 == 0 && firstNumber > 0; 
console.log("is number even and positive:", isEvenAndPositive);

var isEvenOrPositive = firstNumber % 2 == 0 || firstNumber > 0;
console.log("is number even or positive:" , isEvenOrPositive);

var notNegative = firstNumber >= 0;
console.log("is number not negative:", notNegative);
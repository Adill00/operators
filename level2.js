// PART 1

const scores = [20,15,12,10,13]

const [firstScore,secondScore] = scores;

console.log(firstScore,secondScore);

const student = {
    name:'Adil' , 
    age:19 ,
    isEnrolled:true
}

const {name:studentName , age:studentAge} = student;

console.log(studentName,studentAge);


// PART 2

console.log(typeof(firstScore) , typeof(secondScore) , typeof(studentName) , typeof(studentAge));

console.log(scores.length);

// PART 3

console.log(firstScore + secondScore);
console.log(firstScore - secondScore);

var isFirstBigger = firstScore > secondScore;
var isFirstLess = firstScore < secondScore;

console.log (isFirstBigger , isFirstLess);

var differentThanAge =  firstScore > secondScore && firstScore < secondScore;
console.log('first score is defferent than second score:',differentThanAge);

var moreThanAgeOnce = firstScore > student.age || secondScore > student.age;

console.log('student scored more than his age, at least once:' , moreThanAgeOnce);

var moreThanAgeTwice = firstScore > student.age && secondScore > student.age;

console.log('student scored more than his age,twice:' , moreThanAgeTwice);

var trueIsEnrolled = (student.isEnrolled != false);

console.log('student is enrolled:',trueIsEnrolled);
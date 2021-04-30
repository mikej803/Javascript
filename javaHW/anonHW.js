

// // 1. Positive Numbers
// var numbers = [10, -30, 2, 8, -5, 17,-10, -20, 50]

// let posNumbers = numbers.filter( numbers=>{
//     return numbers > 0;
// })
// console.log(posNumbers) 


// 2. Even Numbers
// var numbers = [15, 31, 2, 8, 16, 5, 17,12, 20, 50]

// let evenNumbers = numbers.filter(numbers =>{
//     return numbers % 2 == 0;
// })

// console.log(evenNumbers)

// 3. Square the Numbers
// var numbers = [1, 2, 3, 5, 12, 15]

// let squareNumbers = numbers.map(numbers =>{
//     return numbers * numbers;
// })

// console.log(squareNumbers)

// 4. Cities 1
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// let cityObj = cities.filter(cities =>{
//     return cities.temperature < 70;
// })

// console.log(cityObj)

// 5. Cities 2
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// let cityObj = cities.map(cities =>{
//     return cities.name;
// })

// console.log(cityObj)

// 6. Good Job!
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.forEach(people =>{
//     console.log('Good Job ' + people);
    
// })

// 7. Sort an array
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// people.sort();
// console.log(people)

// 8. Sort an array, 2
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.sort((a,b)=>a.length - b.length);
// console.log(people)

// 9. Sort an array, 3
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];
var sum = 0

for (var i = 0; i < arr.length; i++){
    sum = sum + arr[sum];
}
console.log(sum)
var answer = [[8], [20], [9]]
arr.sort((a,b)=>a.sum + b.sum);
console.log(arr)
arr = ([1, 2, 3])

let sort = arr.reduce((accumulator, currentValue) => accumulator + currentValue
);
console.log(sort)


// 10. 3 times
// let call3Times = " Hello World ".repeat(3)
// console.log(call3Times)

// 11. n times
// for(i=0; i<5; i++){
//     console.log('Hello, world!');
// }

// 12. Sum an array
// arr = ([1, 2, 3])

// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue
// );
// console.log(sum)

// 13. Acronym
var arr = (['very', 'important', 'person'])    
var arr2 = (['national', 'aeronautics', 'space', 'administration']) 

let acronym = arr.reduce((accumulator, currentValue)=> accumulator[0] + currentValue[0]
);
console.log(acronym)
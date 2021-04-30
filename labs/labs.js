const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


let newAgesArr = ages.filter(ages=>{
    return ages % 2 == 0 ;
})
console.log(newAgesArr)



// let newAgesArr = ages.filter(ages=>{
//     return ages > 35;
// })

// console.log(newAgesArr)

// let arr = [5, 8, 2, 23];

// companies.forEach(()=>{
//     console.log(x);
// })


// companies.forEach = (funcion(name, category, start, end ) {
//     console.log(companies);
// })

// let newEnd = companies.map end => 2020;
// console.log(newEnd)

// let newAgesArr.map(age)






// notes



let arr = [5, 8, 2, 23];

let isGreater5 = arr.some(val =>{
    return val
})














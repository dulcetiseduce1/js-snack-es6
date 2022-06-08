//array nomi
const myArray = [
    "Michele",  /* 0 */
    "Fabio",    /* 1 */
    "Roberto",  /* 2 */
    "Giovanni", /* 3 */ 
    "Simone",   /* 4 */ 
    "Chiara"    /* 5 */
];

//min e max numeri
let min = 1;
let max = 5;



//array compreso tra min e max foreach
let myArray2 = [];
myArray.forEach((name, i) => {
    if (i >= min && i <= max) {
        myArray2.push(name);
    }
});

//log
console.log(myArray2);

// array compreso tra min e max filter
let myArrayfilter = myArray.filter((name, i) => i >= min && i <= max);

//log
console.log(myArrayfilter);
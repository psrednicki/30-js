// this is your main.js script
let firstTen = 10
let secondTen = '10'
console.log('3 day');

console.log("Is true ===", firstTen === secondTen)
console.log("Is true ==", firstTen == secondTen)


let base = 20
let height = 10

function getAreaOfTriangle(x, h) {
    return (h*x)/2
}

console.log("Area of triagle is ", getAreaOfTriangle(base, height) )


let numberOfYear = prompt('Enter your year of born', 'number goes here')

function checkIfMature(year){
    const curretYear = new Date().getFullYear();
    console.log(curretYear)
    if(typeof year === 'number' || typeof year === 'string') {
        if((curretYear - year) >= 18) {
            console.log('Year are mature')
        } else {
            console.log("NO!")
        }
    } else {
        console.log("Invalid year format")
    }

}

checkIfMature(numberOfYear)

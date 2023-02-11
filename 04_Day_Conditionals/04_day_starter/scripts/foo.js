export const useFoo = (input) => {
   console.log("I am from Foo ", input)
}

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
export function daysInMonth (month) {
    return new Date(2022, month, 0).getDate();
}

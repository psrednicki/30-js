// this is your main.js script
let challange = '30 days of js'
console.log({ challange })

console.log(challange.length)

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

const loveString = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(loveString)
console.log("Count of appears love world", loveString.match(/love/gi).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log("fixed sentece: \n", sentence.replace(/%|\$|#|@|&|;/gm, ""))

const fullGross = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month"
const arrayOfGross = fullGross.split('euro')
let fullIncome = 0;
console.log("gere", arrayOfGross)
arrayOfGross.forEach(sentence => {
    console.log('sentence', sentence)
    const digits = sentence.match(/\d/g)?.join("");
    fullIncome += !!digits && +digits
    console.log('digits', digits)
})

console.log("YOU INCOME IS", fullIncome)
// Iteration 1: Names and Input
const hacker1 = "Alex"
console.log (`The driver's name is ${hacker1}`)
const hacker2 = "Peter"
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
console.log ("The driver has the longest name, it has " + hacker1.length + " characters.")
else if (hacker1.length < hacker2.length)
console.log ("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
else { (hacker1.length = hacker2.length)
console.log ("Wow, you both have equally long names, " + hacker1.length + " characters")
}
// Iteration 3: Loops

const capitalizedAlex = hacker1[0].toUpperCase() + " " + hacker1[1].toUpperCase() + " " + hacker1[2].toUpperCase() + " " + hacker1[3].toUpperCase();
console.log (capitalizedAlex)
const capitalizedPeter = hacker2[0].toUpperCase() + " " + hacker2[1].toUpperCase() + " " + hacker2[2].toUpperCase() + " " + hacker2[3].toUpperCase() + " " + hacker2[4].toUpperCase();
console.log (capitalizedPeter)

let reversedAlex = ""
for (let i = hacker1.length - 1; i>=0; i--) {reversedAlex += hacker1[i]};
console.log (reversedAlex)
let reversedPeter = ""
for (let i = hacker2.length - 1; i>=0; i--) {reversedPeter += hacker2[i]};
console.log (reversedPeter)

let lexOrder = hacker1.localeCompare(hacker2)

if (lexOrder === -1) {
    console.log("The driver's name goes first.")
}
else if (lexOrder === 1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else {
    lexOrder === 0
    console.log("What?! You both have the same name?") 
}
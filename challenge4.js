// Start with an array of hobbies. Print out only the words that end in "ing".
// Overall goal: Imprimir solo hobbies con ing

// Pseudocode:
//1. Create array 'hobbies'.
//2. Create for to iterate each string in the array.
//3. Write condition with endWith method if it matches 'ing' endings print
//4. Print

//Solution: 

var hobbies = ["traveling", "tennis", "swimming", "cook", "running", "draw"];
for (var i = 0; i < hobbies.length; i++) {
var hobbie = hobbies[i];

if( hobbie.endsWith("ing")) {
console.log(hobbie);
}
}



/*Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

Overall goal: print all strings in the array in lowercase.

Pseudocode: 
1. I create an array of strings with mixed lowercase and uppercase letters.
2. Convert the string to lowercase.
3. Print the string in lowercase.

Solution:
*/
// I create variable "animals" for the string array.
var animals = ["caT", "Dog", "cow", "RaBbit", "DUCK"];
// Start a "for" to iterate each string in the array.
for (i = 0; i < animals.length; i++) {
// Create animal variable for each index
    var animal = animals[i];
// Convert la animal variable to lowercase with .toLowerCase.
    var lowerCaseAnimal = animal.toLowerCase();
// Print the lowerCaseAnimal variable in lower case.
    console.log(lowerCaseAnimal);
}
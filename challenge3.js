/* Write a method or function that removes all instances of the letter s in a string. 
The method or function should accept a string as an argument and return the same string with every instance of the letter s removed.

Overall goal: Create instructions to remove the letter s from a string.

Pseudocode: 
1. Define function that removes s from given string
2. Create a variable to store the modified string
3. Create for so that itinere character by character 
4. Add condition to add the characters if different from 's' stringModified
5. Print stringModified
Solution:
*/
function removeS(string) {
    var StringModified = '';
    
    for( var i = 0; i < string.length; i++) {
        var characters = string[i];

        if (characters.toLowerCase() !== 's') {

        
        StringModified += characters;
    }
}
    return StringModified;
}
string = 'Hola s';
var StringModified = removeS(string);
console.log(StringModified);
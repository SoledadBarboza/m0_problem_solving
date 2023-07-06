/*Given an array of strings, print only the strings that have exactly 4 characters.
Overall goal: print only the strings that have exactly 4 characters from the array.
Pseudocode: 
1. I create an array of strings
2. I start "for" to check the length of each string in the array
3. Check if the length is equal to 4 
4. If it is equal to 4 I print that string

Solution: 
*/
// String array
var householdThings = ["Pillow", "Bed", "Dish", "Knife", "Sink", "Fork", "Sofa", "Pot", "Cup" ];
// Iterate each string in the array
for(i = 0; i < householdThings.length; i++){
    var householdThing = householdThings[i]
// Check if the length is equal to 4 
    if (householdThing.length === 4){
// If it is correct print
    console.log(householdThing)
}
}



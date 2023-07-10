// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. 
// For example, if you were given "SolidKraft is the best", return "SolidKraft Is The Best" instead!

// Overall: Print the sentence with the first letter of each word in capital letters.

// Pseudocode:
// 1. Declare the variable oration.
// 2. Separate the variable sentence into an array.
// 3. Iterate each word.
// 4. Replace the first letter with a capital letter plus the rest of the string.
// 5. Rejoin the words back into a sentence.

// Solution:

var sentence = "solidKraft is the best";
var words = sentence.split(" ");

for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
words.join(" ");
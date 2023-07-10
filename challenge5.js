// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. 
// For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"

// Overall: print the destinations in alphabetical order with a sentence that reads

// Pseudocode:
// 1. Create array of destinations.
// 2. Call .sort method to sort the destinations alphabetically.
// 3. Iterate each destination.
// 4. Print each destination with a prayer.

// Solution:

var destinations = ["Havana", "Buenos Aires", "Panama", "Madrid", "San José"];
destinations.sort();
for (var i = 0; i < destinations.length; i++) {
    var destination = destinations[i];
    console.log("The next place I want to visit is " + destination + " City!");
}


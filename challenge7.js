// Write a method or function that determines how much a person will pay in taxes in the United States based on their annual income. 
// The method or function should accept a number representing the individual's annual income as an argument and return the amount they will owe in taxes for that year.

// Overall: specify how much tax a person will pay according to his or her income.

// Pseudocodigo: 
// 1. Define function to calculate taxes
// 2. Define tax variables
// 3. Add conditions according to item information.
// 4. Print results according to annual income scale.
// 5. Define variable income and taxes to be paid to calculate and print result.

// Solution: 
function calculateTaxes(anualIncome) {
    var taxes = 0;
    
    if (anualIncome <= 10275) {
      taxes = anualIncome * 0.10;
    } else if (anualIncome <= 41775) {
      taxes = anualIncome * 0.12;
    } else if (anualIncome <= 89075) {
      taxes = anualIncome * 0.22;
    } else if (anualIncome <= 170050) {
      taxes = anualIncome * 0.24;
    } else if (anualIncome <= 215950) {
      taxes = anualIncome * 0.32;
    } else {
      taxes = anualIncome * 0.35;
    }
    
    return taxes;
  }
  Income = 500000;
  var taxesToPay = calculateTaxes(Income);
  console.log("Taxes to pay: $" + taxesToPay);
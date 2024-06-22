// Function to get the user's age and determine their age category
function checkAgeCategory() {
    // Prompt the user for their age
    let age = prompt("Enter your age:");
    
    // Convert the input to a number
    age = parseInt(age, 10);
    
    // Check if the age is a valid number
    if (isNaN(age) || age < 0) {
        console.log("Please enter a valid number for age.");
    } else {
        // Determine the age category
        if (age >= 0 && age <= 12) {
            console.log("You are a child.");
        } else if (age >= 13 && age <= 19) {
            console.log("You are a teenager.");
        } else if (age >= 20 && age <= 59) {
            console.log("You are an adult.");
        } else if (age >= 60) {
            console.log("You are a senior.");
        } else {
            console.log("Invalid age entered.");
        }
    }
}

checkAgeCategory();

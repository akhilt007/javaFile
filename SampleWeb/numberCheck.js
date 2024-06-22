// Function to check if the number is positive, negative, or zero
function checkNumber() {
    // Prompt the user for a number
    let number = prompt("Enter a number:");
    
    // Convert the input to a number
    number = parseFloat(number);
    
    // Check if the number is positive, negative, or zero
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else if (number === 0) {
        console.log("The number is zero.");
    } else {
        console.log("Invalid input. Please enter a numeric value.");
    }
}

checkNumber();

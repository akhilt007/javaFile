// Function to get the user's age and check voting eligibility
function checkVotingEligibility() {
    // Prompt the user for their age
    let age = prompt("Enter your age:");
    
    // Convert the input to a number
    age = parseInt(age, 10);
    
    // Check if the age is a valid number
    if (isNaN(age)) {
        console.log("Please enter a valid number for age.");
    } else {
        // Determine voting eligibility
        if (age >= 18) {
            console.log("You are eligible to vote.");
        } else {
            console.log("You are not eligible to vote.");
        }
    }
}

checkVotingEligibility();

// Function to determine if the user passed or failed
function checkGrade() {
    // Prompt the user for their grade
    let grade = prompt("Enter your grade:");
    
    // Convert the input to a number
    grade = parseFloat(grade);
    
    // Check if the grade is passing or failing
    if (grade >= 60) {
        console.log("You passed!");
    } else {
        console.log("You failed.");
    }
}

checkGrade();

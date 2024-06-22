// Program to find the sum of all odd numbers up to a given limit

// Function to calculate the sum of odd numbers up to the given limit
function sumOfOddNumbers(limit) {
    let sum = 0;

    // Iterate through numbers from 1 to the limit
    for (let i = 1; i <= limit; i++) {
        // Check if the number is odd
        if (i % 2 !== 0) {
            sum += i; // Add the odd number to the sum
        }
    }

    return sum;
}

// Function to handle user input and display the result
function calculateSum() {
    // Prompt the user for the limit
    let limit = prompt("Enter a limit:");

    // Convert the input to a number
    limit = parseInt(limit);

    // Validate if the input is a valid number
    if (isNaN(limit) || limit <= 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }

    // Calculate the sum of odd numbers up to the limit
    let result = sumOfOddNumbers(limit);

    // Display the result
    console.log("The sum of all odd numbers up to " + limit + " is: " + result);
}

// Call the function to start the program
calculateSum();

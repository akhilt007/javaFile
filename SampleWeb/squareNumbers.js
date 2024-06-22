// Function to find and print the square of each number in an array
function squareNumbers() {
    // Given array
    let numbers = [1, 3, 9, 12, 15, 18, 21];
    
    // Loop through each number in the array
    for (let i = 0; i < numbers.length; i++) {
        // Calculate the square of the current number
        let square = numbers[i] * numbers[i];
        
        // Print the result to the console
        console.log("The square of " + numbers[i] + " is: " + square);
    }
}

squareNumbers();

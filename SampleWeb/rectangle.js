
// Function to calculate the area of a rectangle
function calculateArea() {
    // Prompt the user for the length of the rectangle
    let length = prompt("Enter the length of the rectangle:");
    
    // Convert the input to a number
    length = parseFloat(length);
    
    // Prompt the user for the width of the rectangle
    let width = prompt("Enter the width of the rectangle:");
    
    // Convert the input to a number
    width = parseFloat(width);
    
    // Calculate the area of the rectangle
    let area = length * width;
    
    // Print the area to the console
    console.log("The area of the rectangle with length " + length + " and width " + width + " is: " + area);
}

calculateArea();

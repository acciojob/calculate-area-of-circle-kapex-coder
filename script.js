 function calculateArea() {
	// Get the radius from the user using the prompt() function
	let radius = prompt("Enter the radius of the circle:");
	// write you code here and display the result to the user

	 const area = (3.1419 * (radius ** 2)).toFixed(2);

	 console.log(`The area of the circle with radius ${radius} is ${area}`)
           
}
calculateArea();

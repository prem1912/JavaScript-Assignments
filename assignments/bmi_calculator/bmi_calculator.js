// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (typeof mass === 'number' && typeof mass === 'number' && mass > 0 && height > 0) {
        return mass / (height * height);
    } else {
        return "Invalid Input";
    }
}

module.exports = BMICalculator;

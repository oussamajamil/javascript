// solution 1

function bmi(weight, height) {
    var bmi = weight / (Math.pow(height, 2));
    if (bmi <= 18.5)
        return "Underweight";
    else if (bmi > 18.5 && bmi <= 25.0)
        return "Normal"
    else if (bmi > 25 && bmi <= 30.0)
        return "Overweight";
    else
        return "Obese"
}

//use Math.pow and conditions 

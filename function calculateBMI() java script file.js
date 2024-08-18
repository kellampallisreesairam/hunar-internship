function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        alert("Please enter both weight and height.");
        return;
    }

    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

    document.getElementById("bmi-value").textContent = bmi;
    document.getElementById("bmi-category").textContent = getBMICategory(bmi);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

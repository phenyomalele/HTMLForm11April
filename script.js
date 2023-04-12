function getFormValues() {
    console.log(
        `
        Username: ${document.getElementById("username").value},
        Surname: ${document.getElementById("surname").value},
        Email: ${document.getElementById("email").value},
        Occupation: ${document.getElementById("occupation").value}
        `
    );
}


// Pounds to KG function
function poundsToKG(pounds) {
    return pounds/0.453592
}

console.log("100 Pounds in Kilograms is " + poundsToKG(100))

//Inches to CM function
function inchesToCM(inches) {
    return inches * 2.54
}

console.log("50 Inches in Centimetres is " + inchesToCM(50))

//Fahrenheit to Celcius function
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 0.555555556)
}

console.log("150 Fahrenheit in Celsius is " + fahrenheitToCelsius(150))

//Feet to Metres function
function feetToMetres(feet) {
    return feet/3.281 
}

console.log("500 Feet in Metres is " + feetToMetres(500))
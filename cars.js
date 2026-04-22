// Student Number: YOUR_STUDENT_NUMBER

var makes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];

var cars = [
    { name: "Bettle", type: "Hatchback", make: "VW", img: "images/vw.jpg" },
    { name: "Mustang", type: "Sports", make: "Ford", img: "images/mustang.jpg" },
    { name: "Land Hilux", type: "SUV", make: "Toyota", img: "images/toyota.jpg" },
    { name: "A4", type: "Sedan", make: "Audi", img: "images/audi.jpg" },
    { name: "S-Class", type: "Sedan", make: "Benz", img: "images/mercedes.jpg" },
    { name: "BMW 3 Series", type: "Sedan", make: "BMW", img: "images/bmw.jpg" },

];

var currentCar;
var correct = 0;
var total = 0;

window.onload = function () {

    var dropdown = document.getElementById("make-list");

    // fill dropdown (basic loop instead of forEach)
    for (var i = 0; i < makes.length; i++) {
        var option = document.createElement("option");
        option.value = makes[i];
        option.text = makes[i];
        dropdown.appendChild(option);
    }

    showCar();
};

function showCar() {
    var random = Math.floor(Math.random() * cars.length);
    currentCar = cars[random];

    document.getElementById("car-name").innerHTML = currentCar.name;
    document.getElementById("car-type").innerHTML = currentCar.type;
    document.getElementById("car-img").src = currentCar.img;

    document.getElementById("car-img").classList.remove("hidden");
    document.getElementById("guess-btn").classList.remove("disabled");
}

document.getElementById("guess-btn").onclick = function () {

    document.getElementById("guess-btn").classList.add("disabled");

    var selected = document.getElementById("make-list").value;

    if (selected == currentCar.make) {
        correct = correct + 1;
        document.getElementById("correct").innerHTML = correct;
    }

    total = total + 1;
    document.getElementById("total").innerHTML = total;

    showCar();
};
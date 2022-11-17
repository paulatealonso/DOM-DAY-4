const placesRes = document.querySelector("#placesRes")
const nights = document.querySelector("#nights")
const places = document.querySelector("#places")
const calculateCost = document.querySelector("#button1")
const costHotels = document.querySelector("#costHotel")
const travelCost = document.querySelector("#travelCost")
const carsCost = document.querySelector("#carCost")
const totalCost = document.querySelector("#totalCost")

function calcularCoste(city1, num) {
    placesRes.textContent = costHotel(placesRes.value)
}





function costHotel(num) {
    return num * 140
}



function carCost(num) {
    let result = 0
    if (num >= 3 && num <= 6) {
        result = (num * 40) - 20
        return result
    }
    if (num >= 7) {
        result = (num * 40) - 50
        return result
    }
}




function flyCost(nameCity, num) {

    let result = 0
    if (nameCity === "Oviedo") {
        result = num * 15
    } else if (nameCity === "Tokio") {
        result = num * 700
    } else if (nameCity === "Madrid" || nameCity === "Barcelona") {
        result = num * 90
    }
    return result

    if (num > 3) {
        return result - (result * 0.1)
    } else {
        return result
    }
}

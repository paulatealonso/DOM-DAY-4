const nights = document.querySelector("#nights")
const places = document.querySelector("#places")
const calculateCost = document.querySelector("#button1")
const costHotels = document.querySelector("#costHotel")
const travelCost = document.querySelector("#travelCost")
const carsCost = document.querySelector("#carCost")
const totalCost = document.querySelector("#totalCost")
const costeTotal = 0


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
    } else {
        return num * 40
    }
}



function costeAvion(city, num) {
    let result = 0

    if (city === "Oviedo") {
        result = num * 15
    } else if (city === "Tokyo") {
        result = num * 700
    } else if (city === "Madrid" || city === "Barcelona") {
        result = num * 90
    }

    if (num > 3) { 
        return result - (result * 0.1)
    } else {
        return result
    }
}



function calcularCoste(city1, num) {
   costHotels.value = costHotel(nights.value)
   travelCost.value = costeAvion(places.value , nights.value)
   carsCost.value = carCost(nights.value)
}


calculateCost.onclick = () => {
    calcularCoste()
}
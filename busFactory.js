// the factory  function should be able to set points and location and calculate the following :
//1. number of trips
//2.single price per trip
//3. number of return trips
//4. price per trip
//need variable for total points
//there should be function that will calculate how much each loaction will cost using conditional statements
//Khayelitsha = R40 , Dunoon = R25 , Mitchells Plain = R30
//another function should calculate how much increase to add if it is peak time (if the user selects a location in the previous function it should add certain percnetage to that amount)
//to calculate the amount increased divide the normal price by 100 multiply that by 25% and then add that to the original amount
//to each of these functions need to another functon that will only return the counters


function BusTicket() {
    var numSingleTrip = 0;
    var priceSingle = 0;
    var numReturnTrip = 0;
    var pricesReturn = 0;
    // var peak = 0;

    function singleTrip(points, location) {
        if (points >= 40 && location == "khayelitsha") {
            numSingleTrip += 1;
            priceSingle += 40;
            return true
        }
        if (points >= 25 && location == "dunoon") {
            numSingleTrip += 1;
            priceSingle += 25;
            return true

        }
        if (points >= 30 && location == "mitchellsPlain") {
            numSingleTrip += 1;
            priceSingle += 30;
            return true

        }
        else {
            return "not enough points to travel to " + location
        }

    }
    function amountOfSingle() {
        return numSingleTrip
    }
    function totalPriceOfSingle() {
        return priceSingle
    }
    function returnTrip() {
        //if the number of single trips is even it should divide the single trips by 2 else if it is odd????
        if (numSingleTrip % 2 === 0) {

        }
        numReturnTrip = numSingleTrip / 2
        pricesReturn = priceSingle *= 2;
        // else if(numSingleTrip % 2 ==!0){
        //     numReturnTrip = numSingleTrip /2 
        // }

    }
    function getReturnPrice() {
        return pricesReturn
    }
    function amountOfReturn() {
        return numReturnTrip
    }
    function addPeak() {

        numSingleTrip /= 100;
        numSingleTrip *= 25;
       numSingleTrip += numSingleTrip;
        return numSingleTrip *= 100


    }
    return {
        singleTrip,
        amountOfSingle,
        totalPriceOfSingle,
        returnTrip,
        getReturnPrice,
        amountOfReturn,
        addPeak
    }

}
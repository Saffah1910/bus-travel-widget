//in the dom add references, event listner and instance
let pointsElem = document.querySelector(".points");
let locationsElem = document.querySelector(".locations");
let radioBtn = document.querySelector(".radioButtons");
let checkboxElem = document.querySelector(".checkbox");
let calculateBtn = document.querySelector(".calculateBtn");
let singleTripElem = document.querySelector(".singleTrip");
let singlePriceElem = document.querySelector(".singlePrice");
let returnTripElem = document.querySelector(".returnTrip");
let returnPriceElem = document.querySelector(".returnPrice");

let bus = BusTicket();

//when the calculate btn is clicked it should check the lnagge, is the radio button selected, is the checkbox slected and then return the vlaues in the calculation boxes
calculateBtn.addEventListener("click", function () {

   var single =  bus.singleTrip(pointsElem.value,locationsElem.value);
   console.log(single)
    if(single){
        bus.singleTrip();
        singlePriceElem.innerHTML = bus.totalPriceOfSingle();
        singleTripElem.innerHTML = bus.amountOfSingle();
    }
    if(!single){
        bus.returnTrip();
        returnTripElem.innerHTML = bus.amountOfReturn();
        returnPriceElem.innerHTML = bus.getReturnPrice();
    }


    var topupRadioBtn = document.querySelector("input[name='peakOrNoPeak']:checked");
    if (topupRadioBtn.value === "offPeak") {
        bus.singleTrip();
        singlePriceElem.innerHTML = bus.totalPriceOfSingle();
        singleTripElem.innerHTML = bus.amountOfSingle();
        returnTripElem.innerHTML = bus.amountOfReturn();
        returnPriceElem.innerHTML = bus.getReturnPrice();
    }
    else if (topupRadioBtn.value === "peak") {
        bus.addPeak()
        singlePriceElem.innerHTML = bus.totalPriceOfSingle();
        singleTripElem.innerHTML = bus.amountOfSingle();
    }

    var checkbox = document.querySelector("input[name='checkbox']:checked");
    if (!checkbox) {
        bus.singleTrip();
        singlePriceElem.innerHTML = bus.totalPriceOfSingle();
        singleTripElem.innerHTML = bus.amountOfSingle();
    }
    else if (checkbox) {
        bus.singleTrip();
        bus.returnTrip();
        returnTripElem.innerHTML = bus.amountOfReturn();
        returnPriceElem.innerHTML = bus.getReturnPrice();


    }






});


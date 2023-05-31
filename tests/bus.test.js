
describe("The Bus Ticket function", function () {

    describe("use points and select location", function () {
        it("if the user enters 40 points or more and selects khayelitsha it should return true", function () {
            let busTravel = BusTicket();
            assert.equal(true, busTravel.singleTrip(40, "khayelitsha"));
        });
        it("if the user enters 30 points or more and selects mitchellsPlain it should return true", function () {
            let busTravel = BusTicket();
            assert.equal(true, busTravel.singleTrip(30, "mitchellsPlain"));
        });
        it("if the user enters 23 points or less and selects dunoon it should return false since the points are not enough", function () {
            let busTravel = BusTicket();
            assert.equal("not enough points to travel to dunoon", busTravel.singleTrip(23, "dunoon"));
        });

    });
    describe("number of trips and total price", function () {
        it("if the user does not select return and take 2 trips to khayelitsha it should return R80", function () {
            let busTravel = BusTicket();
            busTravel.singleTrip(40, "khayelitsha");
            // busTravel.singleTrip(40, "khayelitsha");

            assert.equal(40, busTravel.totalPriceOfSingle());
        });

        it("if the user takes 2 trips to mitchells plain and 1 trip to dunoon it should return R85", function () {
            let busTravel = BusTicket();
            busTravel.singleTrip(30, "mitchellsPlain");
            busTravel.singleTrip(30, "mitchellsPlain");
            busTravel.singleTrip(25, "dunoon");

            assert.equal(85, busTravel.totalPriceOfSingle());
        });
        it("should return how many single trips a user had taken", function () {
            let busTravel = BusTicket();
            busTravel.singleTrip(30, "mitchellsPlain");
            busTravel.singleTrip(30, "mitchellsPlain");
            busTravel.singleTrip(25, "dunoon");
            busTravel.singleTrip(40, "khayelitsha");
            busTravel.singleTrip(40, "khayelitsha");


            assert.equal(5, busTravel.amountOfSingle());
        });
        it("if a even number of single trips is made it should return how many return trips a user had taken", function () {
            let busTravel = BusTicket();

            busTravel.singleTrip(40, "khayelitsha");
            busTravel.singleTrip(40, "khayelitsha");

            busTravel.returnTrip();

            assert.equal(1, busTravel.amountOfReturn());
        });
        it("if a odd number of single trips is made it should return how many return trips a user had taken", function () {
            let busTravel = BusTicket();

            busTravel.returnTrip();
            busTravel.returnTrip();
            busTravel.returnTrip();


            assert.equal(3, busTravel.amountOfReturn());
        });

        it("should return how many price if return option is chosen", function () {
            let busTravel = BusTicket();

            busTravel.singleTrip(40, "khayelitsha");

            busTravel.returnTrip();

            assert.equal(80, busTravel.getReturnPrice());
        });


    });
    describe("peak or no peak", function () {
        it("if the user is travelling in peak time it should add 25 percent to the original price", function () {
            let busTravel = BusTicket();
            busTravel.singleTrip(40, "khayelitsha");
            assert.equal(50, busTravel. addPeak());
        });
        it("if the user is travelling in peak time it should add 25 percent to the original price", function () {
            let busTravel = BusTicket();

            busTravel.singleTrip(25, "dunoon");
            busTravel.singleTrip(40, "khayelitsha");
            busTravel.singleTrip(40, "khayelitsha");

            assert.equal(150, busTravel. addPeak());
        });
    });

});
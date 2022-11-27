//object-el elkészítve
let spaceShip = {
  Fuel: 400,
  Passengers: ["John", "Steve", "Sam", "Danielle"],
  Shields: true,
  Speedometer: 0,
  //kilistázza az utasokat
  listPassengers: function () {
    for (let i = 0; i < this.Passengers.length; i++) {
      console.log("Passenger " + (i + 1) + ": " + this.Passengers[i]);
    }
  },
  //hozzáad egy új utast
  addPassenger: function (newPassenger) {
    this.Passengers.push(newPassenger);
    console.log(newPassenger + " was added to the ship");
  },
  //a megadott távolságot utazik és annak megfelelően változtatja a paramétereket.
  travel: function (distance) {
    console.log("Trying to travel: " + distance);
    if (this.Fuel === 0) {
      console.log("Can't go further, tank is empty!");
    } else {
      let newFuel = this.Fuel - distance / 2; //Fuel distance felével csökken utazáskor
      if (newFuel < 0) {
        distance = 2 * this.Fuel;
        newFuel = 0;
        console.log("Can only travel: " + distance);
      }
      this.Fuel = newFuel;
      this.Speedometer = this.Speedometer + distance;
      if (this.Fuel < 30 && this.Shields === true) {
        this.Shields = false;
        console.log("Fuel is low, turning off shields...");
      }
      console.log("The SpaceShip is at: " + this.Speedometer);
      console.log("The Spaceship has: " + this.Fuel + " fuel");
    }
  },
};

spaceShip.listPassengers();
spaceShip.addPassenger("Lindsay");
spaceShip.listPassengers();
spaceShip.travel(750);
spaceShip.travel(200);
spaceShip.travel(100);

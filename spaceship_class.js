class SpaceShip {
  constructor(Fuel, Passengers) {
    this.Fuel = Fuel;
    this.Passengers = Passengers;
    this.Shields = true;
    this.Speedometer = 0;
  }

  listPassengers() {
    for (let i = 0; i < this.Passengers.length; i++) {
      console.log("Passenger " + (i + 1) + ": " + this.Passengers[i]);
    }
  }

  addPassenger(newPassenger) {
    this.Passengers.push(newPassenger);
    console.log(newPassenger + " was added to the ship");
  }

  travel(distance) {
    console.log("Trying to travel: " + distance);
    if (this.Fuel === 0) {
      console.log("Can't go further, tank is empty!");
    } else {
      let newFuel = this.Fuel - distance / 2;
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
  }
}

onBoard = ["John", "Steve", "Sam", "Danielle"];
let Spacey = new SpaceShip(400, onBoard);
Spacey.listPassengers();
Spacey.addPassenger("Lindsay");
Spacey.listPassengers();
Spacey.travel(750);
Spacey.travel(200);
Spacey.travel(100);

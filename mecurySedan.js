//this includes the vehicle class as a module
const ModuleVehicle = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor() {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.timeForMaintenance = false;
        this.availableRoom = false
        this.scheduledService = false;
    }
    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log('Not enough room for all passengers');

            }
        } else {
            console.log('Vehicle is at max capacity')
        }
    }
    start() {
        if (this.fuel > 0) {
            console.log('Engine on')
            return this.started = true
        } else {
            console.log('No fuel')
        }
    }
    scheduledService(mileage) {
        if (this.mileage > 30000) {
            this.timeForMaintenance = true;
            return this.timeForMaintenance;
        }
    }
}
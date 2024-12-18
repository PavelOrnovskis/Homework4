class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: number) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(acceleratedSpeed: number): number {
        this.speed = this.speed + acceleratedSpeed
        return this.speed
    }
}

const car = new Car('Toyota', 100);
console.log(car.accelerate(20)); // After fixing: will print 120
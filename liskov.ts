class Bird {
        eat() {
                console.log("eat");
        }

        fly() {
                console.log("fly");
        }
}

class Penguin extends Bird {
        eat() {
                console.log("eat");
        }

        fly() {
                throw new Error("I don't know how to fly ????????");
        }
}

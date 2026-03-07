class Coffee {
    constructor(flavor, size, milkType) {
        this.flavor = flavor;
        this.size = size;
        this.milkType = milkType;
    }
    describe() {
        console.log(
            `A ${this.size} ${this.flavor} coffee with ${this.milkType} milk.`,
        );
    }
}
const order1 = new Coffee("Cappuccino", "medium", "almond");
const order2 = new Coffee("Latte", "large", "cow");
// order1.describe();
// order2.describe();




// class IcedCoffee extends Coffee {
//     constructor(flavor, size, milkType, syrupType) {
//         super(flavor, size, milkType);
//         this.syrupType = syrupType;
//     }
//     describe() {
//         super.describe();
//         console.log(
//             "It also includes " + this.syrupType + " syrup served over ice.",
//         );
//     }
// }
// const specialOrder = new IcedCoffee("Mocha", "large", "almond", "hazelnut");
// specialOrder.describe();

class IcedCoffee extends Coffee{}

const icedCoffee = new IcedCoffee("Mocha", "large", "almond");
// icedCoffee.describe();


const person1 = {
    name : "Javascript",
    introduce : function(){
        console.log("I am", this.name);
    }
}

person1.introduce();
const fn = person1.introduce;
fn.call(person1);
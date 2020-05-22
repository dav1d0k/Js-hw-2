let car1 = {
    name: "audi",
    color: "white",
    model: "A4",
    year: 2019,
    hp: 190,
    price: 20000
}
let car2  ={
    name: "ford",
    color: "black",
    model: "b8",
    year: 2020,
    hp: 190,
    price: 30000
}
let car3  = {
    name: "toyota",
    color: "blue",
    model: "c8",
    year: 2015,
    hp: 190,
    price: 40000
}

let cars = [];

cars.push(car1);
cars.push(car2);
cars.push(car3);

console.log("მარკა: " + cars[0].name + "\n" + "ფერი: " + cars[0].color + "\n" + "მოდელი: " + cars[0].model + "\n" + "გამოშვების წელი: " + cars[0].year + "\n" + "ცხენის ძალა: " + cars[0].hp + "\n" + "ფასი: " + cars[0].price + "$");
console.log(`  _________________________________________________________________________________________________________
`)

let nPrice = "";
let yPrice = "";

let nPriceAlert = "სამწუხაროდ ამ ფასში მანქანას ვერ შეიძენთ :("

for (i = 0; i < cars.length; i++) {
    if (cars[i].price > 15000) {
        console.log(nPriceAlert);
        break;
    }
}
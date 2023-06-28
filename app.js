function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("SinNo", 10);
sayHello("SinMi", 23);
sayHello("SinRyu", 21);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function divide(a, b) {
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player = {
    name: "SinNo",
    sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

player.sayHello("SinNo");
player.sayHello("SinMi");
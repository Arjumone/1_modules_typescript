"use strict";
{
    //function:1.Normal function, 2.Arrow function
    //1.Normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 5);
    //2.arrow function
    const addArrow = (num1, num2) => num1 + num2;
    //Object-->function-->method
    const poorUser = {
        name: "Arju",
        balance: 0,
        addBalance(balance) {
            return `My balance is ${this.balance + balance}`;
        },
    };
    const arr = [2, 3.5];
    const newArr = arr.map((elem) => elem * elem);
    //
}

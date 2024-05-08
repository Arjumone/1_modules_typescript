"use strict";
{
    //type assertion
    let anything;
    anything = "hello";
    anything.indexOf;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertNumber = parseFloat(value) * 1000;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm("hello world");
    console.log(result1);
    const result2 = kgToGm(333);
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}

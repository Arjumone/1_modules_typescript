"use strict";
{
    //nullable type
    const searchName = (value) => {
        if (value) {
            console.log('Searching');
        }
        else {
            console.log('No searching');
        }
    };
    searchName(null);
    //unknown type(typeof)
    const getSpreedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpreed = (value * 1000) / 3600;
            console.log(`The spreed is ${convertedSpreed} ms`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(" ");
            // console.log(result);
            const convertedSpreed = (parseFloat(result) * 1000) / 3600;
            console.log(`The spreed is ${convertedSpreed} ms`);
        }
        else {
            console.log('no value');
        }
    };
    // getSpreedInMeterPerSecond(1000)
    getSpreedInMeterPerSecond(null);
    //never type
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('muskil');
}

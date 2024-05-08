"use strict";
var _a, _b;
{
    //ternary operator and optional chaining and nullish coalescing operator
    const age = 15;
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log(isAdult);
    //nullish coalescing operator:null and undefined==>decision making
    const isAuthenticated = undefined;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    console.log({ result });
    const user = {
        name: 'arju',
        address: {
            city: 'ctg',
            road: 'muradpur',
            presentAddress: 'ctg'
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'no permanent address';
    console.log({ permanentAddress });
    //
}

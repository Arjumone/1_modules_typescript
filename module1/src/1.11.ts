{
    //ternary operator and optional chaining and nullish coalescing operator

const age :number= 15;
 const isAdult = age >=18?'adult':'not adult'
 console.log(isAdult);


 //nullish coalescing operator:null and undefined==>decision making

 const isAuthenticated = undefined;

 const result = isAuthenticated?? 'Guest';
 console.log({result});

 type User = {
    name:string;
    address:{
        city:string;
        road:string;
        presentAddress:string;
        permanentAddress?:string
    }
 }

 const user:User={
    name:'arju',
    address:{
        city:'ctg',
        road:'muradpur',
        presentAddress:'ctg'
    }
 }

const permanentAddress = user?.address?.permanentAddress?? 'no permanent address';
console.log({permanentAddress});

//

}
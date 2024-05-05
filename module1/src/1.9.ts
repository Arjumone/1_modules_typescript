{
    //type alias
    const student1 :{
        name:string;
        age:number;
        gender:string;
        contactNo:string
    }={
        name:'arju',
        age:40,
        gender:'Female',
        contactNo:'01835191719'
    }
    const student2 :{
        name:string;
        age:number;
        gender:string;
        contactNo:string
    }={
        name:'mone',
        age:50,
        gender:'Female',
        contactNo:'01835191720'
    }

    type Student={
        name:string;
        age:number;
        gender:string;
        contactNo:string
    }

    const student3 :Student={
        name:'mim',
        age:50,
        gender:'Female',
        contactNo:'01835191700'
    }


    type Add=(num1:number,num2:number
        )=>number;

        const add:Add=(num1,num2)=>num1*num2


    //
}
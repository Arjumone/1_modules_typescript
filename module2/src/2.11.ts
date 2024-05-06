{
    //utility types:pick
    type Person ={
        name:string;
        age:number;
        email?:string;
        contactNo : string;
    }

    type NameAge = Pick<Person,'name'|'age'>;

    //utility types:omit
    type ContactInfo = Omit<Person,'name'|'age'>;

    //utility types:required
    type PersonRequired = Required<Person>;

    ////utility types:partial
    type PersonPartial = Partial<Person>;


    //utility types:readonly
    type PersonReadOnly = Readonly<Person>;

    const person1: PersonReadOnly={
        name:'arju',
        age:90,
        contactNo:'234'
    }

    // person1.name='x'


    //utility types:record
    
    // type MyObj={
    //     a:string;
    //     b:string;
    // }

    type MyObj = Record<string,string>

    const EmptyObj :Record<string,unknown>={}

    const obj1:MyObj={
        a:'aa',
        b:'bb',
        c:'cc',
        d:'dd'
    };






    //
}
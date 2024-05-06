{
    //generic type

    type GenericArray<T>= Array<T>

    // const rollNo1: number[] = [1, 45, 56, 9, 8];
    const rollNo1: GenericArray<number> = [1, 45, 56, 9, 8];


    // const friends :string[]=['arju','mone']
    const friends :GenericArray<string>=['arju','mone'];

    // const boolean : boolean[]= [true,false,true]
    const boolean : GenericArray<boolean>= [true,false,true];

    //array of object:generic
    const user :GenericArray<{name:string,age:number,role:string}>=[
        {
            name:'arju',
            age:30,
            role:'student'
        },
        {
            name:'mone',
            age:60,
            role:'manager'
        },
        {
            name:'tuhin',
            age:30,
            role:'dev'
        },
    ];

    //generic tuple
    type GenericTuple<X,Y>= [X,Y];
    const manush : GenericTuple<string,string>= ['arju','mone'];

    const userId :GenericTuple<number,{name:string,email:string}>=[123,{name:'tuhin',email:'aa@gmail.com'}]




    //
}
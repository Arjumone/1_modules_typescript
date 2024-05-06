{
    //mapped types

    const arrOfNumbers:number[]=[1,2.4];

    // const arrOfStrings:string[]=['1','2','4'];
    
    const arrOfString :string[]= arrOfNumbers.map(number=>number.toString());
    console.log(arrOfString);



    type AreaNumber ={
        height:number;
        width:number
    }

    type Height = AreaNumber['height'];   //look up type


    // type AreaString ={
    //     height:string;
    //     width:string;
    // }

    type AreaString={
        [key in keyof AreaNumber]:string
    }






    //
}
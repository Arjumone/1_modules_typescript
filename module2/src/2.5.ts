{
    //function with generics

    const createArray =(param:string):string[]=>{
        return [param];
    }

    const createArrayWithGeneric = <T>(param:T):T[]=>{
        return [param];
    }

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('Bangladesh');

    type User ={
        id:number;name:string;
    }

    const resGenericObj = createArrayWithGeneric<User>({id:222,name:'Mr.X'});






    const createArrayWithTuple = <T,Q>(param:T,param2:Q):[T,Q]=>{
        return [param,param2];
    }

    const res2 = createArrayWithTuple<string,number>('Bangladesh',222);
    const resGeneric2 = createArrayWithTuple<string,{name:string}>('Bangladesh',{name:'asia'});



    const addCourseToStudent = <T>(student:T)=>{
        const course ='next level web development';
        return{
            ...student,course
        }
    }

    const student1 = addCourseToStudent({name:'x',email:"x@gmail.com",role:'dev'})
    const student2 = addCourseToStudent({name:'y',email:"y@gmail.com",role:'dev',watch:true})







    //

}
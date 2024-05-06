{
    //constraints type

    const createArrayWithTuple = <T,Q>(param:T,param2:Q):[T,Q]=>{
        return [param,param2];
    }

    const res2 = createArrayWithTuple<string,number>('Bangladesh',222);
    const resGeneric2 = createArrayWithTuple<string,{name:string}>('Bangladesh',{name:'asia'});



    const addCourseToStudent = <T extends {id:number,name:string,email:string}>(student:T)=>{
        const course ='next level web development';
        return{
            ...student,course
        }
    }

    const student1 = addCourseToStudent({id:222,name:'x',email:"x@gmail.com",role:'dev'})
    const student2 = addCourseToStudent({id:333,name:'y',email:"y@gmail.com",role:'dev',watch:true})







    //
}
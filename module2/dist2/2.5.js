"use strict";
{
    //function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric('Bangladesh');
    const resGenericObj = createArrayWithGeneric({ id: 222, name: 'Mr.X' });
    const createArrayWithTuple = (param, param2) => {
        return [param, param2];
    };
    const res2 = createArrayWithTuple('Bangladesh', 222);
    const resGeneric2 = createArrayWithTuple('Bangladesh', { name: 'asia' });
    const addCourseToStudent = (student) => {
        const course = 'next level web development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'x', email: "x@gmail.com", role: 'dev' });
    const student2 = addCourseToStudent({ name: 'y', email: "y@gmail.com", role: 'dev', watch: true });
    //
}

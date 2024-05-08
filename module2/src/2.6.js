"use strict";
{
    //constraints type
    const createArrayWithTuple = (param, param2) => {
        return [param, param2];
    };
    const res2 = createArrayWithTuple('Bangladesh', 222);
    const resGeneric2 = createArrayWithTuple('Bangladesh', { name: 'asia' });
    const addCourseToStudent = (student) => {
        const course = 'next level web development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 222, name: 'x', email: "x@gmail.com", role: 'dev' });
    const student2 = addCourseToStudent({ id: 333, name: 'y', email: "y@gmail.com", role: 'dev', watch: true });
    //
}

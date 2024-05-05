{
    //destructuring:object destructuring

    const user ={
        id:235,
        name:{
            firstName:'arju',
            lastName:'mone'
        },
        contactNo:'01835191719',
        address:'ctg'

    }
    const {name:lastName}=user

    //destructuring:array destructuring
    const friends  = ['arju','mim','marium','maisha','nuh'];
    const [,,bestFriend,...rest]=friends;

    //
}
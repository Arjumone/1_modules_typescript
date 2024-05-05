{
    //spread operator-->rest operator
    const bros1:string[]=['mim','maisha','marium'];
    const bros2 :string[]=['nuh','abdul','adhor'];
    bros1.push(...bros2);

    const mentors1 ={
        typescript:'mezba',
        redux:'mir',
        dhms:'mizan'
    }
     const mentors2 = {
        prisma:'firoz',
        next:'tanmoy',
        cloud:'nahid'
     }

     const mentorList ={
        ...mentors1,
        ...mentors2
     }

     //rest operator
     const greetFriends =(...friends:string[])=>{
       friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
     }
     greetFriends('mim','marium','nuh','abdul')


    //
}
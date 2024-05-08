"use strict";
{
    //spread operator-->rest operator
    const bros1 = ['mim', 'maisha', 'marium'];
    const bros2 = ['nuh', 'abdul', 'adhor'];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'mezba',
        redux: 'mir',
        dhms: 'mizan'
    };
    const mentors2 = {
        prisma: 'firoz',
        next: 'tanmoy',
        cloud: 'nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('mim', 'marium', 'nuh', 'abdul');
    //
}

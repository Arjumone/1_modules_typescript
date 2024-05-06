{
    //generic interface

    interface Developer<T>{
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number
        };
        smartWatch:T
    }

    const poorDeveloper:Developer<{
        brand:string;
        model:string;
        display:string
    }>={
        name:'arju',
        computer:{
            brand:'Asus',
            model:'X',
            releaseYear:2013
        },
        smartWatch:{
            brand:'em',
            model:'kk',
            display:'tt'
        }
    };
    const richDeveloper:Developer<{
        brand:string;
        model:string;
        display:string,
        sleepTrack:boolean;
        heatTrack:boolean;
    }>={
        name:'arju',
        computer:{
            brand:'Asus',
            model:'X',
            releaseYear:2013
        },
        smartWatch:{
            brand:'em',
            model:'kk',
            display:'tt',
            sleepTrack: true,
            heatTrack: true
        }
    };









    //
}
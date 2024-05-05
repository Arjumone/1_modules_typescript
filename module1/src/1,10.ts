{
  // union type( | )
  type FrontendDev = "fakibuzDev" | "juniorDev";
  type FullstackDev = "frontendDev" | "expertDev";

  type Dev = FrontendDev | FullstackDev;

  const newDev: FrontendDev = "juniorDev";

  type User = {
    name: string;
    age: number;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user1: User = {
    name: "arju",
    age: 45,
    gender: "male",
    bloodGroup: "O+",
  };

  //interception type( & )
  type FrontDev={
    skills:string[];
    designation1:'Frontend'
  }
  type BackDev={
    skills:string[];
    designation2:'Backend'
  }

  type FullDev = FrontDev& BackDev;

  const fullDev: FullDev={
    skills:['HTML','EXPRESS','CSS'],
    designation1:'Frontend',
    designation2:'Backend'
  }






}

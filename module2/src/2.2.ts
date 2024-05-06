{
  //interface like as type alias
  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "arju",
    age: 100,
  };

  type UserWithRoll = User1 & { role: string };
  const userWithRoll: UserWithRoll = {
    name: "mone",
    age: 50,
    role: "developer",
  };

  interface User2 {
    name: string;
    age: number;
  }

  const user2: User2 = {
    name: "arju",
    age: 100,
  };

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const userWithRoll2: UserWithRoll2 = {
    name: "mone",
    age: 50,
    role: "developer",
  };

  //interface in array
  type Roll1 = number[];

  const rollNo1: Roll1 = [1, 45, 56, 9, 8];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNo2: Roll2 = [1, 5, 6, 9, 8];

  //interface in function

  type Add1 = (num1: number, num2: number) => number;
  const add: Add1 = (num1, num2) => num1 + num2;

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;

  //
}

{
  //function:1.Normal function, 2.Arrow function

  //1.Normal function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  add(2, 5);

  //2.arrow function
  const addArrow = (num1: number, num2: number): number => num1 + num2;

  //Object-->function-->method
  const poorUser = {
    name: "Arju",
    balance: 0,
    addBalance(balance: number): string {
      return `My balance is ${this.balance + balance}`;
    },
  };

  const arr: number[] = [2, 3.5];
  const newArr: number[] = arr.map((elem: number): number => elem * elem);

  //
}

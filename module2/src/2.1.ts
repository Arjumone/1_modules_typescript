{
  //type assertion
  let anything: any;

  anything = "hello";

  (anything as string).indexOf;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertNumber = parseFloat(value) * 1000;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm("hello world") as string;
  console.log(result1);

  const result2 = kgToGm(333) as number;
  console.log(result2);

  type CustomError = {
    message : string;
  }
  try{

  }catch(error){
    console.log((error as CustomError).message);
  }

  //
}

import Calculator from ".";

it("should calc experession right", () => {
  function calc(input: string) {
    // tslint:disable-next-line: no-eval
    expect(Calculator(input)).toBe(eval(input));
  }
  const experessions = [
    " 1 + 2 +  3 ",
    "1+9*3/7%(1+6)",
    "5 - - - + - (3 + 4) - +2"
  ];
  for (const experession of experessions) {
    calc(experession);
  }
});

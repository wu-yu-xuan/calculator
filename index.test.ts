import Calculator from ".";

it("should calc expression right", () => {
  function calc(input: string) {
    // tslint:disable-next-line: no-eval
    expect(Calculator(input)).toBe(eval(input));
  }
  const expressions = [
    " 1 + 2 +  3 ",
    "1+9*3/7%(1+6)",
    "5 - - - + - (3 + 4) - +2",
    "0?1:2?3:4",
    "0?1?2:3:4"
  ];
  for (const expression of expressions) {
    calc(expression);
  }
});

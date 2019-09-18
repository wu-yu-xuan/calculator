import Lexer from "./Lexer";

it("should get right tokens", () => {
  console.log(Lexer("1+9*3/7%(1+6)-2**2"));
  console.log(Lexer("0?1:2?3:4"));
});

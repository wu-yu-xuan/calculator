import Lexer from "./Lexer";

it("should get right tokens", () => {
  console.log(Lexer("1+9*3/7%(1+6)"));
});

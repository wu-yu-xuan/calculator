import Lexer from "./Lexer";
import Parser from "./Parser";

it("should parse tokens right", () => {
  const tokens = Lexer("1/2+3*4-6%4*(1+9)");
  console.log(JSON.stringify(Parser(tokens), null, 2));
  // const tokens = Lexer("1+2+3");
  // console.log(Parser(tokens));
});

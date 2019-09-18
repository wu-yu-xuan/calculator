import Lexer from "./Lexer";
import Parser from "./Parser";

it("should parse tokens right", () => {
  const tokens1 = Lexer("0?1:2?3:4");
  console.log(JSON.stringify(Parser(tokens1), null, 2));
  const tokens2 = Lexer("0?1?2:3:4");
  console.log(JSON.stringify(Parser(tokens2), null, 2));
});

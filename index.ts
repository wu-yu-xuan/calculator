import Lexer from "./Lexer";
import Parser from "./Parser";
import Interpreter from "./Interpreter";

export default function Calculator(input: string) {
  const tokens = Lexer(input);
  const node = Parser(tokens);
  return Interpreter(node);
}

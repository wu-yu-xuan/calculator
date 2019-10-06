import Lexer from './Lexer';
import Parser from './Parser';
import Interpreter from './Interpreter';
import Context from './Context';
import { DeclarationType } from './interface';

/**
 *
 * @param input 输入字符串
 * @param context 上下文变量, 如: window
 */
export default function Calculator(input: string, context = {}) {
  const tokens = Lexer(input);
  const node = Parser(tokens);
  // tslint:disable-next-line: variable-name
  const _context = new Context();
  for (const [key, value] of Object.entries(context)) {
    _context.create(key, value, DeclarationType.const);
  }
  return Interpreter(node, _context);
}

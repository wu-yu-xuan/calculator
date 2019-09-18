import { Token, TokenType, Node } from "./interface";
import UnaryNode from "./UnaryNode";
import NumberNode from "./NumberNode";
import BinaryNode from "./BinaryNode";
import TrinocularNode from "./TrinocularNode";

/**
 * 将 tokens 转化为抽象语法树
 * @param tokens
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
 */
export default function Parser(tokens: Token[]) {
  let position = 0;
  let currentToken = tokens[position];

  function eatToken(type: TokenType) {
    if (currentToken.type === type) {
      position++;
      currentToken = tokens[position];
    } else {
      throw new Error(
        `unexpected token in position ${position}: ${
          TokenType[currentToken.type]
        }, expected ${TokenType[type]}`
      );
    }
  }

  /**
   * 优先级20: 圆括号
   */
  function precedence20(): Node {
    if (currentToken.type === TokenType.leftParen) {
      eatToken(TokenType.leftParen);
      const node = precedence4();
      eatToken(TokenType.rightParen);
      return node;
    } else if (currentToken.type === TokenType.number) {
      const value = currentToken.value!;
      eatToken(TokenType.number);
      return new NumberNode(value);
    } else {
      throw new Error(
        `unexpected token in position ${position}: ${
          TokenType[currentToken.type]
        }, expected left paren or number`
      );
    }
  }

  /**
   * 优先级16: 按位非, 逻辑非, 一元加法, 一元减法
   */
  function precedence16(): Node {
    const unaryTypes = [
      TokenType.plus,
      TokenType.minus,
      TokenType.bitwiseNot,
      TokenType.logicalNot
    ];
    const type = unaryTypes.find(v => v === currentToken.type);
    if (type) {
      eatToken(type);
      return new UnaryNode(type, precedence16());
    } else {
      return precedence20();
    }
  }

  /**
   * 优先级14: 乘法, 除法, 取模
   */
  function precedence14(): Node {
    let node = precedence16();
    let type;
    const binaryTypes = [TokenType.mul, TokenType.div, TokenType.mod];
    while (
      position < tokens.length &&
      (type = binaryTypes.find(v => v === currentToken.type))
    ) {
      eatToken(type);
      node = new BinaryNode(node, type, precedence16());
    }
    return node;
  }

  /**
   * 优先级13: 加法, 减法
   */
  function precedence13(): Node {
    let node = precedence14();
    let type;
    const binaryTypes = [TokenType.plus, TokenType.minus];
    while (
      position < tokens.length &&
      (type = binaryTypes.find(v => v === currentToken.type))
    ) {
      eatToken(type);
      node = new BinaryNode(node, type, precedence14());
    }
    return node;
  }

  /**
   * 优先级4: 三目运算符
   */
  function precedence4(): Node {
    const node = precedence13();
    if (
      position < tokens.length &&
      currentToken.type === TokenType.interrogation
    ) {
      eatToken(TokenType.interrogation);
      const expression1 = precedence4();
      eatToken(TokenType.colon);
      const expression2 = precedence4();
      return new TrinocularNode(node, expression1, expression2);
    }
    return node;
  }

  return precedence4();
}

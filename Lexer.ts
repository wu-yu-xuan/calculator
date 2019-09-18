import { Token, TokenType } from "./interface";

export default function Lexer(input: string): Token[] {
  let position = 0;
  let currentChar = input[position];
  const { length } = input;
  const tokens: Token[] = [];

  function advance() {
    position++;
    currentChar = input[position];
  }

  function eatSpace() {
    while (typeof currentChar === "string" && isSpace(currentChar)) {
      advance();
    }
  }

  function eatNumber() {
    let result = "";
    while (typeof currentChar === "string" && isNumber(currentChar)) {
      result += currentChar;
      advance();
    }
    return parseInt(result);
  }

  function getToken(): Token | undefined {
    if (isSpace(currentChar)) {
      eatSpace();
      return;
    }
    if (isNumber(currentChar)) {
      return {
        type: TokenType.number,
        value: eatNumber()
      };
    }
    switch (currentChar) {
      case "+":
        advance();
        return {
          type: TokenType.plus
        };
      case "-":
        advance();
        return {
          type: TokenType.minus
        };
      case "(":
        advance();
        return {
          type: TokenType.leftParen
        };
      case ")":
        advance();
        return { type: TokenType.rightParen };
      case "*":
        advance();
        return { type: TokenType.mul };
      case "/":
        advance();
        return { type: TokenType.div };
      case "%":
        advance();
        return { type: TokenType.mod };
      default:
        throw new Error(
          `unexpected token in position ${position}: ${currentChar}, expected +-*/() or number`
        );
    }
  }

  while (position < length) {
    const token = getToken();
    if (token) {
      tokens.push(token);
    }
  }

  return tokens;
}

function isSpace(input: string) {
  return !!input.match(/^\s$/);
}

function isNumber(input: string) {
  return !!input.match(/^\d$/);
}

export enum TokenType {
  number,
  plus,
  minus,
  mul,
  div,
  mod,
  bitwiseNot,
  logicalNot,
  interrogation,
  colon,
  leftParen,
  rightParen
}

export interface Token {
  type: TokenType;
  value?: number;
}

export interface Node {
  visit(): number;
}

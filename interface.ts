export enum TokenType {
  number,
  plus,
  minus,
  mul,
  div,
  mod,
  bitwiseNot,
  logicalNot,

  /**
   * 问号
   */
  interrogation,
  colon,

  /**
   * 幂
   */
  exponentiation,
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

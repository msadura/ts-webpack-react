import {FeatureInterface} from "./FeatureInterface";

export class ExtendedLiterals implements FeatureInterface{
  constructor() {
    this.binaryAndOctalLiteral()
    this.unicodeStringAndRegexpLiteral()
  }

  binaryAndOctalLiteral() {
    0b111110111 === 503
    0o767 === 503
  }

  unicodeStringAndRegexpLiteral() {
    /*
    "𠮷".length === 2
    "𠮷".match(/./u)[0].length === 2
    5| "𠮷" === "\uD842\uDFB7"
    "𠮷" === "\u{20BB7}"
    "𠮷".codePointAt(0) == 0x20BB7
    for (let codepoint of "𠮷") console.log(codepoint)
    */
  }
}
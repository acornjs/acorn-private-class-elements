"use strict"

const assert = require("assert")
const acorn = require("acorn")
const privateClassElements = require("..")

describe("acorn-private-class-elements", () => {
  it("reports unknown private", () => {
      const Parser = acorn.Parser.extend(privateClassElements)
      assert.throws(() => Parser.parse('a.#1=c;'))
  })
})

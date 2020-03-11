"use strict"

const assert = require("assert")
const acorn = require("acorn")
const privateClassElements = require("..")

describe("acorn-private-class-elements", () => {
  it("does not fail on parse error", () => {
    //  Error.stackTraceLimit = 100
      const Parser = acorn.Parser.extend(privateClassElements)
      Parser.parse('a.#1=c;')
      assert.ok(true)
  })
})

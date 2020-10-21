export default {
  input: "index.js",
  output: [
    {
      file: "dist/acorn-private-class-elements.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/acorn-private-class-elements.mjs",
      format: "es",
      sourcemap: true
    }
  ]
}

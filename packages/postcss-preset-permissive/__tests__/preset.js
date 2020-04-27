const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const postcss = require("postcss");
const preset = require("../src");

const readFileAsync = promisify(fs.readFile);

test("handles css correctly", async () => {
  const cssFile = path.join(__dirname, "app.css");
  const source = await readFileAsync(cssFile);
  const processor = postcss([preset]);
  const { css } = await processor.process(source, {
    from: cssFile,
    to: cssFile,
  });
  expect(css).toMatchSnapshot();
});

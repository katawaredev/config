const browserslist = require("browserslist");
const config = require("../src");

describe("loads correct config based on environment", () => {
  it("handles production environment", () => {
    const browsers = browserslist(config, {
      env: "production",
    });
    expect(browsers.length).toBeGreaterThan(0);
    expect(browsers).toStrictEqual(
      expect.arrayContaining([
        expect.stringContaining("chrome"),
        expect.stringContaining("firefox"),
        expect.stringContaining("safari"),
        expect.stringContaining("edge"),
        expect.stringContaining("node"),
      ])
    );
  });
  it("handles development environment", () => {
    const browsers = browserslist(config, {
      env: "development",
    });
    expect(browsers).toBeArrayOfSize(5);
    expect(browsers).toStrictEqual(
      expect.arrayContaining([
        expect.stringContaining("chrome"),
        expect.stringContaining("firefox"),
        expect.stringContaining("safari"),
        expect.stringContaining("edge"),
        expect.stringContaining("node"),
      ])
    );
  });
});

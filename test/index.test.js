const tests = require("./selenium");

beforeAll(() => tests.init());

it("Loads Homepage", () => {
  expect.assertions(1);
  return expect(tests.loadHomepage()).resolves.toMatch(/Jeff\nAndolora/);
});

afterAll(() => tests.quit());

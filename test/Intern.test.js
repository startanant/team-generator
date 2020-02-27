const Intern = require("../lib/Intern");

// test.only('this will be the only test that runs', () => {
//   expect(true).toBe(true);
// });

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
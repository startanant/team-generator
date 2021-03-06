const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// test.only('this will be the only test that runs', () => {
//   expect(true).toBe(true);
// });

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", "test@test.com", testValue);
  expect(e.getOffice()).toBe(testValue);
});
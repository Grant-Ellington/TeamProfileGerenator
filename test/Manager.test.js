const Manager = require('../lib/Manager')

test("Can set enginner name via constructor", () => {
    let e =  new Manager ('Grant', '1234', 'test@test.com', 'name-namManager ')
    let results = 'Grant'
    expect(e.InternName).toBe(results)
});
test("Can set Intern id number via constructor", () => {
  let e =  new Manager('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = '1234'
  expect(e.internId).toBe(results)
})
test("Can set Intern email via constructor", () => {
  let e =  new Manager('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = 'test@test.com'
  expect(e.internId).toBe(results)
})
test("Can set Intern Git via constructor", () => {
  let e =  new Manager('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = 'name-name'
  expect(e.internId).toBe(results)
})
test("Can set Intern choice via constructor", () => {
  let e =  new Manager('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = 'Intern'
  expect(e.internId).toBe(results)
})
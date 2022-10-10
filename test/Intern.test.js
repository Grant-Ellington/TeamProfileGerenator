const Intern = require('../lib/Intern')

test("Can set enginner name via constructor", () => {
    let e =  new Intern('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
    let results = 'Grant'
    expect(e.InternName).toBe(results)
});
test("Can set Intern id number via constructor", () => {
  let e =  new Intern('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = '1234'
  expect(e.InternId).toBe(results)
})
test("Can set Intern email via constructor", () => {
  let e =  new Intern('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = 'test@test.com'
  expect(e.InternId).toBe(results)
})
test("Can set Intern Git via constructor", () => {
  let e =  new Intern('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = 'name-name'
  expect(e.InternId).toBe(results)
})
test("Can set Intern choice via constructor", () => {
  let e =  new Intern('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = 'Intern'
  expect(e.InternId).toBe(results)
})

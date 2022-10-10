

const Engineer = require('../lib/Engineer')

test("Can set enginner name via constructor", () => {
    let e =  new Engineer('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
    let results = 'Grant'
    expect(e.engineerName).toBe(results)
});
test("Can set engineer id number via constructor", () => {
  let e =  new Engineer('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = '1234'
  expect(e.engineerId).toBe(results)
})
test("Can set engineer email via constructor", () => {
  let e =  new Engineer('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = 'test@test.com'
  expect(e.engineerId).toBe(results)
})
test("Can set engineer Git via constructor", () => {
  let e =  new Engineer('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = 'name-name'
  expect(e.engineerId).toBe(results)
})
test("Can set engineer choice via constructor", () => {
  let e =  new Engineer('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  let results = 'Intern'
  expect(e.engineerId).toBe(results)
})

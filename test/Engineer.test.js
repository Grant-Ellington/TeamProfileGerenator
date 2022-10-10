

const Engineer = require('../lib/Engineer')

test("Can set enginner name via constructor", () => {
    let e =  new Engineer('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
    let results = 'Grant'
    expect(e.engineerName).toBe(results)
});


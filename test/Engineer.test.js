

const Engineer = require('../lib/Engineer')

test("Can set engineer name via constructor", () => {
    let e =  new Engineer('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
    let results = 'Grant';
    expect(e.engineerName).toBe(results)
});
test("Can set engineer ID via constructor", ()=> {
    let e = new Engineer ('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
    let results = '1234';
    expect(e.engineerId).toBe(results)
});

test("Can set engineer Email via construuctor", ()=> {
    let e = new Engineer ('Grant', '1234', 'test@test.com', 'name-name', 'Intern');
    let results = 'test@test.com';
    expect(e.engineerEmail).toBe(results)
});

test("Can set enginner GitHub via constructor", ()=> {
    let e = new Engineer ('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
    let results = 'name-name'
    expect(e.engineerGit).toBe(results)
});

test("Can set next choice via constructor", () => {
    let e = new Engineer ('Grant', '1234', 'test@test.com', 'name-name', 'Intern');
    let results = 'Intern'
    expect(e.engineerChoice).toBe(results)
});


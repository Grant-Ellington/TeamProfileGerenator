
const Manager = require('../lib/Manager')

test("Can set manager name via constructor", () =>{
    let m = new Manager ('Grant', '1234', '1234', 'Intern')
    let results = 'Grant'
    expect(m.managerName).toBe(results) 
});

test("Can set manager id via constructor", () =>{
    let m = new Manager ('Grant', '1234', '1234', 'Intern')
    let results = '1234'
    expect(m.managerId).toBe(results) 
});

test("Can set manager office number via constructor", () =>{
    let m = new Manager ('Grant', '1234', '1234', 'Intern')
    let results = '1234'
    expect(m.managerOfficeNumber).toBe(results) 
});
test("Can set next choice  via constructor", () =>{
    let m = new Manager ('Grant', '1234', '1234', 'Intern')
    let results = 'Intern'
    expect(m.managerChoice).toBe(results) 
});

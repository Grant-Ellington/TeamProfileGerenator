const Intern = require('../lib/Intern')
test("Can set intern name via constructor", () => {
    let i = new Intern ('Grant', '1234', 'test@test.com', 'name-name', 'Intern');
    let results = "Grant"
    expect(i.internName).toBe(results)
});

test("Can set intern id via constructor", () => {
    let i = new Intern ('Grant', '1234', 'test@test.com', 'name-name', 'Intern');
    let results = "1234"
    expect(i.internId).toBe(results)
});

test("Can set intern email via constructor", () => {
    let i = new Intern ('Grant', '1234', 'test@test.com', 'name-name', 'Intern');
    let results = 'test@test.com'
    expect(i.internEmail).toBe(results)
});

test("Can set intern Git via constructor", () => {
    let i = new Intern ('Grant', '1234', 'test@test.com', 'name-name', 'Intern');
    let results = 'name-name'
    expect(i.internGit).toBe(results)
});

test("Can set next choice via constructor", () => {
    let i = new Intern ('Grant', '1234', 'test@test.com', 'name-name', 'Intern');
    let results = 'Intern'
    expect(i.internChoice).toBe(results)
})
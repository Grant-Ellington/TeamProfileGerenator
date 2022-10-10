

const createEngineerCard = require('../index.js');
const Engineer = require('../lib/Engineer')

test("should output HTML block", () => {
    const engineerData =  new Engineer('Grant', '1234', 'gellingtonem6@gmail.com', '1234', 'Intern')
    const test = createEngineerCard(engineerData)

    const results = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Grant</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">1234</p>
      <a href="mailto:gellingtonem6@gmail.com">gellingtonem6@gmail.com</a>
      <a href="#" class="card-text">1234</a>
    </div>`
    
    expect(test).toBe(results)
})

